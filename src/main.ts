/**
 * This will be the main entry point and is where we’ll define
 * the functions that will constitute the API the server presents to the
 * client (much more on this in the next section!).
 */
import path from 'path';
import express, { Express, Request, Response } from 'express';

import * as cntlHeader from './controllers/cntlHeaders';
import * as cntlMailboxes from './controllers/cntlMailboxes';
import * as cntlMessages from './controllers/cntlMessages';
import * as cntlContacts from './controllers/cntlContacts';
// import { serverInfo } from './ServerInfo';
// import * as IMAP from './IMAP';
// import * as SMTP from './SMTP';
// import * as Contacts from './Contacts';
// import { IContact } from './Contacts';

const PORT = 3000;

const app: Express = express();

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../../email-client/dist')));

/**
 * Set Custom Headers via middleware
 */
app.use(cntlHeader.setHeaders);

app.get('/', (inReq: Request, inRes: Response) => {
  inRes.json({ name: 'testx99' });
});

app.get('/mailboxes', cntlMailboxes.getMailboxes);
app.get('/mailboxes/:mailbox', cntlMailboxes.getMailbox);
app.get('/messages/:mailbox/:id', cntlMessages.getMessage);
app.delete('/messages/:mailbox/:id', cntlMessages.deleteMessage);
app.post('/messages', cntlMessages.sendMessage);
app.get('/contacts', cntlContacts.listContacts);
app.post('/contacts', cntlContacts.addContact);
app.delete('/contacts/:id', cntlContacts.deleteContact);

app.listen(PORT, () => {
  console.warn(`Listening on localhost:${PORT}`);
});
