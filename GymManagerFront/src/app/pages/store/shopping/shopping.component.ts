import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { EntityEditorDialogComponent } from 'src/app/components/entity-editor-dialog/entity-editor-dialog.component';
import { Shopping } from 'src/app/core/interfaces/shopping';
import { ShoppingService } from 'src/app/core/services/shopping.service';
import { SwalAlertService } from 'src/app/core/services/swal-alert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
  usersSubscription !: Subscription;
  usersData !: Shopping[];

  constructor(
    private shoppingService: ShoppingService,
    private alert: SwalAlertService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.usersSubscription =
      this.shoppingService.getShopping().subscribe(response => {
        this.usersData = response;
      });
  }

  openDialog(row?: Shopping) {
    const dialogRef = this.dialog.open(EntityEditorDialogComponent, {
      data: {
        rowEntityEditor: row,
        type: 'shopping',
        isStore: 'true'
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

  deleteRow(id: number) {
    Swal.fire({
      title: "Are you sure? You won't be able to revert this",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d6dd00',
      cancelButtonColor: '#ff5050',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.shoppingService.deleteShopping(id).subscribe(resp => {
          if (!!resp) {
            this.alert.successAlet('Deleted');
            this.usersSubscription.unsubscribe();
            this.loadData();
          }
        });
      }
    })
  }
}
