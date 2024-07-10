export interface BewertungsKriterium {
    name: string;
    punkte: number;
    notiz: string;
}

export interface Abschnitt {
    nummer: number;
    name: string;
    faktor: number;
    bewertungsKriterium: BewertungsKriterium[];
    notiz: string;
}