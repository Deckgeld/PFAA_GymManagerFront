import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.scss']
})
export class StoreFormComponent implements OnChanges {
  @Input() confirmButtonText!: string;
  @Output() emmitterSubmitForm: EventEmitter<any> = new EventEmitter()

  @Input() rowEntityForm?: any;
  @Output() emmitterCancelForm: EventEmitter<boolean> = new EventEmitter();

  formUser!: FormGroup;
  shoppingFields = {
    product: new FormControl('', [Validators.required]),
    typeProduct: new FormControl('', [Validators.required]),
    user: new FormControl('', [Validators.required]),
    member: new FormControl('', [Validators.required]),
  }
  productFields = {
    name: new FormControl('', [Validators.required]),
    type: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    expirationDate: new FormControl('', Validators.required),
  }
  inventoryFields = {
    name: new FormControl('', [Validators.required]),
    color: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
  }

  checked = false;

  constructor(
    private fb: FormBuilder
  ) {  }

  ngOnChanges(changes: SimpleChanges): void {
    const { rowEntityForm } = changes;

    this.initForm();

    if (!!rowEntityForm?.currentValue) {
      this.loadEntityInForm(rowEntityForm.currentValue);
    }
  }

  loadEntityInForm(currentValue: any) {
    this.formUser.patchValue(currentValue);
  }

  initForm() {
    let userFields = {};

    switch (this.confirmButtonText) {
      case "shopping":
        userFields = { ...this.shoppingFields }
        break;
      case "product":
        userFields = { ...this.productFields }
        break;
      case "inventory":
        userFields = { ...this.inventoryFields }
        break;
    }
    this.formUser = this.fb.group(
      userFields
    );
  }

  onSubmitForm() {
    let request = { ...this.formUser.value }
    if(this.confirmButtonText == "shopping"){
      const nowISOString = new Date().toISOString();
      request = {...request, createdOn: nowISOString}
    }if(this.confirmButtonText == "product"){
      request.expirationDate = request.expirationDate.toISOString();
    }if(this.confirmButtonText == "inventory"){
      const nowISOString = new Date().toISOString();
      request = {...request, lastUpdate: nowISOString}
    }
    this.emmitterSubmitForm.emit(request);
  }

  cancelBtn() {
    this.emmitterCancelForm.emit(true);
  }
}