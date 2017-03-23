import { Column } from './../domain/column';
export interface StandardCrud<T>{
    
    save():void;

    add(p:T):void;

    edit(p:T):void;

    delete(p:T):void;

    title:string;

    subtitle:string;

    cols:Column<any>[];

    source:T[];
    
    selected:T;

    search:string;
}