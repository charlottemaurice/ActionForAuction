import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SinscrireComponent } from './sinscrire/sinscrire.component';
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { MoncompteComponent } from './moncompte/moncompte.component';
import { SeconnecterComponent } from './seconnecter/seconnecter.component';
import { CreerdoodlemeComponent } from './creerdoodleme/creerdoodleme.component';
import { DateComponent } from './date/date.component';
import { SondageComponent } from './sondage/sondage.component';
import { ListeinvitationsComponent } from './listeinvitations/listeinvitations.component';
import { ListecreationsComponent } from './listecreations/listecreations.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { UtilisateurService } from './service/utilisateur.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RecapitlatifComponent } from './recapitulatif/recapitlatif.component';
import { DoodleService } from './service/doodle.service';
import { DateParticipantsComponent } from './date-participants/date-participants.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    SinscrireComponent,
    BienvenueComponent,
    MoncompteComponent,
    SeconnecterComponent,
    CreerdoodlemeComponent,
    DateComponent,
    SondageComponent,
    ListeinvitationsComponent,
    ListecreationsComponent,
    TarifsComponent,
    RecapitlatifComponent,
    DateParticipantsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [UtilisateurService, DoodleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
