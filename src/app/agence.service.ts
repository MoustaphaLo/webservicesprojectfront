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

  private baseUrl = 'http://localhost:8080/agence/agence-list';

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

  getCompteList(code: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${code}/compte-list`)
  }
  createAccount(code: string, compte: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${code}/compte-list`, compte)
  }
  updateAccount(code: string, id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${code}/compte-list/${id}`, value)
  }
  getCompteById(code: string, id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${code}/compte-list/${id}`)
  }
  deletAccount(code: string, id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${code}/compte-list/${id}`)
  }
}
