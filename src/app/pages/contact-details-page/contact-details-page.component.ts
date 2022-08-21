import { Component,Input, OnDestroy, OnInit } from '@angular/core';
import { lastValueFrom, Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit,OnDestroy {

  constructor(private contactService: ContactService) { }
  @Input() contactId!: string
  contact!: Contact
  subscription!: Subscription

  async ngOnInit(){
    const contact = await lastValueFrom(this.contactService.getContactById(this.contactId))
    if (contact) this.contact = contact
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
}
}
