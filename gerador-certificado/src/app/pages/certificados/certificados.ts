import { Component, OnInit } from '@angular/core';

import { ItemCertificado } from "../../_components/item-certificado/item-certificado";
import { SecondaryButtom } from "../../_components/secondary-buttom/secondary-buttom";
import { RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado';
import { Certificado } from '../../interface/certificado';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificado, SecondaryButtom, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados implements OnInit {

  certificados: Certificado[] = [];

  constructor(private certificadosService: CertificadoService) {}

  ngOnInit(): void {
      this.certificados = this.certificadosService.certificados;
      console.log(this.certificados);
  }
}
