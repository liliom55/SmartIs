import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoshavereComponent } from './pages/moshavere/moshavere.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'consultation', component: MoshavereComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'products', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
