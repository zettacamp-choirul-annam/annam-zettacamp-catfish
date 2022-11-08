import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
      providedIn: 'root'
})
export class SearchService {
      constructor(private apollo: Apollo) { }

      getUserByLastName(name: string) {
            const QUERY = `query Users($last_name: String) {
                  GetAllUsers(
                        last_name: $last_name,
                        pagination: { page: 0, limit: 20 }
                  ) {
                        _id
                        first_name
                        last_name
                        civility 
                  }
            }`;

            return this.apollo.query({
                  query: gql(QUERY),
                  variables: { last_name: name }
            });
      }
}
