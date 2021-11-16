import { Component, OnInit } from '@angular/core';
import {Doodle} from '../classes/doodle';
import {DoodleService} from '../service/doodle.service';
import {UtilisateurService} from '../service/utilisateur.service';

@Component({
  selector: 'app-date-participants',
  templateUrl: './date-participants.component.html',
  styleUrls: ['./date-participants.component.css']
})
export class DateParticipantsComponent implements OnInit {

  doodleChoisi;

  constructor(private doodleService: DoodleService, private utilisateurService: UtilisateurService) {
    this.doodleChoisi = this.doodleService.doodleSelected;
  }

  ngOnInit(): void {
  }

  public getDoodleMe(): Doodle[]{
    return this.doodleService.getDoodleMe();
  }

  utilisateurEnCours(utilisateur: string): boolean{
    if (this.utilisateurService.utilisateurConnecte ==  utilisateur) {
      return true;
    }
    else {
      return false;
    }
  }

}
