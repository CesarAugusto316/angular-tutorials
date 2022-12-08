import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MyListComponent } from './my-list/my-list.component';


const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'home', component: FormComponent },
  { path: 'mylist', component: MyListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
