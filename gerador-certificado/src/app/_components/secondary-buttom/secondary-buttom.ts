import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-buttom',
  imports: [CommonModule],
  templateUrl: './secondary-buttom.html',
  styleUrl: './secondary-buttom.css'
})
export class SecondaryButtom {
@Input() titleButtom: string = '';
@Input() phClass: string = '';
@Input() disabled: boolean = false
}
