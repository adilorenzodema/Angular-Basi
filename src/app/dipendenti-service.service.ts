import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IDipendenti } from './dipendenti';

@Injectable({
  providedIn: 'root'
})
export class DipendentiServiceService {

  private url: string = "http://localhost:8080/Dipendenti/"

  constructor(private http: HttpClient) { }

  getDipendenti(): Observable<IDipendenti[]>{
    return this.http.get<IDipendenti[]>(this.url + "getAll").pipe(catchError(err => { throw err.message || "Server Error"}))      
  }

  getDipendente(id: any): Observable<IDipendenti[]>{
    return this.http.get<IDipendenti[]>(this.url + "getDipendente/" + id).pipe(catchError(err => { throw err.message || "Server Error" }))      
  }

  newDipendente(dipendente: IDipendenti[]){
    return this.http.post<any>(this.url + "newDipendente/" + dipendente, null)
  }
}
