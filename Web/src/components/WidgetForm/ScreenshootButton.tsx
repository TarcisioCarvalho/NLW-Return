import html2canvas from "html2canvas";
import { Camera } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshootButtonProps{
    screnshoot:string;
    onScreenshootTook:(setScreenshoot:string)=>void;
    
}

export function ScreenshootButton({screnshoot,onScreenshootTook}:ScreenshootButtonProps){
    const [isTakingScreenshoot,setIsTakingScreenshoot] = useState(false);

    async function handleTakeScreenshoot(){
        setIsTakingScreenshoot(true);
        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('image/png');
        onScreenshootTook(base64image);
        setIsTakingScreenshoot(false);
    }

    if(screnshoot){
        return(
            <p>Foto</p>
        );
    }

    return(
        <button
                    type="button"
                    onClick={handleTakeScreenshoot}
                    className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
                    >
                        {isTakingScreenshoot ? <Loading/>:<Camera className="w-6 h-6 "/>}
                        
         </button>
    )
}