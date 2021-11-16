import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../service/utilisateur.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seconnecter',
  templateUrl: './seconnecter.component.html',
  styleUrls: ['./seconnecter.component.css']
})
export class SeconnecterComponent implements OnInit {
  public pseudo: string;

  constructor(private utilisateurService: UtilisateurService, private router: Router) {
    this.pseudo = '';
  }

  ngOnInit(): void {
  }

  public seConnecter(): void{
    if (this.pseudo == ''){
      alert("Veuillez saisir un pseudo");
    }
    else {
      if (this.utilisateurService.verifierUtilisateur(this.pseudo)) {
        this.utilisateurService.setUtilisateurConnecte(this.pseudo);
        this.router.navigate(['/bienvenue']);
      } else {
        alert("Ce pseudo est introuvable");
      }
    }
  }

}
