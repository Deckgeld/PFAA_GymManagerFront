import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardInterface, footerType } from 'src/app/core/interfaces/cards';
import { Member, MemberDto } from 'src/app/core/interfaces/member';

@Component({
  selector: 'app-membership-card',
  templateUrl: './membership-card.component.html',
  styleUrls: ['./membership-card.component.scss']
})
export class MembershipCardComponent {
  @Input() UserData: any;
  @Output() emmitterDelete: EventEmitter<any> = new EventEmitter()

  card: CardInterface = {
    typeCard: 'membershipCard',
    closeHeader: false,
    header: {
      title: 'name',
      subTitle: "esto es una desc",
      titleClass: 'text-uppercase'
    },
    body: {
      title: 'Members',
      titleClass: '',
      desc: "djas",
      descClass: 'text-capitalize',
      subDesc: 'phoneNumber',
      subDescClass: '',
    },
    footer: {
      iconMaterial: 'delete_outline',
      footerType: footerType.typeBtn
    }
  }

  getMemebers(members : Member[]): string{
    console.log(members)
    let result = '';
    for (let i = 0; i < members.length; i++) {
      const member = members[i];
      // Concatenar el nombre y el apellido del miembro
      result += `${member.name} ${member.lastName}`;
      // Agregar una coma y un espacio si no es el último miembro
      if (i < members.length - 1) {
        result += ', ';
      }
    }
    return result;  
  }

  pep(){
    console.log(this.UserData.members)
  }


  clickDelete(id: string) {
    this.emmitterDelete.emit(id);
  }
}
