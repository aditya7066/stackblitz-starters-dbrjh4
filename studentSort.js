// Sample array of student objects
const students = [
  {
    name: "John",
    chemistryMarks: 85,
    biologyMarks: 90,
    dob: "12-03-2000"
  },
  {
    name: "Alice",
    chemistryMarks: 90,
    biologyMarks: 85,
    dob: "05-06-2001"
  },
  {
    name: "Emma",
    chemistryMarks: 80,
    biologyMarks: 90,
    dob: "20-09-2000"
  }
];

// Sorting the array based on the given rules
students.sort((a, b) => {
  // Sort by total marks (descending order)
  if (a.chemistryMarks + a.biologyMarks > b.chemistryMarks + b.biologyMarks) {
    return -1;
  } else if (a.chemistryMarks + a.biologyMarks < b.chemistryMarks + b.biologyMarks) {
    return 1;
  }

  // Sort by biology marks (descending order)
  if (a.biologyMarks > b.biologyMarks) {
    return -1;
  } else if (a.biologyMarks < b.biologyMarks) {
    return 1;
  }

  // Sort by date of birth (ascending order)
  const [aDay, aMonth, aYear] = a.dob.split("-").map(Number);
  const [bDay, bMonth, bYear] = b.dob.split("-").map(Number);

  if (aYear > bYear) {
    return 1;
  } else if (aYear < bYear) {
    return -1;
  } else {
    if (aMonth > bMonth) {
      return 1;
    } else if (aMonth < bMonth) {
      return -1;
    } else {
      if (aDay > bDay) {
        return 1;
      } else if (aDay < bDay) {
        return -1;
      } else {
        return 0;
      }
    }
  }
});

// Displaying the sorted array
console.log(students);