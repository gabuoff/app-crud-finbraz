import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { OffsidebarComponent } from './shared/components/offsidebar/offsidebar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { SidebarLeftComponent } from './shared/components/sidebar-left/sidebar-left.component';
import { FinancialPlannerComponentComponent } from './modules/financialPlanner/components/financial-planner-component/financial-planner-component.component';
import { CpfHealthComponentComponent } from './modules/cpfHealth/components/cpf-health-component/cpf-health-component.component';
import { SupportContactComponentComponent } from './modules/supportContact/components/support-contact-component/support-contact-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OffsidebarComponent,
    SidebarComponent,
    SidebarLeftComponent,
    FinancialPlannerComponentComponent,
    CpfHealthComponentComponent,
    SupportContactComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
