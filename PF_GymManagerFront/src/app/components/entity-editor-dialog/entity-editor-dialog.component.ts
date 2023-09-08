import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EquipmentType } from 'src/app/core/interfaces/equipment-types';
import { EquipmentTypesService } from 'src/app/core/services/equipment-types.service';
import { MembersService } from 'src/app/core/services/members.service';
import { MembershipTypesService } from 'src/app/core/services/membership-types.service';
import { SwalAlertService } from 'src/app/core/services/swal-alert.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-entity-editor-dialog',
  templateUrl: './entity-editor-dialog.component.html',
  styleUrls: ['./entity-editor-dialog.component.scss']
})
export class EntityEditorDialogComponent implements OnInit{
  confirmButtonText = 'Create User';
  openDialog: boolean= true;
  
  constructor(
    public dialogRef: MatDialogRef<EntityEditorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public rowUserEditor: any,
    private alertS:SwalAlertService,
    private membershipTypeService:MembershipTypesService,
    private memberService:MembersService,
    private equipmentTypesService:EquipmentTypesService
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

  membershipDuration !:number;
  listenerSubmitForm(response: any){

    //If response is a memeber
    if(response instanceof Object && "lastName" in response){
      this.membershipTypeService.getMembershipById(response.membershipTypeId).subscribe(resp => {
        this.membershipDuration = resp.model.duration
      })

      const now = new Date();
      const nextMonth = new Date(now);
      nextMonth.setMonth(nextMonth.getMonth() + this.membershipDuration);

      const nowISOString = now.toISOString();
      const nextMonthISOString = nextMonth.toISOString();

      response = {...response, registeredOn: nowISOString, membershipEnd:nextMonthISOString}
      
      if(!!this.rowUserEditor && !!this.rowUserEditor.id){
        this.memberService.updateMember(response, this.rowUserEditor.id).subscribe(resp => {
          if (!resp.hasError){
            this.onNoClick(true);
          }
          else{
            this.alertS.errorAlert('Error', resp.message)
          }
        });
      }
      else{
        this.memberService.newMember(response).subscribe(resp => {
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

    //If response is a equipmentType
    if(response instanceof Object && "description" in response){
      debugger
      if(!!this.rowUserEditor && !!this.rowUserEditor.id){
        this.equipmentTypesService.updateEquipmentType(response, this.rowUserEditor.id).subscribe(resp => {
          if (!resp.hasError){
            this.onNoClick(true);
          }
          else{
            this.alertS.errorAlert('Error', resp.message)
          }
        });
      }
      else{
        this.equipmentTypesService.newEquipmentType(response).subscribe(resp => {
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
    //If response is a membershipType
    if(response instanceof Object && "cost" in response){
      if(!!this.rowUserEditor && !!this.rowUserEditor.id){
        this.membershipTypeService.updateMembershipType(response, this.rowUserEditor.id).subscribe(resp => {
          if (!resp.hasError){
            this.onNoClick(true);
          }
          else{
            this.alertS.errorAlert('Error', resp.message)
          }
        });
      }
      else{
        this.membershipTypeService.newMembershipType(response).subscribe(resp => {
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
  }
  
  
  listenerCancelForm(close: boolean) {
    debugger
    if(close)
    this.openDialog = !close;
      this.onNoClick(false);
  }
}
