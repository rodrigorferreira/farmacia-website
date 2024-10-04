import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ContatoComponent } from './pages/contato/contato.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },       // Rota padrão
  { path: 'sobre', component: SobreComponent }, // Rota para página Sobre
  { path: 'produtos', component: ProdutosComponent }, // Rota para Produtos
  { path: 'contato', component: ContatoComponent },   // Rota para Contato
  { path: '**', redirectTo: '' }  // Redirecionar para Home se a rota não existir
];
