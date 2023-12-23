import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComentariosService {
  private apiUrl = 'http://localhost:3000'; // Cambia esta URL por la URL de tu API

  constructor(private http: HttpClient) {}

  enviarComentario(arbolId: number, comentarioData: any): Observable<any> {
    const url = `${this.apiUrl}/arboles/${arbolId}/comentarios`;
    return this.http.post<any>(url, comentarioData);
  }
}
