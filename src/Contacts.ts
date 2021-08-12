/**
 * Code dealing with contacts (listing, adding, and
 * deleting them). Once again, a Worker class will be present, along with
 * an interface to describe a contact object.
 */
import * as path from 'path';
// const Datastore = require("nedb");
import Datastore from 'nedb';

import { IServerInfo } from './ServerInfo';
import Nedb from 'nedb';

interface IContact {
  _id?: string;
  name: string;
  email: string;
}

class Worker {
  private db: Nedb;

  constructor() {
    this.db = new Datastore({
      filename: path.join(__dirname, 'contacts.db'),
      autoload: true,
    });
  }

  public listContacts(): Promise<IContact[]> {
    return new Promise((inResolve, inReject) => {
      this.db.find({}, (inError: Error, inDocs: IContact[]) => {
        if (inError) {
          inReject(inError);
        } else {
          inResolve(inDocs);
        }
      });
    });
  }

  public addContact(inContact: IContact): Promise<IContact> {
    return new Promise((inResolve, inReject) => {
      this.db.insert(inContact, (inError: Error | null, inNewDoc: IContact) => {
        if (inError) {
          inReject(inError);
        } else {
          inResolve(inNewDoc);
        }
      });
    });
  }

  public updateSingleContact(inContact: IContact): Promise<IContact> {
    return new Promise((inResolve, inReject) => {
      this.db.update(
        { _id: inContact._id },
        { $set: { name: inContact.name, email: inContact.email } },
        { returnUpdatedDocs: true },
        (err: Error | null, numAffected: number, affectedDoc: IContact, upsert: boolean) => {
          if (err) {
            inReject(err);
          } else {
            inResolve(affectedDoc);
          }
        },
      );
    });
  }

  public deleteContact(inID: string): Promise<string> {
    return new Promise((inResolve, inReject) => {
      this.db.remove({ _id: inID }, {}, (inError: Error | null, inNumRemoved: number) => {
        if (inError) {
          inReject(inError);
        } else {
          inResolve(inNumRemoved.toString());
        }
      });
    });
  }
} // end Worker class

export { IContact, Worker };
