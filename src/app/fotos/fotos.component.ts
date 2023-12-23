import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Si obtienes el ID del árbol de la URL
import { ApiService } from '../api.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  fotos: any[] = [];
  arbolId: number = 1; // Ejemplo de ID de árbol

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Si obtienes el ID del árbol de la URL
    // this.arbolId = +this.route.snapshot.paramMap.get('id');

    this.apiService.getFotos(this.arbolId).subscribe(
      (data: any[]) => {
        this.fotos = data;
      },
      (error) => {
        console.error(error);
        // Manejar el error apropiadamente
      }
    );
  }
}
