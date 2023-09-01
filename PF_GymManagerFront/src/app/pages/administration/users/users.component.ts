import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Select } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { UserEditorDialogComponent } from 'src/app/components/user-editor-dialog/user-editor-dialog.component';
import { newUserDto, userDto } from 'src/app/core/interfaces/user';
import { SwalAlertService } from 'src/app/core/services/swal-alert.service';
import { UsersService } from 'src/app/core/services/users.service';
import { UsersState } from 'src/state/users.state';
import Swal from 'sweetalert2';

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
  usersSubscription !: Subscription;

  showTable: boolean = true;
  usersData!: userDto[];

  constructor(
    private userService: UsersService,
    public dialog: MatDialog,
    private alert: SwalAlertService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.usersSubscription =
      this.userService.getUsers().subscribe(response => {
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


  openModalRow(row: userDto) {
    this.rowSelected = row;
  }
  openModalBtn() {
    this.newUser = true;
  }
  listenerCloseModal(dataModal: any) {
    this.rowSelected = undefined;
    this.newUser = false

    if (dataModal.refreshData) {
      this.usersSubscription.unsubscribe();
      this.loadData();
    }
  }

  openDialog(row?: userDto) {
    const dialogRef = this.dialog.open(UserEditorDialogComponent, {
      data: row,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      this.listenerCloseModal(result);
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
        this.userService.deleteUser(id).subscribe(resp => {
          if (!resp.hasError) {
            this.alert.successAlet('Delete User');
            this.usersSubscription.unsubscribe();
            this.loadData();
          }
        });
      }
    })
  }

  chageView(){
    this.showTable = !this.showTable;
  }
}
