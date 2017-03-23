/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../app/components/schedule.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
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
export class Wrapper_ScheduleComponent {
  /*private*/ _eventHandler:Function;
  context:import0.ScheduleComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.ScheduleComponent(p0);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_ScheduleComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_ScheduleComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.ScheduleComponent>;
  _ScheduleComponent_0_3:Wrapper_ScheduleComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ScheduleComponent_Host0,renderType_ScheduleComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'sch-schedule',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_ScheduleComponent0(this.viewUtils,this,0,this._el_0);
    this._ScheduleComponent_0_3 = new Wrapper_ScheduleComponent(this.injectorGet(import8.ScheduleService,this.parentIndex));
    this.compView_0.create(this._ScheduleComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._ScheduleComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ScheduleComponent) && (0 === requestNodeIndex))) { return this._ScheduleComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ScheduleComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const ScheduleComponentNgFactory:import7.ComponentFactory<import0.ScheduleComponent> = new import7.ComponentFactory<import0.ScheduleComponent>('sch-schedule',View_ScheduleComponent_Host0,import0.ScheduleComponent);
const styles_ScheduleComponent:any[] = ([] as any[]);
class View_ScheduleComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_ScheduleComponent1,renderType_ScheduleComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_5 = import10.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'tr',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'td',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n          ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_5:any = import3.inlineInterpolate(1,'',this.context.$implicit.name,'');
    if (import3.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setText(this._text_3,currVal_5);
      this._expr_5 = currVal_5;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_ScheduleComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  /*private*/ _expr_15:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_ScheduleComponent2,renderType_ScheduleComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_15 = import10.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'tr',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'th',new import3.InlineArray2(2,'scope','row'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_0,'td',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_0,'td',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_8 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_0,'td',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_10 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_0,'td',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_12 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_13 = import3.createRenderElement(this.renderer,this._el_0,'td',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_14 = this.renderer.createText(this._el_0,'\n          ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
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
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_15:any = import3.inlineInterpolate(2,'',this.context.$implicit.start,'-',this.context.$implicit.end,'');
    if (import3.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setText(this._text_3,currVal_15);
      this._expr_15 = currVal_15;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_ScheduleComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_ScheduleComponent,{});
export class View_ScheduleComponent0 extends import1.AppView<import0.ScheduleComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _anchor_19:any;
  /*private*/ _vc_19:import9.ViewContainer;
  _TemplateRef_19_5:any;
  _NgFor_19_6:import11.Wrapper_NgFor;
  _text_20:any;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _el_30:any;
  _text_31:any;
  _el_32:any;
  _el_33:any;
  _text_34:any;
  _text_35:any;
  _el_36:any;
  _text_37:any;
  _text_38:any;
  _el_39:any;
  _text_40:any;
  _text_41:any;
  _el_42:any;
  _text_43:any;
  _text_44:any;
  _el_45:any;
  _text_46:any;
  _text_47:any;
  _el_48:any;
  _text_49:any;
  _text_50:any;
  _el_51:any;
  _text_52:any;
  _text_53:any;
  _el_54:any;
  _text_55:any;
  _text_56:any;
  _text_57:any;
  _text_58:any;
  _el_59:any;
  _text_60:any;
  _anchor_61:any;
  /*private*/ _vc_61:import9.ViewContainer;
  _TemplateRef_61_5:any;
  _NgFor_61_6:import11.Wrapper_NgFor;
  _text_62:any;
  _text_63:any;
  _text_64:any;
  _text_65:any;
  _text_66:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ScheduleComponent0,renderType_ScheduleComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','container'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','col-sm-2'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'table',new import3.InlineArray2(2,'class','table table-responsive'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_6,'thead',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'\n          ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_8,'tr',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'\n            ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_10,'th',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'Student group',(null as any));
    this._text_14 = this.renderer.createText(this._el_10,'\n          ',(null as any));
    this._text_15 = this.renderer.createText(this._el_8,'\n        ',(null as any));
    this._text_16 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._el_17 = import3.createRenderElement(this.renderer,this._el_6,'tbody',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_18 = this.renderer.createText(this._el_17,'\n          ',(null as any));
    this._anchor_19 = this.renderer.createTemplateAnchor(this._el_17,(null as any));
    this._vc_19 = new import9.ViewContainer(19,17,this,this._anchor_19);
    this._TemplateRef_19_5 = new import12.TemplateRef_(this,19,this._anchor_19);
    this._NgFor_19_6 = new import11.Wrapper_NgFor(this._vc_19.vcRef,this._TemplateRef_19_5,this.parentView.injectorGet(import13.IterableDiffers,this.parentIndex),this.ref);
    this._text_20 = this.renderer.createText(this._el_17,'\n        ',(null as any));
    this._text_21 = this.renderer.createText(this._el_6,'\n      ',(null as any));
    this._text_22 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_23 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_24 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','col-sm-10'),(null as any));
    this._text_25 = this.renderer.createText(this._el_24,'\n      ',(null as any));
    this._el_26 = import3.createRenderElement(this.renderer,this._el_24,'table',new import3.InlineArray2(2,'class','table table-responsive'),(null as any));
    this._text_27 = this.renderer.createText(this._el_26,'\n        ',(null as any));
    this._el_28 = import3.createRenderElement(this.renderer,this._el_26,'thead',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_29 = this.renderer.createText(this._el_28,'\n          ',(null as any));
    this._el_30 = import3.createRenderElement(this.renderer,this._el_28,'tr',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_31 = this.renderer.createText(this._el_30,'\n            ',(null as any));
    this._el_32 = import3.createRenderElement(this.renderer,this._el_30,'th',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_33 = import3.createRenderElement(this.renderer,this._el_32,'em',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_34 = this.renderer.createText(this._el_33,'Time',(null as any));
    this._text_35 = this.renderer.createText(this._el_30,'\n            ',(null as any));
    this._el_36 = import3.createRenderElement(this.renderer,this._el_30,'th',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_37 = this.renderer.createText(this._el_36,'Sunday',(null as any));
    this._text_38 = this.renderer.createText(this._el_30,'\n            ',(null as any));
    this._el_39 = import3.createRenderElement(this.renderer,this._el_30,'th',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_40 = this.renderer.createText(this._el_39,'Monday',(null as any));
    this._text_41 = this.renderer.createText(this._el_30,'\n            ',(null as any));
    this._el_42 = import3.createRenderElement(this.renderer,this._el_30,'th',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_43 = this.renderer.createText(this._el_42,'Tuesday',(null as any));
    this._text_44 = this.renderer.createText(this._el_30,'\n            ',(null as any));
    this._el_45 = import3.createRenderElement(this.renderer,this._el_30,'th',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_46 = this.renderer.createText(this._el_45,'Wednesday',(null as any));
    this._text_47 = this.renderer.createText(this._el_30,'\n            ',(null as any));
    this._el_48 = import3.createRenderElement(this.renderer,this._el_30,'th',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_49 = this.renderer.createText(this._el_48,'Thursday',(null as any));
    this._text_50 = this.renderer.createText(this._el_30,'\n            ',(null as any));
    this._el_51 = import3.createRenderElement(this.renderer,this._el_30,'th',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_52 = this.renderer.createText(this._el_51,'Friday',(null as any));
    this._text_53 = this.renderer.createText(this._el_30,'\n            ',(null as any));
    this._el_54 = import3.createRenderElement(this.renderer,this._el_30,'th',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_55 = this.renderer.createText(this._el_54,'Saturday',(null as any));
    this._text_56 = this.renderer.createText(this._el_30,'\n          ',(null as any));
    this._text_57 = this.renderer.createText(this._el_28,'\n        ',(null as any));
    this._text_58 = this.renderer.createText(this._el_26,'\n        ',(null as any));
    this._el_59 = import3.createRenderElement(this.renderer,this._el_26,'tbody',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_60 = this.renderer.createText(this._el_59,'\n          ',(null as any));
    this._anchor_61 = this.renderer.createTemplateAnchor(this._el_59,(null as any));
    this._vc_61 = new import9.ViewContainer(61,59,this,this._anchor_61);
    this._TemplateRef_61_5 = new import12.TemplateRef_(this,61,this._anchor_61);
    this._NgFor_61_6 = new import11.Wrapper_NgFor(this._vc_61.vcRef,this._TemplateRef_61_5,this.parentView.injectorGet(import13.IterableDiffers,this.parentIndex),this.ref);
    this._text_62 = this.renderer.createText(this._el_59,'\n        ',(null as any));
    this._text_63 = this.renderer.createText(this._el_26,'\n      ',(null as any));
    this._text_64 = this.renderer.createText(this._el_24,'\n    ',(null as any));
    this._text_65 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_66 = this.renderer.createText(this._el_0,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._anchor_19,
      this._text_20,
      this._text_21,
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._el_32,
      this._el_33,
      this._text_34,
      this._text_35,
      this._el_36,
      this._text_37,
      this._text_38,
      this._el_39,
      this._text_40,
      this._text_41,
      this._el_42,
      this._text_43,
      this._text_44,
      this._el_45,
      this._text_46,
      this._text_47,
      this._el_48,
      this._text_49,
      this._text_50,
      this._el_51,
      this._text_52,
      this._text_53,
      this._el_54,
      this._text_55,
      this._text_56,
      this._text_57,
      this._text_58,
      this._el_59,
      this._text_60,
      this._anchor_61,
      this._text_62,
      this._text_63,
      this._text_64,
      this._text_65,
      this._text_66
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.TemplateRef) && (19 === requestNodeIndex))) { return this._TemplateRef_19_5; }
    if (((token === import14.NgFor) && (19 === requestNodeIndex))) { return this._NgFor_19_6.context; }
    if (((token === import12.TemplateRef) && (61 === requestNodeIndex))) { return this._TemplateRef_61_5; }
    if (((token === import14.NgFor) && (61 === requestNodeIndex))) { return this._NgFor_61_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_19_0_0:any = this.context.source.participants;
    this._NgFor_19_6.check_ngForOf(currVal_19_0_0,throwOnChange,false);
    this._NgFor_19_6.ngDoCheck(this,this._anchor_19,throwOnChange);
    const currVal_61_0_0:any = this.context.source.hourSlots;
    this._NgFor_61_6.check_ngForOf(currVal_61_0_0,throwOnChange,false);
    this._NgFor_61_6.ngDoCheck(this,this._anchor_61,throwOnChange);
    this._vc_19.detectChangesInNestedViews(throwOnChange);
    this._vc_61.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_19.destroyNestedViews();
    this._vc_61.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 19)) { return new View_ScheduleComponent1(this.viewUtils,this,19,this._anchor_19,this._vc_19); }
    if ((nodeIndex == 61)) { return new View_ScheduleComponent2(this.viewUtils,this,61,this._anchor_61,this._vc_61); }
    return (null as any);
  }
}