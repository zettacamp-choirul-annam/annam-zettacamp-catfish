import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Actor } from '../models/actor';

@Injectable({
      providedIn: 'root'
})
export class ActorService {
      private actors = new BehaviorSubject<Actor[]>([]);
      actors$ = this.actors.asObservable();

      constructor(private http: HttpClient) {
            this.initialize();
      }

      private initialize() {
            this.fetchData().subscribe(data => this.actors.next(data));
      }

      private fetchData() {
            return this.http.get<Actor[]>('../../../assets/static/actors.json');
      }
}
