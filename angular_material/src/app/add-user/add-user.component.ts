import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user.model';
import Swal from 'sweetalert2';

@Component({
      selector: 'app-add-user',
      templateUrl: './add-user.component.html',
      styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
      userForm = this.formBuilder.group({
            civility: [''],
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            date_of_birth: ['', Validators.required],
            gender: ['']
      });

      constructor(
            private formBuilder: FormBuilder,
            public dialogRef: MatDialogRef<AddUserComponent>,
            @Inject(MAT_DIALOG_DATA) public data: User
      ) { }

      ngOnInit(): void { }

      onClose() {
            this.dialogRef.close();
      }

      onAdd() {
            const isValid = this.userForm.valid;

            if (!isValid) {
                  Swal.fire({
                        icon: 'error',
                        title: 'Error'
                  })
            } else {
                  this.dialogRef.close(this.userForm.value);
            }
      }
}
