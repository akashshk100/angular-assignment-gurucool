import { Component, ViewChild, OnInit, AfterViewInit } from "@angular/core"
import { LectureService } from "../lecture.service"
import { Lecture } from "../lecture.model"
import { MatPaginator} from '@angular/material/paginator'
import { SubjectService } from '../../subject-list/subject.service';
  
@Component({
    selector: "lec-list-tag",
    templateUrl: "./lecture-list.component.html"
})
export class LectureListComponent implements OnInit{

    constructor(private lectureService: LectureService, private subjectService: SubjectService){

    }
    emptyLecture: boolean;
    lectureLength: number
    tempLectures: Lecture[] 
    detailStatus: boolean[] = []
    subjectName: string

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit(){
        this.lectureLength = this.lectureService.lectureLength
        this.tempLectures = this.lectureService.lectures
        this.subjectName = this.lectureService.subjectName
        
        if(this.lectureService.lectureLength === 0){
            this.emptyLecture = true;
        }
        this.lectureService.lengthChange.subscribe(
            () => {
                if(this.lectureService.lectureLength === 0){
                    this.emptyLecture = true;
                }
                else{
                    this.emptyLecture = false;
                }
            }
        )

        this.subjectService.subjectChange
        .subscribe( () => {
            this.tempLectures = this.lectureService.lectures
            this.subjectName = this.lectureService.subjectName
        })
    }

    editLecture(i){
        this.lectureService.lectureEdit.next(i);
    }

    deleteLecture(i){
        this.lectureService.lectures.splice(i, 1);
        this.lectureService.lectureLength = this.lectureService.lectureLength - 1;
        this.lectureService.lengthChange.next();
    }

    playLecture(){
        
    }

}