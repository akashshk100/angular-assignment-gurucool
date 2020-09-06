import { Lecture } from './lecture.model'
import { Subject } from 'rxjs';

export class LectureService{

    subjectId;
    subjectName;

    lectures: Lecture[] = [
        new Lecture("Kinematics", "This table builds on the foundation of the CDK data-table and uses a similar interface for its data input and template, except that its element and attribute selectors will be prefixed with mat- instead of cdk-. For more information on the interface and a detailed look at how the table is implemented, see the guide covering the CDK data-table.", "attendance_5032.csv", "s3.resource.com", "youtu.be.com", 83, "2020-08-01"),
        new Lecture("Lights", "This table builds on the foundation of the CDK data-table and uses a similar interface for its data input and template, except that its element and attribute selectors will be prefixed with mat- instead of cdk-. For more information on the interface and a detailed look at how the table is implemented, see the guide covering the CDK data-table.", "attendance_5011.csv", "s3.resource.com", "youtu.be.com", 92.01, "2020-07-28"),
        new Lecture("Magnetism", "Check out the API docs and examples of the mat-text-column to see how you can customize the header text, text alignment, and cell data accessor. Note that this is not compatible with the flex-layout table. Also, a data accessor should be provided if your data may have its properties minified since the string name will no longer match after minification.", "attendance_5020.csv", "s3.resource.com", "youtu.be.com", 100, "2020-07-24")
    ];

    detailStatusAr: boolean[] = [];

    lectureEdit = new Subject<number>();

    lengthChange = new Subject();
    lectureLength: number = this.lectures.length;

}