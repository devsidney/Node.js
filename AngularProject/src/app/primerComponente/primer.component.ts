import {Component } from '@angular/core' // Importamos la funcionalidad de crear un componente.

// Convertimos la clase de abajo en
// un componente. 

@Component({
    selector: 'hola-mundo', // Creamos una etiqueta. Para ponerla en el archivo HMTL.
    templateUrl: 'primer.component.html', // Importamos el HTML del archivo primer.component.html
    styleUrls: ['./primer.component.css'] // Importamos el css del archvo primer.component.css
}) 
export class HelloWorld {
    title = 'Hola Mundo.' // Creamos una clase global para usarla en nuestro HTML.
}