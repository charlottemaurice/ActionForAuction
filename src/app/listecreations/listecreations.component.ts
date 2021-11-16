import { Component, OnInit } from '@angular/core';
import {Doodle} from '../classes/doodle';
import {DoodleService} from '../service/doodle.service';
import {UtilisateurService} from '../service/utilisateur.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listecreations',
  templateUrl: './listecreations.component.html',
  styleUrls: ['./listecreations.component.css']
})
export class ListecreationsComponent implements OnInit {
  utilisateur: string;

  constructor(private doodleService: DoodleService, private utilisateurService: UtilisateurService, private router: Router) {
    this.utilisateur = this.utilisateurService.utilisateurConnecte;
  }

  ngOnInit(): void {
  }

  utilisateurEnCours(doodle: Doodle): boolean{
    if (this.utilisateur ==  doodle.utilisateurEmetteur) {
      return true;
    }
    else {
      for (let accepted of doodle.datesAccepte ) {
        if (accepted.utilisateur == this.utilisateur){
          return true;
        }
      }
      return false;
    }
  }

  public  annulerEvent(doodle: Doodle) {
    this.doodleService.supprimerParticipant(doodle);
  }

  public getDoodleMe(): Doodle[]{
    return this.doodleService.getDoodleMe();
  }

  public viewMoreDoodle(doodle: Doodle){
    this.doodleService.doodleSelected = doodle;
    this.router.navigate(['/dateparticipants']);
  }
}
