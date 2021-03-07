import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { FrameComponent } from './components/frame/frame.component';

const routes: Routes = [
  { path: 'frame', component: FrameComponent },
  { path: 'form', component: FormComponent },
  {
    path: '**',
    redirectTo: 'frame',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'frame',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
