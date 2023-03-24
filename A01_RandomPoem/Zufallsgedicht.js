var E01;
(function (E01) {
    var subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    var predicates = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    var objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    for (var index = subjects.length; index > 0; index--) {
        var results = getVers(subjects, predicates, objects);
        console.log(results);
    }
    function getVers(_subjects, _predicates, _objects) {
        var randomnr1 = Math.floor(Math.random() * _subjects.length);
        var randomnr2 = Math.floor(Math.random() * _predicates.length);
        var randomnr3 = Math.floor(Math.random() * _objects.length);
        var vers = " ";
        vers = vers + _subjects.splice(randomnr1, 1)[0] + " ";
        vers = vers + _predicates.splice(randomnr2, 1)[0] + " ";
        vers = vers + _objects.splice(randomnr3, 1)[0] + " ";
        return vers;
    }
})(E01 || (E01 = {}));
//# sourceMappingURL=Zufallsgedicht.js.map