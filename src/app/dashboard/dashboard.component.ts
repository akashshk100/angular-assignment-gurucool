import { Component } from '@angular/core'
import { TestListService } from './subject-list/test-list/test-list.service' 

@Component({
    selector: 'dashboard-tag',
    templateUrl: './dashboard.component.html',
    providers: [TestListService]
})
export class DashboardComponent{

}