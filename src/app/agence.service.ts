import { Agence } from './Agence';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  constructor(private http: HttpClient, private router: Router) { }

  private baseUrl = 'http://localhost:8281/agence/agence-list';

  getAgence(code: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${code}`);
  }

  createAgence(agence: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, agence);
  }

  updateAgence(code: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${code}`, value);
  }

  deleteAgence(code: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${code}`, {responseType: 'text'});
  }

  getAgenceList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
