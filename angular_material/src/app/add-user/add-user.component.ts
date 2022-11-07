import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user.model';
import Swal from 'sweetalert2';

interface Data { 
      isEdit: boolean;
      index?: number;
      user?: User
}

@Component({
      selector: 'app-add-user',
      templateUrl: './add-user.component.html',
      styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
      userForm = this.formBuilder.group({
            id: [0],
            civility: [''],
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            date_of_birth: ['', Validators.required],
            gender: ['']
      });

      constructor(
            private formBuilder: FormBuilder,
            public dialogRef: MatDialogRef<AddUserComponent>,
            @Inject(MAT_DIALOG_DATA) public data: Data
      ) { }

      ngOnInit(): void {
            if (this.data.isEdit) {
                  // populate form with user data
                  const user = this.data.user as User;
                  this.userForm.patchValue(user);
            }
      }

      onClose() {
            this.dialogRef.close();
      }

      onSubmit(): any {
            const isValid = this.userForm.valid;

            if (!isValid) {
                  return Swal.fire({
                        icon: 'error',
                        title: 'Error'
                  });
            }
            
            // if form is valid close dialog and return form values
            this.dialogRef.close(this.userForm.value);
      }
}
