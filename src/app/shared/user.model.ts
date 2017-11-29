export class user {
    public userId:number;
    public userName:string;
    public password:string;
    public email:string;
    public payment:number;
    public totalScore:number;

    constructor(id:number,name:string,pass:string,email:string,payment:number,total:number){
       this.userId=id;
       this.userName=name;
       this.password=pass;
       this.email=email;
       this.payment=payment;
       this.totalScore=total;
    }
}