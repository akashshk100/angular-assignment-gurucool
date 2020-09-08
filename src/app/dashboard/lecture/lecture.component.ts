import { Component, OnInit, AfterViewInit } from "@angular/core"
import { LectureService } from './lecture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from '../subject-list/subject.service';

@Component({
    selector: 'lec-tag',
    templateUrl: './lecture.component.html'
})
export class LectureComponent implements OnInit{

    constructor(private lectureService: LectureService, 
        private route: ActivatedRoute, 
        private subjectService: SubjectService,
        private router: Router){
        
        
    }
    index: number
    subjects: any
    ngOnInit(){
        console.log('akash')
        this.lectureService.subjectId = this.route.snapshot.params['subjectId']
        this.lectureService.subjectName = this.route.snapshot.params['subjectName']
        this.subjects = this.subjectService.subjects
        this.index = this.route.snapshot.params['subjectId']
    }
    
    onTabChange(){
        //console.log(this.index)
        this.lectureService.subjectId = this.subjects[this.index].id
        this.lectureService.subjectName = this.subjects[this.index].name
        this.subjectService.subjectChange.next()
        this.router.navigate(['dashboard/lecture', this.subjects[this.index].id, this.subjects[this.index].name])
    }

}