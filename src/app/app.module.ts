import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule,Routes} from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNewPersonComponent } from './components/add-new-person/add-new-person.component';
import { AddNewCompanyComponent } from './components/add-new-company/add-new-company.component';
import { AddNewPersonPaymentComponent } from './components/add-new-person-payment/add-new-person-payment.component';
import { AddNewCompanyPaymentComponent } from './components/add-new-company-payment/add-new-company-payment.component';
import { GetPaymentDetailsByNICComponent } from './components/get-payment-details-by-nic/get-payment-details-by-nic.component';
import { GetPaymentDetailsByComRegNumberComponent } from './components/get-payment-details-by-com-reg-number/get-payment-details-by-com-reg-number.component';
import { GetAllCompaniesComponent } from './components/get-all-companies/get-all-companies.component';
import { GetAllPersonsComponent } from './components/get-all-persons/get-all-persons.component';
import {MatIconModule} from "@angular/material/icon";
import { HomeComponent } from './components/home/home.component';
import { AddnewComponent } from './components/addnew/addnew.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


const routes: Routes = [
  {path:'addNewPerson',component:AddNewPersonComponent},
  {path:'addNewCompany',component:AddNewCompanyComponent},
  {path:'addNewPersonPayment',component:AddNewPersonPaymentComponent},
  {path:'addNewCompanyPayment',component:AddNewCompanyPaymentComponent},
  {path:'personPaymentDetails',component:GetPaymentDetailsByNICComponent},
  {path:'companyPaymentDetails',component:GetPaymentDetailsByComRegNumberComponent},
  {path:'getAllPersons',component:GetAllPersonsComponent},
  {path:'getAllCompanies',component:GetAllCompaniesComponent},
  {path:'addNew',component:AddnewComponent},
  {path:'login',component:LoginComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'home',component:HomeComponent},
  {
    path:'navigator',
    component:SidenavComponent,
    children:[
      {path:'addNewPerson',component:AddNewPersonComponent},
      {path:'addNewCompany',component:AddNewCompanyComponent},
      {path:'addNewPersonPayment',component:AddNewPersonPaymentComponent},
      {path:'addNewCompanyPayment',component:AddNewCompanyPaymentComponent},
      {path:'personPaymentDetails',component:GetPaymentDetailsByNICComponent},
      {path:'companyPaymentDetails',component:GetPaymentDetailsByComRegNumberComponent},
      {path:'getAllPersons',component:GetAllPersonsComponent},
      {path:'getAllCompanies',component:GetAllCompaniesComponent}
    ]
  },

  {path:'',redirectTo:'/login',pathMatch:"full"}



];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidenavComponent,
    AddNewPersonComponent,
    AddNewCompanyComponent,
    AddNewPersonPaymentComponent,
    AddNewCompanyPaymentComponent,
    GetPaymentDetailsByNICComponent,
    GetPaymentDetailsByComRegNumberComponent,
    GetAllCompaniesComponent,
    GetAllPersonsComponent,
    HomeComponent,
    AddnewComponent,

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
