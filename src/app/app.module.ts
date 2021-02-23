import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//firebase & ngx-auth modules
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from '../environments/environment';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

//primeng modules
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';

//crud modules
import { LoginTabComponent } from './tabs/login/login-tab.component';
import { CrudComponent} from './tabs/crud/crud.component'
import { CrudDetailComponent } from './tabs/crud/crud-detail.component';
import { CrudCreateComponent } from './tabs/crud/crud-create.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './tabs/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginTabComponent,
    CrudComponent,
    CrudDetailComponent,
    CrudCreateComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase),
    BrowserAnimationsModule,
    TabMenuModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    PanelModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


