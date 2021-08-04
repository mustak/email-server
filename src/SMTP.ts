/**
 * Code that talks to an SMTP server to send messages. Like
 * IMAP, this will have a Worker class.
 */
import * as serverInfo from './ServerInfo';

export class Worker {
  constructor(serverInfo: serverInfo.IServerInfo) {}

  async sendMessage(msgBody: string) {}
}
