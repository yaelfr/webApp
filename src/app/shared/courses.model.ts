export class courses{
    public courseId:number;
    public courseName:string;
    public payment:number;
    public level:number;
    public image:string;
    public description:string
    constructor( courseId:number,courseName:string, payment:number, level:number,  image:string, description:string)
    {
      this.courseId=courseId;
      this.courseName=courseName;
      this.payment=payment;
      this.level=level;
      this.image=image;
      this.description=description;
    }
}