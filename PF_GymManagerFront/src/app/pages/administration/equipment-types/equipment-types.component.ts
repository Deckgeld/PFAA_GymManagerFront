import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { EntityEditorDialogComponent } from 'src/app/components/entity-editor-dialog/entity-editor-dialog.component';
import { UserEditorDialogComponent } from 'src/app/components/user-editor-dialog/user-editor-dialog.component';
import { EquipmentType } from 'src/app/core/interfaces/equipment-types';
import { MembershipType } from 'src/app/core/interfaces/membership-types';
import { EquipmentTypesService } from 'src/app/core/services/equipment-types.service';
import { SwalAlertService } from 'src/app/core/services/swal-alert.service';
import { UsersService } from 'src/app/core/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-equipment-types',
  templateUrl: './equipment-types.component.html',
  styleUrls: ['./equipment-types.component.scss']
})
export class EquipmentTypesComponent implements OnInit{
  usersSubscription !: Subscription;
  usersData!: EquipmentType[];
  dataSource!: MatTableDataSource<EquipmentType>;

  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'delete'
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 

  rowSelected: EquipmentType | undefined;
  newUser = false;

  constructor(
    private equipmentTypeServices:EquipmentTypesService,
    public dialog: MatDialog,
    private alert: SwalAlertService,
  ) {
  }

  ngOnInit(): void{
    this.loadData();
  }

  loadData() {
    this.usersSubscription =
      this.equipmentTypeServices.getEquipmentTypes().subscribe(response => {
        this.dataSource = new MatTableDataSource(response.model)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.usersData = response.model;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(row?: MembershipType) {
    const dialogRef = this.dialog.open(EntityEditorDialogComponent, {
      data: {
        rowEntityEditor: row,
        type: 'EquipmentType'
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
        this.equipmentTypeServices.deleteEquipmentType(id).subscribe(resp => {
          if (!resp.hasError) {
            this.alert.successAlet('EquipmentType Delete');
            this.usersSubscription.unsubscribe();
            this.loadData();
          }
        });
      }
    })
  }
}

