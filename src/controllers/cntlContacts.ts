import { Request, Response, NextFunction } from 'express';

import * as IMAP from '../IMAP';
import * as SMTP from '../SMTP';
import * as Contacts from '../Contacts';
import { serverInfo } from '../ServerInfo';

export const listContacts = async (inRequest: Request, inResponse: Response) => {
  try {
    const contactsWorker: Contacts.Worker = new Contacts.Worker(serverInfo);
    const contacts: Contacts.IContact[] = await contactsWorker.listContacts();
    inResponse.json(contacts);
  } catch (inError) {
    inResponse.send('error');
  }
};

export const addContact = async (inRequest: Request, inResponse: Response) => {
  try {
    const contactsWorker: Contacts.Worker = new Contacts.Worker(serverInfo);
    const contact: Contacts.IContact = await contactsWorker.addContact(inRequest.body);
    inResponse.json(contact);
  } catch (inError) {
    inResponse.send('error');
  }
};

export const deleteContact = async (inRequest: Request, inResponse: Response) => {
  try {
    const contactsWorker: Contacts.Worker = new Contacts.Worker(serverInfo);
    await contactsWorker.deleteContact(inRequest.params.id);
    inResponse.send('ok');
  } catch (inError) {
    inResponse.send('error');
  }
};
