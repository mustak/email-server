/**
 * Code dealing with contacts (listing, adding, and
 * deleting them). Once again, a Worker class will be present, along with
 * an interface to describe a contact object.
 */
import * as serverInfo from './ServerInfo';

export interface IContact {
  name: string;
  email: string;
}

export class Worker {
  constructor(serverInfo: serverInfo.IServerInfo) {}

  async listContacts() {
    return [
      {
        name: 'Contact anme 1',
        email: 'contact.name1@email.com',
      },
    ];
  }

  async addContact(contact: string) {
    return {
      name: 'Contact anme 1',
      email: 'contact.name1@email.com',
    };
  }

  async deleteContact(id: string) {}
}
