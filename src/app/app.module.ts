import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MzParallaxModule } from 'ngx-materialize';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SectionComponent } from './components/section/section.component';

import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MoshavereComponent } from './pages/moshavere/moshavere.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CartShopComponent } from './components/cart-shop/cart-shop.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { SectionParallaxComponent } from './components/section-parallax/section-parallax.component';
import { SmallNavbarComponent } from './components/small-navbar/small-navbar.component';
import { BigNavbarComponent } from './components/big-navbar/big-navbar.component';
import { EcommerceMenuComponent } from './components/ecommerce-menu/ecommerce-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SectionComponent,
    HomeComponent,
    HeaderComponent,
    ProductCardComponent,
    MoshavereComponent,
    ProductListComponent,
    CartShopComponent,
    ContactUsComponent,
    ReminderComponent,
    FooterComponent,
    RegistrationComponent,
    SignInComponent,
    TopMenuComponent,
    SectionParallaxComponent,
    SmallNavbarComponent,
    BigNavbarComponent,
    EcommerceMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule
    // MzParallaxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
