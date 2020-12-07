import { Agence } from './../Agence';
import { Compte } from './../Compte';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompteService } from '../compte.service';
import { Client } from '../client';

@Component({
  selector: 'app-update-compte',
  templateUrl: './update-compte.component.html',
  styleUrls: ['./update-compte.component.css']
})
export class UpdateCompteComponent implements OnInit {

  id: number;
  agence: Agence = new Agence();
  client: Client = new Client();
  compte: Compte;
  constructor(private route: ActivatedRoute, private router: Router, private compteService: CompteService) { }

  ngOnInit(){
    this.compte = new Compte(this.agence.code, this.agence.nom_agence, this.agence.address, this.agence.telephone, this.client.prenom, this.client.nom, this.client.date_naissance);

    this.id = this.route.snapshot.params['id'];

    this.compteService.getCompte(this.id).subscribe(data => {
      console.log(data)
      this.compte = data;
    }, error => console.log(error));
  }

  updateCompte() {
    this.compteService.updateCompte(this.id, this.compte).subscribe(data => {
      console.log(data);
      this.compte = new Compte(this.agence.code, this.agence.nom_agence, this.agence.address, this.agence.telephone, this.client.prenom, this.client.nom, this.client.date_naissance);
      this.gotoList();
    }, error => console.log(error));
  }

  onSubmit() {
    this.updateCompte();
  }

  gotoList() {
    this.router.navigate(['/comptes'])
  }
}
