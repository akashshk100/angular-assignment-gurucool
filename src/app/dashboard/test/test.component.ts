import { Component, OnInit, ViewChild } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { Questions } from './questions.model'
import { NgForm } from '@angular/forms';
import { Test } from '../subject-list/test-list/test.model' 
import { TestListService } from '../subject-list/test-list/test-list.service'

@Component({
    selector: 'test-tag',
    templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {

    constructor(private route: ActivatedRoute, private testListService: TestListService, private router: Router) {
        
    }
    
    ngOnInit(){
        this.testTitle = this.route.snapshot.params['title'];
        this.noOfQue = this.route.snapshot.params['noOfQue'];
        this.testDuration = this.route.snapshot.params['duration'];
        this.testDeadline = this.route.snapshot.params['deadline'];

        for(let i=0; i<this.noOfQue; i++){
            this.questions.push(new Questions());
        }
    }

    testTitle:string;
    noOfQue: number;
    testDuration: number;
    testDeadline: Date;

    questions: Questions[] = [];
    questionsDisplay: boolean[] = [];
    formInvalidity: boolean = false;
    
    addQue(i, f: NgForm){
        if(f.valid){
            this.questions[i].que = f.value.que;
            this.questions[i].op1 = f.value.op1;
            this.questions[i].op2 = f.value.op2;
            this.questions[i].op3 = f.value.op3;
            this.questions[i].op4 = f.value.op4;
            this.questions[i].correctOp = f.value.correctOp;
            this.questions[i].marks = f.value.marks;
            this.questionsDisplay[i] = true;
            console.log(this.questions)
        }  
    }

    submit(){
        if(this.checkQuestionsValidity()){
            let tempTest = new Test();
            tempTest.testTitle = this.testTitle;
            tempTest.noOfQue = this.noOfQue;
            tempTest.testDuration = this.testDuration;
            tempTest.testDeadline = this.testDeadline;
            tempTest.questions = this.questions;
            this.testListService.tests.push(tempTest);
            this.formInvalidity = false;
            this.router.navigate(['dashboard']);
        }
        else{
            this.formInvalidity = true;
            return;
        }
    }

    changeQuestionDisplay(i){
        this.questionsDisplay[i] = false;
    }

    checkQuestionsValidity(){
        for(let i=0; i<this.noOfQue; i++){
            if(this.questions[i].que === null){
                return false;
            }
        }
        return true;
    }
}