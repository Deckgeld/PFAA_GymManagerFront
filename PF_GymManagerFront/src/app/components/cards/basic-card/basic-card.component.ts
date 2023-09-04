import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardInterface, footerType } from 'src/app/core/interfaces/cards';

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss']
})
export class BasicCardComponent {
  @Input() UserData: any;
  @Output() emmitterDelete: EventEmitter<any> = new EventEmitter()

  card : CardInterface = {
    typeCard:'basic1',
    closeHeader:false,
    header:{
      title: 'email',
      titleClass: 'text-uppercase'
    },
    body:{
      title:'email',
      titleClass:'',
      desc:'email',
      descClass:'text-capitalize',
      subDesc:'phoneNumber',
      subDescClass:'',
    },
    footer:{
      footerClass:'',
      label:'',
      iconMaterial: 'delete_outline',
      footerType: footerType.typeBtn
    }
  }

  getUsername(email: string) {
    const parts = email.split('@');
    if (parts.length > 1) {
      const username = parts[0];
      return username;
    } else {return email}
  }

  clickDelete(id: string){
    this.emmitterDelete.emit(id);
  }
}
