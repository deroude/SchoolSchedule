import { Util } from './util';
export var Room = (function () {
    function Room() {
        this.uuid = Util.id();
        this.restrictedTo = [];
    }
    return Room;
}());
//# sourceMappingURL=room.js.map