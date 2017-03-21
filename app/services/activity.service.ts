import { Activity } from './../domain/activity';
import { Injectable } from '@angular/core';

@Injectable()
export class ActivityService {

    constructor() { }

    public getActivities():Activity[]{
        return [
            {name:"Math"},
            {name:"Biology"},
            {name:"Science"},
            {name:"Geography"},
            {name:"English"},
            {name:"History"},
            {name:"Art"},
            {name:"Music"},
            {name:"Math"},
            {name:"Math"},
            {name:"Math"},
        ];
    }
}