export declare class ContactsService {
    contacts: {
        id: number;
        name: string;
        surname: string;
        createdDate: Date;
        modifiedDate: Date;
        homeNum: string;
        workNum: string;
        mobileNum: string;
    }[];
    getContacts(): Promise<any>;
    getContact(contactId: any): Promise<any>;
    addContact(contact: any): Promise<any>;
    deleteContact(contactID: any): Promise<any>;
}
