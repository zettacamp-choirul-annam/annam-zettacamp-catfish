import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
      selector: 'app-user-card',
      templateUrl: './user-card.component.html',
      styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
      @Input() user!: User;

      constructor(private router: Router) { }

      ngOnInit(): void {
      }

      onEdit() {
            this.router.navigate(['/creation'], {
                  queryParams: { userId: this.user.id_number }
            });
      }
}
