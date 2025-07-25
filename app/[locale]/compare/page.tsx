"use client"

import { useState, useEffect } from "react"
import { useTranslations } from 'next-intl';
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
  const t = useTranslations('ComparePage');
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ST7RSG0Q52"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-ST7RSG0Q52');
</script>
        <meta name="google-adsense-account" content="ca-pub-2627213694460628"/>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2627213694460628" crossOrigin="anonymous"></script>
      </Head>
      <div className="min-h-screen bg-gray-50">
        {/* Mobile-optimized Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="px-4 py-3">
            <div className="flex items-center justify-between">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-sm">
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  {t('backHome')}
                </Button>
              </Link>
              <h1 className="text-lg md:text-xl font-bold text-gray-900 flex-1 text-center mr-16">{t('title')}</h1>
            </div>
          </div>
        </header>
        <main className="px-4 py-6 pb-20">
        <Card className="mb-6">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-lg">
              <Scale className="w-5 h-5 mr-2 text-blue-600" />
              {t('subtitle')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {foodItems.length < 2 ? (
              <div className="space-y-4">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-sm">
                    {t('needTwoFoods')}{' '}
                    <Link href="/register" className="text-blue-600 hover:underline font-medium">
                      {t('goToRegister')}
                    </Link>
                  </AlertDescription>
                </Alert>

                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <h3 className="font-medium text-blue-800 mb-2 flex items-center">
                    <Info className="w-4 h-4 mr-1" /> {t('howWorksTitle')}
                  </h3>
                  <p className="text-sm text-blue-700 mb-3">{t('howWorksDesc')}</p>
                  <h4 className="font-medium text-blue-800 mb-1">{t('howWorksListTitle')}</h4>
                  <ul className="list-disc pl-5 text-sm text-blue-700 space-y-1">
                    <li>{t('howWorksList1')}</li>
                    <li>{t('howWorksList2')}</li>
                    <li>{t('howWorksList3')}</li>
                    <li>{t('howWorksList4')}</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">{t('exampleTitle')}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-1 text-sm">{t('exampleFood1')}</h4>
                      <p className="text-lg font-bold text-blue-700">{t('exampleFood1Kcal')}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h4 className="font-medium text-green-900 mb-1 text-sm">{t('exampleFood2')}</h4>
                      <p className="text-lg font-bold text-green-700">{t('exampleFood2Kcal')}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">{t('exampleDesc')}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-4 p-4 bg-gray-100 rounded-lg">
                  <h3 className="font-medium text-gray-900 text-base">{t('food1')}</h3>
                  <div>
                    <Label htmlFor="food1" className="text-sm font-medium">
                      {t('item')}
                    </Label>
                    <Select value={selectedFood1} onValueChange={setSelectedFood1}>
                      <SelectTrigger className="mt-1 h-12">
                        <SelectValue placeholder={t('item')} />
                      </SelectTrigger>
                      <SelectContent>
                        {foodItems.map((item) => (
                          <SelectItem key={item.id} value={item.id} className="text-sm">
                            <div className="flex flex-col">
                              <span className="font-medium">{item.name}</span>
                              <span className="text-xs text-gray-500">
                                {item.calories} kcal per {item.amount}g
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="weight1" className="text-sm font-medium">
                      {t('weight')}
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

                <div className="space-y-4 p-4 bg-gray-100 rounded-lg">
                  <h3 className="font-medium text-gray-900 text-base">{t('food2')}</h3>
                  <div>
                    <Label htmlFor="food2" className="text-sm font-medium">
                      {t('item')}
                    </Label>
                    <Select value={selectedFood2} onValueChange={setSelectedFood2}>
                      <SelectTrigger className="mt-1 h-12">
                        <SelectValue placeholder={t('item')} />
                      </SelectTrigger>
                      <SelectContent>
                        {foodItems.map((item) => (
                          <SelectItem key={item.id} value={item.id} className="text-sm">
                            <div className="flex flex-col">
                              <span className="font-medium">{item.name}</span>
                              <span className="text-xs text-gray-500">
                                {item.calories} kcal per {item.amount}g
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="weight2" className="text-sm font-medium">
                      {t('weight')}
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
                  {t('compareBtn')}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {result && (
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">{t('resultTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                {[result.food1, result.food2].map((food, index) => {
                  const isHigher = result.food1.calories > result.food2.calories ? index === 0 : index === 1;
                  const bgColor = isHigher ? "bg-gray-50" : "bg-gray-50"
                  const textColor = isHigher ? "text-black" : "text-black"
                  const labelColor = isHigher ? "text-red-600" : "text-green-900";
                  const subTextColor = isHigher ? "text-red-600" : "text-green-600";

                  return (
                    <div key={index} className={`${bgColor} p-4 rounded-lg`}>
                      <h4 className={`font-medium ${labelColor} mb-2 text-base truncate`}>{food.name}</h4>
                      <p className={`text-2xl font-bold ${textColor}`}>{food.calories.toFixed(1)} kcal</p>
                      <p className={`text-sm ${subTextColor}`}>{t('inWeight', { weight: food.weight })}</p>
                    </div>
                  );
                })}
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3 text-base">{t('analysisTitle')}</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">
                    <strong>{t('mostCaloric')}:</strong>{' '}
                    <span className="truncate max-w-[200px]">
                      {result.food1.calories > result.food2.calories ? result.food1.name : result.food2.name}
                    </span>
                  </p>
                  <p className="text-gray-700">
                    <strong>{t('difference')}:</strong> {result.difference.toFixed(1)} kcal ({result.percentage.toFixed(1)}% {t('differencePercent')})
                  </p>
                </div>
              </div>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">{t('tipTitle')}</h4>
                <p className="text-sm text-blue-700">{t('tipText')}</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Educational Content Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>{t('educationalTitle')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">
                {t('educationalIntro')}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">{t('factorsTitle')}</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-sm">{t('glycemicIndex')}</h4>
                        <p className="text-xs text-gray-600">{t('glycemicIndexDesc')}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-sm">{t('nutrientDensity')}</h4>
                        <p className="text-xs text-gray-600">{t('nutrientDensityDesc')}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-sm">{t('satiety')}</h4>
                        <p className="text-xs text-gray-600">{t('satietyDesc')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-3">{t('usageTitle')}</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                    <li>{t('usage1')}</li>
                    <li>{t('usage2')}</li>
                    <li>{t('usage3')}</li>
                    <li>{t('usage4')}</li>
                    <li>{t('usage5')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comparison Examples */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>{t('examplesTitle')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">{t('snackExampleTitle')}</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-green-700">{t('snackExample1')}</p>
                    <p className="text-green-600">{t('snackExample1Kcal')}</p>
                  </div>
                  <div>
                    <p className="font-medium text-red-700">{t('snackExample2')}</p>
                    <p className="text-red-600">{t('snackExample2Kcal')}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  {t('snackExampleDesc')}
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">{t('proteinExampleTitle')}</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-blue-700">{t('proteinExample1')}</p>
                    <p className="text-blue-600">{t('proteinExample1Kcal')}</p>
                  </div>
                  <div>
                    <p className="font-medium text-purple-700">{t('proteinExample2')}</p>
                    <p className="text-purple-600">{t('proteinExample2Kcal')}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  {t('proteinExampleDesc')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips for Better Comparisons */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>{t('tipsTitle')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">{t('compareTipsTitle')}</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                  <li>{t('compareTip1')}</li>
                  <li>{t('compareTip2')}</li>
                  <li>{t('compareTip3')}</li>
                  <li>{t('compareTip4')}</li>
                  <li>{t('compareTip5')}</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">{t('interpretationTitle')}</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                  <li>{t('interpretationTip1')}</li>
                  <li>{t('interpretationTip2')}</li>
                  <li>{t('interpretationTip3')}</li>
                  <li>{t('interpretationTip4')}</li>
                  <li>{t('interpretationTip5')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
    </>
  )
}