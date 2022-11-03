import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concat, first, Subscription } from 'rxjs';
import { Actor } from 'src/app/shared/models/actor';
import { Movie } from 'src/app/shared/models/movie';
import { ActorService } from 'src/app/shared/services/actor.service';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
      selector: 'app-detail',
      templateUrl: './detail.component.html',
      styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
      id: number = -1;
      actor?: Actor;
      movies!: Movie[];

      subcription!: Subscription;

      constructor(
            private route: ActivatedRoute,
            private actorService: ActorService,
            private movieService: MovieService
      ) { }

      ngOnInit(): void {
            this.id = Number(this.route.snapshot.paramMap.get('id'));

            let count = 1;

            const obsr1 = this.actorService.actors$.pipe(first(data => data.length != 0));
            const obsr2 = this.movieService.movies$.pipe(first(data => data.length != 0));

            this.subcription = concat(obsr1, obsr2).subscribe((data: any) => {
                  console.log(data);
                  
                  count == 1
                        ? this.actor = data.find((item: any) => item.id == this.id)
                        : this.movies = data.filter((item: any) => this.actor?.movies_id.includes(item.id)) 

                  count += 1;
            });
      }

      ngOnDestroy(): void {
            this.subcription && this.subcription.unsubscribe();
      }
}
