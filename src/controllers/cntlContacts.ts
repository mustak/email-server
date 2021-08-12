import { Request, Response, NextFunction } from 'express';

import * as IMAP from '../IMAP';
import * as SMTP from '../SMTP';
import { IContact, Worker } from '../Contacts';
import { serverInfo } from '../ServerInfo';

export const listContacts = async (inRequest: Request, inResponse: Response) => {
  try {
    const contactsWorker: Worker = new Worker();
    const contacts: IContact[] = await contactsWorker.listContacts();
    inResponse.json(contacts);
  } catch (inError) {
    inResponse.send('error');
  }
};

export const addContact = async (inRequest: Request, inResponse: Response) => {
  try {
    const contactsWorker: Worker = new Worker();
    const contact: IContact = await contactsWorker.addContact(inRequest.body);
    inResponse.json(contact);
  } catch (inError) {
    inResponse.send('error');
  }
};

export const updateContact = async (inRequest: Request, inResponse: Response) => {
  try {
    const contactsWorker: Worker = new Worker();
    const updateContact: IContact = {
      _id: inRequest.params.id,
      name: inRequest.body.name,
      email: inRequest.body.email,
    };

    const contact: IContact = await contactsWorker.updateSingleContact(updateContact);
    inResponse.json(contact);
  } catch (inError) {
    inResponse.send('error');
  }
};

export const deleteContact = async (inRequest: Request, inResponse: Response) => {
  try {
    const contactsWorker: Worker = new Worker();
    await contactsWorker.deleteContact(inRequest.params.id);
    inResponse.send('ok');
  } catch (inError) {
    inResponse.send('error');
  }
};
