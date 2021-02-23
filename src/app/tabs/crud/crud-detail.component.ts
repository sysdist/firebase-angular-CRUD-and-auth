import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Crud, CrudId } from 'src/app/shared/models/crud.model';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-crud-detail',
  templateUrl: './crud-detail.component.html'
})
export class CrudDetailComponent implements OnInit {

  constructor(private crudService: CrudService, private route: ActivatedRoute, private location: Location) { }

  docId: string = "";
  item: CrudId;

  ngOnInit(): void {
    this.init();
  }

  init() {
    if (this.route.snapshot.paramMap.get('id'))
      this.getData();
  }

  getData() {
    this.docId = this.route.snapshot.paramMap.get('id') || "";
    this.crudService.get(this.docId).subscribe(data => {
      if (data) this.item = data;
    })
  }

  goBack(): void {
    this.location.back();
  }

  save() {
      this.crudService.update(this.item, this.item.id);
      this.goBack();
  }
}
