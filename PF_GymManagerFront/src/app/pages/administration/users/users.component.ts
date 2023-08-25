import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { newUserDto, userDto } from 'src/app/core/interfaces/user';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = [
    'email',
    'phoneNumber',
    'delete'
  ];
  dataSource!: MatTableDataSource<userDto>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  rowSelected: userDto | undefined;
  newUser = false;
  DataUsers!: Subscription;

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.DataUsers =
      this.userService.getUsers().subscribe(response => {
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

  deleteRow(row: userDto) {

  }



  openModalRow(row: userDto) {
    this.rowSelected = row;
  }
  openModalBtn() {
    this.newUser = true;
  }
  onCloseHandled(dataModal: any) {
    this.rowSelected = undefined;
    this.newUser = false

    if (dataModal.refreshData) {
      this.DataUsers.unsubscribe();
      this.loadData();
    }
  }
}
