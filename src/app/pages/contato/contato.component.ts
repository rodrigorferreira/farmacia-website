import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,  // Importando MatFormFieldModule
    MatInputModule,      // Importando MatInputModule para os inputs
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {}
