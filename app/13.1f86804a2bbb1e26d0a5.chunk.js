(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{203:function(e,t,n){n.d(t,"a",(function(){return d}));var a=n(0),i=n(22),r=n(24),s=n(55),o=n(56),c=n(6);class d{constructor(e,t,n,a){this.router=e,this.loginModalService=t,this.accountService=n,this.stateStorageService=a}canActivate(e,t){e.data.authorities;return Object(i.a)(!0)}checkLogin(e,t){return Object(i.a)(!0)}}d.ɵfac=function(e){return new(e||d)(a.sc(c.d),a.sc(s.a),a.sc(r.a),a.sc(o.a))},d.ɵprov=a.ac({token:d,factory:d.ɵfac,providedIn:"root"})},204:function(e,t,n){n.d(t,"a",(function(){return a}));const a=(e,t)=>{var n;const a=e.map(e=>e.id).indexOf(null===(n=e.find(e=>e.id===t.id))||void 0===n?void 0:n.id);return e=-1!==a?[...e.slice(0,a),t,...e.slice(a+1,e.length)]:[...e,t]}},248:function(e,t,n){n.r(t),n.d(t,"MedappointTreatmentModule",(function(){return f}));var a=n(0),i=n(6),r=n(57),s=n(119),o=n(204),c=n(4),d=n(88);const l=function(){return[]};class u{constructor(e,t,n){this.treatmentService=e,this.router=t,this.modalService=n,this.treatments=[],this.formFields=[{key:"description",type:"input",tskey:"medappointApp.treatment.description",defaultValue:"",templateOptions:{keyCode:"description",required:!0,label:"description"}},{key:"duration",type:"input",tskey:"medappointApp.treatment.duration",defaultValue:"",templateOptions:{keyCode:"duration",required:!0,type:"number",label:"duration"}}],this.tableHeaders=[{columnsValue:"id",fieldName:"medappointApp.treatment.id",width:"50%",sortable:!0},{columnsValue:"description",fieldName:"medappointApp.treatment.description",width:"50%",sortable:!0}],this.columnPercentages=[]}loadAll(){this.treatmentService.query().subscribe(e=>this.paginateTreatments(e.body,e.headers),()=>this.onError())}ngOnInit(){this.loadAll()}trackId(e,t){return t.id}delete(e){const t=Object.keys(e);for(let e=0;e<t.length;e++)this.treatmentService.delete(parseInt(t[e])).subscribe(n=>{e+1===t.length&&this.loadAll()})}getSelectedData({method:e,rows:t}){this[e](t)}updateTreatment(e){void 0!==e.id?this.subscribeToSaveResponse(this.treatmentService.update(e),e):this.subscribeToSaveResponse(this.treatmentService.create(e),e)}subscribeToSaveResponse(e,t){e.subscribe(e=>this.onSaveSuccess(e.body),()=>this.onError())}onSaveSuccess(e){this.treatments=Object(o.a)(this.treatments,e)}onError(){console.log("Error")}paginateTreatments(e,t){if(e){this.treatments=[];for(let t=0;t<e.length;t++)this.treatments.push(e[t])}}}u.ɵfac=function(e){return new(e||u)(a.ec(s.a),a.ec(i.d),a.ec(c.o))},u.ɵcmp=a.Yb({type:u,selectors:[["jhi-treatment"]],decls:2,vars:5,consts:[["title","treatment","searchValue","name",3,"tableHeaders","data","formFields","selectActions","updateEmit","selectedEmit"]],template:function(e,t){1&e&&(a.kc(0,"jhi-data-table",0),a.vc("updateEmit",(function(e){return t.updateTreatment(e)}))("selectedEmit",(function(e){return t.getSelectedData(e)})),a.Zc(1,"\n"),a.jc()),2&e&&a.Fc("tableHeaders",t.tableHeaders)("data",t.treatments)("formFields",t.formFields)("selectActions",a.Ic(4,l))},directives:[d.a],encapsulation:2});var p=n(115),m=n(203);const h=[{path:"",component:u,data:{authorities:[p.a.USER],pageTitle:"medappointApp.treatment.home.title"},canActivate:[m.a]}];class f{}f.ɵmod=a.cc({type:f}),f.ɵinj=a.bc({factory:function(e){return new(e||f)},imports:[[r.a,i.h.forChild(h)]]}),("undefined"==typeof ngJitMode||ngJitMode)&&a.Tc(f,{declarations:[u],imports:[r.a,i.h]})}}]);