import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { EntityEditorDialogComponent } from 'src/app/components/entity-editor-dialog/entity-editor-dialog.component';
import { Inventory } from 'src/app/core/interfaces/inventory';
import { InventoryService } from 'src/app/core/services/inventory.service';
import { SwalAlertService } from 'src/app/core/services/swal-alert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  usersSubscription !: Subscription;
  usersData!: Inventory[];
  dataSource!: MatTableDataSource<Inventory>;

  displayedColumns: string[] = [
    'name',
    'brand',
    'category',
    'color',
    'quantity',
    'lastUpdate',
    'delete'
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 

  constructor(
    private inventoryService:InventoryService,
    public dialog: MatDialog,
    private alert: SwalAlertService,
  ) { }

  ngOnInit(): void{
    this.loadData();
  }

  loadData() {
    this.usersSubscription =
      this.inventoryService.getInventory().subscribe(response => {
        this.dataSource = new MatTableDataSource(response)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.usersData = response;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(row?: Inventory) {
    const dialogRef = this.dialog.open(EntityEditorDialogComponent, {
      data: {
        rowEntityEditor: row,
        type: 'inventory',
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
        this.inventoryService.deleteInventory(id).subscribe(resp => {
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
