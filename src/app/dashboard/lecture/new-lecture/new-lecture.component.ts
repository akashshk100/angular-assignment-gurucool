import {Component, ViewChild, OnInit} from "@angular/core"
import { LectureService } from '../lecture.service';
import { Lecture } from '../lecture.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'new-lec-tag',
    templateUrl: './new-lecture.component.html'
})
export class NewLectureComponent implements OnInit {
    @ViewChild('f') form:NgForm;
    constructor(private lectureService: LectureService){
        
    }
    formReset: boolean;
    mode: string = "upload";
    updateIndex: number;
    ngOnInit(){
        this.lectureService.lectureEdit
        .subscribe(
            (index: number) => {
                this.mode = "update";
                this.updateIndex = index;
                this.form.setValue({
                    "topic": this.lectureService.lectures[index].topic,
                    "description": this.lectureService.lectures[index].description,
                    "videoFile": "",
                    "resourceFile": ""
                })
            }
        )
    }

    subjectId = this.lectureService.subjectId;
    subjectName = this.lectureService.subjectName;

    videoFileLabel: String = 'Choose Video File'
    resourceFileLabel: String = 'Choose Resource File'

    changeVideoLabel(){
        
        let fileArray: String[] = this.form.value.videoFile.split('\\')
        let fileName = fileArray[fileArray.length-1]
        this.videoFileLabel = fileName
    }

    changeResourceLabel(){
       
        let fileArray: String[] = this.form.value.resourceFile.split('\\')
        let fileName = fileArray[fileArray.length-1]
        this.resourceFileLabel = fileName
    }

    addLecture(){
        if(this.form.valid && this.mode === "upload"){
            console.log(this.form);
            let lectureObj = new Lecture(this.form.value.topic, this.form.value.description, "attendance_9012.csv", this.form.value.resourceFile , this.form.value.videoFile, 0, new Date())
            this.lectureService.lectures.push(lectureObj)
            this.formReset = true;
            this.form.reset();
            this.lectureService.lectureLength = this.lectureService.lectureLength + 1;
            this.lectureService.lengthChange.next();
        }
        else if(this.form.valid && this.mode === "update"){
            this.lectureService.lectures[this.updateIndex].topic = this.form.value.topic;
            this.lectureService.lectures[this.updateIndex].description = this.form.value.description;
            this.mode = "upload";
            this.formReset = true;
            this.form.reset();
        }
    }
}