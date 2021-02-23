import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Crud, CrudId } from '../models/crud.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private afs: AngularFirestore) { }

  collection = "crud";  //firestore collection name

  //Firestore CRUD actions
  create(data: Crud) {
    return new Promise<CrudId>((resolve, reject) => {
      this.afs
        .collection<Crud>(this.collection)
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  get(id: string): Observable<CrudId | undefined> {
    return this.afs.collection<CrudId>(this.collection).doc(id).valueChanges({ idField: 'id' });
  }

  getAll(): Observable<CrudId[]> {
    return this.afs.collection<CrudId>(this.collection).valueChanges({ idField: 'id' });
  }

  getAllByUID(userId: string): Observable<CrudId[]> {
    return this.afs.collection<CrudId>(this.collection, ref => ref.where("uid", "==", userId)).valueChanges({ idField: 'id' });
  }

  update(item: CrudId, docId: string) {
    return this.afs
      .collection(this.collection)
      .doc(docId)
      .update(item);
  }

  delete(item: CrudId) {
    return this.afs
      .collection(this.collection)
      .doc(item.id)
      .delete();
  }
}
