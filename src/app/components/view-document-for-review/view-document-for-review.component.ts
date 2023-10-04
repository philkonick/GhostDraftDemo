import { Component } from '@angular/core';

@Component({
  selector: 'app-view-document-for-review',
  templateUrl: './view-document-for-review.component.html',
  styleUrls: ['./view-document-for-review.component.scss'],
})
export class ViewDocumentForReviewComponent {
  // below is demo data, normally data would be imported via the dialog, either in entirety or my passing an ID which is then used in a backend call for additional information
  reviewers = [
    { name: 'JaneD', status: 'Approved', comment: 'Looks good to me' },
    {
      name: 'FredF',
      status: 'Rejected',
      comment: 'Formatting is inconsistent',
    },
    { name: 'MaryC', status: 'Not Reviewed', comment: '' },
  ];
}
