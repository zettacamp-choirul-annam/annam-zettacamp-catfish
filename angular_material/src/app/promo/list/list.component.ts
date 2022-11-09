import { Component, OnInit, ViewChild } from '@angular/core';
import { PromoService } from '../promo.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

// dialog form
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import Swal from 'sweetalert2';

@Component({
      selector: 'app-list',
      templateUrl: './list.component.html',
      styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
      @ViewChild('paginator') paginator!: MatPaginator;

      promos: any;
      isLoading: boolean = false;

      length: number = 5;
      pageSizeOptions: number[] = [5, 10, 15, 20];

      // pagination options
      pagination:any = {
            page: 0,
            limit: 5
      }

      constructor(
            private promoService: PromoService,
            public dialog: MatDialog
      ) { }

      ngOnInit(): void {
            this.promoService
                  .getPromos(this.pagination).valueChanges
                  .subscribe((response: any) => {
                        const data = response.data.GetAllPromos;
                        this.promos = data;
                  });

            // init paginator
            this.initPaginator();
      }

      initPaginator() {
            this.promoService
                  .getPromosLength()
                  .subscribe((length: number) => {
                        // update paginator length
                        this.paginator.length = length;
                        this.paginator.pageSize = this.pageSizeOptions[0]; // 5
                  });
      }

      onPaginatorChange(event: PageEvent) {
            this.pagination.limit = event.pageSize;
            this.pagination.page = event.pageIndex;

            // refetch data
            this.refetchData();
      }

      refetchData() {
            const pagination = this.pagination;
            this.promoService.getPromos(pagination).refetch();
      }

      ///////////////////////////////////////////////////////////////////////////////////////////////

      openDialog() {
            const dialogRef = this.dialog.open(DialogComponent);
            
            dialogRef.afterClosed().subscribe(result => {
                  if (!result) return;
                  
                  this.isLoading = true;

                  const subs = this.promoService.createPromo(result).subscribe(() => {
                        this.isLoading = false;

                        Swal.fire({
                              icon: 'success',
                              title: 'Success',
                              text: 'hello wold'
                        });

                        subs.unsubscribe();
                        this.refetchData();
                  })
            });
      }
}
