import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardInterface, footerType } from 'src/app/core/interfaces/cards';
import { EquipmentType } from 'src/app/core/interfaces/equipment-types';
import { Member, MemberDto } from 'src/app/core/interfaces/member';

@Component({
  selector: 'app-membership-card',
  templateUrl: './membership-card.component.html',
  styleUrls: ['./membership-card.component.scss']
})
export class MembershipCardComponent {
  @Input() UserData: any;
  @Output() emmitterDelete: EventEmitter<any> = new EventEmitter()
  @Output() emmitterEdit: EventEmitter<any> = new EventEmitter()

  card: CardInterface = {
    typeCard: 'membershipCard',
    closeHeader: false,
    header: {
      title: 'name',
      titleClass: 'text-uppercase',
      subTitle: 'cost',
    },
    body: {
      title: 'members',
      titleClass: 'text-start',
      desc: "duration",
      descClass: '',
      subDesc: 'createdOn',
      subDescClass: '',
    },
    footer: {
      iconMaterial: 'delete_outline',
      footerType: footerType.typeBtn
    }
  }

  clickEdit(row : EquipmentType){
    this.emmitterEdit.emit(row);
  }

  getDate(dateTimeIso: string): string {
    const dateTime = new Date(dateTimeIso);
    return dateTime.toISOString().split('T')[0];
  }
  clickDelete(id: string) {
    this.emmitterDelete.emit(id);
  }
}
