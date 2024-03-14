import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'olmedo_rodriguez_hector_DWEC05';

  numero: number=-1;
  aleatorio: number=-1;
  intentos: number=-1;
  formData:any ={};
  submitted: boolean=false;
  introducidos: number[] = [];
  adivinado!: string;
  mensaje!: string;
//  tiradas!: string;
  tiradas: number[] = [];

  onSubmit(){
    this.submitted=true;
    this.aleatorio=Math.floor(Math.random() * this.formData.rango)
    console.log("Numero aleatorio generado: ",this.aleatorio)
    this.intentos=this.formData.intentos;
    this.introducidos=[];
  }

  enviar(){
    if(this.numero==this.aleatorio){
      this.adivinado="¿Has adivinado?: SI";
      this.tiradas=this.introducidos;
    } else{
        this.intentos=this.intentos-1;
        this.introducidos.push(this.numero);
        if (this.intentos!=0){
        if(this.numero>this.formData.rango){
          alert("El número introducido no está en el rango de números generados");
        } else{
          this.adivinado="¿Has adivinado?: NO";
        }
      } else {
        this.mensaje="Se han acabado los intentos";
        this.tiradas=this.introducidos;
      }
    }
    console.log("introducidos: ",this.introducidos);
  }
  ngOnInit(): void {
    console.log("JUEGO!!!");
  }

}
