import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {SinscrireComponent} from './sinscrire/sinscrire.component';
import {BienvenueComponent} from './bienvenue/bienvenue.component';
import {MoncompteComponent} from './moncompte/moncompte.component';
import {SeconnecterComponent} from './seconnecter/seconnecter.component';
import {CreerdoodlemeComponent} from './creerdoodleme/creerdoodleme.component';
import {DateComponent} from './date/date.component';
import {SondageComponent} from './sondage/sondage.component';
import {ListeinvitationsComponent} from './listeinvitations/listeinvitations.component';
import {ListecreationsComponent} from './listecreations/listecreations.component';
import {TarifsComponent} from './tarifs/tarifs.component';
import {RecapitlatifComponent} from './recapitulatif/recapitlatif.component';
import {DateParticipantsComponent} from './date-participants/date-participants.component';


const routes: Routes = [{path: '', redirectTo: '/accueil', pathMatch: 'full'},
                        { path: 'accueil', component: AccueilComponent},
                        {path: 'sinscrire', component: SinscrireComponent},
                        {path: 'bienvenue', component: BienvenueComponent},
                        {path: 'moncompte', component: MoncompteComponent},
                        {path: 'seconnecter', component: SeconnecterComponent},
                        {path: 'date', component: DateComponent},
                        {path: 'creerdoodleme', component: CreerdoodlemeComponent},
                        {path: 'sondage', component: SondageComponent},
                        {path: 'listecreations', component: ListecreationsComponent},
                        {path: 'listeinvitations', component: ListeinvitationsComponent},
                        {path: 'tarifs', component: TarifsComponent},
                        {path: 'dateparticipants', component: DateParticipantsComponent},
                        {path: 'recapitulatif', component: RecapitlatifComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
