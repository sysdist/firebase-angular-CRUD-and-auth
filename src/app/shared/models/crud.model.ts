export interface Crud {
    field1: string;
    uid: string;  //user uid -> reference to owner
}

export interface CrudId extends Crud {
    id: string;
}