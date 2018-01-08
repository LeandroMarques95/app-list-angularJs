angular.module("monModule")
.controller("indexController", function ($scope) {
    $scope.titre = "Systeme avec AngularJS";
    $scope.eleves = [
        { nom: 'Paul', email: 'paul@hotmail.com', note1: 17, note2: 13, note3: 09 },
        { nom: 'Leo', email: 'leo@hotmail.com', note1: 13, note2: 14, note3: 18 },
        { nom: 'Jean', email: 'jean@hotmail.com', note1: 14, note2: 11, note3: 16 },
        { nom: 'Sophie', email: 'sophie@hotmail.com', note1: 20, note2: 19, note3: 12 },
        { nom: 'Julia', email: 'julia@hotmail.com', note1: 19, note2: 15, note3: 10 }
    ];
    var moyen = function (Eleve) {
        var moyen = (+Eleve.note1 + +Eleve.note2 + +Eleve.note3) / 3;
        return moyen.toFixed(2);
    };

    var init = function () {
        $scope.eleves.forEach((value, key) => {
            // console.log("La Moyenne : " + moyen(value));
            value.moyenne = moyen(value);
        });
        resetForm();
    };

    $scope.openAddEleve = function () {
        $scope.modifier = false;
        resetForm();
        $('#modal1').modal('open');
    }

    $scope.addEleve = function (Elev) {
        Elev.moyenne = moyen(Elev);
        $scope.eleves.push(Elev);
        $('#modal1').modal('close');
        resetForm();
    };

    $scope.modifier = false;
    var eleveEdit;

    $scope.editEleve = function (Elev) {
        $scope.modifier = true;
        angular.copy(Elev, $scope.Elev)
        $('#modal1').modal('open');
        eleveEdit = Elev;
    };

    $scope.saveElev = function (Elev) {
        eleveEdit.nom = Elev.nom;
        eleveEdit.email = Elev.email;
        eleveEdit.note1 = Elev.note1;
        eleveEdit.note2 = Elev.note2;
        eleveEdit.note3 = Elev.note3;
        eleveEdit.moyenne = moyen(Elev);
        $('#modal1').modal('close');
    };
    $scope.deleteEleve = function (Elev) {
        for(var i in $scope.eleves) {
            var aux =  $scope.eleves[i];
            if(Elev === aux) {
                $scope.eleves.splice(i, 1);
            }
        }
    }

    var resetForm = function () {
        $scope.Elev = { nom: '', email: '', note1: '', note2: '', note3: '', moyen: '' }
    }

    init();

})