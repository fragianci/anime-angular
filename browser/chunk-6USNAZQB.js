import{A as z,b as q,c as d,d as B,e as A,f as L,i as O,j as R,k as V,l as H,n as J,o as $}from"./chunk-JMZFUB6V.js";import{Aa as P,Ca as M,H as m,Ha as G,I as f,Ia as U,O as u,Q as i,T as a,U as o,Ua as j,V as s,Va as g,Wa as k,Z as v,_ as c,a as y,f as F,fa as l,h as C,ha as N,l as _,m as b,na as h,oa as E,p as w,pa as T,q as S,qa as I,v as x,w as D}from"./chunk-NTF7O24V.js";var Q=(()=>{class e{constructor(){this.nameTakens=["Matteo","Marco"]}hasNumber(){return r=>(console.log(typeof r.value),new RegExp(/[0-9]/).test(r.value)?{containsNumbers:!0}:null)}nameTakenAsync(){let r="";return n=>F(this.nameTakens.map(t=>(r=n.value,t.toLowerCase())).includes(r.toLowerCase())).pipe(_(1e3),C(t=>t?{usernameExists:!0}:null))}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var W=e=>({"is-invalid":e}),ee=(e,p)=>({"bi-eye":e,"bi-eye-slash":p}),re=e=>({"border-danger-subtle":e});function te(e,p){if(e&1&&s(0,"anime-error-handler",26),e&2){let r=c();i("element","Nome")("error",r.nameForm.errors)}}function ie(e,p){if(e&1&&s(0,"anime-error-handler",26),e&2){let r=c();i("element","Cognome")("error",r.surnameForm.errors)}}function oe(e,p){if(e&1&&s(0,"anime-error-handler",26),e&2){let r=c();i("element","Email")("error",r.emailForm.errors)}}function ne(e,p){if(e&1&&s(0,"anime-error-handler",26),e&2){let r=c();i("element","Password")("error",r.passwordForm.errors)}}function ae(e,p){if(e&1&&s(0,"anime-error-handler",26),e&2){let r,n=c();i("element","Strada")("error",(r=n.infoUserGroup.get("street"))==null?null:r.errors)}}var X=(()=>{class e{constructor(r,n,t){this.formBuilder=r,this.authService=n,this.userService=t,this.myForm=new L({}),this.user=new g,this.isTypePassword=!0}ngOnInit(){this.initForm()}initForm(){this.myForm=this.formBuilder.group({name:["",[d.required],[this.userService.nameTakenAsync()]],surname:["",[d.required],[]],email:["",[d.required,d.email]],password:["",[d.required,d.minLength(5),this.userService.hasNumber()],[]],infoUser:this.formBuilder.group({street:["",[d.required,d.email]],birthCity:["",[]]})}),this.authService.getProfile$().subscribe({next:r=>{console.log("getProfile: ",r)}}),this.stradaForm.valueChanges.pipe(b(r=>{r.length&&console.log("scrivendo")})).subscribe()}send(){let r=Math.round(Math.random()*100);console.log(r),this.authService.updateUser(new g(y({id:r},this.myForm.value)))}get infoUserGroup(){return this.myForm.get("infoUser")}get nameForm(){return this.myForm.get("name")}get passwordForm(){return this.myForm.get("password")}get surnameForm(){return this.myForm.get("surname")}get emailForm(){return this.myForm.get("email")}get stradaForm(){return this.infoUserGroup.get("street")}changeTypePassword(){this.isTypePassword=!this.isTypePassword}static{this.\u0275fac=function(n){return new(n||e)(f(J),f(k),f(Q))}}static{this.\u0275cmp=x({type:e,selectors:[["anime-data-driven-form"]],decls:45,vars:23,consts:[[1,"text-center"],[1,"d-flex","justify-content-center","row"],[1,"card","col-11","col-md-7","shadow-lg","rounded","p-5","m-3"],["action","",3,"ngSubmit","formGroup"],[1,"form-group","mt-1"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control",3,"ngClass"],[3,"element","error",4,"ngIf"],["for","surname"],["type","text","id","surname","formControlName","surname",1,"form-control"],["for","email"],["type","email","id","email","formControlName","email",1,"form-control"],["for","password"],[1,"input-group"],["id","password","formControlName","password",1,"form-control",3,"type"],[1,"input-group-prepend",3,"click"],["id","",1,"input-group-text","changePassword"],[1,"bi",3,"ngClass"],["formGroupName","infoUser",1,"mt-2","p-4","border","rounded-2",3,"ngClass"],[1,"form-group"],["for","street"],["type","text","id","street","formControlName","street",1,"form-control","street",3,"ngClass"],["for","birthCity"],["type","text","id","birthCity","formControlName","birthCity",1,"birthCity","form-control"],[1,"d-flex","justify-content-end","mt-3"],["type","submit",1,"btn","btn-primary"],[3,"element","error"]],template:function(n,t){n&1&&(a(0,"h2",0),l(1,"Data driven form o Reactive form"),o(),a(2,"div",1)(3,"div",2)(4,"form",3),v("ngSubmit",function(){return t.send()}),a(5,"div",4)(6,"label",5),l(7,"Nome"),o(),s(8,"input",6),o(),u(9,te,1,2,"anime-error-handler",7),a(10,"div",4)(11,"label",8),l(12,"Cognome"),o(),s(13,"input",9),o(),u(14,ie,1,2,"anime-error-handler",7),a(15,"div",4)(16,"label",10),l(17,"Email"),o(),s(18,"input",11),o(),u(19,oe,1,2,"anime-error-handler",7),a(20,"div",4)(21,"label",12),l(22,"Password"),o(),a(23,"div",13),s(24,"input",14),a(25,"div",15),v("click",function(){return t.changeTypePassword()}),a(26,"span",16),s(27,"i",17),o()()()(),u(28,ne,1,2,"anime-error-handler",7),a(29,"div",18)(30,"div",19)(31,"label",20),l(32,"Strada"),o(),s(33,"input",21),o(),u(34,ae,1,2,"anime-error-handler",7),a(35,"div",19)(36,"label",22),l(37,"Citt\xE0 di nascita"),o(),s(38,"input",23),o()(),a(39,"div",24)(40,"button",25),l(41,"Invia"),o()()(),a(42,"pre"),l(43),T(44,"json"),o()()()),n&2&&(m(4),i("formGroup",t.myForm),m(4),i("ngClass",h(14,W,t.nameForm.touched&&t.nameForm.invalid)),m(),i("ngIf",t.nameForm.touched),m(5),i("ngIf",t.surnameForm.touched),m(5),i("ngIf",t.emailForm.touched),m(5),i("type",t.isTypePassword?"password":"text"),m(3),i("ngClass",E(16,ee,!t.isTypePassword,t.isTypePassword)),m(),i("ngIf",t.passwordForm.touched),m(),i("ngClass",h(19,re,t.infoUserGroup.invalid&&t.infoUserGroup.touched)),m(4),i("ngClass",h(21,W,t.stradaForm.invalid&&t.stradaForm.touched)),m(),i("ngIf",t.stradaForm.touched),m(9),N("      ",I(44,12,t.myForm.value),`
    `))},dependencies:[P,M,$,O,q,B,A,R,H,V,G],styles:[".changePassword[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0}.changePassword[_ngcontent-%COMP%]:hover{cursor:pointer}"]})}}return e})();var me=[{path:"",component:X}],be=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=D({type:e})}static{this.\u0275inj=S({imports:[U,z,j.forChild(me)]})}}return e})();export{be as DataDrivenFormModule};
