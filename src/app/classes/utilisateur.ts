export class Utilisateur {
  pseudo: string;
  nom: string;
  prenom: string;

  constructor(pseudo: string, nom: string, prenom: string) {
    this.pseudo = pseudo;
    this.nom = nom;
    this.prenom = pseudo;
  }
}
