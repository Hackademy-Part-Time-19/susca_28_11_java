let persona = {
nome: "Antonio" ,
cognome: "Susca" ,
età: "32" ,
Salutare: function ( ) {
    return this.nome
    }
} 
let nome = persona.Salutare ( )

console.log ( "Ciao " + nome)  