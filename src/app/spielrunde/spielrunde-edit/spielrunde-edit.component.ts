import { Component, OnInit } from '@angular/core';
import { SpielrundeService } from '../spielrunde.service';
import { Spiel } from '../spiel.model';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-spielrunde-edit',
  templateUrl: './spielrunde-edit.component.html',
  styleUrls: ['./spielrunde-edit.component.css']
})
export class SpielrundeEditComponent implements OnInit {
  spiel: Spiel;
  input: string = '';
  exampleForm: FormGroup;

  constructor(private spielrundeService: SpielrundeService) { }

  ngOnInit() {

    this.exampleForm = new FormGroup({
      sample: new FormControl('', Validators.required),
  });

    this.spielrundeService.fetchedSpiel$.subscribe(value => {
      this.spiel = value;
    });
  }

}
