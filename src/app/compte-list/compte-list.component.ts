import { Compte } from './../Compte';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CompteService } from '../compte.service';

@Component({
  selector: 'app-compte-list',
  templateUrl: './compte-list.component.html',
  styleUrls: ['./compte-list.component.css']
})
export class CompteListComponent implements OnInit {
  compte: Observable<Compte[]>

  constructor(private compteService: CompteService, private router: Router) { }

  ngOnInit(){
    this.reloadData();
  }

  reloadData() {
    this.compte = this.compteService.getCompteList();
  }

  deleteCompte(id: number) {
    this.compteService.deleteCompte(id).subscribe(data => {
      console.log(data);
      this.reloadData();
    },
    error => console.log(error));
  }

  updateCompte(id: number) {
    this.router.navigate(['update-compte', id])
  }

  compteDetails(id: number) {
    this.router.navigate(['compte-details', id]);
  }
}
