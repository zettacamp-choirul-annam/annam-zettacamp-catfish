import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { Subscription, first } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2'

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

      addressForm = this.fb.group({
            address: [''],
            zip_code: ['', [Validators.required, Validators.pattern('[0-9]*')]],
            city: [''],
            country: ['']
      });

      userForm = this.fb.group({
            id: ['', Validators.required],
            name: ['', Validators.required],
            age: ['', [Validators.required, Validators.min(10)]],
            gender: [''],
            email: ['', [Validators.required, Validators.email]],
            position: [''],
            marital_status: [''],
            addresses: this.addressForm
      });

      get name() {
            return this.userForm.get('name');
      }

      constructor(
            private route: ActivatedRoute,
            private location: Location,
            private userService: UserService,
            private fb: FormBuilder,
            public translate: TranslateService,
      ) {
            this.translate.addLangs(['en', 'id']);
            this.translate.setDefaultLang('en');
      }

      ngOnInit(): void {
            // get id from url params
            const id = this.route.snapshot.queryParamMap.get('id');

            // enter edit mode and populate form with user data
            this.isEdit = id != null;
            if (this.isEdit) this.populateUserData(id);

            // listen name input value changes
            this.name?.valueChanges.subscribe(this.onNameValueChanges.bind(this));
      }

      ngOnDestroy() {
            this.subcription && this.subcription.unsubscribe();
      }

      populateUserData(id: string | null) {
            this.subcription = this.userService.users$
                  .pipe(first((users: User[]) => users.length !== 0))
                  .subscribe(users => {
                        const user: any = users.find(user => user.id === id);
                        this.userForm.setValue(user);
                  });
      }

      onNameValueChanges(value: any) {
            let newValue = value.replace(/[^a-z|\s]/ig, '');
            this.name?.patchValue(newValue, { emitEvent: false });
      }
 
      onSubmit() {
            const user = this.userForm.value;
            const isValid = this.userForm.valid;

            if (isValid) {
                  this.userService[this.isEdit ? 'updateUser' : 'addUser'](user);
                  
                  Swal.fire({
                        title: 'Success!',
                        icon: 'success',
                        confirmButtonText: 'Back to the list',
                        didClose: () => this.goBack()
                  });
            }

            else {
                  Swal.fire({
                        title: 'Error!',
                        text: 'Bakso control bakso control',
                        icon: 'error',
                        confirmButtonText: "I'll check again"
                  })
            }
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
