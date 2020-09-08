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

    STUDENT_DATA: Student[] = [
        {
          "position": 1,
          "name": "Emery Jaskolski",
          "attendance": 85,
          "score": 62
        },
        {
          "position": 2,
          "name": "Antonetta Klocko",
          "attendance": 6,
          "score": 46
        },
        {
          "position": 3,
          "name": "Jeremie Simonis",
          "attendance": 96,
          "score": 33
        },
        {
          "position": 4,
          "name": "Hermina Pfannerstill",
          "attendance": 89,
          "score": 78
        },
        {
          "position": 5,
          "name": "Selmer Jast",
          "attendance": 19,
          "score": 65
        },
        {
          "position": 6,
          "name": "Colt Christiansen II",
          "attendance": 89,
          "score": 24
        },
        {
          "position": 7,
          "name": "Jasmin Wisoky",
          "attendance": 68,
          "score": 17
        },
        {
          "position": 8,
          "name": "Dorian Goodwin",
          "attendance": 50,
          "score": 88
        },
        {
          "position": 9,
          "name": "Wilford Bergstrom",
          "attendance": 45,
          "score": 82
        },
        {
          "position": 10,
          "name": "Torrance Ernser",
          "attendance": 70,
          "score": 98
        },
        {
          "position": 11,
          "name": "Monserrate Prosacco",
          "attendance": 84,
          "score": 75
        },
        {
          "position": 12,
          "name": "Litzy Ratke II",
          "attendance": 29,
          "score": 28
        },
        {
          "position": 13,
          "name": "Desmond Dare",
          "attendance": 39,
          "score": 35
        },
        {
          "position": 14,
          "name": "Dr. Barney Strosin",
          "attendance": 92,
          "score": 39
        },
        {
          "position": 15,
          "name": "Hassan Altenwerth",
          "attendance": 95,
          "score": 31
        },
        {
          "position": 16,
          "name": "Deja Braun",
          "attendance": 35,
          "score": 81
        },
        {
          "position": 17,
          "name": "Joey Eichmann IV",
          "attendance": 49,
          "score": 72
        },
        {
          "position": 18,
          "name": "Cordie Lakin",
          "attendance": 2,
          "score": 98
        },
        {
          "position": 19,
          "name": "Haskell Purdy",
          "attendance": 74,
          "score": 32
        },
        {
          "position": 20,
          "name": "Kara Jenkins",
          "attendance": 47,
          "score": 7
        }
      ];
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
            this.isLoading = false
            this.dataSource = new MatTableDataSource<Student>(this.STUDENT_DATA);
            this.dataSource.paginator = this.paginator;
            // this.httpError = true
            // this.openSnackBar("Mock API limit reached, try again later")
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