import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  //code: string = '';

  private baseUrl = `http://localhost:8080/compte/agence/agence-list`;
  private baseUrl_ = `http://localhost:8080/agence/compte-list`;


  constructor(private http: HttpClient) { }

  getCompte(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCompte(code: string, compte: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${code}/compte-list`, compte);
  }

  updateCompte(code: string, id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${code}/compte-list/${id}`, value);
  }

  deleteCompte(code: string, id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${code}/compte-list/${id}`, {responseType: 'text'});
  }
  deleteAccount(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl_}/${id}`, {responseType: 'text'});
  }


  getCompteList(code: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${code}/compte-list`);
  }
}
