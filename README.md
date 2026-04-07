# NutriMind AI - Smart Food Decision Assistant

**Submission for the Food & Health App Challenge**

## Overview
**NutriMind AI** is a production-grade, AI-powered web application designed to help individuals make better food choices, build healthier eating habits, and achieve their nutritional goals through intelligent context-aware reasoning. 

## Chosen Vertical
**Food & Health - AI Nutrition Assistant**
We leveraged Google's Cloud Vision and Gemini APIs to create a frictionless experience where simply taking a photo or typing a message gives the user highly personalized, goal-oriented diet advice.

## How It Works

1. **Food Scanner (Google Cloud Vision API Integration)**
   - The user uploads a photo of their meal. 
   - A mock integration of Google Cloud Vision detects ingredients, estimates macros (Calories, Protein, Carbs, Fat) and calculates a confidence score.
   - The AI evaluates this against the user's goals (e.g., "weight loss") and gives a distinct "Eat", "Avoid", or "Moderate" verdict.

2. **AI Dietitian (Google Gemini API Integration)**
   - A conversational interface acts as a personal dietitian.
   - Users can ask natural language questions ("Can I eat pizza tonight?").
   - The AI responds based on the user's specific context and history.

3. **Dashboard & Analytics**
   - Overview of daily and weekly macros using beautifully animated charts (Recharts).
   - "Health Score" gamification encourages streak maintenance.

## Architecture & Code Quality
- **Frontend**: Next.js (App Router), React, Tailwind CSS, Framer Motion for premium animations, Shadcn UI / Radix UI for accessibility.
- **Backend structure**: The codebase separates concerns cleanly. All API interactions are kept inside `src/backend/services/`.
- **Maintainability**: Used strict TypeScript for types (e.g., `FoodAnalysisResult`), centralized mock services to easily inject real API keys without refactoring frontend code.
- **Accessibility**: ARIA tags are handled gracefully via Shadcn and Radix UI components (accessible dialogs, inputs, labels).

## Security & Assumptions Made
- **Security**: In this structure, API keys will be securely stored in `.env.local` and accessed exclusively server-side via Next.js API Routes (currently mocked on the client side for demonstration purposes).
- **Assumptions**: 
  - Since real API keys were not supplied initially, `Mock Services` are implemented in `src/backend/services/`. 
  - When transitioning to production, we replace `chatWithNutritionistMock` with the actual Google AI SDK.

## Running Locally
```bash
npm install
npm run dev
# Open http://localhost:3000
```
