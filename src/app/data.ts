import { Carte, Classe, Departement, Etudiant } from "./ipslModele";

export var depGIT: Departement={
    code:"GIT",
    nom: "Genie Informatique et telecommunication"
};

export var deptGec: Departement={
    code:"GeC",
    nom: "Genie civil"
}
export var deptGeM: Departement={
    code:"GeM",
    nom: "Genie electromecanique"
}

export var listeDep:Departement[] =[depGIT,deptGec,deptGeM];

export var ing3Info: Classe={
    code: "ING3",
    nom: "Ing 3 informatique",
    filiere: {code:"INF",nom:"Informatique",depart:depGIT}
}
export var ing3Gec: Classe={
    code: "ING3",
    nom: "Ing 3 Genie civil",
    filiere: {code:"Gec",nom:"genie civil",depart:deptGec}
}
export var ing3GeM: Classe={
    code: "ING3",
    nom: "Ing 3 Genie electromecanique",
    filiere: {code:"GeM",nom:"genie electromecanique ",depart:deptGeM}
}

export var etudiant1: Etudiant={
    code:"P3123",
    nom:"mama",
    prenom:"wesh",
    adresse:"dv",
    email:"sylla@gmail.com",
    telephone:"77679903",
    classe: ing3Info
}
export var etudiant2: Etudiant={
    code:"P3122",
    nom:"sow",
    prenom:"sks",
    adresse:"thies",
    email:"sks@gmail.com",
    telephone:"77899903",
    classe: ing3Info
}
export var etudiant3: Etudiant={
    code:"P3125",
    nom:"camara",
    prenom:"rama",
    adresse:"mbour",
    email:"rahma@gmail.com",
    telephone:"774108903",
    classe: ing3Info
}
export var etudiant4: Etudiant={
    code:"P3132",
    nom:"Diop",
    prenom:"mansour",
    adresse:"Dakar",
    email:"mansour@gmail.com",
    telephone:"77567667",
    classe: ing3Gec
}
export var etudiant5: Etudiant={
    code:"P3156",
    nom:"Leye",
    prenom:"Sofia",
    adresse:"Bambey",
    email:"sofia@gmail.com",
    telephone:"pas de telephone",
    classe: ing3GeM
}

export var Listetudiants: Etudiant[]=[
    etudiant1,
    etudiant2,
    etudiant5,
    etudiant3,etudiant4
]

export var carte: Carte={
    id: 23,
    anneeDebut:2024,
    dateDel: new Date(Date.parse("2024-01-01")),


}

