import { Agence } from './../Agence';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenceService } from '../agence.service';

@Component({
  selector: 'app-agence-details',
  templateUrl: './agence-details.component.html',
  styleUrls: ['./agence-details.component.css']
})
export class AgenceDetailsComponent implements OnInit {
  code: string;
  agence: Agence;

  constructor(private route: ActivatedRoute, private router: Router, private agenceService: AgenceService) { }

  ngOnInit(){
    this.agence = new Agence();

    this.code = this.route.snapshot.params['code'];

    this.agenceService.getAgence(this.code).subscribe(data => {
      console.log(data);
      this.agence = data;
    }, error => console.log(error));
  }

  list() {
    this.router.navigate(['agences']);
  }

}
