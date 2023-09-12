import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { EntityEditorDialogComponent } from 'src/app/components/entity-editor-dialog/entity-editor-dialog.component';
import { Member } from 'src/app/core/interfaces/member';
import { CityService } from 'src/app/core/services/city.service';
import { MembersService } from 'src/app/core/services/members.service';
import { MembershipTypesService } from 'src/app/core/services/membership-types.service';
import { SwalAlertService } from 'src/app/core/services/swal-alert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  usersSubscription !: Subscription;
  usersData!: Member[];
  dataSource!: MatTableDataSource<Member>;

  displayedColumns: string[] = [
    'id',
    'name',
    'lastName',
    'email',
    'membershipEnd',
    'cityId',
    'membershipTypeId',
    'delete'
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 

  rowSelected: Member | undefined;
  newUser = false;

  constructor(
    private membersService:MembersService,
    private cityService:CityService,
    private membershipTypesService:MembershipTypesService,
    public dialog: MatDialog,
    private alert: SwalAlertService,
  ) {}

  ngOnInit(): void{
    this.loadData();
  }

  loadData() {
    this.usersSubscription =
      this.membersService.getMembers().subscribe(response => {
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

  openDialog(row?: Member) {
    const dialogRef = this.dialog.open(EntityEditorDialogComponent, {
      data: {
        rowEntityEditor: row,
        type: 'Members'
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
        this.membersService.deleteMember(id).subscribe(resp => {
          if (!resp.hasError) {
            this.alert.successAlet('Member Delete');
            this.usersSubscription.unsubscribe();
            this.loadData();
          }
        });
      }
    })
  }
}
