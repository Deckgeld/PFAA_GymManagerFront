import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { City } from 'src/app/core/interfaces/city';
import { MembershipType } from 'src/app/core/interfaces/membership-types';
import { CityService } from 'src/app/core/services/city.service';
import { MembershipTypesService } from 'src/app/core/services/membership-types.service';

import { LoadCitiesAction } from 'src/state/cities.actions';

@Component({
  selector: 'app-create-update-form',
  templateUrl: './create-update-form.component.html',
  styleUrls: ['./create-update-form.component.scss']
})
export class CreateUpdateFormComponent implements OnChanges {
  @Input() confirmButtonText!: string;
  @Output() emmitterSubmitForm: EventEmitter<any> = new EventEmitter()

  @Input() rowEntityForm?: any;
  @Output() emmitterCancelForm: EventEmitter<boolean> = new EventEmitter();

  //@Select(CitiesState.getCities) cities$!: Observable<City[]>;
  cities !: City[];
  memberships !: MembershipType[];

  formUser!: FormGroup;
  defaultFields = {
    name: new FormControl('', [Validators.required]),
  }
  equipmentTypeFields = {
    description: new FormControl('', Validators.required)
  }
  membershipTypeFields = {
    cost: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
  }
  membersFields = {
    lastName: new FormControl('', Validators.required),
    birthDay: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    allowNewsLetter: new FormControl('', Validators.required),
    cityId: new FormControl('', Validators.required),
    membershipTypeId: new FormControl('', Validators.required),
  }

  checked = false;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private cityService: CityService,
    private membershipService: MembershipTypesService
  ) { /*store.dispatch(new LoadCitiesAction());*/ }

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
    let userFields = { ...this.defaultFields }

    switch (this.confirmButtonText) {
      case "EquipmentType":
        userFields = { ...this.defaultFields, ...this.equipmentTypeFields }
        break;
      case "MembershipType":
        userFields = { ...this.defaultFields, ...this.membershipTypeFields }
        break;
      case "Members":
        userFields = { ...this.defaultFields, ...this.membersFields }
        break;
    }
    this.formUser = this.fb.group(
      userFields
    );
    this.loadSelects();
  }

  loadSelects() {
    this.cityService.getCities().subscribe(resp => {
      this.cities = resp.model
    })
    this.membershipService.getMembershipTypes().subscribe(resp => {
      this.memberships = resp.model
    })
  }

  onSubmitForm() {
    let request = { ...this.formUser.value }
    if(this.confirmButtonText == "Members"){
      request.birthDay = request.birthDay.toISOString();
    }if(this.confirmButtonText == "MembershipType"){
      request = {...request, createdOn: new Date().toISOString}
    }
    this.emmitterSubmitForm.emit(request);
  }

  cancelBtn() {
    this.emmitterCancelForm.emit(true);
  }


}
