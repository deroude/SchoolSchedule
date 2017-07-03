import { Util } from './util';
export const DAYS: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
export class HourSlot {
    uuid: string = Util.id();
    start: number;
    end: number;
    day: string;
    name: string;
}
export class HourSlotFactory {
    static make(start: string, end: string, day: string): HourSlot {
        var d: number = 24 * 60 * DAYS.indexOf(day);
        var re: HourSlot = new HourSlot();
        var s: string[] = start.split(":");
        re.start = d + Number(s[0]) * 60 + Number(s[1]);
        s = end.split(":");
        re.end = d + Number(s[0]) * 60 + Number(s[1]);
        re.day = day;
        re.name = start + "-" + end;
        return re;
    }
}