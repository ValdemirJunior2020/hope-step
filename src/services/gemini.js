import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export const getHopePlan = async (userFeeling) => {
  try {
    // ✅ Use the Gemini 2.0 Flash model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // or gemini-1.5-pro

    const prompt = `
You are a Christian life coach. Create a 3-day plan for someone who is feeling "${userFeeling}".
Each day should include:
- Encouragement
- Bible Verse
- Practical Step

Use hope-filled, kind language and be real about hard times. Keep the format clean.
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (err) {
    console.error("Gemini API error:", err);
    return "⚠️ Unable to get your Hope Plan at this time. Please try again later.";
  }
};
