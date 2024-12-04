import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly url: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private readonly http: HttpClient) {}

  obtenerUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url);
  }
}
