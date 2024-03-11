import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  private baseUrl = 'http://localhost:3000'; // Replace with your backend server URL

  constructor(private http: HttpClient) { }

  getTitle(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/title`);
  }
}
