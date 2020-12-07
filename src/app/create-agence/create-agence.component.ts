import { Agence } from './../Agence';
import { Router } from '@angular/router';
import { AgenceService } from './../agence.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-agence',
  templateUrl: './create-agence.component.html',
  styleUrls: ['./create-agence.component.css']
})
export class CreateAgenceComponent implements OnInit {

  agence: Agence = new Agence();
  submitted= false;

  constructor(private agenceService: AgenceService, private router: Router) { }

  ngOnInit(){
  }

  newAgence(): void {
    this.submitted = false;
    this.agence = new Agence();
  }

  save() {
    this.agenceService.createAgence(this.agence).subscribe(data => {
      console.log(data)
      this.agence = new Agence();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['agences'])
  }

}
