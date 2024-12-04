import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  usuarios: Usuario[] = [];
  constructor(private readonly service: ApiService) {}

  ngOnInit(): void {
    
    this.service.obtenerUsuarios().subscribe((data: Usuario[]) => {
      this.usuarios = data;
    });
    
  }

  sumar(num1: number, num2: number): number {
    return num1 + num2;
  }
}
