"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Plus, Trash2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Head from 'next/head';

interface FoodItem {
  id: string
  name: string
  calories: number
  amount: number
  unit: string
}

export default function RegisterPage() {
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
                Home
              </Button>
            </Link>
            <h1 className="text-lg md:text-xl font-bold text-gray-900 flex-1 text-center mr-16">Registro</h1>
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
                Registre um novo alimento
              </CardTitle>
              <CardDescription className="text-sm">Consulte a tabela nutricional e insira os detalhes dos alimentos</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium">
                    Nome
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Insira o nome do alimento."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-1 h-12 text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="calories" className="text-sm font-medium">
                    Calorias
                  </Label>
                  <div className="flex mt-1">
                    <Input
                      id="calories"
                      type="number"
                      placeholder="Insira as calorias"
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
                    Por quantidade
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
                  Adicionar
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
              <CardTitle className="text-lg">Seus alimentos</CardTitle>
              <CardDescription className="text-sm">{foodItems.length} itens registados</CardDescription>
            </CardHeader>
            <CardContent>
              {foodItems.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Plus className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p className="text-base mb-1">Ainda não há itens registrados.</p>
                  <p className="text-sm mb-4">Adicione seu primeiro alimento acima!</p>

                {/* Add example foods button */}
                <Button onClick={addExampleFoods} variant="outline" className="mx-auto bg-transparent">
                  Add Example Foods
                </Button>

                {/* Additional helpful content */}
                <div className="mt-6 text-left bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-800 mb-2">Getting Started Tips:</h3>
                  <ul className="list-disc pl-5 text-sm text-blue-700 space-y-1">
                    <li>Start by adding foods you eat regularly</li>
                    <li>Be precise with calorie values for accurate comparisons</li>
                    <li>Use the same unit (g) for consistent calculations</li>
                    <li>You can always edit or delete items later</li>
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
                  <h3 className="font-medium text-green-800 mb-2">Did you know?</h3>
                  <p className="text-sm text-green-700">
                    Tracking your food's caloric content can help you make more informed dietary choices. The average
                    adult needs about 2,000-2,500 calories per day, but this varies based on age, gender, weight,
                    height, and activity level.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Educational Content Section */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Como Registrar Alimentos Corretamente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Registrar alimentos com precisão é fundamental para um controle calórico eficaz. Aqui estão algumas
                  dicas importantes:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Dicas de Precisão</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                      <li>Use sempre a mesma unidade de medida (gramas)</li>
                      <li>Consulte tabelas nutricionais confiáveis</li>
                      <li>Considere o método de preparo (cru vs cozido)</li>
                      <li>Seja específico com variedades (maçã gala vs fuji)</li>
                      <li>Registre alimentos que você consome regularmente</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Fontes Confiáveis</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                      <li>TACO - Tabela Brasileira de Composição de Alimentos</li>
                      <li>Rótulos nutricionais dos produtos</li>
                      <li>USDA Food Database</li>
                      <li>Aplicativos de nutrição certificados</li>
                      <li>Consulta com nutricionistas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Food Categories Guide */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Categorias de Alimentos e Suas Características Calóricas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">Frutas e Vegetais</h4>
                  <p className="text-sm text-green-700 mb-2">Geralmente 15-80 kcal/100g</p>
                  <p className="text-xs text-green-600">
                    Ricos em água, fibras e micronutrientes. Ideais para controle de peso.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Proteínas</h4>
                  <p className="text-sm text-blue-700 mb-2">Geralmente 100-250 kcal/100g</p>
                  <p className="text-xs text-blue-600">Carnes, peixes, ovos e leguminosas. Essenciais para músculos.</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-medium text-orange-800 mb-2">Carboidratos</h4>
                  <p className="text-sm text-orange-700 mb-2">Geralmente 80-350 kcal/100g</p>
                  <p className="text-xs text-orange-600">Cereais, tubérculos e grãos. Principal fonte de energia.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Mistakes Section */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Erros Comuns ao Registrar Alimentos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-medium text-red-800">Não considerar o método de preparo</h4>
                  <p className="text-sm text-red-700">
                    100g de batata crua (77 kcal) ≠ 100g de batata frita (365 kcal)
                  </p>
                </div>

                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-medium text-yellow-800">Usar dados genéricos demais</h4>
                  <p className="text-sm text-yellow-700">"Pão" pode variar de 200 a 400 kcal/100g dependendo do tipo</p>
                </div>

                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-medium text-blue-800">Ignorar temperos e molhos</h4>
                  <p className="text-sm text-blue-700">
                    Azeite, manteiga e molhos podem dobrar as calorias de um prato
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
