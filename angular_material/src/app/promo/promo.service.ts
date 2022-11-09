import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';

const QUERY = `query GetAllCosmos(
            $pagination: PaginationInput!
      ) { 
            GetAllPromos(
                  pagination: $pagination
            ) {
                  _id
                  image_url
                  ref
                  title
                  sub_title
                  description
            }
      }
`;

const MUTATE_QUERY = `
      mutation CreatePromoPost(
            $ref: String!,
            $title: String!,
            $sub_title: String!,
            $description: String!
      ) {
            CreatePromo(
                  promo_input: {
                        ref: $ref,
                        title: $title,
                        sub_title: $sub_title,
                        description: $description
                  }
            ) {
                  _id
                  image_url
                  ref
                  title
                  sub_title
                  description
            }
      }
`;

@Injectable({
      providedIn: 'root'
})
export class PromoService {
      constructor(private apollo: Apollo) { }

      getPromos(pagination: any) {
            return this.apollo.watchQuery({
                  query: gql(QUERY),
                  variables: { pagination }
            });
      }

      getPromosLength() {
            return this.apollo
                  .query({
                        query: gql(QUERY),
                        variables: { pagination: { page: 0, limit: 0 } }
                  })
                  .pipe(map((response: any) => {
                        const data = response.data.GetAllPromos;
                        return data.length;
                  }));
      }

      createPromo(data: any) {
            return this.apollo.mutate({
                  mutation: gql(MUTATE_QUERY),
                  variables: data
            });
      }
}
