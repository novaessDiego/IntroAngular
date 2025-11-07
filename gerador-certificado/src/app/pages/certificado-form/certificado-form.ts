import { Component, ViewChild } from '@angular/core';
import { SecondaryButtom } from "../../_components/secondary-buttom/secondary-buttom";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interface/certificado';
import { CertificadoService } from '../../_services/certificado';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButtom, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {

    constructor(private certificadoService: CertificadoService, private route: Router) {}

    @ViewChild('form') form!: NgForm;

    certificado: Certificado = {
    id: '',
    atividades: [],
    nome: '',
    dataEmissao: '',
  };

  atividade: string = ''

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched
  }

  formValido() {
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0
  }

  adicionarAtividade() {
    if (this.atividade.length == 0) {
      return;
    }

    this.certificado.atividades.push(this.atividade);
    this.atividade = '';
  }

  deleteAtt(index: number) {
    this.certificado.atividades.splice(index);
  }

  submit() {
    if(!this.formValido()) {
      return;
    }
    this.certificado.dataEmissao = this.dataAtual();
    this.certificado.id = uuidv4();
    this.certificadoService.adicionarCertificado(this.certificado);

    this.route.navigate(['certificados', this.certificado.id]);

    // this.certificado = this.inicialStateCertificado();
    // this.form.resetForm();
  }

  dataAtual() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    const dataFormat = `${dia}/${mes}/${ano}`;

    return dataFormat;
  }

  inicialStateCertificado(): Certificado {
    return {
      id: '',
      atividades: [],
      nome: '',
      dataEmissao: '',
    }
  }
}
