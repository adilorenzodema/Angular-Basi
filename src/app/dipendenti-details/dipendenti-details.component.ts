import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { DipendentiServiceService} from '../dipendenti-service.service'

@Component({
  selector: 'app-dipendenti-details',
  templateUrl: './dipendenti-details.component.html',
  styleUrls: ['./dipendenti-details.component.css']
})
export class DipendentiDetailsComponent implements OnInit {

  public dipendenteId: number | any
  public dipendente: any = []
  public errormsg: any 
  constructor(private route: ActivatedRoute, private router: Router, private dipendentiService: DipendentiServiceService){ }

  ngOnInit(){
    //appena richiamato questo componente salva in id, l'id passato nella rotta
    //let id = this.route.snapshot.paramMap.get('id')
    //this.dipendenteId = id
    this.route.paramMap.subscribe((params: ParamMap | any) => {
      let id = parseInt(params.get('id'))
      this.dipendenteId = id
    })

    this.dipendentiService.getDipendente(this.dipendenteId)
    .subscribe(data =>
      this.dipendente = data, 
      error => this.errormsg = error)
  }

  // si renderizza dopo l'aggiornamento della pagina
  goPrevious(){
    let previuosid: number | any = this.dipendenteId - 1
    console.log(previuosid)
    this.router.navigate(['Dipendenti/', previuosid])
    /* this.dipendentiService.getDipendente(previuosid)
    .subscribe(data =>
      this.dipendente = data, 
      error => this.errormsg = error) */
  }

  goNext(){
    let nextid: number | any = this.dipendenteId + 1
    this.router.navigate(['Dipendenti/', nextid])
  }

  goDipendenti(){
    let selectedId = this.dipendenteId ? this.dipendenteId : null
    //this.router.navigate(['Dipendenti', {id: selectedId}])
    this.router.navigate(['../', {id: selectedId}])
  }
}
