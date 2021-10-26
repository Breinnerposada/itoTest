import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { UserValidator } from 'src/app/private/shared/validators';
import { User } from '../models/user.class';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {

  readonly = false;
  editForm = false;
  title = 'Creación de usuario';
  public userForm!: FormGroup;

  true = true;
  false = false;

  constructor(
    private formBulider: FormBuilder,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBulider.group({
      id: [],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ],
      user: [null, [Validators.required, Validators.maxLength(20), UserValidator]],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      active: [true, Validators.required],
    });

    if (this.data) {
      this.readonly = this.data.readonly;
      this.editForm = this.data.edit;
      this.title = this.data.title;
      this.userForm.patchValue({ ...this.data.user });
      this.check();
    }
  }

  handleSubmit() {
    if (this.userForm.invalid) {
      this.openInfo('Formulario Inválido verifique los campos requeridos')
      return;
    }

    if (this.editForm) {
      this.userService.update(this.userForm.value);
      this.dialog.closeAll()
      this.openInfo('Usuario Actualizado exitosamente')
    } else {
      this.create();
    }

    this.userForm.reset();
  }

  create() {
    const user: User = new User(this.userForm.value);
    this.userService.create(user);
  }

  check() {
    if (this.readonly) {
      this.userForm.disable();
    }
  }



  openInfo(
    message: string,
    action?: string
  ): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
