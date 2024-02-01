let elenco = [
    {
        "regione": "Emilia-Romagna",
        "province": [
            {
                "nome": "Parma",
                "comuni": [
                    "Collecchio",
                    "Colorno",
                    "Fontanellato",
                    "Parma",
                    "Sala Baganza",
                    "San Secondo Parmense",
                    "Sorbolo Mezzani",
                    "Torrile"
                ]
            },
            {
                "nome": "Reggio Emilia",
                "comuni": [
                    "Boretto",
                    "Brescello",
                    "Gattatico",
                    "Novellara",
                    "Poviglio",
                    "San Polo d'Enza",
                    "Sant'Ilario d'Enza"
                ]
            }
        ]
    },
    {
        "regione": "Lombardia",
        "province": [
            {
                "nome": "Cremona",
                "comuni": [
                    "Crema",
                    "Cremona",
                    "Formigara",
                    "San Daniele Po",
                    "Soresina",
                    "Sospiro"
                ]
            },
            {
                "nome": "Milano",
                "comuni": [
                    "Arese",
                    "Cinisello Balsamo",
                    "Cologno Monzese",
                    "Corsico",
                    "Gorgonzola",
                    "Legnano",
                    "Milano",
                    "Sesto San Giovanni",
                    "Settimo Milanese"
                ]
            }
        ]
    }
];

function reset(){
    let selectRegioni = document.getElementById("regione");

    let elencoRegioni = selectRegioni.getElementsByTagName("option");
    while (elencoRegioni.length > 0){
        selectRegioni.removeChild(elencoRegioni[0]);
    }
    selectRegioni.appendChild(new Option("--- Scegli una regione ---", "none"));

    loadRegioni();
    resetComuniProvince();

    document.getElementById("log").innerHTML = "";
}

function resetComuniProvince(){
    let selectProvince = document.getElementById("provincia");
    let selectComuni = document.getElementById("comune");

    let elencoProvince = selectProvince.getElementsByTagName("option");
    while (elencoProvince.length > 0){
        selectProvince.removeChild(elencoProvince[0]);
    }

    let elencoComuni = selectComuni.getElementsByTagName("option");
    while (elencoComuni.length > 0){
        selectComuni.removeChild(elencoComuni[0]);
    }
}

function resetComuni(){
    let selectComuni = document.getElementById("comune");

    let elencoComuni = selectComuni.getElementsByTagName("option");
    while (elencoComuni.length > 0){
        selectComuni.removeChild(elencoComuni[0]);
    }
}

function loadRegioni(){
    let selectRegioni = document.getElementById("regione");
    for (let i = 0; i < elenco.length; i++){
        let regione = elenco[i].regione;
        selectRegioni.appendChild(new Option(regione, regione));
    }
}

function loadProvince(){
    resetComuniProvince();
    let selectProvince = document.getElementById("provincia");
    let regioneScelta = document.getElementById("regione").value;
    selectProvince.appendChild(new Option("--- Scegli una provincia ---", "none"));
    for (let i = 0; i < elenco.length; i++){
        if (elenco[i].regione == regioneScelta){
            for (let j = 0; j < elenco[i].province.length; j++){
                let provincia = elenco[i].province[j].nome;
                selectProvince.appendChild(new Option(provincia, provincia));
            }
        }
    }
}

function loadComuni(){
    resetComuni();
    let selectComuni = document.getElementById("comune");
    let regioneScelta = document.getElementById("regione").value;
    let provinciaScelta = document.getElementById("provincia").value;
    selectComuni.appendChild(new Option("--- Scegli un comune ---"));
    for (let i = 0; i < elenco.length; i++){
        if (elenco[i].regione == regioneScelta){
            for (let j = 0; j < elenco[i].province.length; j++){
                if (elenco[i].province[j].nome == provinciaScelta){
                    for (let k = 0; k < elenco[i].province[j].comuni.length; k++){
                        let comune = elenco[i].province[j].comuni[k];
                        selectComuni.appendChild(new Option(comune, comune));
                    }
                }
            }
        }
    }
}

function submit(){
    let pLog = document.getElementById("log");

    pLog.innerHTML = "<i>Scelta effettuata: regione " +
        document.getElementById("regione").value + ", provincia "
        + "di " + document.getElementById("provincia").value + ", comune "
        + " di " + document.getElementById("comune").value + ".</i>";
}

loadRegioni();