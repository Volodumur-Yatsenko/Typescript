// src/types/types.ts

// Типи для днів тижня
export type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";

// Типи для часових слотів
export type TimeSlot = "8:30-10:00" | "10:15-11:45" | "12:15-13:45" | "14:00-15:30" | "15:45-17:15";

// Типи для типів занять
export type CourseType = "Lecture" | "Seminar" | "Lab" | "Practice";

// Тип для професора
export type Professor = {
  id: number;
  name: string;
  department: string;
};

// Тип для аудиторії
export type Classroom = {
  number: string;
  capacity: number;
  hasProjector: boolean;
};

// Тип для курсу
export type Course = {
  id: number;
  name: string;
  type: CourseType;
};

// Тип для заняття
export type Lesson = {
  courseId: number;
  professorId: number;
  classroomNumber: string;
  dayOfWeek: DayOfWeek;
  timeSlot: TimeSlot;
};
