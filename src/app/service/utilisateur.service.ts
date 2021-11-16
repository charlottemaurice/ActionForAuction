import {Component, Injectable, OnInit} from '@angular/core';
import {Utilisateur} from '../classes/utilisateur';

@Injectable()

export class UtilisateurService {

  utilisateurConnecte: string;

  constructor() {
    let utilisateurs = this.getUtilisateurs();
  }

  public ajouterUtilisateur(pseudo: string, nom: string, prenom: string){
    let utilisateur = new Utilisateur(pseudo, nom, prenom);
    let utilisateurs = this.getUtilisateurs();

    utilisateurs.push(utilisateur);
    this.setLocalStorageUtilisateurs(utilisateurs);
  }

  public getUtilisateurs(): Utilisateur[] {
    let localStorageItem = JSON.parse(localStorage.getItem('utilisateurs'));
    return localStorageItem == null ? [] : localStorageItem.utilisateurs;
  }

  private setLocalStorageUtilisateurs(utilisateurs: Utilisateur[]): void{
    localStorage.setItem('utilisateurs', JSON.stringify({utilisateurs}));
  }

  /*public clearUser(){
    localStorage.clear();
  };*/

  public setUtilisateurConnecte(pseudo: string){
    this.utilisateurConnecte = pseudo;
  }

  public verifierUtilisateur(pseudo: string): boolean{
    let utilisateurs = this.getUtilisateurs();
    for (let utilisateur of utilisateurs){
      if (pseudo == utilisateur.pseudo){
        return true;
      }
    }
    return false;
  }

}
