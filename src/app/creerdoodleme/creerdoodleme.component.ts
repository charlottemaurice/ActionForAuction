import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {UtilisateurService} from '../service/utilisateur.service';
import {DoodleService} from '../service/doodle.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-creerdoodleme',
  templateUrl: './creerdoodleme.component.html',
  styleUrls: ['./creerdoodleme.component.css']
})
export class CreerdoodlemeComponent implements OnInit {
  public nomEvent: string;
  public lieu: string;
  public commentaire: string;

  constructor(private doodleService: DoodleService, private router: Router) {
    this.nomEvent = '';
    this. lieu = '';
    this.commentaire = '';
  }

  ngOnInit(): void {
  }

  public ajouterDoodleMeFirst(): void {
    if (this.nomEvent == '') {
      alert("Veuillez saisir un nom d'évènement");
    } else if (this.lieu == '') {
      alert("Veuillez saisir un lieu");
    } else { // @ts-ignore
      // @ts-ignore
      if (!this.doodleService.ajouterDoodleMeFirst(this.nomEvent, this.lieu, this.commentaire)) {
        this.router.navigate(['/date']);
      } else {
        alert("Ce pseudo existe déja!");
      }
    }
  }
}
