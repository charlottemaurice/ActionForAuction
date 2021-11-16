import { Component, OnInit } from '@angular/core';
import { UtilisateurService} from '../service/utilisateur.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-sinscrire',
  templateUrl: './sinscrire.component.html',
  styleUrls: ['./sinscrire.component.css']
})
export class SinscrireComponent implements OnInit {
  public pseudo: string;
  public nom: string;
  public  prenom: string;

  constructor(private utilisateurService: UtilisateurService, private router: Router) {
    this.pseudo = '';
    this.nom = '';
    this.prenom = '';
  }

  ngOnInit(): void {
  }

  public ajouterUtilisateur(): void{
    if (this.pseudo == '' || this.nom == '' || this.prenom == ''){
      alert("Tout les champs ne sont pas rentrés");
    }
    else {
      if (!this.utilisateurService.verifierUtilisateur(this.pseudo)) {
        this.utilisateurService.setUtilisateurConnecte(this.pseudo);
        this.utilisateurService.ajouterUtilisateur(this.pseudo, this.nom, this.prenom);
        this.router.navigate(['/bienvenue']);
      } else {
        alert("Ce pseudo existe déja!");
      }
    }
  }

}
