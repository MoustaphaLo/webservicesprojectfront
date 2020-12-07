import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { CompteComponent } from './compte/compte.component';
import { CompteListComponent } from './compte-list/compte-list.component';
import { CompteDetailsComponent } from './compte-details/compte-details.component';
import { CreateAgenceComponent } from './create-agence/create-agence.component';
import { AgenceListComponent } from './agence-list/agence-list.component';
import { AgenceDetailsComponent } from './agence-details/agence-details.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateAgenceComponent } from './update-agence/update-agence.component';
import { UpdateCompteComponent } from './update-compte/update-compte.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateClientComponent,
    ClientListComponent,
    ClientDetailsComponent,
    CompteComponent,
    CompteListComponent,
    CompteDetailsComponent,
    CreateAgenceComponent,
    AgenceListComponent,
    AgenceDetailsComponent,
    UpdateClientComponent,
    UpdateAgenceComponent,
    UpdateCompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
