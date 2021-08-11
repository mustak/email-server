import { Request, Response, NextFunction } from 'express';

import * as IMAP from '../IMAP';
import { serverInfo } from '../ServerInfo';
/**
 * Set custom headers
 *
 * @param {Request} req - express Request Object
 * @param {Response} res - express Response Object
 * @param {NextFunction} next - express Next object
 */
export const getMailboxes = async (inRequest: Request, inResponse: Response) => {
    try {
        const imapWorker: IMAP.Worker = new IMAP.Worker(serverInfo);
        const mailboxes: IMAP.IMailbox[] = await imapWorker.listMailboxes();
        inResponse.json(mailboxes);
    } catch (inError) {
        console.log('[cntMailboxes.ts@18]', inError);
        inResponse.json(inError);

    }
};

export const getMailbox = async (inRequest: Request, inResponse: Response) => {
    try {
        const imapWorker: IMAP.Worker = new IMAP.Worker(serverInfo);

        const messages: IMAP.IMessage[] = await imapWorker.listMessages({
            mailbox: inRequest.params.mailbox,
        });

        inResponse.json(messages);
    } catch (inError) {
        inResponse.send('error');
    }
};
