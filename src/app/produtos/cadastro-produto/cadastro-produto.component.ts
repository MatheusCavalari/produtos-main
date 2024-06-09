import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss']
})
export class CadastroProdutoComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  produtoForm: FormGroup;
  maturidadeOpcoes: string[] = ['APOSENTADO', 'EM_UTILIZACAO', 'EVOLUINDO', 'ESTAVEL'];

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private router: Router
  ) {
    this.produtoForm = this.fb.group({
      nome: ['', Validators.required],
      descricaoBreve: ['', Validators.required],
      descricaoCompleta: ['', Validators.required],
      publicoAlvo: ['', Validators.required],
      maturidade: ['', Validators.required],
      quantidadeUsuariosAtivos: [0, [Validators.required, Validators.min(0)]],
      documetacaoConsumo: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.produtoForm.valid) {
      this.produtoService.cadastrarProduto(this.produtoForm.value).subscribe(
        response => {
          console.log('Produto cadastrado com sucesso', response);
          this.router.navigate(['/produtos']); // Redireciona para a lista de produtos
        },
        error => {
          console.error('Erro ao cadastrar produto', error);
          alert('Erro ao cadastrar produto. Por favor, tente novamente.');
        }
      );
    }
  }
}
