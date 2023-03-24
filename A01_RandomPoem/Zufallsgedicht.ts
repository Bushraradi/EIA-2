namespace E01 {

let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];

let predicates: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];

let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

for (let index: number = subjects.length; index > 0; index--) {  
    let results: string = getVers(subjects, predicates, objects);
    console.log(results);
}

function getVers (_subjects: string[], _predicates: string[], _objects: string[]): string {

    let randomnr1: number = Math.floor(Math.random() * _subjects.length);
    let randomnr2: number = Math.floor(Math.random() * _predicates.length);
    let randomnr3: number = Math.floor(Math.random() * _objects.length);
    let vers: string = " ";
    vers = vers + _subjects.splice(randomnr1, 1)[0] + " ";
    vers = vers + _predicates.splice(randomnr2, 1)[0] + " ";
    vers = vers + _objects.splice(randomnr3, 1)[0] + " ";
   
    return vers;
}

}
