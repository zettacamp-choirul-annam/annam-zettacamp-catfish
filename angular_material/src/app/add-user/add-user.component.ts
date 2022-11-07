import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Form, FormBuilder } from '@angular/forms';
import { User } from '../user.model';

@Component({
      selector: 'app-add-user',
      templateUrl: './add-user.component.html',
      styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
      userForm = this.formBuilder.group({
            first_name: [''],
            last_name: [''],
            civility: [''],
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
}
