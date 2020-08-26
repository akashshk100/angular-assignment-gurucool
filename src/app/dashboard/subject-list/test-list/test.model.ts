import {Questions} from '../../test/questions.model'

export class Test{
    constructor(){

    }

    testTitle: string;
    noOfQue: number;
    questions: Questions[];
    testDuration: number;
    testDeadline: Date;
}