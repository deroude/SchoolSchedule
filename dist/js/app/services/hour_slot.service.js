var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
export var HourSlotService = (function () {
    function HourSlotService() {
    }
    HourSlotService.prototype.getHourSlots = function () {
        return [
            { start: 8, end: 9 },
            { start: 9, end: 10 },
            { start: 10, end: 11 },
            { start: 11, end: 12 },
            { start: 12, end: 13 },
            { start: 13, end: 14 },
            { start: 14, end: 15 },
            { start: 15, end: 16 },
            { start: 16, end: 17 },
            { start: 17, end: 18 },
        ];
    };
    HourSlotService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], HourSlotService);
    return HourSlotService;
}());
//# sourceMappingURL=hour_slot.service.js.map