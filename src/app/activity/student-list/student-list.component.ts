import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';



export interface Student {
    name: string;
    position: number;
    attendance: number;
    score: number;
}
  
const STUDENT_DATA: Student[] = [
    {position: 1, name: 'Hydrogen', attendance: 1.0079, score: 89},
  {position: 2, name: 'Helium', attendance: 4.0026, score: 77},
  {position: 3, name: 'Lithium', attendance: 6.941, score: 45},
  {position: 4, name: 'Beryllium', attendance: 9.0122, score: 96},
  {position: 5, name: 'Boron', attendance: 10.811, score: 88},
  {position: 6, name: 'Carbon', attendance: 12.0107, score: 88},
  {position: 7, name: 'Nitrogen', attendance: 14.0067, score: 88},
  {position: 8, name: 'Oxygen', attendance: 15.9994, score: 88},
  {position: 9, name: 'Fluorine', attendance: 18.9984, score: 88},
  {position: 10, name: 'Neon', attendance: 20.1797, score: 88},
  {position: 11, name: 'Sodium', attendance: 22.9897, score: 75},
  {position: 12, name: 'Magnesium', attendance: 24.305, score: 75},
  {position: 13, name: 'Aluminum', attendance: 26.9815, score: 75},
  {position: 14, name: 'Silicon', attendance: 28.0855, score: 75},
  {position: 15, name: 'Phosphorus', attendance: 30.9738, score: 75},
  {position: 16, name: 'Sulfur', attendance: 32.065, score: 83},
  {position: 17, name: 'Chlorine', attendance: 35.453, score: 83},
  {position: 18, name: 'Argon', attendance: 39.948, score: 83},
  {position: 19, name: 'Potassium', attendance: 39.0983, score: 83},
  {position: 20, name: 'Calcium', attendance: 40.078, score: 76},
];
  

@Component({
    selector: 'student-list-tag',
    templateUrl: './student-list.component.html'
})
export class StudentListComponent implements AfterViewInit{

    STUDENT_DATA: Student[] = [
        {position: 1, name: 'Hydrogen', attendance: 1.0079, score: 89},
      {position: 2, name: 'Helium', attendance: 4.0026, score: 77},
      {position: 3, name: 'Lithium', attendance: 6.941, score: 45},
      {position: 4, name: 'Beryllium', attendance: 9.0122, score: 96},
      {position: 5, name: 'Boron', attendance: 10.811, score: 88},
      {position: 6, name: 'Carbon', attendance: 12.0107, score: 88},
      {position: 7, name: 'Nitrogen', attendance: 14.0067, score: 88},
      {position: 8, name: 'Oxygen', attendance: 15.9994, score: 88},
      {position: 9, name: 'Fluorine', attendance: 18.9984, score: 88},
      {position: 10, name: 'Neon', attendance: 20.1797, score: 88},
      {position: 11, name: 'Sodium', attendance: 22.9897, score: 75},
      {position: 12, name: 'Magnesium', attendance: 24.305, score: 75},
      {position: 13, name: 'Aluminum', attendance: 26.9815, score: 75},
      {position: 14, name: 'Silicon', attendance: 28.0855, score: 75},
      {position: 15, name: 'Phosphorus', attendance: 30.9738, score: 75},
      {position: 16, name: 'Sulfur', attendance: 32.065, score: 83},
      {position: 17, name: 'Chlorine', attendance: 35.453, score: 83},
      {position: 18, name: 'Argon', attendance: 39.948, score: 83},
      {position: 19, name: 'Potassium', attendance: 39.0983, score: 83},
      {position: 20, name: 'Calcium', attendance: 40.078, score: 76},
    ];

    displayedColumns: string[] = ['position', 'name', 'attendance', 'score'];
    dataSource = new MatTableDataSource<Student>(STUDENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
}