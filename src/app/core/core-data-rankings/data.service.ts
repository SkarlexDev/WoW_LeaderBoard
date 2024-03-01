import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RankingsData } from './rankings-data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRankingsData(): Observable<RankingsData> {
    return this.http.get<RankingsData>('assets/rankings.json').pipe(
      tap(data => console.log('Received data:', data))
    );
  }
}
