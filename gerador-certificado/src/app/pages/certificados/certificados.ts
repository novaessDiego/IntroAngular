import { Component, OnInit } from '@angular/core';

import { ItemCertificado } from "../../_components/item-certificado/item-certificado";
import { CertificadoService } from '../../_services/certificado';
import { Certificado } from '../../interface/certificado';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificado],
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
