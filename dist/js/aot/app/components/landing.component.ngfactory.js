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
import * as import0 from '../../../app/components/landing.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/services/hour_slot.service';
import * as import9 from '../../../app/services/activity.service';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '@angular/core/src/change_detection/change_detection_util';
import * as import12 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import15 from '@angular/common/src/directives/ng_for';
export var Wrapper_LandingComponent = (function () {
    function Wrapper_LandingComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.LandingComponent(p0, p1);
    }
    Wrapper_LandingComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_LandingComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_LandingComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_LandingComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_LandingComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_LandingComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_LandingComponent;
}());
var renderType_LandingComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_LandingComponent_Host0 = (function (_super) {
    __extends(View_LandingComponent_Host0, _super);
    function View_LandingComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_LandingComponent_Host0, renderType_LandingComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_LandingComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ld-landing', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_LandingComponent0(this.viewUtils, this, 0, this._el_0);
        this._LandingComponent_0_3 = new Wrapper_LandingComponent(this.injectorGet(import8.HourSlotService, this.parentIndex), this.injectorGet(import9.ActivityService, this.parentIndex));
        this.compView_0.create(this._LandingComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._LandingComponent_0_3.context);
    };
    View_LandingComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.LandingComponent) && (0 === requestNodeIndex))) {
            return this._LandingComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_LandingComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._LandingComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_LandingComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_LandingComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_LandingComponent_Host0;
}(import1.AppView));
export var LandingComponentNgFactory = new import7.ComponentFactory('ld-landing', View_LandingComponent_Host0, import0.LandingComponent);
var styles_LandingComponent = [];
var View_LandingComponent1 = (function (_super) {
    __extends(View_LandingComponent1, _super);
    function View_LandingComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_LandingComponent1, renderType_LandingComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_15 = import11.UNINITIALIZED;
    }
    View_LandingComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'th', new import3.InlineArray2(2, 'scope', 'row'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_14 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14
        ]), null);
        return null;
    };
    View_LandingComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_15 = import3.inlineInterpolate(2, '', this.context.$implicit.start, '-', this.context.$implicit.end, '');
        if (import3.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setText(this._text_3, currVal_15);
            this._expr_15 = currVal_15;
        }
    };
    View_LandingComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_LandingComponent1;
}(import1.AppView));
var renderType_LandingComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_LandingComponent, {});
export var View_LandingComponent0 = (function (_super) {
    __extends(View_LandingComponent0, _super);
    function View_LandingComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_LandingComponent0, renderType_LandingComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_LandingComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'table', new import3.InlineArray2(2, 'class', 'table'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'thead', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, 'Time', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_4, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, 'Monday', null);
        this._text_11 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_4, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_12, 'Tuesday', null);
        this._text_14 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_4, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_16 = this.renderer.createText(this._el_15, 'Wednesday', null);
        this._text_17 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_4, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_19 = this.renderer.createText(this._el_18, 'Thursday', null);
        this._text_20 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_4, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_22 = this.renderer.createText(this._el_21, 'Friday', null);
        this._text_23 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_24 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_25 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_0, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._text_27 = this.renderer.createText(this._el_26, '\n    ', null);
        this._anchor_28 = this.renderer.createTemplateAnchor(this._el_26, null);
        this._vc_28 = new import10.ViewContainer(28, 26, this, this._anchor_28);
        this._TemplateRef_28_5 = new import13.TemplateRef_(this, 28, this._anchor_28);
        this._NgFor_28_6 = new import12.Wrapper_NgFor(this._vc_28.vcRef, this._TemplateRef_28_5, this.parentView.injectorGet(import14.IterableDiffers, this.parentIndex), this.ref);
        this._text_29 = this.renderer.createText(this._el_26, '    \n  ', null);
        this._text_30 = this.renderer.createText(this._el_0, '\n', null);
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
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._anchor_28,
            this._text_29,
            this._text_30
        ]), null);
        return null;
    };
    View_LandingComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (28 === requestNodeIndex))) {
            return this._TemplateRef_28_5;
        }
        if (((token === import15.NgFor) && (28 === requestNodeIndex))) {
            return this._NgFor_28_6.context;
        }
        return notFoundResult;
    };
    View_LandingComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_28_0_0 = this.context.hourSlots;
        this._NgFor_28_6.check_ngForOf(currVal_28_0_0, throwOnChange, false);
        this._NgFor_28_6.ngDoCheck(this, this._anchor_28, throwOnChange);
        this._vc_28.detectChangesInNestedViews(throwOnChange);
    };
    View_LandingComponent0.prototype.destroyInternal = function () {
        this._vc_28.destroyNestedViews();
    };
    View_LandingComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 28)) {
            return new View_LandingComponent1(this.viewUtils, this, 28, this._anchor_28, this._vc_28);
        }
        return null;
    };
    return View_LandingComponent0;
}(import1.AppView));
//# sourceMappingURL=landing.component.ngfactory.js.map