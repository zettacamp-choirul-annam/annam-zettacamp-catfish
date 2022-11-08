import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SchoolService } from './school.service';

@Component({
      selector: 'app-school',
      templateUrl: './school.component.html',
      styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
      displayedColumns: string[] = ['short_name', 'long_name', 'status'];
      dataSource = new MatTableDataSource<any>();

      constructor(private schoolService: SchoolService) { }

      ngOnInit(): void {
            this.schoolService.getSchools().subscribe((response: any) => {
                  this.dataSource.data = response.data.GetAllSchools;
            });
      }
}
