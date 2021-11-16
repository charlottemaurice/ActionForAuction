import {Creneau} from './creneau';
import {DateAccepte} from './dateAccepte';

export class Doodle {
  id: number;
  utilisateurEmetteur: string;
  nomEvent: string;
  lieu: string;
  commentaire: string;
  horaire: Creneau[];
  listeUtilisateur: string[];
  choix: number;
  datesAccepte: DateAccepte[];
}

