import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router'

@Component({
  selector: 'app-dipendenti-add',
  templateUrl: './dipendenti-add.component.html',
  styleUrls: ['./dipendenti-add.component.css']
})
export class DipendentiAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate(['Dipendenti/'])
  }
}
