import {Component, ViewChild, OnInit} from "@angular/core"
import { LectureService } from '../lecture.service';
import { Lecture } from '../lecture.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { SubjectService } from '../../subject-list/subject.service';

@Component({
    selector: 'edit-lec-tag',
    templateUrl: './edit-lecture.component.html'
})
export class EditLectureComponent implements OnInit {
    @ViewChild('f') form:NgForm;
    constructor(private lectureService: LectureService, 
        private router: Router, 
        private route: ActivatedRoute,
        private subjectService: SubjectService){

    }
    formReset: boolean;
    hide: boolean = true;
    updateIndex: number;
    //subjectId: number
    subjectName: string
    ngOnInit(){
        this.subjectName = this.lectureService.subjectName
        
        this.lectureService.lectureEdit
        .subscribe(
            (index: number) => {
                this.hide = false;
                this.updateIndex = index;
                this.form.setValue({
                    "topic": this.lectureService.lectures[index].topic,
                    "description": this.lectureService.lectures[index].description,
                    "videoFile": "",
                    "resourceFile": ""
                })
            }
        )

        this.subjectService.subjectChange
        .subscribe( () => {
            this.subjectName = this.lectureService.subjectName
        })
    }


    editLecture(){
        this.lectureService.lectures[this.updateIndex].topic = this.form.value.topic;
        this.lectureService.lectures[this.updateIndex].description = this.form.value.description;
        this.hide = true;
        this.formReset = true;
        this.form.reset();
    }
}