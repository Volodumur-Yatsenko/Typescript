"use strict";
// Enum для статусу студента
var StudentStatus;
(function (StudentStatus) {
    StudentStatus["Active"] = "Active";
    StudentStatus["Academic_Leave"] = "Academic_Leave";
    StudentStatus["Graduated"] = "Graduated";
    StudentStatus["Expelled"] = "Expelled";
})(StudentStatus || (StudentStatus = {}));
// Enum для типу курсу
var CourseType;
(function (CourseType) {
    CourseType["Mandatory"] = "Mandatory";
    CourseType["Optional"] = "Optional";
    CourseType["Special"] = "Special";
})(CourseType || (CourseType = {}));
// Enum для семестру навчання
var Semester;
(function (Semester) {
    Semester["First"] = "First";
    Semester["Second"] = "Second";
})(Semester || (Semester = {}));
// Enum для оцінки
var Grade;
(function (Grade) {
    Grade[Grade["Excellent"] = 5] = "Excellent";
    Grade[Grade["Good"] = 4] = "Good";
    Grade[Grade["Satisfactory"] = 3] = "Satisfactory";
    Grade[Grade["Unsatisfactory"] = 2] = "Unsatisfactory";
})(Grade || (Grade = {}));
// Enum для факультетів університету
var Faculty;
(function (Faculty) {
    Faculty["Computer_Science"] = "Computer_Science";
    Faculty["Economics"] = "Economics";
    Faculty["Law"] = "Law";
    Faculty["Engineering"] = "Engineering";
})(Faculty || (Faculty = {}));
// Клас для управління університетом
class UniversityManagementSystem {
    constructor() {
        this.students = [];
        this.courses = [];
        this.grades = [];
    }
    // Реєстрація студента
    enrollStudent(student) {
        const id = this.students.length + 1;
        const newStudent = Object.assign(Object.assign({}, student), { id });
        this.students.push(newStudent);
        return newStudent;
    }
    // Реєстрація студента на курс
    registerForCourse(studentId, courseId) {
        const student = this.students.find(s => s.id === studentId);
        const course = this.courses.find(c => c.id === courseId);
        if (!student || !course) {
            throw new Error("Student or course not found");
        }
        if (course.maxStudents <= this.getStudentsByCourse(courseId).length) {
            throw new Error("Course is full");
        }
        if (student.faculty !== course.faculty) {
            throw new Error("Student cannot register for this course");
        }
        console.log(`${student.fullName} has been registered for ${course.name}`);
    }
    // Встановлення оцінки для студента
    setGrade(studentId, courseId, grade) {
        const student = this.students.find(s => s.id === studentId);
        const course = this.courses.find(c => c.id === courseId);
        if (!student || !course) {
            throw new Error("Student or course not found");
        }
        const isRegistered = this.grades.some(g => g.studentId === studentId && g.courseId === courseId);
        if (!isRegistered) {
            throw new Error("Student is not registered for this course");
        }
        this.grades.push({ studentId, courseId, grade, date: new Date(), semester: course.semester });
        console.log(`${student.fullName} has been graded ${Grade[grade]} for ${course.name}`);
    }
    // Оновлення статусу студента
    updateStudentStatus(studentId, newStatus) {
        const student = this.students.find(s => s.id === studentId);
        if (!student) {
            throw new Error("Student not found");
        }
        student.status = newStatus;
        console.log(`${student.fullName}'s status updated to ${newStatus}`);
    }
    // Отримати студентів по факультету
    getStudentsByFaculty(faculty) {
        return this.students.filter(s => s.faculty === faculty);
    }
    // Отримати оцінки студента
    getStudentGrades(studentId) {
        return this.grades.filter(g => g.studentId === studentId);
    }
    // Отримати доступні курси
    getAvailableCourses(faculty, semester) {
        return this.courses.filter(c => c.faculty === faculty && c.semester === semester);
    }
    // Розрахувати середню оцінку для студента
    calculateAverageGrade(studentId) {
        const studentGrades = this.getStudentGrades(studentId);
        const total = studentGrades.reduce((sum, grade) => sum + grade.grade, 0);
        return total / studentGrades.length;
    }
    // Отримати список відмінників за факультетом
    getTopStudentsByFaculty(faculty) {
        return this.getStudentsByFaculty(faculty).filter(student => {
            const avgGrade = this.calculateAverageGrade(student.id);
            return avgGrade >= 4.5; // Студенти з відмінним середнім балом
        });
    }
    // Метод для отримання студентів, зареєстрованих на курс
    getStudentsByCourse(courseId) {
        return this.grades.filter(g => g.courseId === courseId).map(g => {
            return this.students.find(s => s.id === g.studentId);
        });
    }
}
// Створення екземпляра університетської системи
const universitySystem = new UniversityManagementSystem();
// Створення тестових студентів
const student1 = universitySystem.enrollStudent({
    fullName: "John Doe",
    faculty: Faculty.Computer_Science,
    year: 2,
    status: StudentStatus.Active,
    enrollmentDate: new Date("2020-09-01"),
    groupNumber: "CS-202"
});
const student2 = universitySystem.enrollStudent({
    fullName: "Jane Smith",
    faculty: Faculty.Economics,
    year: 1,
    status: StudentStatus.Active,
    enrollmentDate: new Date("2021-09-01"),
    groupNumber: "ECON-101"
});
// Створення тестових курсів
const course1 = {
    id: 1,
    name: "Introduction to Computer Science",
    type: CourseType.Mandatory,
    credits: 3,
    semester: Semester.First,
    faculty: Faculty.Computer_Science,
    maxStudents: 30
};
const course2 = {
    id: 2,
    name: "Economics 101",
    type: CourseType.Mandatory,
    credits: 3,
    semester: Semester.First,
    faculty: Faculty.Economics,
    maxStudents: 30
};
// Додавання курсів до системи
universitySystem['courses'].push(course1, course2);
// Реєстрація студентів на курси
universitySystem.registerForCourse(student1.id, course1.id);
universitySystem.registerForCourse(student2.id, course2.id);
// Встановлення оцінок
universitySystem.setGrade(student1.id, course1.id, Grade.Excellent);
universitySystem.setGrade(student2.id, course2.id, Grade.Good);
// Отримання оцінок студентів і середнього балу
console.log(universitySystem.getStudentGrades(student1.id));
console.log(universitySystem.calculateAverageGrade(student1.id));
// Отримання відмінників
console.log(universitySystem.getTopStudentsByFaculty(Faculty.Computer_Science));
//# sourceMappingURL=university-management.js.map