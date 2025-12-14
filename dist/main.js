// src/main.ts
import { classrooms, courses } from "./modules/data";
import { addProfessor, addLesson, findAvailableClassrooms, getProfessorSchedule, reassignClassroom } from "./modules/functions";
// Додайте тестові дані:
addProfessor({ id: 1, name: "John Doe", department: "Computer Science" });
addProfessor({ id: 2, name: "Jane Smith", department: "Mathematics" });
const newCourse = { id: 1, name: "Programming 101", type: "Lecture" };
courses.push(newCourse);
const newClassroom = { number: "A101", capacity: 30, hasProjector: true };
classrooms.push(newClassroom);
const newLesson = {
    courseId: 1,
    professorId: 1,
    classroomNumber: "A101",
    dayOfWeek: "Monday",
    timeSlot: "10:15-11:45"
};
addLesson(newLesson);
// Перевірка розкладу
console.log(getProfessorSchedule(1));
// Пошук вільних аудиторій
console.log(findAvailableClassrooms("10:15-11:45", "Monday"));
// Зміна аудиторії
reassignClassroom(1, "B202");
console.log(getProfessorSchedule(1));
//# sourceMappingURL=main.js.map