import { Lecture } from './lecture.model'
import { Subject } from 'rxjs';

export class LectureService{

    subjectId;
    subjectName;

    lectures: Lecture[] = [
        new Lecture("Kinematics", "Some big description", "attendance_5032.csv", "s3.resource.com", "youtu.be.com", 83, "2020-08-01"),
        new Lecture("Lights", "Some Description", "attendance_5011.csv", "s3.resource.com", "youtu.be.com", 92.01, "2020-07-28"),
        new Lecture("Magnetism", "Some Description", "attendance_5020.csv", "s3.resource.com", "youtu.be.com", 100, "2020-07-24")
    ];

    detailStatusAr: boolean[] = [];

    lectureEdit = new Subject<number>();

    lengthChange = new Subject();
    lectureLength: number = this.lectures.length;

}