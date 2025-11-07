import { Component, Input } from '@angular/core';
import { SecondaryButtom } from "../secondary-buttom/secondary-buttom";
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButtom],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css'
})
export class ItemCertificado {
  @Input() nomeAluno: string = '';
  @Input() dataEmissao: string = '';
  @Input() id: string = '';
  constructor(private router: Router){}

  redirecionaCertificado(){
    this.router.navigate(['/certificados/', this.id]);
  }
}
