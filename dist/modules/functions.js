import { professors, classrooms, schedule } from "./data";
// Функція для додавання нового професора
export function addProfessor(professor) {
    professors.push(professor);
}
// Функція для додавання заняття
export function addLesson(lesson) {
    const conflict = validateLesson(lesson);
    if (conflict) {
        console.log(`Conflict: ${conflict.type}`);
        return false;
    }
    schedule.push(lesson);
    return true;
}
// Функція для перевірки конфліктів (професор та аудиторія)
export function validateLesson(lesson) {
    const professorConflict = schedule.some(l => l.professorId === lesson.professorId && l.dayOfWeek === lesson.dayOfWeek && l.timeSlot === lesson.timeSlot);
    if (professorConflict) {
        return { type: "ProfessorConflict", lessonDetails: lesson };
    }
    const classroomConflict = schedule.some(l => l.classroomNumber === lesson.classroomNumber && l.dayOfWeek === lesson.dayOfWeek && l.timeSlot === lesson.timeSlot);
    if (classroomConflict) {
        return { type: "ClassroomConflict", lessonDetails: lesson };
    }
    return null;
}
// Функція для пошуку вільних аудиторій
export function findAvailableClassrooms(timeSlot, dayOfWeek) {
    const busyClassrooms = schedule
        .filter(lesson => lesson.timeSlot === timeSlot && lesson.dayOfWeek === dayOfWeek)
        .map(lesson => lesson.classroomNumber);
    return classrooms.filter(classroom => !busyClassrooms.includes(classroom.number)).map(classroom => classroom.number);
}
// Функція для отримання розкладу професора
export function getProfessorSchedule(professorId) {
    return schedule.filter(lesson => lesson.professorId === professorId);
}
// Функція для визначення використання аудиторії
export function getClassroomUtilization(classroomNumber) {
    const totalLessons = schedule.filter(lesson => lesson.classroomNumber === classroomNumber).length;
    const classroom = classrooms.find(c => c.number === classroomNumber);
    if (!classroom)
        return 0;
    return (totalLessons / classroom.capacity) * 100;
}
// Функція для зміни аудиторії
export function reassignClassroom(lessonId, newClassroomNumber) {
    const lesson = schedule.find(l => l.courseId === lessonId);
    if (!lesson)
        return false;
    const available = findAvailableClassrooms(lesson.timeSlot, lesson.dayOfWeek);
    if (!available.includes(newClassroomNumber))
        return false;
    lesson.classroomNumber = newClassroomNumber;
    return true;
}
//# sourceMappingURL=functions.js.map