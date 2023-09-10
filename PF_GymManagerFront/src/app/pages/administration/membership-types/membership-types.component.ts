import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { EntityEditorDialogComponent } from 'src/app/components/entity-editor-dialog/entity-editor-dialog.component';
import { MembershipType } from 'src/app/core/interfaces/membership-types';
import { MembershipTypesService } from 'src/app/core/services/membership-types.service';
import { SwalAlertService } from 'src/app/core/services/swal-alert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-membership-types',
  templateUrl: './membership-types.component.html',
  styleUrls: ['./membership-types.component.scss']
})
export class MembershipTypesComponent implements OnInit{
  usersSubscription !: Subscription;
  usersData !: MembershipType[];

  constructor(
    private membershipService: MembershipTypesService,
    public dialog: MatDialog,
    private alert: SwalAlertService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.usersSubscription =
      this.membershipService.getMembershipTypes().subscribe(response => {
        this.usersData = response.model;
      });
  }

  openDialog(row?: MembershipType) {
    debugger
    const dialogRef = this.dialog.open(EntityEditorDialogComponent, {
      data: {
        rowEntityEditor: row,
        type: 'MembershipType'
      },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((dataModal: any) => {
      if (dataModal.refreshData) {
        this.usersSubscription.unsubscribe();
        this.loadData();
      }
    });
  }

  deleteRow(id: string) {
    Swal.fire({
      title: "Are you sure? You won't be able to revert this",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d6dd00',
      cancelButtonColor: '#ff5050',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.membershipService.deleteMembershipType(id).subscribe(resp => {
          if (!resp.hasError) {
            this.alert.successAlet('Delete User');
            debugger
            this.usersSubscription.unsubscribe();
            this.loadData();
          }
        });
      }
    })
  }
}
