import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Agence } from '../Agence';
import { AgenceService } from '../agence.service';

@Component({
  selector: 'app-agence-list',
  templateUrl: './agence-list.component.html',
  styleUrls: ['./agence-list.component.css']
})
export class AgenceListComponent implements OnInit {
  
  agence: Observable<Agence[]>

  constructor(private agenceService: AgenceService, private router: Router) { }

  ngOnInit(){
    this.reloadData();
  }

  reloadData() {
    this.agence = this.agenceService.getAgenceList();
  }

  deleteAgence(code: string) {
    this.agenceService.deleteAgence(code).subscribe(data => {
      console.log(data);
      this.reloadData();
    },
    error => console.log(error));
  }

  updateAgence(code: string) {
    this.router.navigate(['update-agence', code])
  }

  agenceDetails(code: string) {
    this.router.navigate(['agence-details', code]);
  }

}
