import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Abschnitt, BewertungsKriterium } from "./bewertung.models/bewertung.model";


@Injectable({
    providedIn: 'root'
})
export class BewertungsService {
gesamtErgebnisSubject = new BehaviorSubject<number>(0);
gesamtErgebnis$ = this.gesamtErgebnisSubject.asObservable();

constructor() {}

getAbschnittPunkte(abschnitt: Abschnitt):number {    
  const summe = abschnitt.bewertungsKriterium.reduce((sum, kriterium) => sum + kriterium.punkte, 0);
  const durchschnitt = summe / abschnitt.bewertungsKriterium.length;
  return Math.ceil(durchschnitt);
} 
getAbschnittErgebnis(abschnitt: Abschnitt): number {
  const abschnittPunkte = this.getAbschnittPunkte(abschnitt);
  return abschnittPunkte * abschnitt.faktor;
}
updateGesamtErgebnis(abschnitte: Abschnitt[]){
  const gesamtErgebnis = abschnitte.reduce((total, abschnitt) => {
    return total + this.getAbschnittErgebnis(abschnitt);
  }, 0);
  this.gesamtErgebnisSubject.next(gesamtErgebnis);
}
updatePunkte(kriterium: BewertungsKriterium, value: string | number){
  kriterium.punkte = value === '' ? 0 : Number(value);
}
  
  /*event: any, kriterium: BewertungsKriterium){
  const value = event === '' ? 0 : Number(event);
  kriterium.punkte = value;
  this.updateGesamtErgebnis();
}*/
}
