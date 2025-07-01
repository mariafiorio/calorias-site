"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Plus, Trash2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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

  return (
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
        <div className="bg-gray-100 h-16 md:h-20 flex items-center justify-center text-gray-500 text-xs md:text-sm">
          [AdSense Banner - Mobile: 320x50, Desktop: 728x90]
        </div>
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

          {/* AdSense Rectangle Space - Mobile optimized */}
          <div className="bg-gray-100 h-48 md:h-64 flex items-center justify-center text-gray-500 text-xs md:text-sm rounded-lg">
            [AdSense Rectangle - Mobile: 300x250, Desktop: 336x280]
          </div>

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
                  <p className="text-sm">Adicione seu primeiro alimento acima!</p>
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
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
