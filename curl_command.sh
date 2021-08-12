curl -d '{ "to" : "toemail@email.com", "from" : "fromemail@email.com", "subject" : "This is a test", "text" : "If you see this then it worked!", "html": "<h1>Hello HTML</h1>" }' -H "Content-Type:application/json" -X POST localhost:3000/messages

curl -d '{"name" : "mustakx", "email": "mustak@testemail.com"}' -H "Content-Type:application/json" -X PUT localhost:3000/contacts/5CJiFcpo2pndacgW
