import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { SpielRunde } from './spielrunde.model';
import { observable, throwError, Observable, BehaviorSubject } from 'rxjs';
import { Spiel } from './spiel.model';

@Injectable({
  providedIn: 'root'
})
export class SpielrundeService {
  private baseUrl = 'http://localhost:3000/api';
  private url = `${this.baseUrl}/`;
  public fetchedSpielSubject: BehaviorSubject<Spiel>;
  public fetchedSpiel$: Observable<Spiel>;

  spielrunde$ = this.httpClient.get<SpielRunde[]>(this.url + 'spielrunden')
  .pipe(
    catchError(this.handleError)
  );

  constructor(private httpClient: HttpClient) {
    this.fetchedSpielSubject = new BehaviorSubject<Spiel>(null);
    this.fetchedSpiel$ = this.fetchedSpielSubject.asObservable();
  }

  /*
  *
  */
 getSpiele(spielrundeId: string) {
  const url = `${this.baseUrl}/`;
  return this.httpClient.get<SpielRunde>(url + 'spielrunden/' + spielrundeId)
    .pipe(
      catchError(this.handleError),
      map((data) => {
        return data.spiele.map(spiel => {
          return {
            spielId: spiel.spielId,
            datum: spiel.datum,
            gruppe: spiel.gruppe,
            stadion: spiel.stadion,
            ort: spiel.ort,
            team1: spiel.team1,
            team2: spiel.team2,
            scoreTeam1: spiel.scoreTeam1,
            scoreTeam2: spiel.scoreTeam2,
            spielRunde: spiel.spielRunde,
            id: spiel._id,
          };
        }
      );
    })
  );
}

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      // clientside
      console.log('Client Side Error: ', errorResponse.error.message);
    } else {
      // Serverside
      console.log('Server Side Error: ', errorResponse);
    }
    // tslint:disable-next-line: max-line-length
    return throwError('Die Anfrage kann nicht beantwortet werden, da im Server ein interner Fehler aufgetreten ist. \nVersuche Sie es später noch einmal.');
  }
}

