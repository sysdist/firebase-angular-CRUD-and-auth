import { Component, OnInit } from '@angular/core';
import { filter, switchMap } from 'rxjs/operators';
import { Crud, CrudId } from 'src/app/shared/models/crud.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CrudService } from 'src/app/shared/services/crud.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html'
})
export class CrudComponent implements OnInit {

  constructor(private crudService: CrudService, private auth: AuthService) { }

  items: CrudId[];

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.auth.user$.pipe(
      filter(user => user !== null),
      switchMap(user => {
        return this.crudService.getAllByUID(user.uid)
      })
    ).subscribe((data) => {
      this.items = data;
    })
  }

  getData() {
    this.crudService.getAll().subscribe(data => {
      this.items = data;
    })
  }

  deleteItem(item: CrudId) {
    this.crudService.delete(item)
  }

}
