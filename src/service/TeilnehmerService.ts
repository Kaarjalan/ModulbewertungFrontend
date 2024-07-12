import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeilnehmerService {
  private apiUrl = 'https://your-heroku-app.herokuapp.com/api/participants';

  constructor(private http: HttpClient) { }

  getTeilnehmer(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}