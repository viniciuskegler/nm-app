import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren: () => import('./login/auth.module').then(m => m.AuthModule)},
];

export const routing = RouterModule.forRoot(routes);
