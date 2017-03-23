export interface Column<T>{
    type:string;
    name:string;
    title:string;
    required:boolean;
    autofocus:boolean;
    per10:number;
    source?:T[];
    sourceLabel?:string;
    sourceId?:string;
}