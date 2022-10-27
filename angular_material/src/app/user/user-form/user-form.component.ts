import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { Subscription, first } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { User } from '../models/user.model';

@Component({
      selector: 'app-user-form',
      templateUrl: './user-form.component.html',
      styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
      genders: string[] = ['Male', 'Female'];
      maritals: string[] = ['Married', 'Single'];
      positions: string[] = ['Admin', 'Participant', 'Mentor'];

      subcription?: Subscription;
      selectedLang: string = 'en';
      isEdit: boolean = false;

      addressFrom = new FormGroup({
            address: new FormControl(''),
            zip_code: new FormControl(''),
            city: new FormControl(''),
            country: new FormControl('')
      });

      userForm = new FormGroup({
            id: new FormControl(''),
            name: new FormControl(''),
            age: new FormControl(''),
            gender: new FormControl(''),
            email: new FormControl(''),
            position: new FormControl(''),
            marital_status: new FormControl(''),
            addresses: this.addressFrom
      });

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
            const id = this.route.snapshot.queryParamMap.get('id');
            this.isEdit = id != null;

            if (this.isEdit) {
                  this.subcription = this.userService.users$
                        .pipe(first((users: User[]) => users.length !== 0))
                        .subscribe(users => {
                              const user: any = users.find(user => user.id === id);
                              this.userForm.setValue(user);
                        });
            }
      }

      ngOnDestroy() {
            this.subcription && this.subcription.unsubscribe();
      }

      onSubmit() {
            console.log(this.userForm);

            const user = this.userForm.value;
            this.userService[this.isEdit ? 'updateUser' : 'addUser'](user);

            // pura - pura nunggu respon dari server
            setTimeout(this.goBack.bind(this), 400);
      }

      onReset() {
            this.userForm.reset();
      }

      goBack() {
            this.location.back();
      }

      setLanguage(lang: string) {
            this.translate.use(lang);
      }
}
