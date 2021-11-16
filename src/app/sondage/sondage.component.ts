import { Component, OnInit } from '@angular/core';
import { UtilisateurService} from '../service/utilisateur.service';
import {DoodleService} from '../service/doodle.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-sondage',
  templateUrl: './sondage.component.html',
  styleUrls: ['./sondage.component.css']
})
export class SondageComponent implements OnInit {
  utilisateur: string;
  listeUtilisateurs = [];
  choix: number;


  constructor(private utilisateurService: UtilisateurService, private doodleService: DoodleService, private router: Router) {

  }

  supprimerUtilisateur(index) {
    this.listeUtilisateurs.splice(index, 1);
  }

  ajouterUtilisateur() {
    if (this.utilisateur == ''){
      alert("Veuillez saisir un pseudo");
    }
    else{
      if (this.utilisateur == this.utilisateurService.utilisateurConnecte){
        alert("Vous vous ajoutez vous même");
      }
      else {
        if (this.utilisateurService.verifierUtilisateur(this.utilisateur)) {
          this.listeUtilisateurs.push(this.utilisateur);
          this.utilisateur = '';
        } else {
          alert("L'utilisateur saisie n'existe pas");
        }
      }
    }
  }

  ajouterDoodleMeSondage(){
    if (this.listeUtilisateurs.length != 0) {
      this.doodleService.ajouterDoodleMeSondage(this.listeUtilisateurs, this.choix);
      this.router.navigate(['/recapitulatif']);
    }
    else {
      alert('Entrez au moins un participant');
    }
  }

  updateChoix(value) {
    this.choix = value;
  }

  ngOnInit(): void {
    this.choix = 1;
  }


}
