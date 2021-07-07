import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebComponent } from '../web/web.component';
import { JavaComponent } from '../java/java.component';
import { RouterModule, Routes } from '@angular/router';
import { WebcompComponent } from '../webcomp/webcomp.component';
import { JavacompComponent } from '../javacomp/javacomp.component';
const routes:Routes = [
  {path:'web', component:WebcompComponent },
  {path:'java', component:JavacompComponent }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)

  ],
  exports:[RouterModule]

})
export class TechRoutingModule { }
export const routingComponents = [WebcompComponent,JavacompComponent]
