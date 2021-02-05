import { Component, OnInit } from '@angular/core';
/* import {  Router } from '@angular/router' */
import { dipendenti } from './dipendentiClass';
import { DipendentiServiceService } from '../dipendenti-service.service'

@Component({
  selector: 'app-dipendenti-add',
  templateUrl: './dipendenti-add.component.html',
  styleUrls: ['./dipendenti-add.component.css']
})
export class DipendentiAddComponent implements OnInit {

  public dipendentiModel = new dipendenti('','')

  constructor(private dipendentiService: DipendentiServiceService) {}

  ngOnInit(): void {
  }

  /*goBack(){
    this.router.navigate(['Dipendenti/'])
  }*/
  onSubmit(){
    console.log(this.dipendentiModel)
    /*this.dipendentiService.newDipendente(this.dipendentiModel)
          .subscribe*/
  }
}
