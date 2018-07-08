import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ViewComponent }   from '../Product/view/view.component';
import { AddComponent }     from '../Product/add/add.component';
import { EditComponent } from '../Product/edit/edit.component';

const appRoutes: Routes = [
  { path: 'viewProduct', component: ViewComponent },
  { path: 'add',        component: AddComponent },
  { path: 'edit',        component: EditComponent },
  { path: '',   redirectTo: '/viewProduct', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}