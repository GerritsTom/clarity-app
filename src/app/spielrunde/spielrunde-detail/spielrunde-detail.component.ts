import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params, Data } from '@angular/router';
import { SpielrundeService } from '../spielrunde.service';
import { Spiel } from '../spiel.model';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-spielrunde-detail',
  templateUrl: './spielrunde-detail.component.html',
  styleUrls: ['./spielrunde-detail.component.css']
})
export class SpielrundeDetailComponent implements OnInit {
  spiele: Spiel[];
  error: string = null;

  constructor(
    private spielrundeService: SpielrundeService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    // use a resolver
    this.route.data.subscribe(
      (data: Data) => {
        if (Array.isArray(data.spiele)) {
          this.spiele = data.spiele;
        } else {
          this.error = data.spiele;
        }
    });
  }

  onTippen(spiel: Spiel) {
    this.spielrundeService.fetchedSpielSubject.next(spiel);
    this.router.navigate(['spiel', spiel.spielId, 'edit'], {relativeTo: this.route});
  }

}
