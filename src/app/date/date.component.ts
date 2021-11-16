import { Component, OnInit } from '@angular/core';
import { Creneau } from '../classes/creneau';
import {DoodleService} from '../service/doodle.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  creneau = new Creneau();
  horaires = [];


  constructor(private doodleService: DoodleService, private router: Router) {

  }

  public ajouterDoodleMeHoraire(): void  {
    for (let creneauTest of this.horaires) {
      if (creneauTest.dateDebut == undefined ||
        creneauTest.dateDebut == false ||
        creneauTest.dateFin == undefined ||
        creneauTest.dateFin == false) {
        alert('Au moins une date n\'est pas valide');
        return;
      }
    }
    this.doodleService.ajouterDoodleMeHoraire(this.horaires);
    this.router.navigate(['/sondage']);
  }

  ngOnInit(): void {
    this.creneau = new Creneau();
    this.horaires.push(this.creneau);
  }

  public ajouterCreneau(): void {
    for (let creneauTest of this.horaires) {
      if (creneauTest.dateDebut == undefined ||
        creneauTest.dateDebut == false ||
        creneauTest.dateFin == undefined ||
        creneauTest.dateFin == false  ) {
        alert('Saisissez une date');
        return;
      }
    }
    this.creneau = new Creneau();
    this.horaires.push(this.creneau);
  }

  supprimerCrenau(index) {
    this.horaires.splice(index, 1);
  }

}
