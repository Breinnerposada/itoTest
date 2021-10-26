import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserModalComponent } from 'src/app/private/modules/users/user-modal/user-modal.component';
import { UserService } from 'src/app/private/modules/users/services/user.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Input() title?: string;

  public filtersForm!: FormGroup;

  constructor(
    private dialog: MatDialog,
    private formBulider: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit(): void {

    this.filtersForm = this.formBulider.group({
      email: [''],
      user: [''],
      firstName: [''],
      lastName: [''],
    });

    this.filtersForm.valueChanges.subscribe((values) => {
      this.userService.searchUser.emit(values);
    });
  }


  cleanFilters() {
    this.filtersForm.patchValue({
      email: '',
      user: '',
      firstName: '',
      lastName: '',
    });
  }


  createUser() {
    let dialog = this.dialog.open(UserModalComponent, {
      width: '1050px',
      height: '600px',
    });
  }
}
