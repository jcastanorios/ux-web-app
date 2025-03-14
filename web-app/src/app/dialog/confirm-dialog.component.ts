import { Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'app-confirm-dialog',
    imports: [
        MatIconModule
    ],

    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {

    public dialogText: string;
    public routeToNavigate:string;
    constructor(private router: Router, private dialogRef: MatDialogRef<ConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { text: string, uri: string }) {
        this.dialogText = data.text;
        this.routeToNavigate = data.uri;
    }

    onCancel(): void {
        this.dialogRef.close(false);
    }

    navigateToPanel(route: string) {
        this.dialogRef.close(true);
        this.router.navigate([route]);
    }
}
