import { Subject } from 'rxjs'

export interface subject{
    id: number
    name: string
    avgAttendance: number
    class: string
}

export class SubjectService{
    subjects: subject[] = [
        {id: 0, name: 'Physics', avgAttendance: 88.2, class: 'FE'},
        {id: 1, name: 'Basic Electronics Engineering', avgAttendance: 93, class: 'FE'},
        {id: 2, name: 'Basic Civil Engineering', avgAttendance: 95.5, class: 'FE'},
        {id: 3, name: 'Chemistry', avgAttendance: 99.0, class: 'FE'},
        {id: 4, name: 'Engineering Mathematics', avgAttendance: 72, class: 'FE'},
    ]

    subjectChange = new Subject()
}