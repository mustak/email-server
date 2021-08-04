/**
 * Code that talks to an IMAP server to list mailboxes and
 * messages and to retrieve messages. There will be a Worker class
 * within this. That is what the rest of our application code will use,
 * along with some interfaces we’ll need.
 */

import * as serverInfo from './ServerInfo';

export interface IMailbox {
  name: string;
}

export interface IMessage {
  subject: string;
  message: string;
}

export class Worker {
  constructor(serverInfo: serverInfo.IServerInfo) {}

  async listMailboxes() {
    return [
      {
        name: 'mailbox1',
      },
      {
        name: 'mailbox2',
      },
    ];
  }

  async listMessages(mailbox: { mailbox: string }) {
    mailbox = { mailbox: 'test' };
    return [
      {
        subject: 'subject1',
        message: '1 some message hee...',
      },
      {
        subject: 'subject2',
        message: '2 some message hee...',
      },
    ];
  }

  async getMessageBody(mailbox: { mailbox: string; id: number }) {
    return `message body ${mailbox.id} ${mailbox.mailbox}`;
  }

  async deleteMessage(mailbox: { mailbox: string; id: number }) {
    return `message body ${mailbox.id} ${mailbox.mailbox}`;
  }
}
