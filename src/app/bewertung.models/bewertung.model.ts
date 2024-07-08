export interface bewertungsKriterium {
    name: string;
    punkte: number;
    notiz: string;
}

export interface Abschnitt {
    nummer: number;
    name: string;
    faktor: number;
    bewertungsKriterien: bewertungsKriterium[];
    notiz: string;
}