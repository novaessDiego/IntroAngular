import { Component } from '@angular/core';
import { SecondaryButtom } from "../../_components/secondary-buttom/secondary-buttom";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interface/certificado';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButtom, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {
    certificado: Certificado = {
    atividades: [],
    nome: '',
  };

  atividade: string = ''

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched
  }

  formValido() {
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0
  }

  adicionarAtividade() {
    this.certificado.atividades.push(this.atividade);
    this.atividade = '';
  }

  deleteAtt(index: number) {
    this.certificado.atividades.splice(index);
  }

  submit() {
    if(!this.formValido()) {

    }
  }
}
