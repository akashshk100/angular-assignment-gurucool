import {Component, ViewChild} from "@angular/core"
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Time } from '@angular/common';

 
@Component({
    selector: 'new-test-tag',
    templateUrl: './new-test.component.html'
})
export class NewTestComponent{
    @ViewChild('f') form: NgForm

    constructor(private route: ActivatedRoute, private router: Router){
        this.route.params.subscribe(
            (params: Params) => {
                this.subjectId = params['subjectId'];
                this.subjectName = params['subjectName'];
            }
        )
    }
    subjectId: number;
    subjectName: string;
    testTitle: string;
    noOfQue: number;
    testDuration: number;
    testDeadline: Date;
    
    createTest(){
        if(this.form.valid){
            console.log(this.form.value.deadline)
            this.testTitle = this.form.value.title;
            this.noOfQue = this.form.value.noOfQue;
            this.testDuration = this.form.value.duration;
            this.testDeadline = this.form.value.deadline;
            this.router.navigate(['/dashboard/test', this.testTitle, this.noOfQue, this.testDuration, this.testDeadline]);
        }
    }
    
}