import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'; 

@Component({
  selector: 'app-arboles',
  templateUrl: './arboles.component.html',
  styleUrls: ['./arboles.component.css']
})
export class ArbolesComponent implements OnInit {
  arboles: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getArboles().subscribe(
      (data: any[]) => {
        this.arboles = data;
      },
      (error) => {
        console.error(error);
        // Manejar el error apropiadamente
      }
    );
  }
}
