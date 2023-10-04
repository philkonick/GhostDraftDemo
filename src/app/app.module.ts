import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewTemplateComponent } from './components/add-new-template/add-new-template.component';
import { TemplatesComponent } from './pages/templates/templates.component';
import { DocumentReviewComponent } from './pages/document-review/document-review.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { DirectivesModule } from './directives/directives.module';
import { ViewDocumentForReviewComponent } from './components/view-document-for-review/view-document-for-review.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewTemplateComponent,
    TemplatesComponent,
    DocumentReviewComponent,
    ViewDocumentForReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatExpansionModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    DirectivesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
