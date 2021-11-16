import { Component, OnInit } from '@angular/core';
import {DoodleService} from '../service/doodle.service';
import {Doodle} from '../classes/doodle';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recapitlatif',
  templateUrl: './recapitlatif.component.html',
  styleUrls: ['./recapitlatif.component.css']
})


export class RecapitlatifComponent implements OnInit {
  doodle = new Doodle();

  constructor(private doodleService: DoodleService, private router: Router) {

  }

  public validerDoodle(){
   this.doodleService.ajouterDoodleMe();
   this.router.navigate(['/bienvenue']);
  }

  ngOnInit(): void {
    this.doodle = this.doodleService.doodle;
  }

}



