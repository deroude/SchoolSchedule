/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../app/app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/router/src/router_state';
import * as import9 from '@angular/router/src/router';
import * as import10 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import11 from '../../app/services/schedule.service';
import * as import12 from '../node_modules/@angular/router/src/directives/router_link_active.ngfactory';
import * as import13 from '@angular/core/src/linker/query_list';
import * as import14 from '../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import15 from '@angular/core/src/linker/view_container';
import * as import16 from '../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from '@angular/common/src/location/location_strategy';
import * as import19 from '@angular/router/src/router_outlet_map';
import * as import20 from '@angular/core/src/linker/component_factory_resolver';
import * as import21 from '@angular/router/src/directives/router_link';
import * as import22 from '@angular/router/src/directives/router_link_active';
import * as import23 from '@angular/router/src/directives/router_outlet';
export var Wrapper_AppComponent = (function () {
    function Wrapper_AppComponent(p0, p1, p2, p3) {
        this._changed = false;
        this.context = new import0.AppComponent(p0, p1, p2, p3);
    }
    Wrapper_AppComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AppComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AppComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_AppComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AppComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'window:beforeunload')) {
            var pd_sub_0 = (this.context.beforeUnloadHander() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    Wrapper_AppComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AppComponent;
}());
var renderType_AppComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_AppComponent_Host0 = (function (_super) {
    __extends(View_AppComponent_Host0, _super);
    function View_AppComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent_Host0, renderType_AppComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'sch-app', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AppComponent0(this.viewUtils, this, 0, this._el_0);
        this._AppComponent_0_3 = new Wrapper_AppComponent(this.injectorGet(import8.ActivatedRoute, this.parentIndex), this.injectorGet(import9.Router, this.parentIndex), this.injectorGet(import10.DomSanitizer, this.parentIndex), this.injectorGet(import11.ScheduleService, this.parentIndex));
        this.compView_0.create(this._AppComponent_0_3.context);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'beforeunload', 'window'), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), [disposable_0]);
        return new import7.ComponentRef_(0, this, this._el_0, this._AppComponent_0_3.context);
    };
    View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AppComponent) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AppComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AppComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent_Host0.prototype.handleEvent_0 = function (eventName, $event) {
        this.compView_0.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._AppComponent_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_AppComponent_Host0;
}(import1.AppView));
export var AppComponentNgFactory = new import7.ComponentFactory('sch-app', View_AppComponent_Host0, import0.AppComponent);
var styles_AppComponent = [];
var renderType_AppComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_AppComponent, {});
export var View_AppComponent0 = (function (_super) {
    __extends(View_AppComponent0, _super);
    function View_AppComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent0, renderType_AppComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'nav', new import3.InlineArray2(2, 'class', 'navbar navbar-toggleable-md fixed-top navbar-light bg-primary'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'container'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'button', new import3.InlineArray16(14, 'aria-controls', 'navbarResponsive', 'aria-expanded', 'false', 'aria-label', 'Toggle navigation', 'class', 'navbar-toggler navbar-toggler-right', 'data-target', '#navbarResponsive', 'data-toggle', 'collapse', 'type', 'button'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'span', new import3.InlineArray2(2, 'class', 'navbar-toggler-icon'), null);
        this._text_7 = this.renderer.createText(this._el_4, '\n  ', null);
        this._text_8 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_2, 'a', new import3.InlineArray4(4, 'class', 'navbar-brand', 'href', '/'), null);
        this._text_10 = this.renderer.createText(this._el_9, 'School Scheduler', null);
        this._text_11 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray4(4, 'class', 'collapse navbar-collapse', 'id', 'navbarResponsive'), null);
        this._text_13 = this.renderer.createText(this._el_12, '\n            ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_12, 'ul', new import3.InlineArray2(2, 'class', 'navbar-nav mt-1'), null);
        this._text_15 = this.renderer.createText(this._el_14, '\n                ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_14, 'li', new import3.InlineArray4(4, 'class', 'nav-item', 'routerLinkActive', 'active'), null);
        this._RouterLinkActive_16_3 = new import12.Wrapper_RouterLinkActive(this.parentView.injectorGet(import9.Router, this.parentIndex), new import17.ElementRef(this._el_16), this.renderer, this.ref);
        this._query_RouterLink_16_0 = new import13.QueryList();
        this._query_RouterLinkWithHref_16_1 = new import13.QueryList();
        this._text_17 = this.renderer.createText(this._el_16, '\n                    ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_16, 'a', new import3.InlineArray4(4, 'class', 'nav-link', 'routerLink', '/schedule'), null);
        this._RouterLinkWithHref_18_3 = new import14.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import9.Router, this.parentIndex), this.parentView.injectorGet(import8.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import18.LocationStrategy, this.parentIndex));
        this._text_19 = this.renderer.createText(this._el_18, 'Schedule', null);
        this._text_20 = this.renderer.createText(this._el_16, '\n                ', null);
        this._text_21 = this.renderer.createText(this._el_14, '\n                ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_14, 'li', new import3.InlineArray2(2, 'class', 'nav-item dropdown'), null);
        this._text_23 = this.renderer.createText(this._el_22, '\n                    ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_22, 'a', new import3.InlineArray16(10, 'aria-expanded', 'false', 'aria-haspopup', 'true', 'class', 'nav-link dropdown-toggle', 'data-toggle', 'dropdown', 'id', 'schoolDropdown'), null);
        this._text_25 = this.renderer.createText(this._el_24, 'School configuration', null);
        this._text_26 = this.renderer.createText(this._el_22, '\n                    ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_22, 'div', new import3.InlineArray4(4, 'aria-labelledby', 'schoolDropdown', 'class', 'dropdown-menu'), null);
        this._text_28 = this.renderer.createText(this._el_27, '\n                        ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_27, 'a', new import3.InlineArray4(4, 'class', 'dropdown-item', 'routerLink', '/school/activity'), null);
        this._RouterLinkWithHref_29_3 = new import14.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import9.Router, this.parentIndex), this.parentView.injectorGet(import8.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import18.LocationStrategy, this.parentIndex));
        this._text_30 = this.renderer.createText(this._el_29, 'Activities', null);
        this._text_31 = this.renderer.createText(this._el_27, '\n                        ', null);
        this._el_32 = import3.createRenderElement(this.renderer, this._el_27, 'a', new import3.InlineArray4(4, 'class', 'dropdown-item', 'routerLink', '/school/hourSlot'), null);
        this._RouterLinkWithHref_32_3 = new import14.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import9.Router, this.parentIndex), this.parentView.injectorGet(import8.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import18.LocationStrategy, this.parentIndex));
        this._text_33 = this.renderer.createText(this._el_32, 'Hour slots', null);
        this._text_34 = this.renderer.createText(this._el_27, '\n                        ', null);
        this._el_35 = import3.createRenderElement(this.renderer, this._el_27, 'a', new import3.InlineArray4(4, 'class', 'dropdown-item', 'routerLink', '/school/teacher'), null);
        this._RouterLinkWithHref_35_3 = new import14.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import9.Router, this.parentIndex), this.parentView.injectorGet(import8.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import18.LocationStrategy, this.parentIndex));
        this._text_36 = this.renderer.createText(this._el_35, 'Teachers', null);
        this._text_37 = this.renderer.createText(this._el_27, '\n                        ', null);
        this._el_38 = import3.createRenderElement(this.renderer, this._el_27, 'a', new import3.InlineArray4(4, 'class', 'dropdown-item', 'routerLink', '/school/room'), null);
        this._RouterLinkWithHref_38_3 = new import14.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import9.Router, this.parentIndex), this.parentView.injectorGet(import8.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import18.LocationStrategy, this.parentIndex));
        this._text_39 = this.renderer.createText(this._el_38, 'Rooms', null);
        this._text_40 = this.renderer.createText(this._el_27, '\n                        ', null);
        this._el_41 = import3.createRenderElement(this.renderer, this._el_27, 'a', new import3.InlineArray4(4, 'class', 'dropdown-item', 'routerLink', '/school/participant'), null);
        this._RouterLinkWithHref_41_3 = new import14.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import9.Router, this.parentIndex), this.parentView.injectorGet(import8.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import18.LocationStrategy, this.parentIndex));
        this._text_42 = this.renderer.createText(this._el_41, 'Student groups', null);
        this._text_43 = this.renderer.createText(this._el_27, '\n                        ', null);
        this._el_44 = import3.createRenderElement(this.renderer, this._el_27, 'a', new import3.InlineArray4(4, 'class', 'dropdown-item', 'routerLink', '/school/curriculum'), null);
        this._RouterLinkWithHref_44_3 = new import14.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import9.Router, this.parentIndex), this.parentView.injectorGet(import8.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import18.LocationStrategy, this.parentIndex));
        this._text_45 = this.renderer.createText(this._el_44, 'Curriculum', null);
        this._text_46 = this.renderer.createText(this._el_27, '\n                        ', null);
        this._el_47 = import3.createRenderElement(this.renderer, this._el_27, 'a', new import3.InlineArray4(4, 'class', 'dropdown-item', 'routerLink', '/school/scheduleTemplate'), null);
        this._RouterLinkWithHref_47_3 = new import14.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import9.Router, this.parentIndex), this.parentView.injectorGet(import8.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import18.LocationStrategy, this.parentIndex));
        this._text_48 = this.renderer.createText(this._el_47, 'Schedule template', null);
        this._text_49 = this.renderer.createText(this._el_27, '\n                    ', null);
        this._text_50 = this.renderer.createText(this._el_22, '\n                ', null);
        this._text_51 = this.renderer.createText(this._el_14, '\n            ', null);
        this._text_52 = this.renderer.createText(this._el_12, '\n            ', null);
        this._el_53 = import3.createRenderElement(this.renderer, this._el_12, 'div', new import3.InlineArray2(2, 'class', 'navbar-nav ml-auto'), null);
        this._text_54 = this.renderer.createText(this._el_53, '\n                ', null);
        this._el_55 = import3.createRenderElement(this.renderer, this._el_53, 'label', new import3.InlineArray2(2, 'class', 'btn btn-outline-primary btn-file ml-2 mt-2'), null);
        this._text_56 = this.renderer.createText(this._el_55, '\n                    ', null);
        this._el_57 = import3.createRenderElement(this.renderer, this._el_55, 'i', new import3.InlineArray2(2, 'class', 'fa fa-upload'), null);
        this._text_58 = this.renderer.createText(this._el_55, ' Upload config ', null);
        this._el_59 = import3.createRenderElement(this.renderer, this._el_55, 'input', new import3.InlineArray8(6, 'hidden', '', 'id', 'file', 'type', 'file'), null);
        this._text_60 = this.renderer.createText(this._el_55, '\n                ', null);
        this._text_61 = this.renderer.createText(this._el_53, '\n                ', null);
        this._el_62 = import3.createRenderElement(this.renderer, this._el_53, 'button', new import3.InlineArray2(2, 'class', 'btn btn-outline-primary ml-2 mt-2 mb-2'), null);
        this._el_63 = import3.createRenderElement(this.renderer, this._el_62, 'i', new import3.InlineArray2(2, 'class', 'fa fa-download'), null);
        this._text_64 = this.renderer.createText(this._el_62, ' Save current config', null);
        this._text_65 = this.renderer.createText(this._el_53, '\n            ', null);
        this._text_66 = this.renderer.createText(this._el_12, '\n        ', null);
        this._text_67 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_68 = this.renderer.createText(this._el_0, '\n', null);
        this._text_69 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_70 = import3.createRenderElement(this.renderer, parentRenderNode, 'router-outlet', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_70 = new import15.ViewContainer(70, null, this, this._el_70);
        this._RouterOutlet_70_5 = new import16.Wrapper_RouterOutlet(this.parentView.injectorGet(import19.RouterOutletMap, this.parentIndex), this._vc_70.vcRef, this.parentView.injectorGet(import20.ComponentFactoryResolver, this.parentIndex), null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_18, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_18));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_29, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_29));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_32, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_32));
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_35, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_35));
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_38, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_38));
        var disposable_5 = import3.subscribeToRenderElement(this, this._el_41, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_41));
        var disposable_6 = import3.subscribeToRenderElement(this, this._el_44, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_44));
        var disposable_7 = import3.subscribeToRenderElement(this, this._el_47, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_47));
        var disposable_8 = import3.subscribeToRenderElement(this, this._el_59, new import3.InlineArray2(2, 'change', null), this.eventHandler(this.handleEvent_59));
        var disposable_9 = import3.subscribeToRenderElement(this, this._el_62, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_62));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._text_49,
            this._text_50,
            this._text_51,
            this._text_52,
            this._el_53,
            this._text_54,
            this._el_55,
            this._text_56,
            this._el_57,
            this._text_58,
            this._el_59,
            this._text_60,
            this._text_61,
            this._el_62,
            this._el_63,
            this._text_64,
            this._text_65,
            this._text_66,
            this._text_67,
            this._text_68,
            this._text_69,
            this._el_70
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6,
            disposable_7,
            disposable_8,
            disposable_9
        ]);
        return null;
    };
    View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import21.RouterLinkWithHref) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._RouterLinkWithHref_18_3.context;
        }
        if (((token === import22.RouterLinkActive) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._RouterLinkActive_16_3.context;
        }
        if (((token === import21.RouterLinkWithHref) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._RouterLinkWithHref_29_3.context;
        }
        if (((token === import21.RouterLinkWithHref) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 33)))) {
            return this._RouterLinkWithHref_32_3.context;
        }
        if (((token === import21.RouterLinkWithHref) && ((35 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._RouterLinkWithHref_35_3.context;
        }
        if (((token === import21.RouterLinkWithHref) && ((38 <= requestNodeIndex) && (requestNodeIndex <= 39)))) {
            return this._RouterLinkWithHref_38_3.context;
        }
        if (((token === import21.RouterLinkWithHref) && ((41 <= requestNodeIndex) && (requestNodeIndex <= 42)))) {
            return this._RouterLinkWithHref_41_3.context;
        }
        if (((token === import21.RouterLinkWithHref) && ((44 <= requestNodeIndex) && (requestNodeIndex <= 45)))) {
            return this._RouterLinkWithHref_44_3.context;
        }
        if (((token === import21.RouterLinkWithHref) && ((47 <= requestNodeIndex) && (requestNodeIndex <= 48)))) {
            return this._RouterLinkWithHref_47_3.context;
        }
        if (((token === import23.RouterOutlet) && (70 === requestNodeIndex))) {
            return this._RouterOutlet_70_5.context;
        }
        return notFoundResult;
    };
    View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_16_0_0 = 'active';
        this._RouterLinkActive_16_3.check_routerLinkActive(currVal_16_0_0, throwOnChange, false);
        this._RouterLinkActive_16_3.ngDoCheck(this, this._el_16, throwOnChange);
        var currVal_18_0_0 = '/schedule';
        this._RouterLinkWithHref_18_3.check_routerLink(currVal_18_0_0, throwOnChange, false);
        this._RouterLinkWithHref_18_3.ngDoCheck(this, this._el_18, throwOnChange);
        var currVal_29_0_0 = '/school/activity';
        this._RouterLinkWithHref_29_3.check_routerLink(currVal_29_0_0, throwOnChange, false);
        this._RouterLinkWithHref_29_3.ngDoCheck(this, this._el_29, throwOnChange);
        var currVal_32_0_0 = '/school/hourSlot';
        this._RouterLinkWithHref_32_3.check_routerLink(currVal_32_0_0, throwOnChange, false);
        this._RouterLinkWithHref_32_3.ngDoCheck(this, this._el_32, throwOnChange);
        var currVal_35_0_0 = '/school/teacher';
        this._RouterLinkWithHref_35_3.check_routerLink(currVal_35_0_0, throwOnChange, false);
        this._RouterLinkWithHref_35_3.ngDoCheck(this, this._el_35, throwOnChange);
        var currVal_38_0_0 = '/school/room';
        this._RouterLinkWithHref_38_3.check_routerLink(currVal_38_0_0, throwOnChange, false);
        this._RouterLinkWithHref_38_3.ngDoCheck(this, this._el_38, throwOnChange);
        var currVal_41_0_0 = '/school/participant';
        this._RouterLinkWithHref_41_3.check_routerLink(currVal_41_0_0, throwOnChange, false);
        this._RouterLinkWithHref_41_3.ngDoCheck(this, this._el_41, throwOnChange);
        var currVal_44_0_0 = '/school/curriculum';
        this._RouterLinkWithHref_44_3.check_routerLink(currVal_44_0_0, throwOnChange, false);
        this._RouterLinkWithHref_44_3.ngDoCheck(this, this._el_44, throwOnChange);
        var currVal_47_0_0 = '/school/scheduleTemplate';
        this._RouterLinkWithHref_47_3.check_routerLink(currVal_47_0_0, throwOnChange, false);
        this._RouterLinkWithHref_47_3.ngDoCheck(this, this._el_47, throwOnChange);
        this._RouterOutlet_70_5.ngDoCheck(this, this._el_70, throwOnChange);
        this._vc_70.detectChangesInNestedViews(throwOnChange);
        if (!throwOnChange) {
            if (this._query_RouterLink_16_0.dirty) {
                this._query_RouterLink_16_0.reset([]);
                this._RouterLinkActive_16_3.context.links = this._query_RouterLink_16_0;
                this._query_RouterLink_16_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_16_1.dirty) {
                this._query_RouterLinkWithHref_16_1.reset([this._RouterLinkWithHref_18_3.context]);
                this._RouterLinkActive_16_3.context.linksWithHrefs = this._query_RouterLinkWithHref_16_1;
                this._query_RouterLinkWithHref_16_1.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_16_3.context.ngAfterContentInit();
            }
        }
        this._RouterLinkWithHref_18_3.checkHost(this, this, this._el_18, throwOnChange);
        this._RouterLinkWithHref_29_3.checkHost(this, this, this._el_29, throwOnChange);
        this._RouterLinkWithHref_32_3.checkHost(this, this, this._el_32, throwOnChange);
        this._RouterLinkWithHref_35_3.checkHost(this, this, this._el_35, throwOnChange);
        this._RouterLinkWithHref_38_3.checkHost(this, this, this._el_38, throwOnChange);
        this._RouterLinkWithHref_41_3.checkHost(this, this, this._el_41, throwOnChange);
        this._RouterLinkWithHref_44_3.checkHost(this, this, this._el_44, throwOnChange);
        this._RouterLinkWithHref_47_3.checkHost(this, this, this._el_47, throwOnChange);
    };
    View_AppComponent0.prototype.destroyInternal = function () {
        this._vc_70.destroyNestedViews();
        this._RouterLinkWithHref_18_3.ngOnDestroy();
        this._RouterLinkActive_16_3.ngOnDestroy();
        this._RouterLinkWithHref_29_3.ngOnDestroy();
        this._RouterLinkWithHref_32_3.ngOnDestroy();
        this._RouterLinkWithHref_35_3.ngOnDestroy();
        this._RouterLinkWithHref_38_3.ngOnDestroy();
        this._RouterLinkWithHref_41_3.ngOnDestroy();
        this._RouterLinkWithHref_44_3.ngOnDestroy();
        this._RouterLinkWithHref_47_3.ngOnDestroy();
        this._RouterOutlet_70_5.ngOnDestroy();
    };
    View_AppComponent0.prototype.handleEvent_18 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_18_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_AppComponent0.prototype.handleEvent_29 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_29_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_AppComponent0.prototype.handleEvent_32 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_32_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_AppComponent0.prototype.handleEvent_35 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_35_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_AppComponent0.prototype.handleEvent_38 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_38_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_AppComponent0.prototype.handleEvent_41 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_41_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_AppComponent0.prototype.handleEvent_44 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_44_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_AppComponent0.prototype.handleEvent_47 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_47_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_AppComponent0.prototype.handleEvent_59 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'change')) {
            var pd_sub_0 = (this.context.fileChanged($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AppComponent0.prototype.handleEvent_62 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.downloadConfig() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AppComponent0;
}(import1.AppView));
//# sourceMappingURL=app.component.ngfactory.js.map