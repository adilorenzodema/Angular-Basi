import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { DipendentiServiceService} from '../dipendenti-service.service'

@Component({
  selector: 'app-dipendenti',
  templateUrl: './dipendenti.component.html',
  styleUrls: ['./dipendenti.component.css']
})
export class DipendentiComponent implements OnInit {

  public dipendenti: any = []
  public errormsg: string = ''
  public selectedId: any
  public isLoaded: boolean = false

  constructor(private router: Router, private dipendentiService: DipendentiServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dipendentiService.getDipendenti()
    .subscribe(data => {
      this.dipendenti = data
      this.isLoaded = true
    },
    error => {
      this.errormsg = error
      this.isLoaded = true})

    // questa funzione salva nella variabile id l'id passato nell'url
    this.route.paramMap.subscribe((params: ParamMap | any) => {
      let id = parseInt(params.get('id'))
      this.selectedId = id
    })
  }

  // al click chiama la funzione che naviga nella rotta definita
  onSelect(dip: any){
    //this.router.navigate(['Dipendenti', dip.id])
    //è uguale a quella sopra, fa un append di dip.id all'attuale route ovvero '/Dipendenti/'
    this.router.navigate([dip.id], {relativeTo: this.route})
  }

  isSelected(dipendente: any){
    return dipendente.id === this.selectedId
  }
}
