export interface Departement{
    code: string;
    nom: string;
    description? :string;
}

export interface Filiere {
    code:String;
    nom: String;
    description?: String;
    depart: Departement;

}

export interface Classe{
    code: String;
    nom: String;
    description?: String;
    filiere: Filiere;
}

export interface Etudiant{
    code:String;
    nom:String;
    prenom:String;
    adresse:String;
    telephone: String;
    email: String;
    classe: Classe;
}

export interface Carte{
    id: number;
    dateDel: Date;
    anneeDebut: number;
    etudiant?: Etudiant;
    filiere?: Filiere;
    payante?: boolean;
}