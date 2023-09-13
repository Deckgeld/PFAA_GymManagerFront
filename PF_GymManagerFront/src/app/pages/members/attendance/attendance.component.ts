import { Component } from '@angular/core';
import { Member } from 'src/app/core/interfaces/member';
import { ResponseModel } from 'src/app/core/interfaces/response-models';
import { AttendanceService } from 'src/app/core/services/attendance.service';
import { MembersService } from 'src/app/core/services/members.service';
import { SwalAlertService } from 'src/app/core/services/swal-alert.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent {
  memberId: number | undefined;
  member!: ResponseModel<any>
  daysRemaining: any

  constructor(
    private membersService: MembersService,
    private attendanceService: AttendanceService,
    private alertService:SwalAlertService
  ){}

  searchMember() {
    if (!!this.memberId) {
      this.membersService.getMemberById(this.memberId).subscribe(resp => {
        this.member = resp;

        const nowDate = new Date();
        if (!!this.member.model) {
          const endDate = new Date(this.member.model.membershipEnd);
          const timeDiff = endDate.getTime() - nowDate.getTime();
          this.daysRemaining = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        }
      });
    }
  }

  confirmAttendace(idMember:number){
    this.attendanceService.newAttendance(idMember).subscribe(resp => {
      if (!resp.hasError) {
        this.alertService.successAlet("Confirmed")
      }
    })
  }
}
