import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ActualityAdminComponent } from './actuality-admin/actuality-admin.component';
import { DocumentAdminComponent } from './document-admin/document-admin.component';
import { LinksAdminComponent } from './links-admin/links-admin.component';
import { FolderAdminComponent } from './folder-admin/folder-admin.component';
import { MaterialModule } from '../material/material.module';
import { UsersAdminComponent } from './users-admin/users-admin.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import * as alertify from 'alertifyjs'
import { ActualitiesService } from '../services/actualities.service';
import { DocumentsService } from '../services/documents.service';
import { LinksService } from '../services/links.service';
import { UsersService } from '../services/users.service';
import { FoldersService } from '../services/folders.service';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { ActualityCrudComponent } from './actuality-crud/actuality-crud.component';
import { FolderCrudComponent } from './folder-crud/folder-crud.component';
import { LinksCrudComponent } from './links-crud/links-crud.component';
import { DocumentUpdateComponent } from './document-update/document-update.component';
import { DocumentAddComponent } from './document-add/document-add.component';

@NgModule({
  declarations: [
    AdminComponent,
    HomeAdminComponent,
    ActualityAdminComponent,
    DocumentAdminComponent,
    LinksAdminComponent,
    UsersAdminComponent,
    FolderAdminComponent,
    UserCrudComponent,
    ActualityCrudComponent,
    FolderCrudComponent,
    LinksCrudComponent,
    DocumentUpdateComponent,
    DocumentAddComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ActualitiesService,
    DocumentsService,
    LinksService,
    UsersService,
    FoldersService,
  ],
})

export class AdminModule { }
