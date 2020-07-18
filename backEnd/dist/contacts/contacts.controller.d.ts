import { ContactsService } from './contacts.service';
import { CreateContactDTO } from './dto/create-contact.dto';
export declare class ContactsController {
    private contactsService;
    constructor(contactsService: ContactsService);
    getContacts(): Promise<any>;
    getContact(contactID: any): Promise<any>;
    addContact(CreateContactDTO: CreateContactDTO): Promise<any>;
    deleteContact(query: any): Promise<any>;
}
