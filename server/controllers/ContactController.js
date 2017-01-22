import nodemailer from 'nodemailer';
import { EmailTemplate } from 'email-templates';
import path from 'path';
import winston from 'winston';

export default class ContactController {
  constructor(options, defaults) {
    this.transporter = nodemailer.createTransport(options, defaults);
    const invitationTemplateDir = path.resolve(__dirname, '../templates/emails/invitation/');
    this.invitationTemplateSender = this.transporter.templateSender(
      new EmailTemplate(invitationTemplateDir), defaults);

    const promptTemplateDir = path.resolve(__dirname, '../templates/emails/rsvp/');
    this.rsvpPromptTemplateSender = this.transporter.templateSender(
      new EmailTemplate(promptTemplateDir), defaults);

    winston.info('configured contact controller');
    // this.transporter.verify((error, success) => {
    //   if (error) {
    //     winston.error(error);
    //   } else {
    //     winston.info(`Connected to mail server with message: ${success}`);
    //   }
    // });
  }

  sendEmail(to, subject, html) {
    return this.transporter.sendMail({ to, subject, html })
      .then((error, info) => {
        if (error) {
          return winston.error(error);
        }

        winston.info(`Sent message to '${to}': ${info.response}`);
      });
  }

  sendInvitation(to, context) {
    winston.info(`sending message to: ${to}`);
    // return new Promise(resolve => resolve({ message: 'success', email: context.email }));
    return this.invitationTemplateSender({
      to,
      subject: 'You\'re invited!',
    }, context)
      .then(info => {
        winston.debug(`Sent message: ${info.messageId}`);
        return info;
      });
  }

  sendRsvpPrompt(to, context) {
    winston.info(`sending RSVP prompt to: ${to}`);
    return this.rsvpPromptTemplateSender({
      to,
      subject: 'It\'s time to RSVP',
    }, context)
      .then(info => {
      winston.debug(`Sent message: ${info.messageId}`);
      return info;
    });
  }
}
