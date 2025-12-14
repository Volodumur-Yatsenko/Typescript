// src/main.ts
import { professors, classrooms, courses, schedule } from "./modules/data";
import { addProfessor, addLesson, findAvailableClassrooms, getProfessorSchedule, reassignClassroom } from "./modules/functions";
import { Course, Classroom, Lesson } from "./types/types";

// Додайте тестові дані:
addProfessor({ id: 1, name: "John Doe", department: "Computer Science" });
addProfessor({ id: 2, name: "Jane Smith", department: "Mathematics" });

const newCourse: Course = { id: 1, name: "Programming 101", type: "Lecture" };
courses.push(newCourse);

const newClassroom: Classroom = { number: "A101", capacity: 30, hasProjector: true };
classrooms.push(newClassroom);

const newLesson: Lesson = {
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
