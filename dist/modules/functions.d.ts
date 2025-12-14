import { Professor, Lesson, TimeSlot, DayOfWeek } from "../types/types";
export declare function addProfessor(professor: Professor): void;
export declare function addLesson(lesson: Lesson): boolean;
export declare function validateLesson(lesson: Lesson): {
    type: string;
    lessonDetails: Lesson;
} | null;
export declare function findAvailableClassrooms(timeSlot: TimeSlot, dayOfWeek: DayOfWeek): string[];
export declare function getProfessorSchedule(professorId: number): Lesson[];
export declare function getClassroomUtilization(classroomNumber: string): number;
export declare function reassignClassroom(lessonId: number, newClassroomNumber: string): boolean;
//# sourceMappingURL=functions.d.ts.map