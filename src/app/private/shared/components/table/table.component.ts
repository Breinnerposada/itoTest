import {AfterViewInit,OnInit ,Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { User } from 'src/app/private/modules/users/models/user.class';
import { UserService } from 'src/app/private/modules/users/services/user.service';
import { UserModalComponent } from 'src/app/private/modules/users/user-modal/user-modal.component';
import { ELEMENT_DATA, PeriodicElement } from './table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  filterUser = {
    user: '',
    email: '',
    firstName: '',
    lastName: ''
  };
  displayedColumns: string[] = ['user', 'firstName', 'lastName', 'email', 'active', 'actions'];
  dataSource:any = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(
    private dialog: MatDialog,
    private userService : UserService,
  ) { }

  ngOnInit(): void {
    this.userService.listUser.subscribe((users:any) => {
      this.dataSource = users;
    });

    this.userService.searchUser.subscribe( userSearch => {
      this.filterUser = {...userSearch}
    })

  }

  openViewUser(user: User) {
    let dialog = this.dialog.open(UserModalComponent, {
      width: '1050px',
      height: '600px',
      data: { readonly: true, user, title: 'Ver Usuario' },
    });
  }

  openEditUser(user: User) {
    let dialog = this.dialog.open(UserModalComponent, {
      width: '1050px',
      height: '600px',
      data: { readonly: false, edit: true, user, title: 'Editar Usuario' },
    });

}

}
