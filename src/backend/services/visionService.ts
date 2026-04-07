export interface FoodAnalysisResult {
  detectedItems: string[];
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  confidence: number;
  recommendation: 'Eat' | 'Avoid' | 'Moderate';
  explanation: string;
}

/**
 * Mock representation of Google Cloud Vision API combined with Gemini reasoning.
 * Later, we will inject the actual API keys here.
 */
export async function analyzeFoodImageMock(imageUri: string, userGoal: string): Promise<FoodAnalysisResult> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Determine a fake response based on goal
  const isHealthy = Math.random() > 0.4; // 60% chance it's healthy for the sake of demo

  if (isHealthy) {
    return {
      detectedItems: ["Grilled Chicken", "Mixed Greens", "Avocado", "Quinoa"],
      calories: 420,
      protein: 35,
      carbs: 40,
      fat: 15,
      confidence: 0.94,
      recommendation: "Eat",
      explanation: `This meal perfectly aligns with your '${userGoal}' goal. It is high in lean protein and healthy fats, which helps in muscle retention and prolonged satiety.`
    };
  } else {
    return {
      detectedItems: ["Pepperoni Pizza", "Cheese", "Garlic Bread"],
      calories: 950,
      protein: 28,
      carbs: 105,
      fat: 45,
      confidence: 0.98,
      recommendation: "Moderate",
      explanation: `While pizza is delicious, it's very calorie-dense and high in saturated carbs. Since your goal is '${userGoal}', eat only 1-2 slices and pair with a salad.`
    };
  }
}
