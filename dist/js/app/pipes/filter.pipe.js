var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Pipe } from '@angular/core';
export var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (source, filter) {
        if (!filter || filter.length === 0)
            return source;
        return source.filter(function (s) {
            if (s.name) {
                return s.name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
            }
            var re = false;
            var canSearch = false;
            for (var property in s) {
                if (s.hasOwnProperty(property) && s[property]["name"]) {
                    re = re || (s[property]["name"].toLowerCase().indexOf(filter.toLowerCase()) > -1);
                    canSearch = true;
                }
            }
            return !canSearch || re;
        });
    };
    FilterPipe = __decorate([
        Pipe({ name: 'filter' }), 
        __metadata('design:paramtypes', [])
    ], FilterPipe);
    return FilterPipe;
}());
//# sourceMappingURL=filter.pipe.js.map