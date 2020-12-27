import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  client: Client = new Client();
  submit = false;


  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(){
  }



  newClient(): void {
    this.submit = false;
    this.client = new Client();
  }

  save() {
    this.clientService.createClient(this.client).subscribe(data => {
      console.log(data)
      this.client = new Client();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submit = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['clients'])
  }

}
