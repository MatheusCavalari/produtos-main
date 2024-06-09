import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/core/types/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl: string = environment.apiClienteUrl;

  constructor(private httpClient: HttpClient) { }

  login(email: string, senha: string): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/v1/cliente/login`, { email, senha });
  }

  cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(`${this.apiUrl}/v1/cliente`, usuario);
  }
}
