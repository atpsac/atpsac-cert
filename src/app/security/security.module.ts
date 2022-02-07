import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import { SecurityRoutingModule } from './security-routing.module';
import { UserListComponent } from './user/user-list/user-list.component';
import { MatSortModule } from '@angular/material/sort';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar'; 

import {UtilsModule} from '../utils/utils.module';
import { CreateUserComponent } from './user/modal/create-user/create-user.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserInfoComponent } from './user/modal/user-info/user-info.component';
import { EditUserComponent } from './user/modal/edit-user/edit-user.component';
import { DeleteUserComponent } from './user/modal/delete-user/delete-user.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoadingOverlayComponent } from '../utils/components/loading-overlay/loading-overlay.component';


@NgModule({
  declarations: [UserListComponent,  CreateUserComponent, UserFormComponent, UserInfoComponent, EditUserComponent, DeleteUserComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    MatTableModule,
    MatSortModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule,
    UtilsModule,
    MatDialogModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatProgressBarModule,
    
  ],
  entryComponents: []
})
export class SecurityModule { }
