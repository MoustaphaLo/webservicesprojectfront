import { Agence } from './../Agence';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenceService } from '../agence.service';

@Component({
  selector: 'app-update-agence',
  templateUrl: './update-agence.component.html',
  styleUrls: ['./update-agence.component.css']
})
export class UpdateAgenceComponent implements OnInit {

  code: string;
  agence: Agence;
  constructor(private route: ActivatedRoute, private router: Router, private agenceService: AgenceService) { }

  ngOnInit(){
    this.agence = new Agence();

    this.code = this.route.snapshot.params['code'];

    this.agenceService.getAgence(this.code).subscribe(data => {
      console.log(data)
      this.agence = data;
    }, error => console.log(error));
  }

  updateAgence() {
    this.agenceService.updateAgence(this.code, this.agence).subscribe(data => {
      console.log(data);
      this.agence = new Agence();
      this.gotoList();
    }, error => console.log(error));
  }

  onSubmit() {
    this.updateAgence();
  }

  gotoList() {
    this.router.navigate(['/agences'])
  }


}
