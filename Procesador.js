class Proceso{
    constructor(){
        this.vida = Math.floor((Math.random()*11+4));
        this.siguiente = {};
    }
} 
class Procesador{

    constructor(){
        this.items = {};
        this.front = 0;
        this.end = 0;
        
    }

    procesoCompleto(){
        let procesoTerminado = 0;
        let procesoFuera = 0;
        let procesoTotal = 0;
        let ciclo = 0;

        for(let i = 0; i <= 300; i++){
            let procesos = this._procesoPreHecho();

            if(procesos != null){
                this._enqueve(procesos);
                procesoTotal ++;
                console.log(procesos);
            } 
            if(this.vacia() === true){
                this.items.vida = procesoFuera;
                procesoFuera++;
                
            } 
            if (this.items != null){
                this.items.vida--;
            }
            if(this.items != null && this.items.vida === 0){
                procesoTerminado++;
            }
            
            if(this.items != null){
                this.items.vida = ciclo;
                ciclo++;
            }
            
            
        }
        console.log("Total de procesos creados: " + procesoTotal);
        console.log("Procesos que fueron completados: "+ procesoTerminado);
        console.log("Numero de procesos en fila: " + this.tamaño());
        console.log("Total de ciclos que faltan para terminar la fila: " + ciclo);    
        console.log("Ciclos en que la fila estuvo vacia: " + procesoFuera); 

      
    }

    _procesoPreHecho(){
        let preHecho = this._probabilidad();
        if(preHecho <= 39){
            let process = new Proceso();
            this._procesoTotal++;
            return process;
        }
    }

    _probabilidad(){
        let probabilidad = Math.floor(Math.random()*100+1);
        return probabilidad;
    }

    _enqueve(data) {
      this.items[this.end] = data;
      this.end++;  
      this.items.siguiente = data;
    }

    salir(){
        if(this.front === this.end){
            return null;
        }
        const data = this.items[this.front];
        this.front++;
        return data;
    }

    tamaño(){
        return this.end - this.front;
    }

    vacia(){
        if(this.tamaño() === 0){
            return true;
        } else {
            return false;
        }
    }

    imprimir(){
        if(this.tamaño() === 0){
            return null;
        }
        let result = "";
        for(let i = this.front; i < this.end; i++){
            result += this.items[i] + " ";
        }
        return result;
    }

}
const procesador = new Procesador();

console.log(procesador.procesoCompleto());