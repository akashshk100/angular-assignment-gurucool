import { Component } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { TestListService } from './test-list.service'

@Component({
    selector: 'test-list-tag',
    templateUrl: './test-list.component.html'
}) 
export class TestListComponent {
    constructor(private route:ActivatedRoute, private testListService: TestListService, private router: Router){
        this.route.params.subscribe(
            (params: Params) => {
                this.subjectId = params['subjectId'];
                this.subjectName = params['subjectName']
            }
        )
    }

    subjectName: String;
    subjectId: number;

    tests = this.testListService.tests;
    
    option: boolean[] = [];
    enableOption(i){
        this.option[i] = true;
    }
    disableOption(i){
        this.option[i] = false;
    }

    startTest(i:number){
        this.router.navigate(['dashboard/take-test', i]);
    }
}