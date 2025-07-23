import { Component } from '@angular/core';

import { ItemCertificado } from "../../_components/item-certificado/item-certificado";
import { SecondaryButtom } from "../../_components/secondary-buttom/secondary-buttom";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificado, SecondaryButtom, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados {

}
