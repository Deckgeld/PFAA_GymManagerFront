import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { editUserDto, newUserDto, userDto } from 'src/app/core/interfaces/user';
import { SwalAlertService } from 'src/app/core/services/swal-alert.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-user-editor-modal',
  templateUrl: './user-editor-modal.component.html',
  styleUrls: ['./user-editor-modal.component.scss']
})
export class UserEditorModalComponent implements OnInit {

  @Input() rowUserEditor?: any;
  rowNewUserDto?: newUserDto;

  @Output() emitterCloseModal: EventEmitter<Object> = new EventEmitter<Object>()
  myModal!: bootstrap.Modal;

  confirmButtonText = 'Create User';

  constructor(
    private userService: UsersService,
    private alert: SwalAlertService
  ) { }

  ngOnInit(): void {
    //obtenemos el modal user-editor.component.html y cremos uno nuevo
    this.myModal = new bootstrap.Modal(<HTMLInputElement>document.getElementById('staticBackdrops'));
    this.myModal.show()
    if (!!this.rowUserEditor) {
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
    this.emitterCloseModal.emit(close);
  }

  listenerSubmitForm(response: any) {
    if (!!this.rowUserEditor && !!this.rowUserEditor.id) {
      let editUserDto = {email: response.email, phoneNumber:response.phoneNumber}
      this.userService.updateUser(editUserDto, this.rowUserEditor.id).subscribe((resp) => {
        if (!resp.hasError) {
          this.closeModal(true);
        } else {
          this.alert.errorAlert(resp.message, 'Error')
        }
      });
    } else {
      this.userService.newUser(response).subscribe(resp => {
        if (!resp.hasError) {
          this.closeModal(true);
        } else {
          this.alert.errorAlert(resp.model[0].code, 'Error');
        }
      }, error => {
        this.alert.errorAlert('Sorry', 'Service not available at the moment, please contact your admin');
        console.log(error.error)
      });
    }
  }
  listenerCancelForm(close: boolean) {
    if (close)
      this.closeModal();
  }
}
