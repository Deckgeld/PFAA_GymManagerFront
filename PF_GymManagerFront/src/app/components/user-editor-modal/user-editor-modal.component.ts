import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { newUserDto, userDto } from 'src/app/core/interfaces/user';
import { SwalAlertService } from 'src/app/core/services/swal-alert.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-user-editor-modal',
  templateUrl: './user-editor-modal.component.html',
  styleUrls: ['./user-editor-modal.component.scss']
})
export class UserEditorModalComponent {

  @Input() rowUserEditor?: userDto;
  rowNewUserDto?: newUserDto;

  @Output() closeModalEmitter: EventEmitter<Object> = new EventEmitter<Object>()
  myModal!: bootstrap.Modal;
  
  confirmButtonText = 'Create User';
  
  constructor(
    private userService: UsersService,
    private alert: SwalAlertService
  ) {}

  ngOnInit():void{
    //obtenemos el modal user-editor.component.html y cremos uno nuevo
    this.myModal = new bootstrap.Modal(<HTMLInputElement>document.getElementById('staticBackdrop'));
    this.myModal.show()
    if(!!this.rowUserEditor){
      this.confirmButtonText = 'Update User';
      this.rowNewUserDto = {
        phoneNumber: this.rowUserEditor.phoneNumber,
        password: this.rowUserEditor.password,
        email: this.rowUserEditor.email
      };
      //debugger;
    }
  }

  closeModal(refresh: boolean = false){
    this.myModal.hide();
    let close = {
      closeModal: true,
      refreshData: refresh
    }
    this.closeModalEmitter.emit(close);
  }

  listenerSubmitForm(response:userDto){
    if(!!this.rowUserEditor && this.rowUserEditor.id){
      this.userService.updateUser(response, this.rowUserEditor.id).subscribe((resp)=>{
        if (!resp.hasError){
          this.closeModal(true);
        }
      });
    }else{
      this.userService.newUser(response).subscribe(console.log);
    }
  }
  listenerCancelForm(close: boolean) {
    if(close)
      this.closeModal();
  }
}
