import { Component, OnInit } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { SpielRunde } from '../spielrunde.model';
import { SpielrundeService } from '../spielrunde.service';

@Component({
  selector: 'app-spielrunde-list',
  templateUrl: './spielrunde-list.component.html',
  styleUrls: ['./spielrunde-list.component.css']
})
export class SpielrundeListComponent implements OnInit {
  error: string = null;

  spielrunde$: Observable<SpielRunde[]> = this.spielrundeService.spielrunde$
    .pipe(
      tap(() => {console.log('using rxjs to load the data'); }),
      catchError(error => {
        this.error = error;
        return of(null);
      })
    );

    constructor(
      private spielrundeService: SpielrundeService,
      private router: Router,
      private route: ActivatedRoute) {}

  ngOnInit() {
  }

}
