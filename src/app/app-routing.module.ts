import { CompteListComponent } from './compte-list/compte-list.component';
import { CreateAgenceComponent } from './create-agence/create-agence.component';
import { AgenceListComponent } from './agence-list/agence-list.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ClientListComponent } from './client-list/client-list.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateAgenceComponent } from './update-agence/update-agence.component';
import { AgenceDetailsComponent } from './agence-details/agence-details.component';
import { CompteComponent } from './compte/compte.component';
import { UpdateCompteComponent } from './update-compte/update-compte.component';
import { CompteDetailsComponent } from './compte-details/compte-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'client', pathMatch: 'full' },
  { path: 'clients', component: ClientListComponent },
  { path: 'add-client', component: CreateClientComponent },
  { path: 'update-client/:id', component: UpdateClientComponent },
  { path: 'client-details/:id', component: ClientDetailsComponent },

  { path: 'agences',  component: AgenceListComponent },
  { path: 'add-agence', component: CreateAgenceComponent },
  { path: 'update-agence/:code', component: UpdateAgenceComponent },
  { path: 'agence-details/:code', component: AgenceDetailsComponent,
     children: [
         {path: 'comptes', component: CompteComponent}]
 },
 { path: 'agence-details/:code/:id', component: UpdateCompteComponent},

  //{ path: 'comptes', component: CompteListComponent },
  //{ path: 'add-compte', component: CompteComponent },
  //{ path: 'update-compte/:id', component: UpdateCompteComponent },
  { path: 'compte-details/:id', component: CompteDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
