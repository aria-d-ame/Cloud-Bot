// MongoDB
// It has databases!!!
// COLLECTIONS
// In collections, you have DOCUMENTS
//        O
//:)   ~~~|~~~
//       / \
// Database: School
// Collections: Students, Results

// Students COLLECTION
// student_id: STRING
// age: DATE

// OBJECTS
const studentDocument = {
    student_id: "123",
    name: "Chall",
    age: "17",
    subjects: ["Math", "Physics", "English"],
    results: [{ subject: "Math", score: 89 }, { subject: "French", score: 0 }]
}
// const filteredArray = studentDocument.subjects.filter(subject => subject !== "Physics")
// console.log(filteredArray)

// studentDocument.subjects.forEach(subject => {
//     console.log(subject)
// })
