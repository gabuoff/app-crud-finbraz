import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/access', pathMatch: 'full' },
  { path: 'access', loadChildren: () => import('./modules/access/access.module').then(m => m.AccessModule) },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'banks', loadChildren: () => import('./modules/banks/banks.module').then(m => m.BanksModule) },
  { path: 'investments', loadChildren: () => import('./modules/investments/investments.module').then(m => m.InvestmentsModule) },
  { path: 'expenses', loadChildren: () => import('./modules/expenses/expenses.module').then(m => m.ExpensesModule) },
  { path: 'financial-planner', loadChildren: () => import('./modules/financial-planner/financial-planner.module').then(m => m.FinancialPlannerModule) },
  { path: 'cpf-health', loadChildren: () => import('./modules/cpf-health/cpf-health.module').then(m => m.CpfHealthModule) },
  { path: 'support-contact', loadChildren: () => import('./modules/support-contact/support-contact.module').then(m => m.SupportContactModule) },
  { path: 'profile', loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule) },
  { path: '**', redirectTo: '/access' }  // Se a rota não corresponder a nenhuma das acima, redirecionar para a página de acesso
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
