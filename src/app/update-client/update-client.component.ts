import { ClientService } from './../client.service';
import { Client } from './../client';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  id: number;
  client: Client;
  constructor(private route: ActivatedRoute, private router: Router, private clientService: ClientService) { }

  ngOnInit(){
    this.client = new Client();

    this.id = this.route.snapshot.params['id'];

    this.clientService.getClient(this.id).subscribe(data => {
      console.log(data)
      this.client = data;
    }, error => console.log(error));
  }

  updateClient() {
    this.clientService.updateClient(this.id, this.client).subscribe(data => {
      console.log(data);
      this.client = new Client();
      this.gotoList();
    }, error => console.log(error));
  }

  onSubmit() {
    this.updateClient();
  }

  gotoList() {
    this.router.navigate(['/clients'])
  }

}
