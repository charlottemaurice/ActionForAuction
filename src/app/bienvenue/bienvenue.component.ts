import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../service/utilisateur.service';
import {Utilisateur} from '../classes/utilisateur';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.component.html',
  styleUrls: ['./bienvenue.component.css']
})
export class BienvenueComponent implements OnInit {

  pseudo: string;

  constructor(private utilisateurService: UtilisateurService) {
    this.pseudo = this.utilisateurService.utilisateurConnecte;
  }

  public getUser(): Utilisateur[]{
    return this.utilisateurService.getUtilisateurs();
}

  public seDeconnecter(){
    this.utilisateurService.setUtilisateurConnecte('');
  }

  ngOnInit(): void {
  }

}
