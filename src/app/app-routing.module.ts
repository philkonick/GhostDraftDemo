import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesComponent } from './pages/templates/templates.component';
import { DocumentReviewComponent } from './pages/document-review/document-review.component';

const routes: Routes = [
  { path: 'templates', component: TemplatesComponent },
  { path: 'document-review', component: DocumentReviewComponent },
  { path: '', redirectTo: '/templates', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
