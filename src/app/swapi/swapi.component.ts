import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { SwapiService } from "../swapi.service";
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-swapi',
  templateUrl: './swapi.component.html',
  styleUrls: ['./swapi.component.css']
})
export class SwapiComponent implements OnInit {
  public SwapiSearchForm: FormGroup;
  public swapiData: any;
  films =[
  'A New Hope',
  'Attack of the Clones',
  'The Phantom Menace','Revenge of the Sith',
  'Return of the Jedi',
  'The Empire Strikes Back',
  'The Force Awakens'
];

  constructor(private formBuilder: FormBuilder, private swapiService: SwapiService) { }

  ngOnInit() {
    this.SwapiSearchForm = this.formBuilder.group({
      film: ['']
    });

  }
  sendToSwapi(formValues){
    console.log(formValues.film);
    this.swapiService
    .getSwapi(formValues.film)
    .subscribe(data => this.swapiData = data);
      console.log(this.swapiData);
    }

  
}
