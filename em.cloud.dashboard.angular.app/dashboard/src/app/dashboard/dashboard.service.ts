import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get('http://localhost:3000/api/dashboard');
  }
}
