import { Component } from '@angular/core'
import { LectureService } from '../lecture.service';

@Component({
    selector: 'new-stream-tag',
    templateUrl: './new-stream.component.html'
})
export class NewStreamComponent {
    constructor(private lectureService: LectureService) {
        
    }

    subjectId = this.lectureService.subjectId;

}