/**
 * Notas de funciones (Empezando)
 * Modo de uso: Decide que funcion quieres usar y ejecuta
 * de la siguiente manera para obtener resultado 
 * helpers.compareArrayTwoDeletDuplicate([1,2,3], [2,6,9]);
 * Mas adelante podemos usar un Callback de la respuesta continuar con lo que 
 * deseamos hacer.
 */
let helpers = {
    /**
     * Conversion de GTM a epoch timestamp
     */
    convertGtmTimeStamp : (date) => {
        console.log(`Aqui sucedera una conversion ${date}`);
        return true;
    },
    extractRFCDateBirhtDay : (rfc) => {
        console.log(`Aqui se hallara la fecha de nacimiento extraido del RFC ${rfc}`);
        return true;
    },
    compareArrayTwoDeletDuplicate : (arrayOne, arrayTwo) => {
        console.log(`Comparar 2 arrar y quitar duplicados ${arrayOne}, ${arrayTwo}`);
        return true;
    },
    compareArrayTwoKeepDuplicate : (arrayOne, arrayTwo) => {
        console.log(`Comparar 2 arrar y dejar los que son duplicados ${arrayOne}, ${arrayTwo}`);
        return true;
    },
    compareObjetTwoDeletDuplicate : (objOne, objTwo) => {
        console.log(`Comparar 2 objetos y quitar duplicados ${objOne}, ${objTwo}`);
        return true;
    },
    compareObjetTwoKeepDuplicate : (objOne, objTwo) => {
        console.log(`Comparar 2 objetos y dejar los que son duplicados ${objOne}, ${objTwo}`);
        return true;
    }
}
