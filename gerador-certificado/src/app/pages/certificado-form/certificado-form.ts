import { Component } from '@angular/core';
import { SecondaryButtom } from "../../_components/secondary-buttom/secondary-buttom";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButtom, PrimaryButton, FormsModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {
  nome: string = '';
  atividade: string = '';
  atividades: string[] = ["1", "2"]
}
