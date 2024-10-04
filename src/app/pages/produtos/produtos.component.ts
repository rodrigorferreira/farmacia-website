import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
produtos: any;

}
