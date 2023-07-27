export interface ICourse {
    course_id:number;
    course_name:string;
    course_instructor:string;
    course_description:string;
    course_rating:number;
    course_level:string;
    course_duration:number;
    course_price:number;
    course_field:string;
    [key: string]: any;
}