import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Crud } from 'src/app/shared/models/crud.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-crud-create',
  templateUrl: './crud-create.component.html'
})
export class CrudCreateComponent implements OnInit {

  constructor(private crudService: CrudService, private location: Location, private auth: AuthService) { }

  item: Crud;
  userId: string;

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.auth.user$.subscribe((user) => {
      this.userId = user.uid;
      this.item = { field1: "", uid: user.uid };
    })
  }

  goBack(): void {
    this.location.back();
  }

  save() {
    this.crudService.create(this.item);
    this.goBack()
  }
  
}
