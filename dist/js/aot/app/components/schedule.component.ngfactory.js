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
import * as import0 from '../../../app/components/schedule.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/services/schedule.service';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '@angular/core/src/change_detection/change_detection_util';
import * as import11 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import12 from '@angular/core/src/linker/template_ref';
import * as import13 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import14 from '@angular/common/src/directives/ng_for';
export var Wrapper_ScheduleComponent = (function () {
    function Wrapper_ScheduleComponent(p0) {
        this._changed = false;
        this.context = new import0.ScheduleComponent(p0);
    }
    Wrapper_ScheduleComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ScheduleComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_ScheduleComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_ScheduleComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ScheduleComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ScheduleComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ScheduleComponent;
}());
var renderType_ScheduleComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_ScheduleComponent_Host0 = (function (_super) {
    __extends(View_ScheduleComponent_Host0, _super);
    function View_ScheduleComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_ScheduleComponent_Host0, renderType_ScheduleComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_ScheduleComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'sch-schedule', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_ScheduleComponent0(this.viewUtils, this, 0, this._el_0);
        this._ScheduleComponent_0_3 = new Wrapper_ScheduleComponent(this.injectorGet(import8.ScheduleService, this.parentIndex));
        this.compView_0.create(this._ScheduleComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._ScheduleComponent_0_3.context);
    };
    View_ScheduleComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ScheduleComponent) && (0 === requestNodeIndex))) {
            return this._ScheduleComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_ScheduleComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ScheduleComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ScheduleComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_ScheduleComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ScheduleComponent_Host0;
}(import1.AppView));
export var ScheduleComponentNgFactory = new import7.ComponentFactory('sch-schedule', View_ScheduleComponent_Host0, import0.ScheduleComponent);
var styles_ScheduleComponent = [];
var View_ScheduleComponent1 = (function (_super) {
    __extends(View_ScheduleComponent1, _super);
    function View_ScheduleComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_ScheduleComponent1, renderType_ScheduleComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_5 = import10.UNINITIALIZED;
        this._expr_6 = import10.UNINITIALIZED;
    }
    View_ScheduleComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n          ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), [disposable_0]);
        return null;
    };
    View_ScheduleComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5 = (this.parentView.context.selectedParticipant && (this.context.$implicit.uuid === this.parentView.context.selectedParticipant.uuid));
        if (import3.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_2, 'table-info', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = import3.inlineInterpolate(1, '', this.context.$implicit.name, '');
        if (import3.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setText(this._text_3, currVal_6);
            this._expr_6 = currVal_6;
        }
    };
    View_ScheduleComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ScheduleComponent1.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.display(this.context.$implicit.uuid, 'participant') !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ScheduleComponent1;
}(import1.AppView));
var View_ScheduleComponent2 = (function (_super) {
    __extends(View_ScheduleComponent2, _super);
    function View_ScheduleComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_ScheduleComponent2, renderType_ScheduleComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_20 = import10.UNINITIALIZED;
        this._expr_21 = import10.UNINITIALIZED;
        this._expr_22 = import10.UNINITIALIZED;
        this._expr_23 = import10.UNINITIALIZED;
        this._expr_24 = import10.UNINITIALIZED;
        this._expr_25 = import10.UNINITIALIZED;
    }
    View_ScheduleComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'th', new import3.InlineArray2(2, 'scope', 'row'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_9 = this.renderer.createText(this._el_8, '', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, '', null);
        this._text_13 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_15 = this.renderer.createText(this._el_14, '', null);
        this._text_16 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_18 = this.renderer.createText(this._el_17, '', null);
        this._text_19 = this.renderer.createText(this._el_0, '\n          ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19
        ]), null);
        return null;
    };
    View_ScheduleComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_20 = import3.inlineInterpolate(1, '', this.context.$implicit[0], '');
        if (import3.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this.renderer.setText(this._text_3, currVal_20);
            this._expr_20 = currVal_20;
        }
        var currVal_21 = import3.inlineInterpolate(1, '', this.context.$implicit[1], '');
        if (import3.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this.renderer.setText(this._text_6, currVal_21);
            this._expr_21 = currVal_21;
        }
        var currVal_22 = import3.inlineInterpolate(1, '', this.context.$implicit[2], '');
        if (import3.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setText(this._text_9, currVal_22);
            this._expr_22 = currVal_22;
        }
        var currVal_23 = import3.inlineInterpolate(1, '', this.context.$implicit[3], '');
        if (import3.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setText(this._text_12, currVal_23);
            this._expr_23 = currVal_23;
        }
        var currVal_24 = import3.inlineInterpolate(1, '', this.context.$implicit[4], '');
        if (import3.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this.renderer.setText(this._text_15, currVal_24);
            this._expr_24 = currVal_24;
        }
        var currVal_25 = import3.inlineInterpolate(1, '', this.context.$implicit[5], '');
        if (import3.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this.renderer.setText(this._text_18, currVal_25);
            this._expr_25 = currVal_25;
        }
    };
    View_ScheduleComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ScheduleComponent2;
}(import1.AppView));
var View_ScheduleComponent3 = (function (_super) {
    __extends(View_ScheduleComponent3, _super);
    function View_ScheduleComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_ScheduleComponent3, renderType_ScheduleComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_5 = import10.UNINITIALIZED;
        this._expr_6 = import10.UNINITIALIZED;
    }
    View_ScheduleComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n          ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), [disposable_0]);
        return null;
    };
    View_ScheduleComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5 = (this.parentView.context.selectedTeacher && (this.context.$implicit.uuid === this.parentView.context.selectedTeacher.uuid));
        if (import3.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_2, 'table-info', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = import3.inlineInterpolate(1, '', this.context.$implicit.name, '');
        if (import3.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setText(this._text_3, currVal_6);
            this._expr_6 = currVal_6;
        }
    };
    View_ScheduleComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ScheduleComponent3.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.display(this.context.$implicit.uuid, 'teacher') !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ScheduleComponent3;
}(import1.AppView));
var renderType_ScheduleComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_ScheduleComponent, {});
export var View_ScheduleComponent0 = (function (_super) {
    __extends(View_ScheduleComponent0, _super);
    function View_ScheduleComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_ScheduleComponent0, renderType_ScheduleComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_ScheduleComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'container'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'row mb-2'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'button', new import3.InlineArray4(4, 'class', 'btn btn-outline-info', 'type', 'button'), null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_4, 'i', new import3.InlineArray2(2, 'class', 'fa fa-calendar'), null);
        this._text_6 = this.renderer.createText(this._el_4, ' Generate schedule', null);
        this._text_7 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_2, 'button', new import3.InlineArray4(4, 'class', 'btn btn-outline-info ml-2', 'type', 'button'), null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_8, 'i', new import3.InlineArray2(2, 'class', 'fa fa-calendar-o'), null);
        this._text_10 = this.renderer.createText(this._el_8, ' Clear schedule', null);
        this._text_11 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_12 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_14 = this.renderer.createText(this._el_13, '\n    ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_13, 'div', new import3.InlineArray2(2, 'class', 'col-sm-1'), null);
        this._text_16 = this.renderer.createText(this._el_15, '\n      ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_15, 'table', new import3.InlineArray2(2, 'class', 'table table-responsive'), null);
        this._text_18 = this.renderer.createText(this._el_17, '\n        ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_17, 'thead', import3.EMPTY_INLINE_ARRAY, null);
        this._text_20 = this.renderer.createText(this._el_19, '\n          ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_19, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_22 = this.renderer.createText(this._el_21, '\n            ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_21, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_24 = this.renderer.createText(this._el_23, 'Student group', null);
        this._text_25 = this.renderer.createText(this._el_21, '\n          ', null);
        this._text_26 = this.renderer.createText(this._el_19, '\n        ', null);
        this._text_27 = this.renderer.createText(this._el_17, '\n        ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_17, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._text_29 = this.renderer.createText(this._el_28, '\n          ', null);
        this._anchor_30 = this.renderer.createTemplateAnchor(this._el_28, null);
        this._vc_30 = new import9.ViewContainer(30, 28, this, this._anchor_30);
        this._TemplateRef_30_5 = new import12.TemplateRef_(this, 30, this._anchor_30);
        this._NgFor_30_6 = new import11.Wrapper_NgFor(this._vc_30.vcRef, this._TemplateRef_30_5, this.parentView.injectorGet(import13.IterableDiffers, this.parentIndex), this.ref);
        this._text_31 = this.renderer.createText(this._el_28, '\n        ', null);
        this._text_32 = this.renderer.createText(this._el_17, '\n      ', null);
        this._text_33 = this.renderer.createText(this._el_15, '\n    ', null);
        this._text_34 = this.renderer.createText(this._el_13, '\n    ', null);
        this._el_35 = import3.createRenderElement(this.renderer, this._el_13, 'div', new import3.InlineArray2(2, 'class', 'col-sm-9'), null);
        this._text_36 = this.renderer.createText(this._el_35, '\n      ', null);
        this._el_37 = import3.createRenderElement(this.renderer, this._el_35, 'table', new import3.InlineArray2(2, 'class', 'table table-responsive'), null);
        this._text_38 = this.renderer.createText(this._el_37, '\n        ', null);
        this._el_39 = import3.createRenderElement(this.renderer, this._el_37, 'thead', import3.EMPTY_INLINE_ARRAY, null);
        this._text_40 = this.renderer.createText(this._el_39, '\n          ', null);
        this._el_41 = import3.createRenderElement(this.renderer, this._el_39, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_42 = this.renderer.createText(this._el_41, '\n            ', null);
        this._el_43 = import3.createRenderElement(this.renderer, this._el_41, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._el_44 = import3.createRenderElement(this.renderer, this._el_43, 'em', import3.EMPTY_INLINE_ARRAY, null);
        this._text_45 = this.renderer.createText(this._el_44, 'Time', null);
        this._text_46 = this.renderer.createText(this._el_41, '\n            ', null);
        this._el_47 = import3.createRenderElement(this.renderer, this._el_41, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_48 = this.renderer.createText(this._el_47, 'Monday', null);
        this._text_49 = this.renderer.createText(this._el_41, '\n            ', null);
        this._el_50 = import3.createRenderElement(this.renderer, this._el_41, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_51 = this.renderer.createText(this._el_50, 'Tuesday', null);
        this._text_52 = this.renderer.createText(this._el_41, '\n            ', null);
        this._el_53 = import3.createRenderElement(this.renderer, this._el_41, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_54 = this.renderer.createText(this._el_53, 'Wednesday', null);
        this._text_55 = this.renderer.createText(this._el_41, '\n            ', null);
        this._el_56 = import3.createRenderElement(this.renderer, this._el_41, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_57 = this.renderer.createText(this._el_56, 'Thursday', null);
        this._text_58 = this.renderer.createText(this._el_41, '\n            ', null);
        this._el_59 = import3.createRenderElement(this.renderer, this._el_41, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_60 = this.renderer.createText(this._el_59, 'Friday', null);
        this._text_61 = this.renderer.createText(this._el_41, '\n          ', null);
        this._text_62 = this.renderer.createText(this._el_39, '\n        ', null);
        this._text_63 = this.renderer.createText(this._el_37, '\n        ', null);
        this._el_64 = import3.createRenderElement(this.renderer, this._el_37, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._text_65 = this.renderer.createText(this._el_64, '\n          ', null);
        this._anchor_66 = this.renderer.createTemplateAnchor(this._el_64, null);
        this._vc_66 = new import9.ViewContainer(66, 64, this, this._anchor_66);
        this._TemplateRef_66_5 = new import12.TemplateRef_(this, 66, this._anchor_66);
        this._NgFor_66_6 = new import11.Wrapper_NgFor(this._vc_66.vcRef, this._TemplateRef_66_5, this.parentView.injectorGet(import13.IterableDiffers, this.parentIndex), this.ref);
        this._text_67 = this.renderer.createText(this._el_64, '\n        ', null);
        this._text_68 = this.renderer.createText(this._el_37, '\n      ', null);
        this._text_69 = this.renderer.createText(this._el_35, '\n    ', null);
        this._text_70 = this.renderer.createText(this._el_13, '\n    ', null);
        this._el_71 = import3.createRenderElement(this.renderer, this._el_13, 'div', new import3.InlineArray2(2, 'class', 'col-sm-2'), null);
        this._text_72 = this.renderer.createText(this._el_71, '\n      ', null);
        this._el_73 = import3.createRenderElement(this.renderer, this._el_71, 'table', new import3.InlineArray2(2, 'class', 'table table-responsive'), null);
        this._text_74 = this.renderer.createText(this._el_73, '\n        ', null);
        this._el_75 = import3.createRenderElement(this.renderer, this._el_73, 'thead', import3.EMPTY_INLINE_ARRAY, null);
        this._text_76 = this.renderer.createText(this._el_75, '\n          ', null);
        this._el_77 = import3.createRenderElement(this.renderer, this._el_75, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_78 = this.renderer.createText(this._el_77, '\n            ', null);
        this._el_79 = import3.createRenderElement(this.renderer, this._el_77, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_80 = this.renderer.createText(this._el_79, 'Teachers', null);
        this._text_81 = this.renderer.createText(this._el_77, '\n          ', null);
        this._text_82 = this.renderer.createText(this._el_75, '\n        ', null);
        this._text_83 = this.renderer.createText(this._el_73, '\n        ', null);
        this._el_84 = import3.createRenderElement(this.renderer, this._el_73, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._text_85 = this.renderer.createText(this._el_84, '\n          ', null);
        this._anchor_86 = this.renderer.createTemplateAnchor(this._el_84, null);
        this._vc_86 = new import9.ViewContainer(86, 84, this, this._anchor_86);
        this._TemplateRef_86_5 = new import12.TemplateRef_(this, 86, this._anchor_86);
        this._NgFor_86_6 = new import11.Wrapper_NgFor(this._vc_86.vcRef, this._TemplateRef_86_5, this.parentView.injectorGet(import13.IterableDiffers, this.parentIndex), this.ref);
        this._text_87 = this.renderer.createText(this._el_84, '\n        ', null);
        this._text_88 = this.renderer.createText(this._el_73, '\n      ', null);
        this._text_89 = this.renderer.createText(this._el_71, '\n    ', null);
        this._text_90 = this.renderer.createText(this._el_13, '\n  ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_4, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_4));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_8, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_8));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._anchor_30,
            this._text_31,
            this._text_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._el_43,
            this._el_44,
            this._text_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._text_49,
            this._el_50,
            this._text_51,
            this._text_52,
            this._el_53,
            this._text_54,
            this._text_55,
            this._el_56,
            this._text_57,
            this._text_58,
            this._el_59,
            this._text_60,
            this._text_61,
            this._text_62,
            this._text_63,
            this._el_64,
            this._text_65,
            this._anchor_66,
            this._text_67,
            this._text_68,
            this._text_69,
            this._text_70,
            this._el_71,
            this._text_72,
            this._el_73,
            this._text_74,
            this._el_75,
            this._text_76,
            this._el_77,
            this._text_78,
            this._el_79,
            this._text_80,
            this._text_81,
            this._text_82,
            this._text_83,
            this._el_84,
            this._text_85,
            this._anchor_86,
            this._text_87,
            this._text_88,
            this._text_89,
            this._text_90
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_ScheduleComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.TemplateRef) && (30 === requestNodeIndex))) {
            return this._TemplateRef_30_5;
        }
        if (((token === import14.NgFor) && (30 === requestNodeIndex))) {
            return this._NgFor_30_6.context;
        }
        if (((token === import12.TemplateRef) && (66 === requestNodeIndex))) {
            return this._TemplateRef_66_5;
        }
        if (((token === import14.NgFor) && (66 === requestNodeIndex))) {
            return this._NgFor_66_6.context;
        }
        if (((token === import12.TemplateRef) && (86 === requestNodeIndex))) {
            return this._TemplateRef_86_5;
        }
        if (((token === import14.NgFor) && (86 === requestNodeIndex))) {
            return this._NgFor_86_6.context;
        }
        return notFoundResult;
    };
    View_ScheduleComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_30_0_0 = this.context.source.participants;
        this._NgFor_30_6.check_ngForOf(currVal_30_0_0, throwOnChange, false);
        this._NgFor_30_6.ngDoCheck(this, this._anchor_30, throwOnChange);
        var currVal_66_0_0 = this.context.displaySchedule;
        this._NgFor_66_6.check_ngForOf(currVal_66_0_0, throwOnChange, false);
        this._NgFor_66_6.ngDoCheck(this, this._anchor_66, throwOnChange);
        var currVal_86_0_0 = this.context.source.teachers;
        this._NgFor_86_6.check_ngForOf(currVal_86_0_0, throwOnChange, false);
        this._NgFor_86_6.ngDoCheck(this, this._anchor_86, throwOnChange);
        this._vc_30.detectChangesInNestedViews(throwOnChange);
        this._vc_66.detectChangesInNestedViews(throwOnChange);
        this._vc_86.detectChangesInNestedViews(throwOnChange);
    };
    View_ScheduleComponent0.prototype.destroyInternal = function () {
        this._vc_30.destroyNestedViews();
        this._vc_66.destroyNestedViews();
        this._vc_86.destroyNestedViews();
    };
    View_ScheduleComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 30)) {
            return new View_ScheduleComponent1(this.viewUtils, this, 30, this._anchor_30, this._vc_30);
        }
        if ((nodeIndex == 66)) {
            return new View_ScheduleComponent2(this.viewUtils, this, 66, this._anchor_66, this._vc_66);
        }
        if ((nodeIndex == 86)) {
            return new View_ScheduleComponent3(this.viewUtils, this, 86, this._anchor_86, this._vc_86);
        }
        return null;
    };
    View_ScheduleComponent0.prototype.handleEvent_4 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.generateSchedule() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ScheduleComponent0.prototype.handleEvent_8 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.clearSchedule() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ScheduleComponent0;
}(import1.AppView));
//# sourceMappingURL=schedule.component.ngfactory.js.map