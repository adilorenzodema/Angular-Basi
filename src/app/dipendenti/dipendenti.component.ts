import { AfterViewInit, ViewChild, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { DipendentiServiceService} from '../dipendenti-service.service'
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-dipendenti',
  templateUrl: './dipendenti.component.html',
  styleUrls: ['./dipendenti.component.css']
})
export class DipendentiComponent implements OnInit , AfterViewInit {

  public dipendenti = new MatTableDataSource();
  //public dataSource = new MatTableDataSource(this.dipendenti)
  public displayedColumns: string[] = ['id', 'nome', 'cognome','actions'];
  public errormsg: string = ''
  public selectedId: any
  public isLoaded: boolean = false

  constructor(private router: Router, private dipendentiService: DipendentiServiceService, private route: ActivatedRoute) { }

  @ViewChild(MatSort) sort: MatSort | any;

  ngOnInit(): void {
    this.dipendentiService.getDipendenti()
    .subscribe(data => {
      this.dipendenti.data = data
      this.isLoaded = true
      //this.dipendenti.sort = this.sort;
      //console.log(this.sort)
    },
    error => {
      this.errormsg = error
      this.isLoaded = true})

    // questa funzione salva nella variabile id - l'id ricevuto nell'url
   /*  this.route.paramMap.subscribe((params: ParamMap | any) => {
      let id = parseInt(params.get('id'))
      this.selectedId = id
    }) */
  }

  ngAfterViewInit() {
    this.dipendenti.sort = this.sort; 
    /* console.log(this.sort) */
  }

  // al click chiama la funzione che naviga nella rotta definita
  onEdit(dip: any){
    //this.router.navigate(['Dipendenti', dip.id])
    //è uguale a quella sopra, fa un append di dip.id all'attuale route ovvero '/Dipendenti/'
    this.router.navigate([dip.id], {relativeTo: this.route})
  }

  /* onAdd(){
    this.formAdd = true
    this.router.navigate(['Add'], {relativeTo: this.route})
  } */
 /*  isSelected(dipendente: any){
    return dipendente.id === this.selectedId
  } */
}
