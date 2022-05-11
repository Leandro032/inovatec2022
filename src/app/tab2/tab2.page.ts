import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}

  doarAlimentos() {
    this.abrirUrl(
      'https://www.google.com/maps/search/?api=1&query=Fametro+Unidade I+ Unidade II'
    );
  }
  doarRoupas() {
    this.abrirUrl(
      'https://www.google.com/maps/search/?api=1&query=Fametro+Unidade I+ Unidade II'
    );
  }
  doarSangue() {
    this.abrirUrl(
      'https://www.google.com/maps/search/?api=1&query=Fametro+Unidade I+ Unidade II'
    );
  }
  abrirUrl(url: string) {
    window.open(url, '_blank').focus();
  }
}
