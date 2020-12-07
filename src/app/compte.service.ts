import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private baseUrl = 'http://localhost:8281/compte/compte-list';


  constructor(private http: HttpClient) { }

  getCompte(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCompte(compte: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, compte);
  }

  updateCompte(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCompte(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getCompteList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
