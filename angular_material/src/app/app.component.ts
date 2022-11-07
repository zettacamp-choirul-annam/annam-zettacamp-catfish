import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddUserComponent } from './add-user/add-user.component';
import { UserService } from './user.service';
import { TranslateService } from '@ngx-translate/core';
import { User } from './user.model';
import Swal from 'sweetalert2';

@Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
      dataSource = new MatTableDataSource<User>();
      displayedColumns: string[] = ['civility', 'first_name', 'last_name', 'date_of_birth', 'gender']

      constructor(
            private userService: UserService,
            public dialog: MatDialog,
            private translate: TranslateService
      ) { }

      ngOnInit(): void {
            this.userService.users$.subscribe(users => {
                  this.dataSource.data = users;
            });
      }

      openDialog() {
            const dialogRef = this.dialog.open(AddUserComponent);

            dialogRef.afterClosed().subscribe(result => {   
                  console.log(result);
                                 
                  if (!result) return;

                  this.userService.addUser(result);

                  Swal.fire({
                        icon: 'success',
                        title: 'Success'
                  })
            });
      }

      changeLanguage(lang: string) {
            this.translate.use(lang);
      }
}
