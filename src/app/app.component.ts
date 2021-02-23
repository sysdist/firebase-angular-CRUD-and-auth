import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {MenubarModule} from 'primeng/menubar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Firebase CRUD & auth';

  items: MenuItem[] = [
    {
        label:'Home',
        icon:'pi pi-fw pi-file',
        routerLink:'/home',
    },
    {
        label:'CRUD',
        icon:'pi pi-fw pi-pencil',
        routerLink:'/crud'
    },
    {
        label:'Login',
        icon:'pi pi-fw pi-user',
        routerLink: '/login'
    }
];

}
