import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router'
import { dipendenti } from './dipendentiClass';

@Component({
  selector: 'app-dipendenti-add',
  templateUrl: './dipendenti-add.component.html',
  styleUrls: ['./dipendenti-add.component.css']
})
export class DipendentiAddComponent implements OnInit {

  public dipendentiModel = new dipendenti('','',0,'')

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate(['Dipendenti/'])
  }
}
