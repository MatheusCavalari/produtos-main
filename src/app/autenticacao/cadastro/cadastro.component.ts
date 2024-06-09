import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormValidations } from 'src/app/shared/form-validation';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  cadastroForm!: FormGroup;

  @Input() perfilComponent!: boolean;
  @Output() acaoClique: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router
  ) {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      comunidade: ['', [Validators.required]],
      matricula: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(3)]],
      confirmarEmail: ['', [Validators.required, Validators.email, FormValidations.equalTo('email')]],
      confirmarSenha: ['', [Validators.required, Validators.minLength(3), FormValidations.equalTo('senha')]]
    });
  }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log('asad')

    if (this.cadastroForm.valid) {
      this.clienteService.cadastrarUsuario(this.cadastroForm.value).subscribe(
        response => {
          console.log('Usuário cadastrado com sucesso', response);
          this.router.navigate(['/login']); // Redireciona para a tela de login
        },
        error => {
          console.error('Erro ao cadastrar usuário', error);
          alert('Erro ao cadastrar usuário. Por favor, tente novamente.');
        }
      );
    }
  }

}
