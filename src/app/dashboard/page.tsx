"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Flame, TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", calories: 2100 },
  { name: "Tue", calories: 1950 },
  { name: "Wed", calories: 2400 },
  { name: "Thu", calories: 1800 },
  { name: "Fri", calories: 2200 },
  { name: "Sat", calories: 2500 },
  { name: "Sun", calories: 1900 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in zoom-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-1">Welcome back, User!</h1>
        <p className="text-slate-500">Here's your nutritional overview for the week.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-none shadow-sm shadow-slate-100">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Calories Today</CardTitle>
            <Flame className="w-4 h-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">1,250</div>
            <p className="text-xs text-slate-500 mt-1">Goal: 2,000 kcal (62% met)</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm shadow-slate-100">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Protein Intake</CardTitle>
            <Activity className="w-4 h-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">85g</div>
            <p className="text-xs text-slate-500 mt-1">Target: ~120g</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm shadow-slate-100">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Health Score</CardTitle>
            <TrendingUp className="w-4 h-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">Excellent</div>
            <p className="text-xs text-slate-500 mt-1">+12% from last week</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-sm shadow-slate-100">
        <CardHeader>
          <CardTitle className="text-lg text-slate-800">Weekly Calorie Trend</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Line type="monotone" dataKey="calories" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: "#10b981", strokeWidth: 2, stroke: "#fff" }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
