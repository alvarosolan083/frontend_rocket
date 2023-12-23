import { Component } from '@angular/core';
import Swal from 'sweetalert2'; 
import { ComentariosService } from '../comentarios.service'; 
@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent {
  comentarioData = {
    comentario: '',
    linkedin: '',
    github: '',
    telefono: ''
   
  };

  constructor(private comentariosService: ComentariosService) {}

  async enviarComentario() {
    const arbolId = 1; 
    try {
      const response = await this.comentariosService.enviarComentario(arbolId, this.comentarioData).toPromise();
      console.log('Comentario enviado con éxito:', response);

      // Muestra SweetAlert en caso de éxito
      await Swal.fire({
        icon: 'success',
        title: '¡Comentario enviado!',
        text: 'Comentario enviado correctamente',
      });

      // Limpiar el formulario o realizar acciones adicionales si es necesario
    } catch (error) {
      console.error('Error al enviar el comentario:', error);

      // Muestra SweetAlert en caso de error
      await Swal.fire({
        icon: 'error',
        title: '¡Hubo un problema!',
        text: 'No se pudo enviar el comentario',
      });
      
    }
  }
}
