import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { EquipmentType } from 'src/app/core/interfaces/equipment-types';
import { EquipmentTypesService } from 'src/app/core/services/equipment-types.service';
import { SwalAlertService } from 'src/app/core/services/swal-alert.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-equipment-types',
  templateUrl: './equipment-types.component.html',
  styleUrls: ['./equipment-types.component.scss']
})
export class EquipmentTypesComponent implements OnInit{
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'delete'
  ];
  dataSource!: MatTableDataSource<EquipmentType>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 


  constructor(
    private equipmentTypeServices:EquipmentTypesService
  ) {
  }

  ngOnInit(): void{
    this.equipmentTypeServices.getEquipmentTypes().subscribe(response => {
      this.dataSource = new MatTableDataSource(response.model)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

