"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Bot, Send, User } from "lucide-react";
import { chatWithNutritionistMock } from "@/backend/services/geminiService";

interface Message {
  role: "user" | "ai";
  content: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "Hi there! I'm your NutriMind AI dietitian. Ask me anything about your diet, food compatibility, or specific cravings!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await chatWithNutritionistMock(
        messages.map(m => ({ role: m.role, content: m.content })),
        userMessage
      );
      setMessages(prev => [...prev, { role: "ai", content: response }]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-6rem)] max-w-3xl mx-auto flex flex-col pt-4">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">AI Dietitian</h1>
        <p className="text-slate-500 mb-6">Powered by Gemini AI for instant nutritional answers.</p>
      </div>

      <Card className="flex-1 flex flex-col border-none shadow-sm shadow-slate-100 overflow-hidden bg-white">
        <CardContent className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                msg.role === 'user' ? 'bg-emerald-600 text-white' : 'bg-blue-100 text-blue-600'
              }`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`p-4 rounded-2xl max-w-[80%] text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-emerald-50 tex-emerald-900 rounded-tr-none' 
                  : 'bg-slate-50 text-slate-800 rounded-tl-none border border-slate-100'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Bot size={16} />
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none border border-slate-100 text-slate-400 flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-slate-300 animate-bounce delay-75" />
                <div className="w-2 h-2 rounded-full bg-slate-300 animate-bounce delay-150" />
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="p-4 bg-white border-t border-slate-50">
          <form onSubmit={handleSend} className="flex relative w-full gap-2">
            <Input 
              placeholder="e.g., Can I eat pizza tonight?" 
              className="pr-12 py-6 rounded-2xl bg-slate-50 border-slate-200 focus-visible:ring-emerald-500"
              value={input}
              onChange={e => setInput(e.target.value)}
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="icon"
              disabled={!input.trim() || isLoading}
              className="absolute right-2 top-1.5 bottom-1.5 h-auto bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl aspect-square"
            >
              <Send size={18} className="translate-x-0.5" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
