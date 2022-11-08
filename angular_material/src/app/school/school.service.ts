import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const SCHOOL_QUERY = `query { 
      GetAllSchools(pagination: { page: 0, limit: 20 }) {
            _id
            short_name
            long_name
            status
      }
}`

@Injectable({
      providedIn: 'root'
})
export class SchoolService {
      constructor(private apollo: Apollo) { }

      getSchools() {
            return this.apollo.query({
                  query: gql(SCHOOL_QUERY)
            });
      }
}
