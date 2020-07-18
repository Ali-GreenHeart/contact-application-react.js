import { Injectable, HttpException } from '@nestjs/common';
import { CONTACTS } from '../mocks/contacts.mock';

@Injectable()
export class ContactsService {
    contacts = CONTACTS;

    getContacts(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.contacts);
        });
    }
    getContact(contactId): Promise<any> {
        let id = Number(contactId);
        return new Promise(resolve => {
            const contact = this.contacts.find(contact => contact.id === id);
            if (!contact) {
                throw new HttpException('Contact does not exist!', 404);
            }
            resolve(contact);
        });
    }
    addContact(contact): Promise<any> {
        return new Promise(resolve => {
            this.contacts.push(contact);
            resolve(this.contacts);
        });
    }
    deleteContact(contactID): Promise<any> {
        let id = Number(contactID);
        return new Promise(resolve => {
            let index = this.contacts.findIndex(contact => contact.id === id);
            if (index === -1) {
                throw new HttpException('contact does not exist!', 404);
            }
            this.contacts.splice(1, index);
            resolve(this.contacts);
        });
    }
}