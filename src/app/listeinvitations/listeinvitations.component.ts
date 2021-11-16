import { Component, OnInit } from '@angular/core';
import {DoodleService} from '../service/doodle.service';
import {UtilisateurService} from '../service/utilisateur.service';
import {Doodle} from '../classes/doodle';
import {Creneau} from '../classes/creneau';
import {DateAccepte} from '../classes/dateAccepte';

@Component({
  selector: 'app-listeinvitations',
  templateUrl: './listeinvitations.component.html',
  styleUrls: ['./listeinvitations.component.css']
})
export class ListeinvitationsComponent implements OnInit {
  public choixMap = new Map();
  public dateValide = new DateAccepte();


  constructor(private doodleService: DoodleService, private utilisateurService: UtilisateurService) {
  }

  ngOnInit(): void {
  }

  public utilisateurEstInvite(listeInvite: string[]) {
    if (listeInvite == null){
      return false;
    }
    else {
      for (let invite of listeInvite) {
        if (invite == this.utilisateurService.utilisateurConnecte) {
          return true;
        }
      }
    }
    return false;
  }

  public getDoodleMe(): Doodle[]{
    return this.doodleService.getDoodleMe();
  }

  public supprimerParticipant(doodle) {
    this.doodleService.supprimerParticipant(doodle);
  }

  updateCreneau(horaire: Creneau, idBox: number, i: number, choix: number){
    if (choix == 1) {
      let key = idBox + ',' + i;
      if (!this.choixMap.has(key)) {
        this.choixMap.set(key, horaire);
      } else {
        this.choixMap.delete(key);
      }
    }
    else {
      this.choixMap.delete(i);
      this.choixMap.set(i, horaire);
    }
  }

  public checkButton(horaire: Creneau, idBox: number, i: number, choix: number): string{
    if (choix == 1) {
      let key = idBox + ',' + i;
      if (!this.choixMap.has(key)) {
        return '☐';
      } else {
        return '☑';
      }
    }
    else {
      if (!this.choixMap.has(i)){
        return '☐';
      }
      if (this.choixMap.get(i).dateDebut == horaire.dateDebut){
        return '☑';
      }
      else {
        return '☐';
      }

    }
  }

  public validerChoix(i: number, doodle: Doodle){
    let datesAcceptees = [];
    let nbChoix=0;
    if (doodle.choix == 1) {
      for (let nbCreneau in doodle.horaire) {
        let key = nbCreneau + ',' + i;
        if (this.choixMap.has(key)) {
          this.dateValide.creneau = this.choixMap.get(key);
          this.dateValide.utilisateur = this.utilisateurService.utilisateurConnecte;
          datesAcceptees.push(this.dateValide);
        }
        else {
          nbChoix++;
          //Si tout les choix sont pas coché
          if (nbChoix == doodle.horaire.length){
            alert("Chochez minimum une case");
            return;
          }
        }
      }
    }
    else {
      if (this.choixMap.has(i)) {
        this.dateValide.creneau = this.choixMap.get(i);
        this.dateValide.utilisateur = this.utilisateurService.utilisateurConnecte;
        datesAcceptees.push(this.dateValide);
      }
      else {
        alert('Choisissez une date');
        return;
      }
    }

    this.doodleService.ajouterDateAccepte(datesAcceptees, doodle);
  }
}
