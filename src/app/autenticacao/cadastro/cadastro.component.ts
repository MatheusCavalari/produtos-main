import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormValidations } from 'src/app/shared/form-validation';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  cadastroForm!: FormGroup;

  @Input() perfilComponent!: boolean;
  @Output() acaoClique: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, Validators.required],
      comunidade: [null, [Validators.required]],
      matricula: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      confirmarEmail: [null, [Validators.required, Validators.email, FormValidations.equalTo('email')]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(3), FormValidations.equalTo('senha')]]
    });

  }

}
