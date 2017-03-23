/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../app/components/school_config.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/services/schedule.service';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import11 from '@angular/router/src/router_outlet_map';
import * as import12 from '@angular/core/src/linker/component_factory_resolver';
import * as import13 from '@angular/router/src/directives/router_outlet';
export class Wrapper_SchoolConfigComponent {
  /*private*/ _eventHandler:Function;
  context:import0.SchoolConfigComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.SchoolConfigComponent(p0);
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
var renderType_SchoolConfigComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_SchoolConfigComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.SchoolConfigComponent>;
  _SchoolConfigComponent_0_3:Wrapper_SchoolConfigComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SchoolConfigComponent_Host0,renderType_SchoolConfigComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'sch-school-config',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_SchoolConfigComponent0(this.viewUtils,this,0,this._el_0);
    this._SchoolConfigComponent_0_3 = new Wrapper_SchoolConfigComponent(this.injectorGet(import8.ScheduleService,this.parentIndex));
    this.compView_0.create(this._SchoolConfigComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._SchoolConfigComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.SchoolConfigComponent) && (0 === requestNodeIndex))) { return this._SchoolConfigComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._SchoolConfigComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const SchoolConfigComponentNgFactory:import7.ComponentFactory<import0.SchoolConfigComponent> = new import7.ComponentFactory<import0.SchoolConfigComponent>('sch-school-config',View_SchoolConfigComponent_Host0,import0.SchoolConfigComponent);
const styles_SchoolConfigComponent:any[] = ([] as any[]);
var renderType_SchoolConfigComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_SchoolConfigComponent,{});
export class View_SchoolConfigComponent0 extends import1.AppView<import0.SchoolConfigComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  /*private*/ _vc_2:import9.ViewContainer;
  _RouterOutlet_2_5:import10.Wrapper_RouterOutlet;
  _text_3:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SchoolConfigComponent0,renderType_SchoolConfigComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','container'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'router-outlet',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_2 = new import9.ViewContainer(2,0,this,this._el_2);
    this._RouterOutlet_2_5 = new import10.Wrapper_RouterOutlet(this.parentView.injectorGet(import11.RouterOutletMap,this.parentIndex),this._vc_2.vcRef,this.parentView.injectorGet(import12.ComponentFactoryResolver,this.parentIndex),(null as any));
    this._text_3 = this.renderer.createText(this._el_0,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.RouterOutlet) && (2 === requestNodeIndex))) { return this._RouterOutlet_2_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._RouterOutlet_2_5.ngDoCheck(this,this._el_2,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
    this._RouterOutlet_2_5.ngOnDestroy();
  }
}