import { Component, Input, OnInit, OnDestroy } from "@angular/core"
import { LectureService } from "../lecture.service"
import { Lecture } from "../lecture.model"
  
@Component({
    selector: "lec-list-tag",
    templateUrl: "./lecture-list.component.html"
})
export class LectureListComponent implements OnInit{

    constructor(private lectureService: LectureService){

    }
    emptyLecture: boolean;
    ngOnInit(){
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
    }

    option: boolean[] = [];

    public tempLectures: Lecture[] = this.lectureService.lectures;
    public detailStatus: boolean[] = this.lectureService.detailStatusAr;
    subjectName: string = this.lectureService.subjectName;

    changeDetailStatus(i){
        // console.log(this.tempLectures)
        // console.log(this.detailStatus)
        this.detailStatus[i] = !this.detailStatus[i];
    }

    editLecture(i){
        this.lectureService.lectureEdit.next(i);
    }

    enableOption(i){
        this.option[i] = true;
    }

    disableOption(i){
        this.option[i] = false;
    }

    deleteLecture(i){
        this.lectureService.lectures.splice(i, 1);
        this.lectureService.lectureLength = this.lectureService.lectureLength - 1;
        this.lectureService.lengthChange.next();
        
    }

    playLecture(){
        
    }

}