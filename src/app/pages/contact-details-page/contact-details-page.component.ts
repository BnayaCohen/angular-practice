import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  constructor(private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  @Input() contactId!: string
  contact!: Contact
  subscription!: Subscription

  async ngOnInit() {
    this.route.data.subscribe(data => {
      this.contact = data['contact']
    })
  }

  onBack() {
    this.router.navigateByUrl('contact')
  }
}
