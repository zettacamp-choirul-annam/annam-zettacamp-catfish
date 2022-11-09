import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
      selector: 'app-dialog',
      templateUrl: './dialog.component.html',
      styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
      promoForm = this.formBuilder.group({
            ref: ['', Validators.required],
            title: ['', Validators.required],
            sub_title: ['', Validators.required],
            description: ['', Validators.required]
      });

      constructor(
            public dialogRef: MatDialogRef<DialogComponent>,
            private formBuilder: FormBuilder,
            @Inject(MAT_DIALOG_DATA) public data: any
      ) { }

      ngOnInit(): void { }

      dialogClose() {
            this.dialogRef.close(this.promoForm.value);
      }
}
