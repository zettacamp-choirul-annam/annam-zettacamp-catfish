import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { Post } from '../models/post';
import Swal from 'sweetalert2'

@Component({
      selector: 'app-post-form',
      templateUrl: './post-form.component.html',
      styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
      isEdit: boolean = false;
      id!: number;
      isProgress: boolean = false;

      form = this.formBuilder.group({
            userId: [],
            title: [''],
            body: ['']
      });

      constructor(
            private route: ActivatedRoute,
            private postService: PostService,
            private formBuilder: FormBuilder,
            public location: Location
      ) { }

      ngOnInit(): void {
            const queryId = this.route.snapshot.queryParamMap.get('id');
            this.id = queryId == null ? NaN : Number(queryId);

            this.isEdit = !isNaN(this.id);

            if (this.isEdit) {
                  const post = this.postService.getPostById(this.id);
                  this.populatePostData(post);
            }
      }

      populatePostData(data: any) {
            this.form.patchValue(data);
      }

      onSubmit() {
            let data: any = this.form.value;
            this.isProgress = true;

            if (!this.isEdit) {
                  this.postService.addPost(data)
                        .then(data => {
                              Swal.fire({
                                    title: 'Success!',
                                    text: 'Data added!',
                                    icon: 'success',
                                    confirmButtonText: 'Back to list',
                                    didClose: () => this.location.back()
                              })
                        })
                        .catch(error => {
                              Swal.fire({
                                    title: 'Error!',
                                    text: error.message,
                                    icon: 'error',
                                    confirmButtonText: 'Close'
                              })
                        })
                        .finally(() => {
                              this.isProgress = false;
                        })
            }

            else {
                  this.postService.patchPost(this.id, data)
                        .then(data => {
                              Swal.fire({
                                    title: 'Success!',
                                    text: 'Data updated!',
                                    icon: 'success',
                                    confirmButtonText: 'Back to list',
                                    didClose: () => this.location.back()
                              })
                        })
                        .catch(error => {
                              Swal.fire({
                                    title: 'Error!',
                                    text: error.message,
                                    icon: 'error',
                                    confirmButtonText: 'Close'
                              })
                        })
                        .finally(() => {
                              this.isProgress = false;
                        })
            }
      }
}
