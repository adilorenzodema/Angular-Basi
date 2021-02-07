import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IDipendenti } from './dipendenti';
import { dipendenti} from './dipendenti-add/dipendentiClass'

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

  newDipendente(dipendente: dipendenti){
    return this.http.post<dipendenti>(this.url + "newDipendente/", dipendente)
        .pipe(catchError(err => { throw err.message || "Server Error" }))
  }
}
