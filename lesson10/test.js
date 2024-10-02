class Student {
  constructor(name, lastName, averageScore) {
    this.name = name;
    this.lastName = lastName;
    this.averageScore = averageScore;
  }

  static getStudentsAverageScore(studentsList) {
    if (studentsList.length === 0) {
      return 0;
    }

    const sumScores = studentsList.reduce((sum, score) => sum + score.averageScore, 0);
    const average = sumScores / studentsList.length;
    return average.toFixed(2);
  }
}

export default Student;

const student1 = new Student('John', 'Doe', 10.33);
const student2 = new Student('Jane', 'Doe', 20.3);
const student3 = new Student('John', 'Doe', 85.51);
const student4 = new Student('Jane', 'Smith', 92.3);
const student5 = new Student('Alice', 'Johnson', 78.6);

console.log(Student.getStudentsAverageScore([student1, student2, student3]));
