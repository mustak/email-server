import { Request, Response, NextFunction } from 'express';

import * as IMAP from '../IMAP';
import * as SMTP from '../SMTP';
import { serverInfo } from '../ServerInfo';

export const getMessage = async (inRequest: Request, inResponse: Response) => {
  try {
    const imapWorker: IMAP.Worker = new IMAP.Worker(serverInfo);

    const messageBody: string = await imapWorker.getMessageBody({
      mailbox: inRequest.params.mailbox,
      id: parseInt(inRequest.params.id, 10),
    });

    inResponse.send(messageBody);
  } catch (inError) {
    inResponse.send('error');
  }
};

export const deleteMessage = async (inRequest: Request, inResponse: Response) => {
  try {
    const imapWorker: IMAP.Worker = new IMAP.Worker(serverInfo);
    await imapWorker.deleteMessage({
      mailbox: inRequest.params.mailbox,
      id: parseInt(inRequest.params.id, 10),
    });
    inResponse.send('ok');
  } catch (inError) {
    inResponse.send('error');
  }
};

export const sendMessage = async (inRequest: Request, inResponse: Response) => {
  try {
    const smtpWorker: SMTP.Worker = new SMTP.Worker(serverInfo);
    await smtpWorker.sendMessage(inRequest.body);
    inResponse.send('ok');
  } catch (inError) {
    inResponse.send('error');
  }
};
