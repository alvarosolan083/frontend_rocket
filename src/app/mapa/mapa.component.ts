import { Component } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';

interface Ubicacion {
  ubicacion_id: number;
  latitud: string;
  longitud: string;
}

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {
  map: any;
  nombreABuscar: string = '';
  ubicacionArbol: Ubicacion | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap(): void {
    this.map = L.map('mapid').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  async buscarUbicacion(): Promise<void> {
    if (this.nombreABuscar.trim() !== '') {
      try {
        const url = `http://localhost:3000/arboles/${this.nombreABuscar}/ubicacion`;
        const response = await this.http.get<Ubicacion[]>(url).toPromise();
        if (response && response.length > 0) {
          this.ubicacionArbol = response[0];
          this.mostrarUbicacionEnMapa();
        } else {
          console.log('No se encontró la ubicación del árbol.');
        }
      } catch (error) {
        console.error('Error al buscar la ubicación:', error);
      }
    }
  }

  mostrarUbicacionEnMapa(): void {
    if (this.ubicacionArbol) {
      const { latitud, longitud } = this.ubicacionArbol;
      const lat = parseFloat(latitud);
      const lon = parseFloat(longitud);

      if (!isNaN(lat) && !isNaN(lon)) {
        if (!this.map) {
          this.map = L.map('mapid').setView([lat, lon], 13);

          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
          }).addTo(this.map);
        } else {
          this.map.setView([lat, lon], 13);
        }

        L.marker([lat, lon]).addTo(this.map)
          .bindPopup('¡Ubicación del árbol!')
          .openPopup();
      }
    }
  }
}
