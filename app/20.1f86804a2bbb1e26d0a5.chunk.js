(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{219:function(c,t,e){e.r(t),e.d(t,"HealthModule",(function(){return w}));var n=e(0),a=e(6),s=e(57),i=e(28),l=e(7);class o{constructor(c){this.http=c}checkHealth(){return this.http.get(i.b+"management/health")}}o.ɵfac=function(c){return new(c||o)(n.sc(l.b))},o.ɵprov=n.ac({token:o,factory:o.ɵfac,providedIn:"root"});var h=e(4),r=e(1),d=e(9),Z=e(8);function u(c,t){if(1&c&&(n.kc(0,"h4",8),n.Zc(1),n.zc(2,"translate"),n.jc()),2&c){const c=n.yc();n.Rb(1),n.bd("\n        ",n.Ac(2,1,"health.indicator."+c.health.key),"\n    ")}}function f(c,t){if(1&c&&(n.kc(0,"tr"),n.Zc(1,"\n                        "),n.kc(2,"td",15),n.Zc(3),n.jc(),n.Zc(4,"\n                        "),n.kc(5,"td",15),n.Zc(6),n.jc(),n.Zc(7,"\n                    "),n.jc()),2&c){const c=t.$implicit,e=n.yc(2);n.Rb(3),n.ad(c.key),n.Rb(3),n.ad(e.readableValue(c.value))}}function b(c,t){if(1&c&&(n.kc(0,"div"),n.Zc(1,"\n        "),n.kc(2,"h5",9),n.Zc(3,"Properties"),n.jc(),n.Zc(4,"\n\n        "),n.kc(5,"div",10),n.Zc(6,"\n            "),n.kc(7,"table",11),n.Zc(8,"\n                "),n.kc(9,"thead"),n.Zc(10,"\n                    "),n.kc(11,"tr"),n.Zc(12,"\n                        "),n.kc(13,"th",12),n.Zc(14,"Name"),n.jc(),n.Zc(15,"\n                        "),n.kc(16,"th",13),n.Zc(17,"Value"),n.jc(),n.Zc(18,"\n                    "),n.jc(),n.Zc(19,"\n                "),n.jc(),n.Zc(20,"\n                "),n.kc(21,"tbody"),n.Zc(22,"\n                    "),n.Xc(23,f,8,2,"tr",14),n.zc(24,"keys"),n.Zc(25,"\n                "),n.jc(),n.Zc(26,"\n            "),n.jc(),n.Zc(27,"\n        "),n.jc(),n.Zc(28,"\n    "),n.jc()),2&c){const c=n.yc();n.Rb(23),n.Fc("ngForOf",n.Ac(24,1,c.health.value.details))}}class k{constructor(c){this.activeModal=c}readableValue(c){if(this.health&&"diskSpace"===this.health.key){const t=c/1073741824;return t>1?t.toFixed(2)+" GB":(c/1048576).toFixed(2)+" MB"}return"object"==typeof c?JSON.stringify(c):c.toString()}dismiss(){this.activeModal.dismiss()}}k.ɵfac=function(c){return new(c||k)(n.ec(h.b))},k.ɵcmp=n.Yb({type:k,selectors:[["jhi-health-modal"]],decls:22,vars:2,consts:[[1,"modal-header"],["class","modal-title","id","showHealthLabel",4,"ngIf"],["aria-label","Close","data-dismiss","modal","type","button",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body","pad"],[4,"ngIf"],[1,"modal-footer"],["data-dismiss","modal","type","button",1,"btn","btn-secondary","float-left",3,"click"],["id","showHealthLabel",1,"modal-title"],["jhiTranslate","health.details.properties"],[1,"table-responsive"],["aria-describedby","showHealthLabel",1,"table","table-striped"],["scope","col","jhiTranslate","health.details.name",1,"text-left"],["scope","col","jhiTranslate","health.details.value",1,"text-left"],[4,"ngFor","ngForOf"],[1,"text-left"]],template:function(c,t){1&c&&(n.kc(0,"div",0),n.Zc(1,"\n    "),n.Xc(2,u,3,3,"h4",1),n.Zc(3,"\n\n    "),n.kc(4,"button",2),n.vc("click",(function(){return t.dismiss()})),n.Zc(5,"\n        "),n.kc(6,"span",3),n.Zc(7,"×"),n.jc(),n.Zc(8,"\n    "),n.jc(),n.Zc(9,"\n"),n.jc(),n.Zc(10,"\n\n"),n.kc(11,"div",4),n.Zc(12,"\n    "),n.Xc(13,b,29,3,"div",5),n.Zc(14,"\n"),n.jc(),n.Zc(15,"\n\n"),n.kc(16,"div",6),n.Zc(17,"\n    "),n.kc(18,"button",7),n.vc("click",(function(){return t.dismiss()})),n.Zc(19,"Done"),n.jc(),n.Zc(20,"\n"),n.jc(),n.Zc(21,"\n")),2&c&&(n.Rb(2),n.Fc("ngIf",t.health),n.Rb(11),n.Fc("ngIf",t.health))},directives:[r.o,d.n,r.n],pipes:[Z.d,d.g],encapsulation:2});var p=e(25);function j(c,t){if(1&c){const c=n.lc();n.kc(0,"a",14),n.vc("click",(function(){n.Qc(c);const t=n.yc().$implicit;return n.yc(2).showHealth(t)})),n.Zc(1,"\n                            "),n.fc(2,"fa-icon",15),n.Zc(3,"\n                        "),n.jc()}}function g(c,t){if(1&c&&(n.kc(0,"tr"),n.Zc(1,"\n                    "),n.kc(2,"td"),n.Zc(3),n.zc(4,"translate"),n.jc(),n.Zc(5,"\n                    "),n.kc(6,"td",11),n.Zc(7,"\n                        "),n.kc(8,"span",12),n.Zc(9),n.jc(),n.Zc(10,"\n                    "),n.jc(),n.Zc(11,"\n                    "),n.kc(12,"td",11),n.Zc(13,"\n                        "),n.Xc(14,j,4,0,"a",13),n.Zc(15,"\n                    "),n.jc(),n.Zc(16,"\n                "),n.jc()),2&c){const c=t.$implicit,e=n.yc(2);n.Rb(3),n.bd("\n                        ",n.Ac(4,5,"health.indicator."+c.key),"\n                    "),n.Rb(5),n.Gc("jhiTranslate","health.status."+c.value.status),n.Fc("ngClass",e.getBadgeClass(c.value.status)),n.Rb(1),n.bd("\n                            ",c.value.status,"\n                        "),n.Rb(5),n.Fc("ngIf",c.value.details)}}function v(c,t){if(1&c&&(n.kc(0,"tbody"),n.Zc(1,"\n                "),n.Xc(2,g,17,7,"tr",10),n.zc(3,"keys"),n.Zc(4,"\n            "),n.jc()),2&c){const c=n.yc();n.Rb(2),n.Fc("ngForOf",n.Ac(3,1,c.health.components))}}class m{constructor(c,t){this.modalService=c,this.healthService=t}ngOnInit(){this.refresh()}getBadgeClass(c){return"UP"===c?"badge-success":"badge-danger"}refresh(){this.healthService.checkHealth().subscribe(c=>this.health=c,c=>{503===c.status&&(this.health=c.error)})}showHealth(c){this.modalService.open(k).componentInstance.health=c}}m.ɵfac=function(c){return new(c||m)(n.ec(h.o),n.ec(o))},m.ɵcmp=n.Yb({type:m,selectors:[["jhi-health"]],decls:40,vars:1,consts:[["id","health-page-heading","jhiTranslate","health.title"],[1,"btn","btn-primary","float-right",3,"click"],["icon","sync"],["jhiTranslate","health.refresh.button"],[1,"table-responsive"],["id","healthCheck","aria-describedby","health-page-heading",1,"table","table-striped"],["scope","col","jhiTranslate","health.table.service"],["scope","col","jhiTranslate","health.table.status",1,"text-center"],["scope","col","jhiTranslate","health.details.details",1,"text-center"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"text-center"],[1,"badge",3,"ngClass","jhiTranslate"],["class","hand",3,"click",4,"ngIf"],[1,"hand",3,"click"],["icon","eye"]],template:function(c,t){1&c&&(n.kc(0,"div"),n.Zc(1,"\n    "),n.kc(2,"h2"),n.Zc(3,"\n        "),n.kc(4,"span",0),n.Zc(5,"Health Checks"),n.jc(),n.Zc(6,"\n\n        "),n.kc(7,"button",1),n.vc("click",(function(){return t.refresh()})),n.Zc(8,"\n            "),n.fc(9,"fa-icon",2),n.Zc(10," "),n.kc(11,"span",3),n.Zc(12,"Refresh"),n.jc(),n.Zc(13,"\n        "),n.jc(),n.Zc(14,"\n    "),n.jc(),n.Zc(15,"\n\n    "),n.kc(16,"div",4),n.Zc(17,"\n        "),n.kc(18,"table",5),n.Zc(19,"\n            "),n.kc(20,"thead"),n.Zc(21,"\n                "),n.kc(22,"tr"),n.Zc(23,"\n                    "),n.kc(24,"th",6),n.Zc(25,"Service Name"),n.jc(),n.Zc(26,"\n                    "),n.kc(27,"th",7),n.Zc(28,"Status"),n.jc(),n.Zc(29,"\n                    "),n.kc(30,"th",8),n.Zc(31,"Details"),n.jc(),n.Zc(32,"\n                "),n.jc(),n.Zc(33,"\n            "),n.jc(),n.Zc(34,"\n            "),n.Xc(35,v,5,3,"tbody",9),n.Zc(36,"\n        "),n.jc(),n.Zc(37,"\n    "),n.jc(),n.Zc(38,"\n"),n.jc(),n.Zc(39,"\n")),2&c&&(n.Rb(35),n.Fc("ngIf",t.health))},directives:[d.n,p.a,r.o,r.n,r.m],pipes:[d.g,Z.d],encapsulation:2});const y={path:"",component:m,data:{pageTitle:"health.title"}};class w{}w.ɵmod=n.cc({type:w}),w.ɵinj=n.bc({factory:function(c){return new(c||w)},imports:[[s.a,a.h.forChild([y])]]}),("undefined"==typeof ngJitMode||ngJitMode)&&n.Tc(w,{declarations:[m,k],imports:[s.a,a.h]})}}]);