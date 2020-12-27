import { Client } from './../client';
import { Agence } from './../Agence';
import { Compte } from './../Compte';
import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';
import { Router } from '@angular/router';
import { AgenceService } from '../agence.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  selectedAgence: Agence;
  agence_: Observable<Agence[]>
  agence: Agence = new Agence();
  client: Client = new Client();
  compte: Compte = new Compte(/*this.agence.code, this.agence.nom_agence, this.agence.address, this.agence.telephone, */this.client.prenom, this.client.nom, this.client.date_naissance);
  submitted = false;


  constructor(private compteService: CompteService, private agenceService: AgenceService, private router: Router) { }

  ngOnInit(){
    this.reloadData();
  }

  reloadData() {
    this.agence_ = this.agenceService.getAgenceList();
  }

  newCompte(): void {
    this.submitted = false;
    this.compte = new Compte(this.client.prenom, this.client.nom, this.client.date_naissance);
  }

  /*save() {
    this.compteService.createCompte(this.compte).subscribe(data => {
      console.log(data);
      this.compte = new Compte(/*this.agence.code, this.agence.nom_agence, this.agence.address, this.agence.telephone, this.client.prenom, this.client.nom, this.client.date_naissance);
      this.gotoList();
    },
    error => console.log(error));
  }*/

  onSubmit() {
    this.submitted = true;
    //this.save();
  }

  gotoList() {
    this.router.navigate(['comptes'])
  }

}
