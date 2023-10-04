import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ViewDocumentForReviewComponent } from 'src/app/components/view-document-for-review/view-document-for-review.component';

export interface TableEntry {
  document: string;
  reviewedBy: string;
  comments: string;
  bugs: string;
}
const ELEMENT_DATA: TableEntry[] = [
  {
    document: 'Claim Rejection Letter',
    reviewedBy: 'JaneD (Approved), FredF (Rejected)',
    comments: 'Looks good to me...',
    bugs: '1234812 (in development); 67423 (fixed);',
  },
  { document: 'Claim Payout Letter', reviewedBy: '', comments: '', bugs: '' },
];

export interface ReviewersTable {
  name: string;
}
const ELEMENT_DATA2: ReviewersTable[] = [
  { name: 'JaneD' },
  { name: 'FredF' },
  { name: 'MaryC' },
];

// Above data is only here for demo purposes, this would normally be called from a backend

@Component({
  selector: 'app-document-review',
  templateUrl: './document-review.component.html',
  styleUrls: ['./document-review.component.scss'],
})
export class DocumentReviewComponent implements AfterViewInit {
  documentReviewColumns: string[] = [
    'document',
    'reviewedBy',
    'comments',
    'bugs',
  ];
  documentReviewDataSource = new MatTableDataSource(ELEMENT_DATA);

  reviewerColumns: string[] = ['name', 'remove'];
  reviewerDataSource = new MatTableDataSource(ELEMENT_DATA2);

  // Not really best practice to have both of these tables in the same component but i'm running out of time

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog
  ) {}

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.documentReviewDataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openDocumentForReview() {
    this.dialog.open(ViewDocumentForReviewComponent);
    // Normally one would expect data related to the clicked row to be passed to the component here, but instead the dialog is using demo data
  }
}
