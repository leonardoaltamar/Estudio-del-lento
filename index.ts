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

abstract class CRUD {
    abstract create(): Promise<number>
    abstract getAll(): Promise<any[]>
    abstract delete(): Promise<number>;
    abstract update(): Promise<any>;
    abstract getById(): Promise<any>;
}



class Category implements CRUD{

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


}




/* 
    REGLAS - CLASES ABSTRACTAS

    retrun '12' as any

*/