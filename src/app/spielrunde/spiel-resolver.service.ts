import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Spiel } from './spiel.model';
import { SpielrundeService } from './spielrunde.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpielResolver implements Resolve<Spiel[] | string> {

  constructor(private spielrundeService: SpielrundeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Spiel[] | string> {
    return this.spielrundeService.getSpiele(route.params.id)
    .pipe(
      catchError((err: string) => of(err))
    );
  }
}
