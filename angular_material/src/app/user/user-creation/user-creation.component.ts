import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../models/user';
import { UserService } from '../user.service';
import { Subscription, first } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
      selector: 'app-user-creation',
      templateUrl: './user-creation.component.html',
      styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {
      genders: string[] = ['Male', 'Female'];
      maritals: string[] = ['Married', 'Single'];
      positions: string[] = ['Admin', 'Participant', 'Mentor'];

      isEdit: boolean = false;

      subcription?: Subscription;

      form = new FormGroup({
            id_number: new FormControl!('', [Validators.required]),
            name: new FormControl('', [Validators.required]),
            age: new FormControl('', [Validators.required]),
            gender: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            position: new FormControl('', [Validators.required]),
            marital_status: new FormControl('', [Validators.required]),
            addresses: new FormGroup({
                  address: new FormControl('', [Validators.required]),
                  zip_code: new FormControl('', [Validators.required]),
                  city: new FormControl('', [Validators.required]),
                  country: new FormControl('', [Validators.required]),
            })
      })

      constructor(
            private route: ActivatedRoute,
            private location: Location,
            private userService: UserService,
            public translate: TranslateService
      ) {
            this.translate.addLangs(['en', 'id']);
            this.translate.setDefaultLang('en');
      }

      ngOnInit(): void {
            const id = this.route.snapshot.queryParamMap.get('userId');
            this.isEdit = id != null;

            if (this.isEdit) {
                  this.subcription = this.userService.user
                        .pipe(first(users => users.length !== 0))
                        .subscribe(users => {
                              const user = users.find(user => user.id_number === id);
                              this.setFormValues(user);
                        });
            }
      }

      setFormValues(user: any) {
            this.form.setValue(user);
      }

      onSubmit() {
            console.log(this.form);

            const user = this.form.value;
            this.userService[this.isEdit ? 'updateUser' : 'addUser'](user);

            // pura - pura nunggu respon dari server
            setTimeout(this.goBack.bind(this), 400);
      }

      onReset() {
            this.form.reset();
      }

      goBack() {
            this.location.back();
      }

      ngOnDestroy() {
            this.subcription && this.subcription.unsubscribe();
      }

      setLanguage(lang: string) {
            this.translate.use(lang);
      }
}
