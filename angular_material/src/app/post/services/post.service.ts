import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';

@Injectable({
      providedIn: 'root'
})
export class PostService {
      private readonly API_URL = 'https://jsonplaceholder.typicode.com/';
      private posts = new BehaviorSubject<Post[]>([]);

      posts$ = this.posts.asObservable();
      
      constructor(private http: HttpClient) {
            this.initialize();
      }

      private initialize() {
            this.getData().subscribe(posts => this.posts.next(posts));
      }

      private getData(): Observable<Post[]> {
            const url = this.API_URL + 'posts';
            return this.http.get<Post[]>(url);
      }

      private postData(data: Post): Observable<Post> {
            const url = this.API_URL + 'posts/';
            return this.http.post<Post>(url, data);
      }

      private patchData(id: number, data: Post): Observable<Post> {
            const url = this.API_URL + 'posts/' + id;
            return this.http.patch<Post>(url, data);
      }

      private deleteData(id: number): Observable<Post> {
            const url = this.API_URL + 'posts/' + id;
            return this.http.delete<Post>(url);
      }

      getAllPost(): Post[] {
            return this.posts.getValue();
      }

      getPostById(id: number) {
            const posts = this.getAllPost();
            return posts.find(post => post.id == id);
      }

      async addPost(data: Post): Promise<Post>  {
            try { 
                  const obsr = this.postData(data);
                  const resp = await firstValueFrom(obsr);

                  // find biggest id
                  const posts   = this.getAllPost();
                  const postIds = posts.map(post => post.id);
                  const maxId   = Math.max(...postIds);

                  // increment id manually :(
                  const id = maxId + 1;
                  resp.id = id;

                  const temp = this.getAllPost();
                  temp.push(resp);
                  
                  // update current value 
                  this.posts.next(temp);

                  return Promise.resolve(resp);
            }

            catch (error) {
                  return Promise.reject(error);
            }
      }

      async patchPost(id: number, data: Post): Promise<Post> {
            try {
                  const obsr = this.patchData(id, data);
                  const resp = await firstValueFrom(obsr);

                  let temp = this.getAllPost();

                  temp = temp.map(post => {
                        if (post.id == id) return resp;
                        return post;
                  });

                  // update current value 
                  this.posts.next(temp);

                  return Promise.resolve(resp);
            }

            catch (error) {
                  return Promise.reject(error);
            }
      }

      async deletePost(id: number): Promise<Post>  {
            try {
                  const obsr = this.deleteData(id);
                  const resp = await firstValueFrom(obsr);

                  const temp = this.getAllPost();
                  let index: number = -1;
                  
                  // find item index
                  temp.forEach((post, i) => {
                        if (post.id == id) index = i;
                  });

                  // remove item from array
                  temp.splice(index, 1);
                  
                  // update current value 
                  this.posts.next(temp);

                  return Promise.resolve(resp);
            }

            catch (error) {
                  return Promise.reject(error);
            }
      }
}
