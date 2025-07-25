"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useTranslations } from 'next-intl';
import Link from "next/link"
import { Plus, Trash2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Head from 'next/head';
import Script from "next/script";

interface FoodItem {
  id: string
  name: string
  calories: number
  amount: number
  unit: string
}

export default function RegisterPage() {
  const t = useTranslations('RegisterPage');
  const [foodItems, setFoodItems] = useState<FoodItem[]>([])
  const [formData, setFormData] = useState({
    name: "",
    calories: "",
    amount: "100",
    unit: "g",
  })

  useEffect(() => {
    const saved = localStorage.getItem("foodItems")
    if (saved) {
      setFoodItems(JSON.parse(saved))
    }
  }, [])

  const saveFoodItems = (items: FoodItem[]) => {
    localStorage.setItem("foodItems", JSON.stringify(items))
    setFoodItems(items)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.calories) return

    const newItem: FoodItem = {
      id: Date.now().toString(),
      name: formData.name,
      calories: Number.parseFloat(formData.calories),
      amount: Number.parseFloat(formData.amount),
      unit: formData.unit,
    }

    const updatedItems = [...foodItems, newItem]
    saveFoodItems(updatedItems)
    setFormData({ name: "", calories: "", amount: "100", unit: "g" })
  }

  const deleteItem = (id: string) => {
    const updatedItems = foodItems.filter((item) => item.id !== id)
    saveFoodItems(updatedItems)
  }

    // Add some example food items for new users to ensure content
    const addExampleFoods = () => {
      const exampleFoods = [
        { id: "ex1", name: "Apple", calories: 52, amount: 100, unit: "g" },
        { id: "ex2", name: "Banana", calories: 89, amount: 100, unit: "g" },
        { id: "ex3", name: "Chicken Breast", calories: 165, amount: 100, unit: "g" },
        { id: "ex4", name: "Brown Rice", calories: 112, amount: 100, unit: "g" },
      ]
      saveFoodItems([...foodItems, ...exampleFoods])
    }

  return (
    <>
      <Head>
                <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-ST7RSG0Q52`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ST7RSG0Q52');
          `}
        </Script>
        <meta name="google-adsense-account" content="ca-pub-2627213694460628"/>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2627213694460628"
          crossOrigin="anonymous"></script>
      </Head>
      <div className="min-h-screen bg-gray-50">
      {/* Mobile-optimized Header */}

      <header className="bg-white shadow-sm border-b">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-sm">
                <ArrowLeft className="w-4 h-4 mr-1" />
                {t('backHome') || 'Home'}
              </Button>
            </Link>
            <h1 className="text-lg md:text-xl font-bold text-gray-900 flex-1 text-center mr-16">{t('title')}</h1>
          </div>
        </div>
        {/* AdSense Banner Space - Mobile optimized */}
        {/* <div className="bg-gray-100 h-16 md:h-20 flex items-center justify-center text-gray-500 text-xs md:text-sm">
          [AdSense Banner - Mobile: 320x50, Desktop: 728x90]
        </div> */}

      </header>

      <main className="px-4 py-6 pb-20">
        <div className="space-y-6">
          {/* Add Food Form - Mobile optimized */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-lg">
                <Plus className="w-5 h-5 mr-2 text-green-600" />
                {t('title')}
              </CardTitle>
              <CardDescription className="text-sm">{t('description')}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium">
                    {t('name')}
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={t('namePlaceholder')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-1 h-12 text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="calories" className="text-sm font-medium">
                    {t('calories')}
                  </Label>
                  <div className="flex mt-1">
                    <Input
                      id="calories"
                      type="number"
                      placeholder={t('caloriesPlaceholder')}
                      value={formData.calories}
                      onChange={(e) => setFormData({ ...formData, calories: e.target.value })}
                      required
                      className="rounded-r-none h-12 text-base"
                    />
                    <span className="bg-gray-100 border border-l-0 px-4 py-3 text-sm text-gray-600 rounded-r-md flex items-center">
                      kcal
                    </span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="amount" className="text-sm font-medium">
                    {t('amount')}
                  </Label>
                  <div className="flex mt-1">
                    <Input
                      id="amount"
                      type="number"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      required
                      className="rounded-r-none h-12 text-base"
                    />
                    <span className="bg-gray-100 border border-l-0 px-4 py-3 text-sm text-gray-600 rounded-r-md flex items-center">
                      g
                    </span>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 h-12 text-base font-medium">
                  <Plus className="w-4 h-4 mr-2" />
                  {t('add')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* AdSense Rectangle Space - Mobile optimized
          <div className="bg-gray-100 h-48 md:h-64 flex items-center justify-center text-gray-500 text-xs md:text-sm rounded-lg">
            [AdSense Rectangle - Mobile: 300x250, Desktop: 336x280]
          </div> */}

          {/* Registered Items List - Mobile optimized */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">{t('yourFoods')}</CardTitle>
              <CardDescription className="text-sm">{foodItems.length} {t('itemsRegistered')}</CardDescription>
            </CardHeader>
            <CardContent>
              {foodItems.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Plus className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p className="text-base mb-1">{t('noItems')}</p>
                  <p className="text-sm mb-4">{t('addFirst')}</p>

                  {/* Add example foods button */}
                  <Button onClick={addExampleFoods} variant="outline" className="mx-auto bg-transparent">
                    {t('addExampleFoods')}
                  </Button>

                  {/* Additional helpful content */}
                  <div className="mt-6 text-left bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-800 mb-2">{t('tipsTitle')}</h3>
                    <ul className="list-disc pl-5 text-sm text-blue-700 space-y-1">
                      {t.raw('tips').map((tip: string, idx: number) => (
                        <li key={idx}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {foodItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 text-base truncate">{item.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {item.calories} kcal por {item.amount}
                          {item.unit}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteItem(item.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 ml-3 h-10 w-10 p-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
               {/* Only show ads when there's content
               {foodItems.length > 0 && (
                <AdSenseAd
                  adSlot="0987654321"
                  adFormat="rectangle"
                  className="h-48 md:h-64 flex items-center justify-center rounded-lg mt-6"
                />
              )} */}

              {/* Additional content for better content-to-ad ratio */}
              {foodItems.length > 0 && (
                <div className="mt-6 bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium text-green-800 mb-2">{t('didYouKnowTitle')}</h3>
                  <p className="text-sm text-green-700">
                    {t('didYouKnow')}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Educational Content Section */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>{t('howToTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  {t('howToIntro')}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">{t('precisionTipsTitle')}</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                      {t.raw('precisionTips').map((tip: string, idx: number) => (
                        <li key={idx}>{tip}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">{t('sourcesTitle')}</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                      {t.raw('sources').map((source: string, idx: number) => (
                        <li key={idx}>{source}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Food Categories Guide */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>{t('categoriesTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">{t('fruitsVeg')}</h4>
                  <p className="text-sm text-green-700 mb-2">{t('fruitsVegKcal')}</p>
                  <p className="text-xs text-green-600">
                    {t('fruitsVegDesc')}
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">{t('proteins')}</h4>
                  <p className="text-sm text-blue-700 mb-2">{t('proteinsKcal')}</p>
                  <p className="text-xs text-blue-600">{t('proteinsDesc')}</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-medium text-orange-800 mb-2">{t('carbs')}</h4>
                  <p className="text-sm text-orange-700 mb-2">{t('carbsKcal')}</p>
                  <p className="text-xs text-orange-600">{t('carbsDesc')}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Mistakes Section */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>{t('commonMistakesTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-medium text-red-800">{t('prepMistakeTitle')}</h4>
                  <p className="text-sm text-red-700">
                    {t('prepMistake')}
                  </p>
                </div>

                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-medium text-yellow-800">{t('genericMistakeTitle')}</h4>
                  <p className="text-sm text-yellow-700">{t('genericMistake')}</p>
                </div>

                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-medium text-blue-800">{t('saucesMistakeTitle')}</h4>
                  <p className="text-sm text-blue-700">
                    {t('saucesMistake')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
    </>
  )
}
