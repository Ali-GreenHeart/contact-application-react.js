"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsService = void 0;
const common_1 = require("@nestjs/common");
const contacts_mock_1 = require("../mocks/contacts.mock");
let ContactsService = class ContactsService {
    constructor() {
        this.contacts = contacts_mock_1.CONTACTS;
    }
    getContacts() {
        return new Promise(resolve => {
            resolve(this.contacts);
        });
    }
    getContact(contactId) {
        let id = Number(contactId);
        return new Promise(resolve => {
            const contact = this.contacts.find(contact => contact.id === id);
            if (!contact) {
                throw new common_1.HttpException('Contact does not exist!', 404);
            }
            resolve(contact);
        });
    }
    addContact(contact) {
        return new Promise(resolve => {
            this.contacts.push(contact);
            resolve(this.contacts);
        });
    }
    deleteContact(contactID) {
        let id = Number(contactID);
        return new Promise(resolve => {
            let index = this.contacts.findIndex(contact => contact.id === id);
            if (index === -1) {
                throw new common_1.HttpException('contact does not exist!', 404);
            }
            this.contacts.splice(1, index);
            resolve(this.contacts);
        });
    }
};
ContactsService = __decorate([
    common_1.Injectable()
], ContactsService);
exports.ContactsService = ContactsService;
//# sourceMappingURL=contacts.service.js.map