import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EquipmentType } from 'src/app/core/interfaces/equipment-types';
import { EquipmentTypesService } from 'src/app/core/services/equipment-types.service';
import { InventoryService } from 'src/app/core/services/inventory.service';
import { MembersService } from 'src/app/core/services/members.service';
import { MembershipTypesService } from 'src/app/core/services/membership-types.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { ShoppingService } from 'src/app/core/services/shopping.service';
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
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private alertS:SwalAlertService,
    private membershipTypeService:MembershipTypesService,
    private memberService:MembersService,
    private equipmentTypesService:EquipmentTypesService,
    private shoppingService:ShoppingService,
    private productsService:ProductsService,
    private inventoryService:InventoryService,
  ) {}

  ngOnInit(): void {
    if(!!this.dialogData.rowEntityEditor){
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
      
      if(!!this.dialogData.rowEntityEditor && !!this.dialogData.rowEntityEditor.id){
        this.memberService.updateMember(response, this.dialogData.rowEntityEditor.id).subscribe(resp => {
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
      if(!!this.dialogData.rowEntityEditor && !!this.dialogData.rowEntityEditor.id){
        this.equipmentTypesService.updateEquipmentType(response, this.dialogData.rowEntityEditor.id).subscribe(resp => {
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
      if(!!this.dialogData.rowEntityEditor && !!this.dialogData.rowEntityEditor.id){
        this.membershipTypeService.updateMembershipType(response, this.dialogData.rowEntityEditor.id).subscribe(resp => {
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
    //If response is a Shopping
    if(response instanceof Object && "typeProduct" in response){
      if(!!this.dialogData.rowEntityEditor && !!this.dialogData.rowEntityEditor.id){
        this.shoppingService.EditShopping(response, this.dialogData.rowEntityEditor.id).subscribe(resp => {
          if (!!resp){
            this.onNoClick(true);
          }
          else{
            this.alertS.errorAlert('Error', 'Update failed')
          }
        });
      }
      else{
        this.shoppingService.newShopping(response).subscribe(resp => {
          if (!!resp) {
            this.onNoClick(true);
          }else{
            this.alertS.errorAlert('Error', "Post failed")
          }
        }, error =>{
          this.alertS.errorAlert('Sorry', 'Service not available at the moment, please contact your admin');
          console.log(error.error)
        });
      }
    }
    //If response is a Inventory
    if(response instanceof Object && "lastUpdate" in response){
      if(!!this.dialogData.rowEntityEditor && !!this.dialogData.rowEntityEditor.id){
        this.inventoryService.EditInventory(response, this.dialogData.rowEntityEditor.id).subscribe(resp => {
          if (!!resp){
            this.onNoClick(true);
          }
          else{
            this.alertS.errorAlert('Error', 'Update failed')
          }
        });
      }
      else{
        this.inventoryService.newInventory(response).subscribe(resp => {
          if (!!resp) {
            this.onNoClick(true);
          }else{
            this.alertS.errorAlert('Error', "Post failed")
          }
        }, error =>{
          this.alertS.errorAlert('Sorry', 'Service not available at the moment, please contact your admin');
          console.log(error.error)
        });
      }
    }
    //If response is a Product
    if(response instanceof Object && "expirationDate" in response){
      if(!!this.dialogData.rowEntityEditor && !!this.dialogData.rowEntityEditor.id){
        this.productsService.EditProduct(response, this.dialogData.rowEntityEditor.id).subscribe(resp => {
          if (!!resp){
            this.onNoClick(true);
          }
          else{
            this.alertS.errorAlert('Error', 'Update failed')
          }
        });
      }
      else{
        this.productsService.newProduct(response).subscribe(resp => {
          if (!!resp) {
            this.onNoClick(true);
          }else{
            this.alertS.errorAlert('Error', "Post failed")
          }
        }, error =>{
          this.alertS.errorAlert('Sorry', 'Service not available at the moment, please contact your admin');
          console.log(error.error)
        });
      }
    }



  }
  
  
  listenerCancelForm(close: boolean) {
    if(close)
    this.openDialog = !close;
      this.onNoClick(false);
  }
}
