import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { Move } from 'src/app/models/move.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  constructor(private contactService: ContactService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  @Input() contactId!: string
  contact!: Contact
  subscription!: Subscription
  movesList!: Move[]

  async ngOnInit() {
    this.route.data.subscribe(data => {
      this.contact = data['contact']
    })
    let user: User = await lastValueFrom(this.userService.getUser())
    this.movesList = user.moves.filter(move => move.toId === this.contact._id)
  }

  onBack() {
    this.router.navigateByUrl('contact')
  }
}
