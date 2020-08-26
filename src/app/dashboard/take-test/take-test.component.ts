import { Component, OnInit } from '@angular/core'
import { TestListService } from '../subject-list/test-list/test-list.service'
import { ActivatedRoute, Router } from '@angular/router' 
import { Test } from '../subject-list/test-list/test.model';
import { Questions } from '../test/questions.model';

@Component({
    selector: 'take-test-tag',
    templateUrl: './take-test.component.html'
})
export class TakeTestComponent implements OnInit{
    constructor(private testListService: TestListService, private route: ActivatedRoute){

    }
    i: number;
    test: Test;
    questions: Questions[];
    ngOnInit(){
        this.i = this.route.snapshot.params['id'];
        this.test = this.testListService.tests[this.i];
        this.questions = this.test.questions;
    }
    submit(){

    }
}