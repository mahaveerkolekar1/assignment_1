import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
@Injectable()
export class PostService {
  private urlForDetails = 'https://jsonPlaceholder.typicode.com/comments';
  private urlForDashboard = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {}

  getData(): Observable<Response> {
    return this.http.get(this.urlForDetails);
  }
  getDashboardData(): Observable<Response> {
    return this.http.get(this.urlForDashboard);
  }
}
