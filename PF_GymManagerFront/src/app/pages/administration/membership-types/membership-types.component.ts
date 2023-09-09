import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
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
      this.membershipService.getMembershipTypes().subscribe(console.log);
      this.membershipService.getMembershipTypes().subscribe(response => {
        this.usersData = response.model;
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
            this.usersSubscription.unsubscribe();
            this.loadData();
          }
        });
      }
    })
  }
}
