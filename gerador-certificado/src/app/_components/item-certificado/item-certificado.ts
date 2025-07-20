import { Component } from '@angular/core';
import { SecondaryButtom } from "../secondary-buttom/secondary-buttom";
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButtom],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css'
})
export class ItemCertificado {
  constructor(private router: Router){}

  redirecionaCertificado(){
    this.router.navigate(['/certificados', 2]);
  }
}
