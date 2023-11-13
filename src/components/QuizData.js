const quizzes = [
  {
    questionNo: 1,
    type: "Free Choice",
    question: "What is the capital of India?",
    correctAnswer: "new delhi",
    answerExplain: "New Delhi is the capital of India.",
    key: "free-choice-question",
  },
  {
    questionNo: 2,
    type: "Fill in the Blank",
    question: "_______ is the national flag of India.",
    correctAnswer: "tiranga",
    answerExplain: "Tiranga is the national flag of india.",
    key: "fill-in-the-blank-question",
  },
  {
    questionNo: 3,
    type: "Single Choice",
    question: "What is the largest populated country in World?",
    options: ["India", "China", "USA", "Russia"],
    correctAnswer: "India",
    answerExplain: "India is the largest populated country in the world.",
    key: "single-choice-question",
  },
  {
    questionNo: 4,
    type: "Multiple Choice",
    question: "Which of the following are Union Territories of India?",
    options: ["Uttarakhand", "Delhi", "Jammu and Kashmir", "Goa", "Sikkim"],
    correctAnswers: ["Delhi", "Jammu and Kashmir"],
    answerExplain:
      "Delhi and Jammu and Kashmir are Union Territories of India.",
    key: "multiple-choice-question",
  },
  {
    questionNo: 5,
    type: "Matrix",
    question: "Match the countries with their respective capitals.",
    options: [
      { country: "India", capital: "New Delhi" },
      { country: "Nepal", capital: "Kathmandu" },
      { country: "Germany", capital: "Berlin" },
    ],
    correctAnswers: [
      { country: "India", capital: "New Delhi" },
      { country: "Nepal", capital: "Kathmandu" },
      { country: "Germany", capital: "Berlin" },
    ],
    answerExplain: "Matching countries with their respective capitals.",
    key: "matrix-question",
  },
  {
    questionNo: 6,
    type: "Sorting",
    question:
      "Arrange the following elements in ascending order: 5, 2, 7, 1, 4.",
    options: [5, 2, 7, 1, 4], // Elements to be sorted
    correctOrder: [1, 2, 4, 5, 7], // Correct sorted order
    answerExplain: "The correct order is 1, 2, 4, 5, 7.",
    key: "sorting-question",
  },
];

export default quizzes;
