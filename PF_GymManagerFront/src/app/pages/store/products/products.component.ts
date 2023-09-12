import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { EntityEditorDialogComponent } from 'src/app/components/entity-editor-dialog/entity-editor-dialog.component';
import { Product } from 'src/app/core/interfaces/product';
import { ProductsService } from 'src/app/core/services/products.service';
import { SwalAlertService } from 'src/app/core/services/swal-alert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  usersSubscription !: Subscription;
  usersData!: Product[];
  dataSource!: MatTableDataSource<Product>;

  displayedColumns: string[] = [
    'id',
    'name',
    'type',
    'category',
    'brand',
    'quantity',
    'expirationDate',
    'delete'
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 

  constructor(
    private productsService:ProductsService,
    public dialog: MatDialog,
    private alert: SwalAlertService,
  ) { }

  ngOnInit(): void{
    this.loadData();
  }

  loadData() {
    this.usersSubscription =
      this.productsService.getProducts().subscribe(response => {
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

  openDialog(row?: Product) {
    const dialogRef = this.dialog.open(EntityEditorDialogComponent, {
      data: {
        rowEntityEditor: row,
        type: 'product',
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
        this.productsService.deleteProducts(id).subscribe(resp => {
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
