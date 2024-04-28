/* EL PROPIO LENTOOOOO 👿 */



/* POO */

/* la abstracción de forma subjetiva de un problema con el fin de fragmentarlo en pequeñas soluciones... */


/* 
    *CARRO  //definicion de un carro    
        - LLANTAS
          + RIN
          + GOMA
          + TUERCAS
          + DISCOS

        - MOTOR
            +
            +
            +
        - CHASIS
            +
            .
            .
            .
            + (n)
    


*/



/* 

*/

/* export class Llantas {
    RIN = "";
    GOMA = "";
    TUERCAS = "";
} */


/* 
    clases
    constructores
    abstracciones
    atributos

    
    interfaces
    herencia   
*/


/* 

    clase: La definición de una caractestica del objeto

    constructor: declaracion de una clase ( referencia de memoria )


    statico: NO SE PUEDE USAR CON CONSTRUCTORES...


    metodos estaticos (PARA JAVASCRIPT)
        -   Se deben usar para solo lectura
        -   No se pueden usar con metedos constructores (referencias de memoria)
        
    DEFINICION GENERAL (NO JAVASCRIPT)
        - si cambias un valor de un metodo o variable estatica se cambia en todos los lugares de la aplicación
*/

/* 


*/

/* abstract class CRUD {
    abstract create(): Promise<number>
    abstract getAll(): Promise<any[]>
    abstract delete(): Promise<number>;
    abstract update(): Promise<any>;
    abstract getById(): Promise<any>;
} */



/* class Category implements CRUD{

    delete(): Promise<number> {
        try {            
            return '12' as any
        } catch (error) {
            throw new Error("El parametro de retorno es incorrecto.");                                
        }
    }

    update(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    getById(): Promise<number> {
        throw new Error("Method not implemented.");
    }

    create(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    getAll(): Promise<any[]> {
        throw new Error("Method not implemented.");
    }


} */




/* 
    REGLAS - CLASES ABSTRACTAS

    retrun '12' as any

*/


/* 
    HERENCIA

    la extensión de una lógica escrita en una clase general para usarla en clases especificas

    para Jascript: El resultado de una herencia es una clase con atributos y metodos implicitos

    patron adapter
*/


/* setter y getter */


class Persona{

     name
     lastName
     documentNumber
     documentType
     secondName
     secondLastName

    constructor(){

    }

    getName(){
        return this.name;
    }

    getDocumentNumber()/* :string */{
        return this.documentNumber
    }

    formObject(object){
        this.name = object.name
        this.lastName = object.lastName
        this.documentNumber = object.documentNumber
        this.documentType = object.documentType
        this.secondName = object.secondName
        this.secondLastName = object.secondLastName
    }


}


class Profesor extends Persona{
    
    asignatura 
    horasLaborales
    curso

    constructor(){
        super();
    }

    formObjectProfesor(object){ 
        this.asignatura = object.asignatura
    }
}


class Alumno{

}

class Rector{

}



const profesor = new Profesor();

profesor.formObject({
    name: "Danny",
    lastName: "Opsino",
    documentNumber: "123123",
    documentType: "cedula",
    secondName: "",
    secondLastName: "",
})

profesor.formObjectProfesor({asignatura: 'leo'})

console.log(profesor);
