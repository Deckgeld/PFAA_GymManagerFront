import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardInterface, footerType } from 'src/app/core/interfaces/cards';
import { Shopping } from 'src/app/core/interfaces/shopping';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss']
})
export class ShoppingCardComponent {
  @Input() UserData!: any;
  @Output() emmitterDelete: EventEmitter<number> = new EventEmitter()
  @Output() emmitterEdit: EventEmitter<any> = new EventEmitter()

  card: CardInterface = {
    typeCard: 'shoppingCard',
    closeHeader: false,
    header: {
      title: 'product',
      titleClass: 'text-uppercase',
      subTitle: 'typeProduct'
    },
    body: {
      title: 'user',
      titleClass: '',
      desc: "member",
      descClass: '',
      subDesc: 'createdOn',
      subDescClass: '',
    },
    footer: {
      iconMaterial: 'delete_outline',
      footerType: footerType.typeBtn
    }
  }

  clickEdit(row : Shopping){
    this.emmitterEdit.emit(row);
  }

  clickDelete(id: number) {
    this.emmitterDelete.emit(id);
  }

}
