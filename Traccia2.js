let Agenda = {
    contatti: [{ "id":1, "nome": "Antonio", "numero": 3401717558 },
    { "id":2, "nome": "Giovanni", "numero": 36655674 },
    { "id":3, "nome": "Piero", "numero": 3401717558 }],

    stampacontatti: function () {
        for (let index = 0; index < this.contatti.length; index++)
            console.log(this.contatti[index])

    },
    aggiungicontatti: function (contatto) {
        this.contatti.push(contatto)
        console.log(this.contatti)
    },
    
    eliminaContatto: function (eliminaindice) {
        let = listaFiltrata = this.contatti.filter (function (contatti) { return contatti.id != eliminaindice })
        this.contatti = listaFiltrata
    },


}


Agenda.stampacontatti()
Agenda.aggiungicontatti({ "id":4, "nome": "goffredo", "numero": 34045708374 })
Agenda.stampacontatti()
Agenda.eliminaContatto(3)
Agenda.stampacontatti()


