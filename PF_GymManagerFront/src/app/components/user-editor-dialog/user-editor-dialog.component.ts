import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ResponseArrayModel } from 'src/app/core/interfaces/response-models';
import { userDto } from 'src/app/core/interfaces/user';
import { SwalAlertService } from 'src/app/core/services/swal-alert.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-user-editor-dialog',
  templateUrl: './user-editor-dialog.component.html',
  styleUrls: ['./user-editor-dialog.component.scss']
})
export class UserEditorDialogComponent implements OnInit{
  confirmButtonText = 'Create User';
  openDialog: boolean= true;
  
  constructor(
    public dialogRef: MatDialogRef<UserEditorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public rowUserEditor: userDto,
    private userService: UsersService,
    private alertS:SwalAlertService
  ) {}

  ngOnInit(): void {
    if(!!this.rowUserEditor){
      this.confirmButtonText= 'Update User';
    }
  }

  onNoClick(refresh: boolean): void {
    let close = {
      closeModal: true,
      refreshData: refresh
    }
    this.dialogRef.close(close);
  }

  listenerSubmitForm(response:userDto){
    if(!!this.rowUserEditor && !!this.rowUserEditor.id){
      this.userService.updateUser(response, this.rowUserEditor.id).subscribe((resp)=>{
        if (!resp.hasError){
          this.onNoClick(true);
        }
        else{
          this.alertS.errorAlert('Error', resp.message)
        }
      });
    }else{
      debugger;
      this.userService.newUser(response).subscribe(resp => {
        debugger;
        if (!resp.hasError) {
          this.onNoClick(true);
        }else{
          this.alertS.errorAlert('Error', resp.model[0].description)
        }
      }, error =>{
        this.alertS.errorAlert('Sorry', 'Service not available at the moment, please contact your admin');
        console.log(error.error)
      });
    }
  }
  
  
  listenerCancelForm(close: boolean) {
    if(close)
    this.openDialog = !close;
      this.onNoClick(false);
  }
}
