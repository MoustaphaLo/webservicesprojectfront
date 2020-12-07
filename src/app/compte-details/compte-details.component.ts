import { Client } from './../client';
import { Agence } from './../Agence';
import { Compte } from './../Compte';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompteService } from '../compte.service';

@Component({
  selector: 'app-compte-details',
  templateUrl: './compte-details.component.html',
  styleUrls: ['./compte-details.component.css']
})
export class CompteDetailsComponent implements OnInit {

  
  id: number;
  agence: Agence = new Agence();
  client: Client = new Client();
  compte: Compte;

  constructor(private route: ActivatedRoute, private router: Router, private compteService: CompteService) { }

  ngOnInit(){
    this.compte = new Compte(this.agence.code, this.agence.nom_agence, this.agence.address, this.agence.telephone, this.client.prenom, this.client.nom, this.client.date_naissance);

    this.id = this.route.snapshot.params['id'];

    this.compteService.getCompte(this.id).subscribe(data => {
      console.log(data);
      this.compte = data;
    }, error => console.log(error));
  }

  list() {
    this.router.navigate(['comptes']);
  }

}
