const mockData = {
    "categories": [
      {
        "id": 1,
        "name": "Programming",
        "description": "Software development concepts and programming languages",
        "color": "#3B82F6",
        "icon": "code",
        "flashcardCount": 4
      },
      {
        "id": 2,
        "name": "Mathematics",
        "description": "Mathematical concepts, formulas, and problem-solving",
        "color": "#EF4444",
        "icon": "calculator",
        "flashcardCount": 3
      },
      {
        "id": 3,
        "name": "Science",
        "description": "Physics, chemistry, biology, and earth sciences",
        "color": "#10B981",
        "icon": "beaker",
        "flashcardCount": 4
      },
      {
        "id": 4,
        "name": "History",
        "description": "Historical events, dates, and important figures",
        "color": "#F59E0B",
        "icon": "clock",
        "flashcardCount": 3
      },
      {
        "id": 5,
        "name": "Languages",
        "description": "Vocabulary, grammar, and language learning",
        "color": "#8B5CF6",
        "icon": "globe",
        "flashcardCount": 3
      },
      {
        "id": 6,
        "name": "Geography",
        "description": "Countries, capitals, landmarks, and geographical features",
        "color": "#06B6D4",
        "icon": "map",
        "flashcardCount": 3
      },
      {
        "id": 7,
        "name": "Geography",
        "description": "Countries, capitals, landmarks, and geographical features",
        "color": "#06B6D4",
        "icon": "map",
        "flashcardCount": 3
      },
      {
        "id": 8,
        "name": "Geography",
        "description": "Countries, capitals, landmarks, and geographical features",
        "color": "#06B6D4",
        "icon": "map",
        "flashcardCount": 3
      }
    ],
    "flashcards": [
      {
        "id": 1,
        "categoryId": 1,
        "question": "What does HTML stand for?",
        "answer": "HyperText Markup Language",
        "difficulty": "easy",
        "tags": ["web", "html", "basics"],
        "createdAt": "2024-01-15T10:30:00Z",
        "lastReviewed": "2024-01-20T14:20:00Z",
        "correctCount": 5,
        "incorrectCount": 1
      },
      {
        "id": 2,
        "categoryId": 1,
        "question": "What is the difference between '==' and '===' in JavaScript?",
        "answer": "'==' performs type coercion and compares values, while '===' compares both value and type without coercion (strict equality)",
        "difficulty": "medium",
        "tags": ["javascript", "operators", "comparison"],
        "createdAt": "2024-01-16T09:15:00Z",
        "lastReviewed": "2024-01-22T11:45:00Z",
        "correctCount": 3,
        "incorrectCount": 2
      },
      {
        "id": 3,
        "categoryId": 1,
        "question": "What is Big O notation?",
        "answer": "Big O notation describes the upper bound of time or space complexity of an algorithm, representing how the runtime grows relative to input size",
        "difficulty": "hard",
        "tags": ["algorithms", "complexity", "computer-science"],
        "createdAt": "2024-01-17T16:20:00Z",
        "lastReviewed": "2024-01-23T13:10:00Z",
        "correctCount": 2,
        "incorrectCount": 4
      },
      {
        "id": 4,
        "categoryId": 2,
        "question": "What is the quadratic formula?",
        "answer": "x = (-b ± √(b² - 4ac)) / 2a",
        "difficulty": "medium",
        "tags": ["algebra", "equations", "formulas"],
        "createdAt": "2024-01-18T12:00:00Z",
        "lastReviewed": "2024-01-24T10:30:00Z",
        "correctCount": 4,
        "incorrectCount": 1
      },
      {
        "id": 5,
        "categoryId": 2,
        "question": "What is the derivative of sin(x)?",
        "answer": "cos(x)",
        "difficulty": "easy",
        "tags": ["calculus", "derivatives", "trigonometry"],
        "createdAt": "2024-01-19T14:45:00Z",
        "lastReviewed": "2024-01-25T09:20:00Z",
        "correctCount": 6,
        "incorrectCount": 0
      },
      {
        "id": 6,
        "categoryId": 2,
        "question": "What is Euler's identity?",
        "answer": "e^(iπ) + 1 = 0",
        "difficulty": "hard",
        "tags": ["complex-numbers", "euler", "mathematics"],
        "createdAt": "2024-01-20T11:30:00Z",
        "lastReviewed": "2024-01-26T15:40:00Z",
        "correctCount": 1,
        "incorrectCount": 3
      },
      {
        "id": 7,
        "categoryId": 3,
        "question": "What is the chemical symbol for gold?",
        "answer": "Au",
        "difficulty": "easy",
        "tags": ["chemistry", "elements", "periodic-table"],
        "createdAt": "2024-01-21T08:15:00Z",
        "lastReviewed": "2024-01-27T12:00:00Z",
        "correctCount": 7,
        "incorrectCount": 0
      },
      {
        "id": 8,
        "categoryId": 3,
        "question": "What is Newton's second law of motion?",
        "answer": "F = ma (Force equals mass times acceleration)",
        "difficulty": "medium",
        "tags": ["physics", "mechanics", "newton"],
        "createdAt": "2024-01-22T13:20:00Z",
        "lastReviewed": "2024-01-28T14:15:00Z",
        "correctCount": 3,
        "incorrectCount": 2
      },
      {
        "id": 9,
        "categoryId": 3,
        "question": "What is the powerhouse of the cell?",
        "answer": "Mitochondria",
        "difficulty": "easy",
        "tags": ["biology", "cell", "organelles"],
        "createdAt": "2024-01-23T10:45:00Z",
        "lastReviewed": "2024-01-29T11:30:00Z",
        "correctCount": 5,
        "incorrectCount": 1
      },
      {
        "id": 10,
        "categoryId": 4,
        "question": "In what year did World War II end?",
        "answer": "1945",
        "difficulty": "easy",
        "tags": ["wwii", "dates", "20th-century"],
        "createdAt": "2024-01-24T15:10:00Z",
        "lastReviewed": "2024-01-30T09:45:00Z",
        "correctCount": 6,
        "incorrectCount": 0
      },
      {
        "id": 11,
        "categoryId": 4,
        "question": "Who was the first President of the United States?",
        "answer": "George Washington",
        "difficulty": "easy",
        "tags": ["us-history", "presidents", "founding-fathers"],
        "createdAt": "2024-01-25T12:30:00Z",
        "lastReviewed": "2024-01-31T16:20:00Z",
        "correctCount": 8,
        "incorrectCount": 0
      },
      {
        "id": 12,
        "categoryId": 4,
        "question": "What event triggered World War I?",
        "answer": "The assassination of Archduke Franz Ferdinand of Austria-Hungary",
        "difficulty": "medium",
        "tags": ["wwi", "assassination", "austria-hungary"],
        "createdAt": "2024-01-26T09:00:00Z",
        "lastReviewed": "2024-02-01T13:15:00Z",
        "correctCount": 2,
        "incorrectCount": 3
      },
      {
        "id": 13,
        "categoryId": 5,
        "question": "How do you say 'Hello' in Spanish?",
        "answer": "Hola",
        "difficulty": "easy",
        "tags": ["spanish", "greetings", "vocabulary"],
        "createdAt": "2024-01-27T14:20:00Z",
        "lastReviewed": "2024-02-02T10:30:00Z",
        "correctCount": 9,
        "incorrectCount": 0
      },
      {
        "id": 14,
        "categoryId": 5,
        "question": "What is the French word for 'book'?",
        "answer": "livre",
        "difficulty": "easy",
        "tags": ["french", "vocabulary", "objects"],
        "createdAt": "2024-01-28T11:40:00Z",
        "lastReviewed": "2024-02-03T15:00:00Z",
        "correctCount": 4,
        "incorrectCount": 1
      },
      {
        "id": 15,
        "categoryId": 5,
        "question": "What does 'Guten Morgen' mean in German?",
        "answer": "Good morning",
        "difficulty": "easy",
        "tags": ["german", "greetings", "phrases"],
        "createdAt": "2024-01-29T08:50:00Z",
        "lastReviewed": "2024-02-04T12:45:00Z",
        "correctCount": 3,
        "incorrectCount": 2
      },
      {
        "id": 16,
        "categoryId": 6,
        "question": "What is the capital of Australia?",
        "answer": "Canberra",
        "difficulty": "medium",
        "tags": ["capitals", "australia", "oceania"],
        "createdAt": "2024-01-30T16:15:00Z",
        "lastReviewed": "2024-02-05T11:20:00Z",
        "correctCount": 2,
        "incorrectCount": 4
      },
      {
        "id": 17,
        "categoryId": 6,
        "question": "Which is the longest river in the world?",
        "answer": "The Nile River",
        "difficulty": "easy",
        "tags": ["rivers", "geography", "africa"],
        "createdAt": "2024-01-31T13:25:00Z",
        "lastReviewed": "2024-02-06T14:10:00Z",
        "correctCount": 5,
        "incorrectCount": 1
      },
      {
        "id": 18,
        "categoryId": 6,
        "question": "What is the smallest country in the world?",
        "answer": "Vatican City",
        "difficulty": "medium",
        "tags": ["countries", "size", "europe"],
        "createdAt": "2024-02-01T10:00:00Z",
        "lastReviewed": "2024-02-07T09:30:00Z",
        "correctCount": 3,
        "incorrectCount": 2
      },
      {
        "id": 19,
        "categoryId": 1,
        "question": "What does CSS stand for?",
        "answer": "Cascading Style Sheets",
        "difficulty": "easy",
        "tags": ["css", "web", "styling"],
        "createdAt": "2024-02-02T12:40:00Z",
        "lastReviewed": "2024-02-08T16:00:00Z",
        "correctCount": 6,
        "incorrectCount": 0
      },
      {
        "id": 20,
        "categoryId": 3,
        "question": "What is the speed of light in a vacuum?",
        "answer": "299,792,458 meters per second (approximately 3 × 10^8 m/s)",
        "difficulty": "medium",
        "tags": ["physics", "constants", "light"],
        "createdAt": "2024-02-03T15:30:00Z",
        "lastReviewed": "2024-02-09T13:45:00Z",
        "correctCount": 1,
        "incorrectCount": 3
      }
    ],
    "userStats": {
      "totalCards": 20,
      "studiedToday": 5,
      "streak": 7,
      "averageAccuracy": 78.5,
      "totalStudyTime": 1240,
      "categoryProgress": {
        "1": { "mastered": 2, "learning": 3, "new": 0 },
        "2": { "mastered": 1, "learning": 2, "new": 0 },
        "3": { "mastered": 2, "learning": 1, "new": 0 },
        "4": { "mastered": 2, "learning": 1, "new": 0 },
        "5": { "mastered": 2, "learning": 1, "new": 0 },
        "6": { "mastered": 1, "learning": 2, "new": 0 }
      }
    }
  }


 export const getAllCategories = ()=>{
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(mockData.categories)
        },1000)
    })
  }

  export const getAllFlashcards = ()=>{
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(mockData.flashcards)
        },1000)
    })
  }

  export const getAllFlashcardsByCategory = (categoryId:number)=>{
    return new Promise(resolve => {
        setTimeout(()=>{
            const flashcards = mockData.flashcards.filter(flashcard => flashcard.categoryId === categoryId);
            resolve(flashcards)
        },1000)
    })
  }
  