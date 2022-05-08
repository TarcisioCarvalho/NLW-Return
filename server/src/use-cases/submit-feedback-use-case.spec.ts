import exp from "constants";
import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

describe('submit feedback',()=>{
    it('should be able to submit a feedback', async ()=>{
        const submitFeedback = new SubmitFeedbackUseCase(
            {create:async ()=>{}},
            {sendMail:async ()=>{}},
        )

    await expect(submitFeedback.execute({
        type:"BUG",
        comment:"example comment",
        screenshot:'data:image/png;base64,ushauhsauhsuahsuahsuah',
    })).resolves.not.toThrow();
    });
})