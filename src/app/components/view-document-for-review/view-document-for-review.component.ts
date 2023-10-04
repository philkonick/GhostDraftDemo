import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Reviewers {
  name: string;
  status: string;
  comment: string;
}
const ELEMENT_DATA: Reviewers[] = [
  { name: 'JaneD', status: 'Approved', comment: 'Looks good to me' },
  { name: 'FredF', status: 'Rejected', comment: 'Formatting is inconsistent' },
  { name: 'MaryC', status: 'Not Reviewed', comment: '' },
];

// Above is demo data, normally data would be imported via the dialog, either in entirety or my passing an ID which is then used in a backend call for additional information

@Component({
  selector: 'app-view-document-for-review',
  templateUrl: './view-document-for-review.component.html',
  styleUrls: ['./view-document-for-review.component.scss'],
})
export class ViewDocumentForReviewComponent {
  displayedColumns: string[] = ['name', 'status', 'comment'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
}
