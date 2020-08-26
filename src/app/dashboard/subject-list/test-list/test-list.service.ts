import { Injectable } from '@angular/core'
import { Test } from './test.model' 

@Injectable()
export class TestListService{
    tests:Test[] = [];
}