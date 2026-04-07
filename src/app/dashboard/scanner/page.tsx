"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, ImagePlus, Loader2, Sparkles, AlertCircle } from "lucide-react";
import { analyzeFoodImageMock, FoodAnalysisResult } from "@/backend/services/visionService";
import { Badge } from "@/components/ui/badge";

export default function ScannerPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<FoodAnalysisResult | null>(null);

  const handleSimulateScan = async () => {
    setIsScanning(true);
    setResult(null);
    try {
      const res = await analyzeFoodImageMock("dummy_uri", "weight loss");
      setResult(res);
    } catch (e) {
      console.error(e);
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Food Scanner</h1>
        <p className="text-slate-500">Upload a photo of your meal for instant AI analysis.</p>
      </div>

      <Card className="border-dashed border-2 border-slate-200 bg-slate-50 overflow-hidden shadow-sm">
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
            <ImagePlus size={32} />
          </div>
          <h3 className="text-xl font-medium text-slate-800 mb-2">Upload or capture an image</h3>
          <p className="text-sm text-slate-500 max-w-sm mb-8">
            Take a clear photo of your food. We use Vision AI to identify ingredients and calculate nutrition.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" className="bg-white" disabled={isScanning}>
              <Camera className="w-4 h-4 mr-2" /> Use Camera
            </Button>
            <Button onClick={handleSimulateScan} className="bg-emerald-600 hover:bg-emerald-700 text-white" disabled={isScanning}>
              {isScanning ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Sparkles className="w-4 h-4 mr-2" />}
              {isScanning ? "Analyzing..." : "Simulate Scan"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-none shadow-lg shadow-slate-100 animate-in slide-in-from-bottom-4 duration-500 bg-white">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  Analysis Result
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">{(result.confidence * 100).toFixed(0)}% Match</Badge>
                </h3>
              </div>
              <div className={`px-4 py-1 rounded-full text-sm font-bold ${
                result.recommendation === 'Eat' ? 'bg-emerald-100 text-emerald-700' : 
                result.recommendation === 'Avoid' ? 'bg-red-100 text-red-700' : 
                'bg-yellow-100 text-yellow-700'
              }`}>
                Verdict: {result.recommendation}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-3">Detected Ingredients</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {result.detectedItems.map((item, idx) => (
                    <Badge key={idx} variant="outline" className="text-slate-700 bg-slate-50 border-slate-200">
                      {item}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 items-start bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                  <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-semibold text-blue-900 block mb-1">AI Recommendation:</span>
                    {result.explanation}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500 mb-3">Estimated Nutrition</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                    <span className="text-sm text-slate-600">Calories</span>
                    <span className="text-xl font-bold text-slate-900">{result.calories} <span className="text-sm font-medium text-slate-500">kcal</span></span>
                  </div>
                  <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                    <span className="text-sm text-slate-600">Protein</span>
                    <span className="font-medium text-slate-900">{result.protein}g</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                    <span className="text-sm text-slate-600">Carbs</span>
                    <span className="font-medium text-slate-900">{result.carbs}g</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                    <span className="text-sm text-slate-600">Fat</span>
                    <span className="font-medium text-slate-900">{result.fat}g</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
