const exercises = {

  java: [
    {
      id: 1,
      title: "Reverse a String",
      difficulty: "Easy",

      problem:
        "Write a Java program to reverse a given string.",

      input:
        "hello",

      output:
        "olleh",

      examples: [
        {
          input: "hello",
          output: "olleh"
        },
        {
          input: "Java",
          output: "avaJ"
        }
      ]
    },

    {
      id: 2,
      title: "Find Maximum Number",
      difficulty: "Easy",

      problem:
        "Given an array of integers, find the maximum value.",

      input:
        "[10, 25, 7, 30, 15]",

      output:
        "30",

      examples: [
        {
          input: "[10, 25, 7]",
          output: "25"
        }
      ]
    }
  ],

  cpp: [
    {
      id: 1,
      title: "Reverse a String",
      difficulty: "Easy",

      problem:
        "Write a C++ program to reverse a string.",

      input: "hello",

      output: "olleh",

      examples: [
        {
          input: "hello",
          output: "olleh"
        }
      ]
    }
  ],

  python: [
    {
      id: 1,
      title: "Find Maximum Number",
      difficulty: "Easy",

      problem:
        "Write a Python program to find the maximum number in a list.",

      input: "[10, 20, 5, 40]",

      output: "40",

      examples: [
        {
          input: "[10, 20, 5]",
          output: "20"
        }
      ]
    }
  ]

};

export default exercises;