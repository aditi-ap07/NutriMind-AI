/**
 * Mock Gemini API interaction for the AI Chat interface.
 */
export async function chatWithNutritionistMock(history: {role: string, content: string}[], message: string): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("pizza")) {
    return "Pizza is absolutely fine in moderation! If you're planning to eat pizza tonight, maybe try to load it up with vegetable toppings and stick to 2-3 slices.";
  }
  
  if (lowerMessage.includes("breakfast")) {
    return "A great breakfast could be oatmeal with a scoop of protein powder, topped with nuts and berries. It's high in protein and digest slowly to keep you full!";
  }

  return "That's a very interesting question. As your AI nutritionist, I recommend focusing on whole foods, lean proteins, and plenty of hydration. Can you give me more specifics on your daily routine?";
}
