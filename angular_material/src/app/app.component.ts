import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { User } from './models/user';
import { UserService } from './user.service';

@Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
      dataSource!: MatTableDataSource<User>;
      displayedColumns: string[] = ['name', 'type', 'email', 'status'];

      // filter controls
      filterControls = new FormGroup({
            name  : new FormControl(''),
            type  : new FormControl(''),
            email : new FormControl(''),
            status: new FormControl('')
      });

      constructor(private userService: UserService) { }

      ngOnInit() {
            this.userService.getData().subscribe(
                  data  => this.successHandler(data),
                  error => this.errorHandler(error)
            );
      }

      successHandler(data: User[]) {
            // set dataSource data
            this.dataSource = new MatTableDataSource(data);

            // set custom filterPredicate function
            this.dataSource.filterPredicate = this.filterMatcher.bind(this);

            // listen for filter value change
            this.filterControls.valueChanges.subscribe(data => this.applyFilter(data));
      }

      errorHandler(error: HttpErrorResponse) { }

      // custom filterPredicate function
      filterMatcher(data: User, filter: string) {
            // fiter data
            const { fname, ftype, femail, fstatus } = JSON.parse(filter);

            // used to check if string is empty or not
            function isEmpty(text: string) {
                  return !text || !text.trim();
            }
            
            const isNameMatch  = isEmpty(fname)   || this.combineName(data).includes(fname);
            const isTypeMatch  = isEmpty(ftype)   || data.company.user_type == ftype;
            const isEmailMatch = isEmpty(femail)  || data.email.includes(femail);
            const isStatMatch  = isEmpty(fstatus) || data.user_status == fstatus;

            return isNameMatch && isTypeMatch && isEmailMatch && isStatMatch;
      }

      // run filterPredicate function
      applyFilter(filterData: any) {
            const filter = JSON.stringify(filterData);
            this.dataSource.filter = filter;
      }

      // utils

      combineName(user: User): string {
            const { civility, first_name, last_name } = user;

            let combined = civility + first_name + last_name;
                combined = combined.toLowerCase();
                combined = this.removeAccent(combined);

            return combined;
      }

      removeAccent(text: string): string {
            let chars = text.split('')

            chars = chars.map(char => {
                  const splited = char.normalize('NFD').split('');
                  return splited[0];
            });

            return chars.join('');
      }
}
