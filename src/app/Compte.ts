import { Client } from './client';
import { Agence } from './Agence';

export class Compte {
    id: number;
    solde: number;
    decouvert: number;
    //agence: Agence;
    client: Client
    
    constructor(/*code: string, nom_agence: string, address: string, telephone: string, */ prenom: string, nom: string, date_naissance: Date){
        //this.agence = new Agence();
        this.client = new Client();
        /*this.agence.code = code;
        this.agence.nom_agence = nom_agence;
        this.agence.address = address;
        this.agence.telephone = telephone;*/
        this.client.prenom = prenom;
        this.client.nom = nom;
        this.client.date_naissance = date_naissance;
    }
}