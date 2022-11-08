import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const PROMO_QUERY = `query { 
      GetAllPromos(pagination: { page: 0, limit: 20 }) {
            _id
            image_url
            ref
            title
            sub_title
            description
      }
}`

@Injectable({
      providedIn: 'root'
})
export class PromoService {
      constructor(private apollo: Apollo) { }

      getPromos() {
            return this.apollo.query({
                  query: gql(PROMO_QUERY)
            });
      }
}
