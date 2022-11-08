import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
      selector: 'app-search',
      templateUrl: './search.component.html',
      styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
      dataSource = new MatTableDataSource<any>();
      displayedColumns = ['civility', 'first_name', 'last_name'];
      
      isNoResult: boolean = false;
      isLoading: boolean = false;

      typingTimeout: any = null;
      
      constructor(private searchService: SearchService) { }

      ngOnInit(): void { }

      search(search: string): any {
            if (search.length < 4 && search != '') {
                  return Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Only call the API when there are at least 4 characters. (Alert user when user try to search user but only with 3 or less characters)'
                  });
            }

            this.isLoading = true;

            this.searchService.getUserByLastName(search).subscribe((response: any) => {
                  const data = response.data.GetAllUsers;

                  this.dataSource.data = data;
                  this.isLoading = false;
                  this.isNoResult = data.length == 0;
            })
      }

      onSearch(search: string) {
            this.search(search);
      }

      searchOnType(search: string) {
            if (this.typingTimeout != null) {
                  // clear timeout when user still typing
                  clearTimeout(this.typingTimeout);
                  this.typingTimeout = null;     
            }

            // execute .search() method when user idle for 4ms
            this.typingTimeout = setTimeout(() => {
                  this.search(search);
            }, 400);
      }
}
