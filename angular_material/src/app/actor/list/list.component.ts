import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Actor } from 'src/app/shared/models/actor';
import { ActorService } from 'src/app/shared/services/actor.service';

@Component({
      selector: 'app-list',
      templateUrl: './list.component.html',
      styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
      subcription!: Subscription;
      actors: Actor[] = [];

      constructor(private actorService: ActorService) { }

      ngOnInit(): void {
            this.subcription = this.actorService.actors$.subscribe(data => {
                  this.actors = data;
            });
      }

      ngOnDestroy(): void {
            this.subcription && this.subcription.unsubscribe();
      }
}
