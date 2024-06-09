import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required]
    })
  }

  login() {
    const email = this.loginForm.value.email;
    const senha = this.loginForm.value.senha;

    console.log('Erro no login', email);
    console.log('Erro no login', senha);

    this.clienteService.login(email, senha).subscribe(
      response => {
        // Login bem-sucedido, redirecionar para a tela inicial
        this.router.navigate(['/produtos']);
      },
      (error: HttpErrorResponse) => {
        if (error.status === 404) {
          alert('Cliente não encontrado para o email e senha informados');
        } else {
          alert('Erro ao processar o login');
        }
      }
    );
}

}
