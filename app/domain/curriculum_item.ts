import { Teacher } from './teacher';
import { Util } from './util';
import { Activity } from './activity';
import { Participant } from './participant';
export class CurriculumItem{
    uuid:string=Util.id();
    participant:Participant;
    teacher:Teacher;
    activity:Activity;
    weeklyCount:number;
}