import { Component, OnInit } from '@angular/core';
import { PromoService } from '../promo.service';

@Component({
      selector: 'app-list',
      templateUrl: './list.component.html',
      styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
      promos: any;

      constructor(private promoService: PromoService) { }

      ngOnInit(): void {
            this.promoService.getPromos().subscribe((response: any) => {
                  this.promos = response.data.GetAllPromos;
            });
      }
}
