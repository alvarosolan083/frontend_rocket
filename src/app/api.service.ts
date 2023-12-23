import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private baseUrl = 'http://localhost:3000'; // Esta sería la URL de tu backend

  constructor(private http: HttpClient) {}

  getArboles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/arboles`);
  }

  getComentarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/arboles/comentarios`);
    // Asegúrate de reemplazar "/arboles/comentarios" con la ruta correcta para obtener comentarios
  }

  getFotos(arbolId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/arboles/${arbolId}/fotos`);
    // Reemplaza "/arboles/fotos" con la ruta correcta para obtener fotos de árboles
  }

  getUbicacion(arbolId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/arboles/${arbolId}/ubicacion`);
    // Asegúrate de ajustar la ruta para obtener la ubicación de un árbol específico
  }
}

