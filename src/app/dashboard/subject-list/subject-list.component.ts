import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { SubjectService } from './subject.service'

@Component({
    selector: 'sub-list-tag',
    templateUrl: './subject-list.component.html'
}) 
export class SubjectListComponent{
    
    constructor(private router: Router, private route: ActivatedRoute, private subjectService: SubjectService){
    
    }

    subjects = this.subjectService.subjects
    // avgAttendance: number[] = [88.2, 93, 95.5, 99.01, 72];
    // class: string[] = ["FE", "FE", "FE", "FE", "FE"];
    // subjectId = [20,25,32,21,17]; 
    
    option: boolean[] = [];

    enableOption(i){
        this.option[i] = true;
    }
    disableOption(i){
        this.option[i] = false;
    }

    viewTest(i){
        this.router.navigate(['test', this.subjectService.subjects[i].id, this.subjectService.subjects[i].name], { relativeTo: this.route })
    }
    newTest(i){
        this.router.navigate(['new-test', this.subjectService.subjects[i].id, this.subjectService.subjects[i].name], { relativeTo: this.route })
    }
    newLecture(i){
        this.router.navigate(['new-lecture', this.subjectService.subjects[i].id, this.subjectService.subjects[i].name], { relativeTo: this.route })
    }
    viewSubject(i){
        this.router.navigate(['dashboard/lecture', this.subjectService.subjects[i].id, this.subjectService.subjects[i].name])
    }
}