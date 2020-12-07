import { Client } from './../client';
import { Agence } from './../Agence';
import { Compte } from './../Compte';
import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  agence: Agence = new Agence();
  client: Client = new Client();
    compte: Compte = new Compte(this.agence.code, this.agence.nom_agence, this.agence.address, this.agence.telephone, this.client.prenom, this.client.nom, this.client.date_naissance);
  submitted = false;


  constructor(private compteService: CompteService, private router: Router) { }

  ngOnInit(){
  }

  newCompte(): void {
    this.submitted = false;
    this.compte = new Compte(this.agence.code, this.agence.nom_agence, this.agence.address, this.agence.telephone, this.client.prenom, this.client.nom, this.client.date_naissance);
  }

  save() {
    this.compteService.createCompte(this.compte).subscribe(data => {
      console.log(data);
      this.compte = new Compte(this.agence.code, this.agence.nom_agence, this.agence.address, this.agence.telephone, this.client.prenom, this.client.nom, this.client.date_naissance);
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['comptes'])
  }

}
