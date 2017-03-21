"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var activity_service_1 = require('./../services/activity.service');
var hour_slot_service_1 = require('./../services/hour_slot.service');
var core_1 = require('@angular/core');
var LandingComponent = (function () {
    function LandingComponent(hourSlotService, activityService) {
        this.hourSlotService = hourSlotService;
        this.activityService = activityService;
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.hourSlots = this.hourSlotService.getHourSlots();
    };
    LandingComponent = __decorate([
        core_1.Component({
            selector: 'ld-landing',
            templateUrl: '../../templates/landing.component.html'
        }), 
        __metadata('design:paramtypes', [hour_slot_service_1.HourSlotService, activity_service_1.ActivityService])
    ], LandingComponent);
    return LandingComponent;
}());
exports.LandingComponent = LandingComponent;
//# sourceMappingURL=landing.component.js.map