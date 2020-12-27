import { AgenceService } from './../agence.service';
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
  code: string;
  agence: Agence = new Agence();
  client: Client = new Client();
  compte: Compte;
  constructor(private agenceService: AgenceService, private route: ActivatedRoute, private router: Router, private compteService: CompteService) { }

  ngOnInit(){
    this.compte = new Compte(this.client.prenom, this.client.nom, this.client.date_naissance);

    this.id = this.route.snapshot.params['id'];
    this.code = this.route.snapshot.params['code'];

    this.agenceService.getCompteById(this.code,this.id).subscribe(data => {
      console.log(data)
      this.compte = data;
    }, error => console.log(error));
  }

  updateCompte() {
    this.agenceService.updateAccount(this.code, this.id, this.compte).subscribe(data => {
      console.log(data);
      this.compte = new Compte(this.client.prenom, this.client.nom, this.client.date_naissance);
      this.gotoList(this.code);
    }, error => console.log(error));
  }

  onSubmit() {
    this.updateCompte();
  }

  gotoList(code: string) {
    this.router.navigate(['/agence-details', code])
  }
}
