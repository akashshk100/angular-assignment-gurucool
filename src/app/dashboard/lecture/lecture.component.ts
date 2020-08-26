import { Component } from "@angular/core"
import { LectureService } from './lecture.service';
import { Lecture } from './lecture.model';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'lec-tag',
    templateUrl: './lecture.component.html'
})
export class LectureComponent{

    constructor(private lectureService: LectureService, private route: ActivatedRoute){
        this.lectureService.subjectId = this.route.snapshot.params['subjectId']
        this.lectureService.subjectName = this.route.snapshot.params['subjectName']
    }

}