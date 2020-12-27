import { Compte } from './../Compte';
import { ClientService } from './../client.service';
import { Observable } from 'rxjs';
import { Agence } from './../Agence';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenceService } from '../agence.service';
import { Client } from '../client';
import { CompteService } from '../compte.service';

@Component({
  selector: 'app-agence-details',
  templateUrl: './agence-details.component.html',
  styleUrls: ['./agence-details.component.css']
})
export class AgenceDetailsComponent implements OnInit {
  code: string;
  agence: Agence;
  comptes: Observable<Compte>
  client: Client = new Client();
  compte: Compte = new Compte(this.client.prenom, this.client.nom, this.client.date_naissance);
  submitted = false;
  newAccount = false;

  id: number;
  client_: Client = new Client();
  compte_: Compte;
  constructor(private route: ActivatedRoute, private router: Router, private agenceService: AgenceService, private compteService: CompteService) { }

  ngOnInit(){
    this.agence = new Agence();
    this.code = this.route.snapshot.params['code'];
    //this.id = this.compte_.id;

    this.agenceService.getAgence(this.code).subscribe(data => {
      console.log(data);
      this.agence = data;
    }, error => console.log(error));
    this.agenceService.getCompteList(this.code).subscribe(data => {
      console.log(data)
      this.comptes = data;
    }, error => console.log(error));
    /*this.agenceService.updateAccount(this.code, this.id, this.compte_).subscribe(data => {
      console.log(data)
      this.compte_ = data;
    }, error => console.log(error));
    //this.reloadData();*/
  }

  list() {
    this.router.navigate(['agences']);
  }

  createAccount() {
    this.newAccount = true;

  }

  newCompte(): void {
    this.submitted = false;
    this.compte = new Compte(this.client.prenom, this.client.nom, this.client.date_naissance);
  }

  save() {
    this.agenceService.createAccount(this.code, this.compte).subscribe(data => {
      console.log(data);
      this.compte = new Compte(this.client.prenom, this.client.nom, this.client.date_naissance);
      this.gotoList(this.code);
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.newAccount = false;
    this.save();
  }

  gotoList(code: string) {
    this.router.navigate(['/agence-details', code])
  }
  updateCompte(code: string, id: number) {
    this.router.navigate(['agence-details', code, id])
  }

  /*deleteCompte(code: string, id: number) {
    this.agenceService.deletAccount(code, id).subscribe(data => {
      console.log(data);
    },
    error => console.log(error));
  }*/
  deleteCompte(id: number) {
    this.compteService.deleteAccount(id).subscribe(data => {
      console.log(data);
    },
    error => console.log(error));
  }
}


