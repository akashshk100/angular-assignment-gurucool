import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
    selector: 'sub-list-tag',
    templateUrl: './subject-list.component.html'
}) 
export class SubjectListComponent{
    
    constructor(private router: Router, private route: ActivatedRoute){
    
    }

    subjects: string[] = ["Physics", "Basic Electronic Engineering","Chemistry","Basic Civil Engineering","Engineering Mathematics"]
    avgAttendance: number[] = [88.2, 93, 95.5, 99.01, 72];
    class: string[] = ["FE", "FE", "FE", "FE", "FE"];
    subjectId = [20,25,32,21,17]; 
    
    option: boolean[] = [];

    enableOption(i){
        this.option[i] = true;
    }
    disableOption(i){
        this.option[i] = false;
    }

    viewTest(i){
        this.router.navigate(['test', this.subjectId[i], this.subjects[i]], { relativeTo: this.route })
    }
    newTest(i){
        this.router.navigate(['new-test', this.subjectId[i], this.subjects[i]], { relativeTo: this.route })
    }
    viewSubject(i){
        this.router.navigate(['dashboard/lecture', this.subjectId[i], this.subjects[i]])
    }
}