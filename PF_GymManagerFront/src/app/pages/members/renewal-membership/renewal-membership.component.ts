import { Component, ElementRef, ViewChild, } from '@angular/core';
import { Member, MemberDto } from 'src/app/core/interfaces/member';
import { MembershipType } from 'src/app/core/interfaces/membership-types';
import { ResponseModel } from 'src/app/core/interfaces/response-models';
import { MembersService } from 'src/app/core/services/members.service';
import { MembershipTypesService } from 'src/app/core/services/membership-types.service';
import { SwalAlertService } from 'src/app/core/services/swal-alert.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-renewal-membership',
  templateUrl: './renewal-membership.component.html',
  styleUrls: ['./renewal-membership.component.scss']
})
export class RenewalMembershipComponent {
  memberId: number | undefined;
  member!: ResponseModel<any>
  daysRemaining: any

  memberships !: MembershipType[];
  membershipDuration !: number;
  @ViewChild('membershipSelect') membershipSelect!: ElementRef;

  constructor(
    private membersService: MembersService,
    private membershipService: MembershipTypesService,
    private AletService: SwalAlertService,
    private router: Router
  ) { this.loeadSelect() }

  loeadSelect(){
    this.membershipService.getMembershipTypes().subscribe(resp => {
      this.memberships = resp.model
    });
  }

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

  submitMembership() {
    const selectedMembershipId = this.membershipSelect.nativeElement.value;

    this.membershipService.getMembershipById(selectedMembershipId).subscribe(resp => {
      
      const now = new Date();
      const nextMonth = new Date(now);
      nextMonth.setMonth(nextMonth.getMonth() + resp.model.duration);

      const nowISOString = now.toISOString();
      const nextMonthISOString = nextMonth.toISOString();

      const newMember: MemberDto = {
        name: this.member.model.name,
        lastName: this.member.model.lastName,
        birthDay: this.member.model.birthDay,
        email: this.member.model.email,
        allowNewsLetter: this.member.model.allowNewsLetter,
        registeredOn: nowISOString,
        membershipEnd: nextMonthISOString,
        cityId: this.member.model.cityId,
        membershipTypeId: resp.model.id
      }


      this.membersService.updateMember(newMember, this.member.model.id).subscribe(Response => {
        if (!Response.hasError) {
          console.log("Update")
          this.AletService.successAlet("Renewaled")
          this.router.navigate(['/members/clients']);
        }
      })



    })
  }

}
