(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{203:function(e,t,i){i.d(t,"a",(function(){return l}));var n=i(0),c=i(22),o=i(24),a=i(55),r=i(56),s=i(6);class l{constructor(e,t,i,n){this.router=e,this.loginModalService=t,this.accountService=i,this.stateStorageService=n}canActivate(e,t){e.data.authorities;return Object(c.a)(!0)}checkLogin(e,t){return Object(c.a)(!0)}}l.ɵfac=function(e){return new(e||l)(n.sc(s.d),n.sc(a.a),n.sc(o.a),n.sc(r.a))},l.ɵprov=n.ac({token:l,factory:l.ɵfac,providedIn:"root"})},211:function(e,t,i){i.d(t,"a",(function(){return n}));class n{constructor(e,t,i,n,c,o,a,r,s,l,d,p,m,u,v,f,h,b,y,g){this.id=e,this.appointmentId=t,this.businessId=i,this.createdAt=n,this.currencyId=c,this.invoiceNumber=o,this.invoiceStatus=a,this.invoiceTotal=r,this.patientId=s,this.paymentStatus=l,this.paymentType=d,this.recipientAddress=p,this.recipientCity=m,this.recipientName=u,this.recipientPostalCode=v,this.treatmentId=f,this.invoiceItems=h,this.isUpdated=b,this.isCreated=y,this.isCanceled=g}}},240:function(e,t,i){i.r(t),i.d(t,"MedappointInvoiceModule",(function(){return L}));var n=i(0),c=i(6),o=i(57),a=i(89),r=i(39),s=i(14),l=i(90),d=i(9),p=i(4),m=i(88);class u{constructor(e,t,i,n,c,o){this.invoiceService=e,this.eventManager=t,this.modalService=i,this.parseLinks=n,this.activatedRoute=c,this.resizeService=o,this.invoices=[],this.routeUrl="invoices",this.dateRange={fromDate:s(new Date(Date.now())).format(l.a),toDate:s((new Date).setDate((new Date).getDate()+30)).format(l.a)},this.selectActions=[{label:"Cancel",name:"cancel",method:"cancelSelected",disabled:!0},{label:"Print Selected",name:"print",method:"getAllInvoicePDF",disabled:!0}],this.tableHeaders=[{columnsValue:"invoiceNumber",fieldName:"medappointApp.invoice.invoiceNumber",width:"14%",sortable:!0},{columnsValue:"recipientName",fieldName:"medappointApp.invoice.recipientName",width:"14%",sortable:!0},{columnsValue:"invoiceStatus",fieldName:"medappointApp.invoice.invoiceStatus",width:"14%",sortable:!0},{columnsValue:"paymentType",fieldName:"medappointApp.invoice.paymentType",width:"14%",sortable:!0},{columnsValue:"createdAt",fieldName:"medappointApp.invoice.createdAt",width:"14%",sortable:!0},{columnsValue:"paymentStatus",fieldName:"medappointApp.invoice.paymentStatus",width:"14%",sortable:!0},{columnsValue:"invoiceTotal",fieldName:"medappointApp.invoice.invoiceTotal",width:"14%",sortable:!0},{columnsValue:"printIcon",isIcon:!0,width:"14%",sortable:!1}],this.invoices=[]}loadAll(){this.invoiceService.query({}).subscribe(e=>this.paginateInvoices(e.body,e.headers),e=>console.log(e))}cancelSelected(e){this.createIdIlst(e).forEach(e=>{this.invoiceService.updateInvoiceStatus(e).subscribe(t=>{this.invoices.find(t=>t.id===e).invoiceStatus="CANCELED"})})}createIdIlst(e){return Object.keys(e).map(e=>+e).filter(t=>e[t])}ngOnInit(){this.resizeService.isDesktop||this.tableHeaders.pop(),this.activatedRoute.data.subscribe(({patients:e})=>{this.patients=e,this.loadAll(),this.registerChangeInInvoices()})}getFilteredValue(e){e.length?this.invoices=e:this.loadAll()}registerChangeInInvoices(){this.eventSubscriber=this.eventManager.subscribe("invoiceListModification",()=>this.loadAll())}getSelectedData({method:e,rows:t}){console.log(e),console.log(t),this[e](t)}delete(e){const t=Object.keys(e);for(let e=0;e<t.length;e++)this.invoiceService.delete(parseInt(t[e])).subscribe(i=>{e+1===t.length&&this.loadAll()})}getSelectedActions(e){var t,i;const n=Object.keys(e).map(e=>+e).filter(t=>e[t]);let c=[];for(let e=0;e<n.length;e++){const t=+n[e],i=this.invoices.find(e=>e.id===t);i&&c.push(i.invoiceStatus)}c=c.filter((e,t,i)=>i.indexOf(e)===t),"IMMUTABLE"!==(null===(t=c[0])||void 0===t?void 0:t.toUpperCase())?this.selectActions[0].disabled=!0:this.selectActions[0].disabled=!1,"DRAFT"!==(null===(i=c[0])||void 0===i?void 0:i.toUpperCase())?this.selectActions[1].disabled=!0:this.selectActions[1].disabled=!1}getAction(e){var t;"DRAFT"===(null===(t=e.invoiceStatus)||void 0===t?void 0:t.toUpperCase())&&this.invoiceService.getInvoicePDFById(e.id).subscribe(t=>{this.createValidInvoice(e);const i=new Blob([t.body],{type:"application/pdf"}),n=URL.createObjectURL(i);window.open(n),this.invoices.find(t=>t.id===e.id).invoiceStatus="IMMUTABLE"})}getAllInvoicePDF(e){let t=[];Object.keys(e).map(e=>+e).filter(t=>e[t]).forEach(e=>{t=[...t,this.invoices.find(t=>t.id==e)]}),t.sort((e,t)=>s.utc(e.date).diff(s.utc(t.date)));const i=t.filter(e=>!!e.date),n={businessId:1,fromDate:s(i[0].date).format("YYYY-MM-DD"),toDate:s(i[i.length-1].date).format("YYYY-MM-DD")};this.invoiceService.getAllInvoicePDF(n).subscribe(t=>{const i=new Blob([t.body],{type:"application/pdf"}),n=URL.createObjectURL(i);window.open(n),Object.keys(e).forEach(e=>{this.createValidInvoice(this.invoices.find(t=>t.id==+e)),this.invoices.find(t=>t.id==+e).invoiceStatus="IMMUTABLE"})})}ngOnDestroy(){this.eventSubscriber&&this.eventManager.destroy(this.eventSubscriber)}createValidInvoice(e){e.printIcon.disabled=!0}getDateRange(e){this.dateRange=e,this.loadAll()}paginateInvoices(e,t){if(e){this.invoices=[];for(let t=0;t<e.length;t++){this.resizeService.isDesktop&&(e[t].printIcon={iconName:"print",disabled:!("draft"===e[t].invoiceStatus.toLocaleLowerCase())});const i=this.patients.find(i=>i.id==e[t].patientId)?this.patients.find(i=>i.id==e[t].patientId):null;e[t].recipientName=i?`${i.firstName} ${i.lastName}`:"-",e[t].date=e[t].createdAt,this.invoices.push(e[t])}this.invoices.sort((e,t)=>new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime())}}}u.ɵfac=function(e){return new(e||u)(n.ec(a.a),n.ec(d.d),n.ec(p.o),n.ec(d.j),n.ec(c.a),n.ec(r.a))},u.ɵcmp=n.Yb({type:u,selectors:[["jhi-invoice"]],decls:3,vars:7,consts:[["title","invoice",3,"tableHeaders","data","selectActions","isCreated","isLocalDateFilter","searchByDate","isDeleted","selectedActionsEmit","actionEmit","selectedEmit"]],template:function(e,t){1&e&&(n.kc(0,"jhi-data-table",0),n.vc("selectedActionsEmit",(function(e){return t.getSelectedActions(e)}))("actionEmit",(function(e){return t.getAction(e)}))("selectedEmit",(function(e){return t.getSelectedData(e)})),n.Zc(1,"\n"),n.jc(),n.Zc(2,"\n")),2&e&&n.Fc("tableHeaders",t.tableHeaders)("data",t.invoices)("selectActions",t.selectActions)("isCreated",!1)("isLocalDateFilter",!0)("searchByDate",!0)("isDeleted",!1)},directives:[m.a],encapsulation:2});var v=i(3),f=i(211),h=i(69),b=i(1),y=i(25);function g(e,t){1&e&&(n.kc(0,"small",39),n.Zc(1,"\n                            This field is required.\n                        "),n.jc())}function Z(e,t){if(1&e&&(n.kc(0,"div"),n.Zc(1,"\n                        "),n.Xc(2,g,2,0,"small",38),n.Zc(3,"\n                    "),n.jc()),2&e){var i;const e=null==(i=n.yc().editForm.get("invoiceNumber"))||null==i.errors?null:i.errors.required;n.Rb(2),n.Fc("ngIf",e)}}function S(e,t){if(1&e&&(n.kc(0,"option",23),n.Zc(1),n.jc()),2&e){const e=t.$implicit;n.Fc("ngValue",e.id),n.Rb(1),n.ad(e.id)}}function j(e,t){if(1&e&&(n.kc(0,"option",23),n.Zc(1),n.jc()),2&e){const e=t.$implicit;n.Fc("ngValue",e.id),n.Rb(1),n.ad(e.id)}}function I(e,t){if(1&e&&(n.kc(0,"option",23),n.Zc(1),n.jc()),2&e){const e=t.$implicit;n.Fc("ngValue",e.id),n.Rb(1),n.ad(e.id)}}class k{constructor(e,t,i){this.invoiceService=e,this.activatedRoute=t,this.fb=i,this.isSaving=!1,this.editForm=this.fb.group({id:[],invoiceNumber:[null,[v.y.required]],recipientName:[null,[v.y.required]],recipientCity:[null,[v.y.required]],invoiceStatus:[null,[v.y.required]],paymentType:[null,[v.y.required]],paymentStatus:[null,[v.y.required]],patientId:[],appointmentId:[null,[v.y.required]],treatmentId:[null,[v.y.required]],invoiceTotal:[null,[v.y.required]]})}ngOnInit(){this.activatedRoute.data.subscribe(({invoice:e,patients:t,appointments:i,treatments:n})=>{this.patients=t,this.appointments=i,this.treatments=n,this.updateForm(e)})}updateForm(e){this.editForm.patchValue({id:e.id,invoiceNumber:e.invoiceNumber,recipientName:e.recipientName,recipientCity:e.recipientCity,invoiceStatus:e.invoiceStatus,paymentType:e.paymentType,paymentStatus:e.paymentStatus,patientId:e.patientId,appointmentId:e.appointmentId,treatmentId:e.treatmentId,invoiceTotal:e.invoiceTotal})}previousState(){window.history.back()}save(){this.isSaving=!0;const e=this.createForm();void 0!==e.id?this.subscribeToSaveResponse(this.invoiceService.update(e)):this.subscribeToSaveResponse(this.invoiceService.create(e))}createForm(){return Object.assign(Object.assign({},new f.a),{id:this.editForm.get(["id"]).value,invoiceNumber:this.editForm.get(["invoiceNumber"]).value,recipientName:this.editForm.get(["recipientName"]).value,recipientCity:this.editForm.get(["recipientCity"]).value,invoiceStatus:this.editForm.get(["invoiceStatus"]).value,paymentType:this.editForm.get(["paymentType"]).value,paymentStatus:this.editForm.get(["paymentStatus"]).value,patientId:this.editForm.get(["patientId"]).value,appointmentId:this.editForm.get(["appointmentId"]).value,treatmentId:this.editForm.get(["treatmentId"]).value,invoiceTotal:this.editForm.get(["invoiceTotal"]).value})}subscribeToSaveResponse(e){e.subscribe(()=>this.onSaveSuccess(),()=>this.onSaveError())}onSaveSuccess(){this.isSaving=!1,this.previousState()}onSaveError(){this.isSaving=!1}}k.ɵfac=function(e){return new(e||k)(n.ec(a.a),n.ec(c.a),n.ec(v.e))},k.ɵcmp=n.Yb({type:k,selectors:[["jhi-invoice-update"]],decls:136,vars:8,consts:[[1,"row","justify-content-center"],[1,"col-8"],["name","editForm","role","form","novalidate","",3,"formGroup","ngSubmit"],["id","jhi-invoice-heading"],[1,"form-group",3,"hidden"],["for","id","jhiTranslate","global.field.id"],["type","text","id","id","name","id","formControlName","id","readonly","readonly",1,"form-control"],[1,"form-group"],["for","field_invoiceNumber",1,"form-control-label"],["type","text","name","invoiceNumber","id","field_invoiceNumber","formControlName","invoiceNumber",1,"form-control"],[4,"ngIf"],["for","field_recipientName",1,"form-control-label"],["type","text","name","recipientName","id","field_recipientName","formControlName","recipientName",1,"form-control"],["for","field_recipientCity",1,"form-control-label"],["type","text","name","recipientCity","id","field_recipientCity","formControlName","recipientCity",1,"form-control"],["for","field_invoiceStatus",1,"form-control-label"],["type","text","name","invoiceStatus","id","field_invoiceStatus","formControlName","invoiceStatus",1,"form-control"],["for","field_paymentType",1,"form-control-label"],["type","text","name","paymentType","id","field_paymentType","formControlName","paymentType",1,"form-control"],["for","field_paymentStatus",1,"form-control-label"],["type","text","name","paymentStatus","id","field_paymentStatus","formControlName","paymentStatus",1,"form-control"],["for","field_patient",1,"form-control-label"],["id","field_patient","name","patient","formControlName","patientId",1,"form-control"],[3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf"],["for","field_appointment",1,"form-control-label"],["id","field_appointment","name","appointment","formControlName","appointmentId",1,"form-control"],["jhiTranslate","medappointApp.appointment.treatment","for","field_treatment",1,"form-control-label"],["id","field_treatment","name","treatment","formControlName","treatmentId",1,"form-control"],["for","field_invoiceTotal",1,"form-control-label"],["type","text","name","invoiceTotal","id","field_invoiceTotal","formControlName","invoiceTotal",1,"form-control"],[1,"text-right","save-entity-content"],["type","button","id","cancel-save",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["type","submit","id","save-entity",1,"btn","btn-primary",3,"disabled"],["icon","save"],["jhiTranslate","entity.action.save"],["class","form-text text-danger","jhiTranslate","entity.validation.required",4,"ngIf"],["jhiTranslate","entity.validation.required",1,"form-text","text-danger"]],template:function(e,t){1&e&&(n.kc(0,"div",0),n.Zc(1,"\n    "),n.kc(2,"div",1),n.Zc(3,"\n        "),n.kc(4,"form",2),n.vc("ngSubmit",(function(){return t.save()})),n.Zc(5,"\n            "),n.kc(6,"h2",3),n.Zc(7,"Create or edit a\n                Invoice"),n.jc(),n.Zc(8,"\n\n            "),n.kc(9,"div"),n.Zc(10,"\n                "),n.fc(11,"jhi-alert-error"),n.Zc(12,"\n\n                "),n.kc(13,"div",4),n.Zc(14,"\n                    "),n.kc(15,"label",5),n.Zc(16,"ID"),n.jc(),n.Zc(17,"\n                    "),n.fc(18,"input",6),n.Zc(19,"\n                "),n.jc(),n.Zc(20,"\n\n                "),n.kc(21,"div",7),n.Zc(22,"\n                    "),n.kc(23,"label",8),n.Zc(24,"Invoice Number"),n.jc(),n.Zc(25,"\n                    "),n.fc(26,"input",9),n.Zc(27,"\n                    "),n.Xc(28,Z,4,1,"div",10),n.Zc(29,"\n                "),n.jc(),n.Zc(30,"\n\n                "),n.kc(31,"div",7),n.Zc(32,"\n                    "),n.kc(33,"label",11),n.Zc(34,"Recipient Name"),n.jc(),n.Zc(35,"\n                    "),n.fc(36,"input",12),n.Zc(37,"\n                "),n.jc(),n.Zc(38,"\n\n                "),n.kc(39,"div",7),n.Zc(40,"\n                    "),n.kc(41,"label",13),n.Zc(42,"Recipient City"),n.jc(),n.Zc(43,"\n                    "),n.fc(44,"input",14),n.Zc(45,"\n                "),n.jc(),n.Zc(46,"\n\n                "),n.kc(47,"div",7),n.Zc(48,"\n                    "),n.kc(49,"label",15),n.Zc(50,"Invoice Status"),n.jc(),n.Zc(51,"\n                    "),n.fc(52,"input",16),n.Zc(53,"\n                "),n.jc(),n.Zc(54,"\n\n                "),n.kc(55,"div",7),n.Zc(56,"\n                    "),n.kc(57,"label",17),n.Zc(58,"Payment Type"),n.jc(),n.Zc(59,"\n                    "),n.fc(60,"input",18),n.Zc(61,"\n                "),n.jc(),n.Zc(62,"\n\n                "),n.kc(63,"div",7),n.Zc(64,"\n                    "),n.kc(65,"label",19),n.Zc(66,"Payment Status"),n.jc(),n.Zc(67,"\n                    "),n.fc(68,"input",20),n.Zc(69,"\n                "),n.jc(),n.Zc(70,"\n\n                "),n.kc(71,"div",7),n.Zc(72,"\n                    "),n.kc(73,"label",21),n.Zc(74,"Patient"),n.jc(),n.Zc(75,"\n                    "),n.kc(76,"select",22),n.Zc(77,"\n                        "),n.fc(78,"option",23),n.Zc(79,"\n                        "),n.Xc(80,S,2,2,"option",24),n.Zc(81,"\n                    "),n.jc(),n.Zc(82,"\n                "),n.jc(),n.Zc(83,"\n\n                "),n.kc(84,"div",7),n.Zc(85,"\n                    "),n.kc(86,"label",25),n.Zc(87,"Appointment"),n.jc(),n.Zc(88,"\n                    "),n.kc(89,"select",26),n.Zc(90,"\n                        "),n.Xc(91,j,2,2,"option",24),n.Zc(92,"\n                    "),n.jc(),n.Zc(93,"\n                "),n.jc(),n.Zc(94,"\n\n                "),n.kc(95,"div",7),n.Zc(96,"\n                    "),n.kc(97,"label",27),n.Zc(98,"Treatment"),n.jc(),n.Zc(99,"\n                    "),n.kc(100,"select",28),n.Zc(101,"\n                        "),n.Xc(102,I,2,2,"option",24),n.Zc(103,"\n                    "),n.jc(),n.Zc(104,"\n                "),n.jc(),n.Zc(105,"\n\n                "),n.kc(106,"div",7),n.Zc(107,"\n                    "),n.kc(108,"label",29),n.Zc(109,"Invoice Total"),n.jc(),n.Zc(110,"\n                    "),n.fc(111,"input",30),n.Zc(112,"\n                "),n.jc(),n.Zc(113,"\n            "),n.jc(),n.Zc(114,"\n\n            "),n.kc(115,"div",31),n.Zc(116,"\n                "),n.kc(117,"button",32),n.vc("click",(function(){return t.previousState()})),n.Zc(118,"\n                    "),n.fc(119,"fa-icon",33),n.Zc(120," "),n.kc(121,"span",34),n.Zc(122,"Cancel"),n.jc(),n.Zc(123,"\n                "),n.jc(),n.Zc(124,"\n\n                "),n.kc(125,"button",35),n.Zc(126,"\n                    "),n.fc(127,"fa-icon",36),n.Zc(128," "),n.kc(129,"span",37),n.Zc(130,"Save"),n.jc(),n.Zc(131,"\n                "),n.jc(),n.Zc(132,"\n            "),n.jc(),n.Zc(133,"\n        "),n.jc(),n.Zc(134,"\n    "),n.jc(),n.Zc(135,"\n"),n.jc()),2&e&&(n.Rb(4),n.Fc("formGroup",t.editForm),n.Rb(9),n.Fc("hidden",!t.editForm.get("id").value),n.Rb(15),n.Fc("ngIf",t.editForm.get("invoiceNumber").invalid&&(t.editForm.get("invoiceNumber").dirty||t.editForm.get("invoiceNumber").touched)),n.Rb(50),n.Fc("ngValue",null),n.Rb(2),n.Fc("ngForOf",t.patients),n.Rb(11),n.Fc("ngForOf",t.appointments),n.Rb(11),n.Fc("ngForOf",t.treatments),n.Rb(23),n.Fc("disabled",t.editForm.invalid||t.isSaving))},directives:[v.A,v.o,v.j,h.a,d.n,v.c,v.n,v.h,b.o,v.w,v.r,v.z,b.n,y.a],encapsulation:2});var A=i(22),N=i(63),F=i(94),T=i(15),w=i(115),C=i(203),D=i(118),R=i(70),O=i(119);class _{constructor(e,t){this.service=e,this.router=t}resolve(e){const t=e.params.id;return t?this.service.find(t).pipe(Object(F.a)(e=>e.body?Object(A.a)(e.body):(this.router.navigate(["404"]),N.a))):Object(A.a)(new f.a)}}_.ɵfac=function(e){return new(e||_)(n.sc(a.a),n.sc(c.d))},_.ɵprov=n.ac({token:_,factory:_.ɵfac,providedIn:"root"});class E{constructor(e){this.service=e}resolve(){return this.service.query().pipe(Object(T.a)(e=>e.body))}}E.ɵfac=function(e){return new(e||E)(n.sc(D.a))},E.ɵprov=n.ac({token:E,factory:E.ɵfac,providedIn:"root"});class M{constructor(e){this.service=e}resolve(){return this.service.query().pipe(Object(T.a)(e=>e.body))}}M.ɵfac=function(e){return new(e||M)(n.sc(R.a))},M.ɵprov=n.ac({token:M,factory:M.ɵfac,providedIn:"root"});class V{constructor(e){this.service=e}resolve(){return this.service.query().pipe(Object(T.a)(e=>e.body))}}V.ɵfac=function(e){return new(e||V)(n.sc(O.a))},V.ɵprov=n.ac({token:V,factory:V.ɵfac,providedIn:"root"});const q=[{path:"",component:u,resolve:{patients:E},data:{authorities:[w.a.USER],pageTitle:"medappointApp.invoice.home.title"},canActivate:[C.a]},{path:"new",component:k,resolve:{invoice:_,patients:E,appointments:M,treatments:V},data:{authorities:[w.a.USER],pageTitle:"medappointApp.invoice.home.title"},canActivate:[C.a]},{path:":id/edit",component:k,resolve:{invoice:_,patients:E,appointments:M,treatments:V},data:{authorities:[w.a.USER],pageTitle:"medappointApp.invoice.home.title"},canActivate:[C.a]}];class L{}L.ɵmod=n.cc({type:L}),L.ɵinj=n.bc({factory:function(e){return new(e||L)},imports:[[o.a,c.h.forChild(q)]]}),("undefined"==typeof ngJitMode||ngJitMode)&&n.Tc(L,{declarations:[u,k],imports:[o.a,c.h]})}}]);