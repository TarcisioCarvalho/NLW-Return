import { MailAdapater, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer"


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "aec742d5c9be7b",
      pass: "d97b82e154157a"
    }
  });

export class NodemailerMailerAdapter implements MailAdapater{
    async sendMail({subject,body}: SendMailData) {

         await transport.sendMail({
        from: 'Equipe feedget <oi@feedget.com>',
        to: 'Tarcísio <tarcisiokta2012@gmail.com>',
        subject,
        html:body,
    }); 

    }
}