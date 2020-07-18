import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDTO } from './dto/create-contact.dto';

@Controller('contacts')
export class ContactsController {
    constructor(private contactsService: ContactsService) { }

    @Get()
    async getContacts() {
        const contacts = await this.contactsService.getContacts();
        return contacts;
    }

    @Get(':contactID')
    async getContact(@Param('contactID') contactID) {
        const contact = await this.contactsService.getContact(contactID);
        return contact;
    }

    @Post()
    async addContact(@Body() CreateContactDTO: CreateContactDTO) {
        const contact = await this.contactsService.addContact(CreateContactDTO);
        return contact;
    }

    @Delete()
    async deleteContact(@Query() query) {
        const contacts = await this.contactsService.deleteContact(query.contactID);
        return contacts;
    }
}