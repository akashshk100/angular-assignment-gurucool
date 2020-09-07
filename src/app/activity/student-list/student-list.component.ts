import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';


export interface Student {
    name: string;
    position: number;
    attendance: number;
    score: number;
}
  

@Component({
    selector: 'student-list-tag',
    templateUrl: './student-list.component.html'
})
export class StudentListComponent implements OnInit ,AfterViewInit{

    constructor(private http: HttpClient, private _snackBar: MatSnackBar){

    }

    STUDENT_DATA: Student[] = [];
    dataSource
    isLoading: boolean = true
    httpError: boolean = false

    ngOnInit(){
        this.http.get("https://api.mockaroo.com/api/896c2380?count=20&key=6b5d9e30")
        .subscribe( (response: any[]) => {
            this.isLoading = false
            this.STUDENT_DATA = response
            this.dataSource = new MatTableDataSource<Student>(this.STUDENT_DATA);
            this.dataSource.paginator = this.paginator;
        },
        (errorResponse) => {
            this.httpError = true
            this.openSnackBar("Mock API limit reached, try again later")
        })
    }

    displayedColumns: string[] = ['position', 'name', 'attendance', 'score'];
    

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        
    }

    openSnackBar(message: string) {
        this._snackBar.open(message, 'ok', {
          duration: 2000,
        });
    }
}