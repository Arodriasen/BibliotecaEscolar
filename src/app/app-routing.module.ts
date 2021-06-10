import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'perfil-de-usuario',
    loadChildren: () => import('./perfil-de-usuario/perfil-de-usuario.module').then( m => m.PerfilDeUsuarioPageModule)
  },
  
  {
    path: 'elegir-biblioteca',
    loadChildren: () => import('./elegir-biblioteca/elegir-biblioteca.module').then( m => m.ElegirBibliotecaPageModule)
  },
  {
    path: 'biblioteca-colegio',
    loadChildren: () => import('./biblioteca-colegio/biblioteca-colegio.module').then( m => m.BibliotecaColegioPageModule)
  },
  {
    path: 'biblioteca-personal',
    loadChildren: () => import('./biblioteca-personal/biblioteca-personal.module').then( m => m.BibliotecaPersonalPageModule)
  },
  {
    path: 'storage',
    loadChildren: () => import('./storage/storage.module').then( m => m.StoragePageModule)
  },
  {
    path: 'storage',
    loadChildren: () => import('./storage/storage.module').then( m => m.StoragePageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },  {
    path: 'modal-tarea',
    loadChildren: () => import('./modal-tarea/modal-tarea.module').then( m => m.ModalTareaPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
