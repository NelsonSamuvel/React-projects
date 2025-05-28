export type Category = {
    id: number;
    name: string;
    description: string;
    color: string;
    flashcardCount: number;
}

export type FlashCard = {
    id: number;
    categoryId: number;
    question: string;
    answer: string;
    difficulty: string;
    tags: string[];
    createdAt: string;
    lastReviewed: string;
    correctCount: number;
    incorrectCount: number;
    
}