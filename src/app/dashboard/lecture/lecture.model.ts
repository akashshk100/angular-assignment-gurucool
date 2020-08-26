export class Lecture{
    topic: string;
    description: string;
    attendance: string;
    resource: string;
    video: string;
    attendancePercentage: number;
    published: Date;

    constructor(topic, description, attendance, video, resource, attendancePercentage, published){
        this.topic = topic;
        this.description = description;
        this.resource = resource;
        this.attendance = attendance;
        this.video = video;
        this.attendancePercentage = attendancePercentage;
        this.published = published;
    }
}