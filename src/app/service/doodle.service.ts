import {Component, Injectable, OnInit} from '@angular/core';
import {Doodle} from '../classes/doodle';
import {Creneau} from '../classes/creneau';
import {UtilisateurService} from './utilisateur.service';
import {DateAccepte} from '../classes/dateAccepte';
import {element} from 'protractor';

@Injectable()

export class DoodleService {
  doodle = new Doodle();
  doodleSelected;
  index: number;

  constructor(private utilisateurService: UtilisateurService) {
    let doodleMe = this.getDoodleMe();
    if (doodleMe.length == 0) {
      this.index = 0;
    }
    else {
      this.index = doodleMe[doodleMe.length-1].id + 1;
    }
  }

  public ajouterDoodleMe(){
    let doodleMe = this.getDoodleMe();
    this.doodle.id = this.index;
    doodleMe.push(this.doodle);
    this.setLocalStorageDoodleMe(doodleMe);
    this.index ++;
    alert("Le doodleMe à été crée");
  }

  public ajouterDoodleMeFirst(nomEvent: string, lieu: string, commentaire: string){
    this.doodle = new Doodle();
    this.doodle.utilisateurEmetteur = this.utilisateurService.utilisateurConnecte;
    this.doodle.nomEvent = nomEvent;
    this.doodle.lieu = lieu;
    this.doodle.commentaire = commentaire;
  }

  public ajouterDoodleMeHoraire(horaire: Creneau[]){
    this.doodle.horaire = horaire;
  }

  public ajouterDoodleMeSondage(listeUtilisateur:string[] , choix: number){
    this.doodle.listeUtilisateur = listeUtilisateur;
    this.doodle.choix = choix;
  }

  public ajouterDateAccepte(dates: DateAccepte[], doodle: Doodle){
    let doodleMe = this.getDoodleMe();
    for (let obj of doodleMe){
      if (obj.id == doodle.id){
        obj.datesAccepte = dates;
        obj.listeUtilisateur.splice(obj.listeUtilisateur.indexOf(this.utilisateurService.utilisateurConnecte), 1);
        this.setLocalStorageDoodleMe(doodleMe);
      }
    }
  }

  public getDoodleMe(): Doodle[] {
    let localStorageItem = JSON.parse(localStorage.getItem('doodleMe'));
    return localStorageItem == null ? [] : localStorageItem.doodleMe;
  }

  private setLocalStorageDoodleMe(doodleMe: Doodle[]): void{
    localStorage.setItem('doodleMe', JSON.stringify({doodleMe}));
  }

  public supprimerParticipant(doodle: Doodle) {
      let doodleMe = this.getDoodleMe();
      for (let obj of doodleMe) {
        if (obj.id == doodle.id){
          if (this.utilisateurService.utilisateurConnecte != obj.utilisateurEmetteur) {
            if (obj.datesAccepte != undefined) {
              //si utilisateur à accepter
              for (let accepted of obj.datesAccepte) {
                if (accepted.utilisateur == this.utilisateurService.utilisateurConnecte) {
                  obj.datesAccepte.splice(obj.datesAccepte.indexOf(accepted), 1);
                  this.setLocalStorageDoodleMe(doodleMe);
                  return;
                }
              }
            }
            //sinon on supp le participant
            obj.listeUtilisateur.splice(obj.listeUtilisateur.indexOf(this.utilisateurService.utilisateurConnecte), 1);
            this.setLocalStorageDoodleMe(doodleMe);
            return;
          }
          else {
            doodleMe = doodleMe.filter((doodle) => doodle.id != obj.id);
            this.setLocalStorageDoodleMe(doodleMe);
          }
        }
      }
  }

}
