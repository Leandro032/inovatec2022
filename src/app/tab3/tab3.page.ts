import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      doacao: ['', [Validators.required]],
    });
  }

  whats() {}

  abrirUrl(url: string) {
    window.open(url, '_blank').focus();
  }

  enviar() {
    let nome = this.form.get('nome').value;
    let endereco = this.form.get('endereco').value;
    let doacao = this.form.get('doacao').value;
    console.log('nome');
    console.log('endereco');
    console.log('doacao');

    this.abrirUrl(
      `https://api.whatsapp.com/send?phone=5592992265240&text=Olá%20me%20chamo%20${nome}%20moro%20${endereco}%20preciso%20de%20${doacao}%20vim%20atraves%20do%20seu%20App%20para%20receber%20doações%20,%20fico%20no%20aguardo%20para%20mais%20informações!`
    );
  }
}

function https(https: any) {
  throw new Error('Function not implemented.');
}
