import { Component } from '@angular/core';
import { SecondaryButtom } from "../../_components/secondary-buttom/secondary-buttom";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButtom, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class Certificado {
}
