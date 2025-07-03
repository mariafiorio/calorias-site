"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Scale, ArrowLeft, AlertCircle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Head from 'next/head';

interface FoodItem {
  id: string
  name: string
  calories: number
  amount: number
  unit: string
}

interface ComparisonResult {
  food1: { name: string; calories: number; weight: number }
  food2: { name: string; calories: number; weight: number }
  difference: number
  percentage: number
}

export default function ComparePage() {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([])
  const [selectedFood1, setSelectedFood1] = useState("")
  const [selectedFood2, setSelectedFood2] = useState("")
  const [weight1, setWeight1] = useState("100")
  const [weight2, setWeight2] = useState("100")
  const [result, setResult] = useState<ComparisonResult | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem("foodItems")
    if (saved) {
      setFoodItems(JSON.parse(saved))
    }
  }, [])

  const calculateComparison = () => {
    const food1 = foodItems.find((item) => item.id === selectedFood1)
    const food2 = foodItems.find((item) => item.id === selectedFood2)

    if (!food1 || !food2) return

    const calories1 = (food1.calories / food1.amount) * Number.parseFloat(weight1)
    const calories2 = (food2.calories / food2.amount) * Number.parseFloat(weight2)

    const difference = Math.abs(calories1 - calories2)
    const percentage = (difference / Math.min(calories1, calories2)) * 100

    setResult({
      food1: { name: food1.name, calories: calories1, weight: Number.parseFloat(weight1) },
      food2: { name: food2.name, calories: calories2, weight: Number.parseFloat(weight2) },
      difference,
      percentage,
    })
  }

  return (
    <>  
    <Head>
    <meta name="google-adsense-account" content="ca-pub-2627213694460628"/>
    </Head>
    <div className="min-h-screen bg-gray-50">
      {/* Mobile-optimized Header */}
 
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-sm">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Home
              </Button>
            </Link>
            <h1 className="text-lg md:text-xl font-bold text-gray-900 flex-1 text-center mr-16">Comparar</h1>
          </div>
        </div>
        {/* AdSense Banner Space - Mobile optimized */}
        <div className="bg-gray-100 h-16 md:h-20 flex items-center justify-center text-gray-500 text-xs md:text-sm">
          [AdSense Banner - Mobile: 320x50, Desktop: 728x90]
        </div>
      </header>

      <main className="px-4 py-6 pb-20">
        <Card className="mb-6">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-lg">
              <Scale className="w-5 h-5 mr-2 text-blue-600" />
              Compare a densidadade calórica dos alimentos.
            </CardTitle>
            <CardDescription className="text-sm">
              {/* Select two foods and their quantities to compare caloric content */}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {foodItems.length < 2 ? (
                            <div className="space-y-4">

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="text-sm">
                 Você precisa de pelo menos 2 alimentos cadastrados para realizar uma comparação.{" "}
                  <Link href="/register" className="text-blue-600 hover:underline font-medium">
                    Vá para Registro e adicione alimentos.
                  </Link>
                </AlertDescription>
              </Alert>

                {/* Additional content for better content-to-ad ratio */}
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <h3 className="font-medium text-blue-800 mb-2 flex items-center">
                    <Info className="w-4 h-4 mr-1" /> How Food Comparison Works
                  </h3>
                  <p className="text-sm text-blue-700 mb-3">
                    Food comparison helps you understand the caloric differences between foods, allowing you to make
                    better dietary choices.
                  </p>
                  <h4 className="font-medium text-blue-800 mb-1">With this tool you can:</h4>
                  <ul className="list-disc pl-5 text-sm text-blue-700 space-y-1">
                    <li>Compare the caloric content of different foods</li>
                    <li>See percentage differences between foods</li>
                    <li>Adjust quantities to match your portions</li>
                    <li>Make informed decisions about your diet</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">Example Comparison</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-1 text-sm">Apple (100g)</h4>
                      <p className="text-lg font-bold text-blue-700">52 kcal</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h4 className="font-medium text-green-900 mb-1 text-sm">Banana (100g)</h4>
                      <p className="text-lg font-bold text-green-700">89 kcal</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    In this example, a banana has 71% more calories than an apple for the same weight.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* First Food - Mobile optimized */}
                <div className="space-y-4 p-4 bg-gray-100 rounded-lg">
                  <h3 className="font-medium text-gray-900 text-base">Alimento 1</h3>
                  <div>
                    <Label htmlFor="food1" className="text-sm font-medium">
                      Item
                    </Label>
                    <Select value={selectedFood1} onValueChange={setSelectedFood1}>
                      <SelectTrigger className="mt-1 h-12">
                        <SelectValue placeholder="Selecione um alimento" />
                      </SelectTrigger>
                      <SelectContent>
                        {foodItems.map((item) => (
                          <SelectItem key={item.id} value={item.id} className="text-sm">
                            <div className="flex flex-col">
                              <span className="font-medium">{item.name}</span>
                              <span className="text-xs text-gray-500">
                                {item.calories} kcal por {item.amount}g
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="weight1" className="text-sm font-medium">
                      Peso
                    </Label>
                    <div className="flex mt-1">
                      <Input
                        id="weight1"
                        type="number"
                        value={weight1}
                        onChange={(e) => setWeight1(e.target.value)}
                        className="rounded-r-none h-12 text-base"
                      />
                      <span className="bg-gray-100 border border-l-0 px-4 py-3 text-sm text-gray-600 rounded-r-md flex items-center">
                        g
                      </span>
                    </div>
                  </div>
                </div>

                {/* Second Food - Mobile optimized */}
                <div className="space-y-4 p-4 bg-gray-100 rounded-lg">
                  <h3 className="font-medium text-gray-900 text-base">Alimento 2</h3>
                  <div>
                    <Label htmlFor="food2" className="text-sm font-medium">
                      Item
                    </Label>
                    <Select value={selectedFood2} onValueChange={setSelectedFood2}>
                      <SelectTrigger className="mt-1 h-12">
                        <SelectValue placeholder="Selecione um alimento" />
                      </SelectTrigger>
                      <SelectContent>
                        {foodItems.map((item) => (
                          <SelectItem key={item.id} value={item.id} className="text-sm">
                            <div className="flex flex-col">
                              <span className="font-medium">{item.name}</span>
                              <span className="text-xs text-gray-500">
                                {item.calories} kcal por {item.amount}g
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="weight2" className="text-sm font-medium">
                      Peso
                    </Label>
                    <div className="flex mt-1">
                      <Input
                        id="weight2"
                        type="number"
                        value={weight2}
                        onChange={(e) => setWeight2(e.target.value)}
                        className="rounded-r-none h-12 text-base"
                      />
                      <span className="bg-gray-100 border border-l-0 px-4 py-3 text-sm text-gray-600 rounded-r-md flex items-center">
                        g
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {foodItems.length >= 2 && (
              <div className="mt-6">
                <Button
                  onClick={calculateComparison}
                  disabled={!selectedFood1 || !selectedFood2}
                  className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-base font-medium"
                >
                  <Scale className="w-4 h-4 mr-2" />
                  Comparar
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* AdSense Rectangle Space - Mobile optimized */}
        <div className="bg-gray-100 h-48 md:h-64 flex items-center justify-center text-gray-500 text-xs md:text-sm rounded-lg mb-6">
          [AdSense Rectangle - Mobile: 300x250, Desktop: 336x280]
        </div>

        {/* Results - Mobile optimized */}
        {result && (
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Resultado da comparação calórica</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
              {[result.food1, result.food2].map((food, index) => {
                const isHigher = result.food1.calories > result.food2.calories ? index === 0 : index === 1;
                const bgColor = isHigher ? "bg-gray-50" : "bg-gray-50" // Vermelho claro e verde claro
                const textColor = isHigher ? "text-black" : "text-black" // Vermelho escuro e verde escuro
                const labelColor = isHigher ? "text-red-600" : "text-green-900";
                const subTextColor = isHigher ? "text-red-600" : "text-green-600";

                return (
                  <div key={index} className={`${bgColor} p-4 rounded-lg`}>
                    <h4 className={`font-medium ${labelColor} mb-2 text-base truncate`}>{food.name}</h4>
                    <p className={`text-2xl font-bold ${textColor}`}>{food.calories.toFixed(1)} kcal</p>
                    <p className={`text-sm ${subTextColor}`}>em {food.weight}g</p>
                  </div>
                );
              })}

                {/* <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2 text-base truncate">{result.food1.name}</h4>
                  <p className="text-2xl font-bold text-blue-700">{result.food1.calories.toFixed(1)} kcal</p>
                  <p className="text-sm text-blue-600">em {result.food1.weight}g</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-900 mb-2 text-base truncate">{result.food2.name}</h4>
                  <p className="text-2xl font-bold text-green-700">{result.food2.calories.toFixed(1)} kcal</p>
                  <p className="text-sm text-green-600">em {result.food2.weight}g</p>
                </div> */}
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3 text-base">Análise</h4>
                <div className="space-y-2 text-sm">
                <p className="text-gray-700">
                    <strong>Alimento mais calórico:</strong>{" "}
                    <span className="truncate max-w-[200px]">
                      {result.food1.calories > result.food2.calories ? result.food1.name : result.food2.name}
                    </span>
                  </p>
                  <p className="text-gray-700">
                    <strong>Diferença:</strong> {result.difference.toFixed(1)} kcal ({result.percentage.toFixed(1)}%
                    de diferença)
                  </p>
                </div>
              </div>
              {/* Additional content for better content-to-ad ratio */}
              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Nutrition Tip</h4>
                <p className="text-sm text-blue-700">
                  When comparing foods, remember that calories aren't everything. Consider the nutritional value,
                  including protein, fiber, vitamins, and minerals. Foods with similar calorie counts can have vastly
                  different nutritional profiles.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
    </>
  )
}
