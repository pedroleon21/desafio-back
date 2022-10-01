export class ProfessorDTO {
    constructor(professor: any) {
        this.professor_id = professor?.professor_id;
        this.professor_userId = professor.professor_userId;
        this.user_id = professor.user_id;
        this.user_firstName = professor.user_firstName;
        this.user_lastName = professor.user_lastName;
    }
    professor_id: number
    professor_userId: number
    user_id: number
    user_firstName: string
    user_lastName: string
}