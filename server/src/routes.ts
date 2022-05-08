import { PrismaClient } from '@prisma/client';
import express from 'express'
import nodemailer from "nodemailer"
import { NodemailerMailerAdapter } from './adapters/nodemailer/nodemailer-mailer-adapter';
import { prisma } from './prisma';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedback-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

 export const routes = express.Router();


 /* const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "aec742d5c9be7b",
      pass: "d97b82e154157a"
    }
  }); */

routes.post('/feedbacks',async(req,res)=> {
    const {type,comment,screenshot} = req.body;
    
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nomdemailerMailAdapter = new NodemailerMailerAdapter();
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nomdemailerMailAdapter
        );


    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    })
    /* await transport.sendMail({
        from: 'Equipe feedget <oi@feedget.com>',
        to: 'Tarcísio <tarcisiokta2012@gmail.com>',
        subject:'Novo feedback',
        html:[
            `<div style="font-family:sans-serif;font-size:16px;color:#222">`,
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Comentario: ${comment}</p>`,
            `</div>`
        ].join('\n')
    }); */


    return res.status(201).send();
});

