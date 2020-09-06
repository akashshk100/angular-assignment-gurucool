import {Component, ViewChild, OnInit} from "@angular/core"
import { LectureService } from '../../lecture/lecture.service';
import { Lecture } from '../../lecture/lecture.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'new-lec-tag',
    templateUrl: './new-lecture.component.html'
})
export class NewLectureComponent {
    @ViewChild('f') form:NgForm;
    constructor(private lectureService: LectureService, private router: Router, private route: ActivatedRoute){
        this.route.params.subscribe(
            (params: Params) => {
                this.subjectId = params['subjectId'];
                this.subjectName = params['subjectName'];
            }
        )
    }
    formReset: boolean;
    subjectId: number
    subjectName: string

    addLecture(){
        //console.log(this.form);
        let lectureObj = new Lecture(this.form.value.topic, this.form.value.description, "attendance_9012.csv", this.form.value.resourceFile , this.form.value.videoFile, 0, new Date())
        this.lectureService.lectures.push(lectureObj)
        this.formReset = true;
        this.form.reset();
        this.lectureService.lectureLength = this.lectureService.lectureLength + 1;
        this.lectureService.lengthChange.next();
        this.router.navigate(['dashboard/lecture', this.subjectId, this.subjectName])
        
    }
}