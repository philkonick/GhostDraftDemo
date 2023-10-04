import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { AddNewTemplateComponent } from 'src/app/components/add-new-template/add-new-template.component';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
})
export class TemplatesComponent {
  constructor(public dialog: MatDialog) {}

  openAddNewTemplate() {
    this.dialog.open(AddNewTemplateComponent);
  }
}
