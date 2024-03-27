console.log("Examen")

// Teniendo una variable numérica que representa el número de lados de una
// figura geométrica, mostrar por consola su tipo. Los tipos son: "Círculo", "Triángulo", "Cuadrado", "Pentágono", "Hexágono" o "Polígono", según corresponda:
// Círculo: si el número de lados es 0.
// Triángulo: si el número de lados es 3.
// Cuadrado: si el número de lados es 4.
// Pentágono: si el número de lados es 5.
// Hexágono: si el número de lados es 6.
// Polígono: si el número de lados es mayor que 6.
// Asegúrate de incluir un mensaje de error si el número de lados es menor
// o igual a cero.

console.log("Examen")

function tipoFigura(lados){

    if(lados == 0){
        return "Círculo"
    } 
    
    if(lados == 3){
        return "Triángulo"
    } 
    
    if(lados == 4){
        return "Cuadrado"
    } 
    
    if(lados == 5){
        return "Pentágono"
    } 
    
    if(lados == 6){
        return "Hexágonos"

    } if(lados > 6){
        
        return "Polígono"
    } 
    
    if(lados == 2 || lados < 0 || lados == 1){

        return "Ingrese una cantidad de lados válida"
    }
        
}

let lados = prompt("Ingrese cantidad de lados")

console.log(tipoFigura(lados))