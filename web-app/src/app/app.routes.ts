import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PanelSecundarioComponent } from './panel-secundario/panel-secundario.component';
import { ListasAdminComponent } from './listas-admin/listas-admin.component';
import { ListasRoleComponent } from './listas-role/listas-role';
import { ListasMetAutComponent } from './listas-metodo-aut/listas-metodo-aut';
import { ListasActivacionCtaComponent } from './listas-activacion-cta/listas-activacion-cta';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'panel/:section', component: PanelSecundarioComponent },
  {path: 'lista-admin/:section', component: ListasAdminComponent},
  {path: 'lista-role/:section', component: ListasRoleComponent},
  {path: 'lista-met-aut/:section', component: ListasMetAutComponent},
  {path: 'lista-act-cta/:section', component: ListasActivacionCtaComponent}

];
