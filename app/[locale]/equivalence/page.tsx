"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Calculator, ArrowLeft, AlertCircle , Info} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Label } from "@/components/ui/label"
import Head from 'next/head';

interface FoodItem {
  id: string
  name: string
  calories: number
  amount: number
  unit: string
}

interface EquivalenceResult {
  sourceFood: string
  sourceAmount: number
  targetFood: string
  targetAmount: number
  calories: number
}

export default function EquivalencePage() {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([])
  const [sourceFood, setSourceFood] = useState("")
  const [targetFood, setTargetFood] = useState("")
  const [sourceAmount, setSourceAmount] = useState("100")
  const [result, setResult] = useState<EquivalenceResult | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem("foodItems")
    if (saved) {
      setFoodItems(JSON.parse(saved))
    }
  }, [])

  const calculateEquivalence = () => {
    const source = foodItems.find((item) => item.id === sourceFood)
    const target = foodItems.find((item) => item.id === targetFood)

    if (!source || !target) return

    const sourceCalories = (source.calories / source.amount) * Number.parseFloat(sourceAmount)
    const targetAmountNeeded = (sourceCalories * target.amount) / target.calories

    setResult({
      sourceFood: source.name,
      sourceAmount: Number.parseFloat(sourceAmount),
      targetFood: target.name,
      targetAmount: targetAmountNeeded,
      calories: sourceCalories,
    })
  }

  return (
    <>  
    <Head>
    <meta name="google-adsense-account" content="ca-pub-2627213694460628"/>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2627213694460628"
     crossOrigin="anonymous"></script>
    </Head>
    <div className="min-h-screen bg-gray-50">
      {/* Mobile- Header */}
  
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-sm">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Home
              </Button>
            </Link>
            <h1 className="text-lg md:text-xl font-bold text-gray-900 flex-1 text-center mr-16">Equivalência</h1>
          </div>
        </div>
        {/* AdSense Banner Space - Mobile optimized */}
  
      </header>

      <main className="px-4 py-6 pb-20">
        <Card className="mb-6">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-lg">
              <Calculator className="w-5 h-5 mr-2 text-purple-600" />
              Calcule a equivalência calórica entre alimentos
            </CardTitle>
            <CardDescription className="text-sm">
              Descubra quanto de um alimento equivale a outro em calorias
            </CardDescription>
          </CardHeader>
          <CardContent>
            {foodItems.length < 2 ? (
              <div className="space-y-4">

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="text-sm">
                  You need at least 2 food items to calculate equivalence.{" "}
                  <Link href="/register" className="text-blue-600 hover:underline font-medium">
                    Go to Register to add more food items.
                  </Link>
                </AlertDescription>
              </Alert>

                {/* Additional content for better content-to-ad ratio */}
                <div className="bg-purple-50 p-4 rounded-lg mt-4">
                  <h3 className="font-medium text-purple-800 mb-2 flex items-center">
                    <Info className="w-4 h-4 mr-1" /> Understanding Food Equivalence
                  </h3>
                  <p className="text-sm text-purple-700 mb-3">
                    Food equivalence helps you understand how much of one food equals another in terms of calories,
                    allowing you to make substitutions in your diet.
                  </p>
                  <h4 className="font-medium text-purple-800 mb-1">How it works:</h4>
                  <ul className="list-disc pl-5 text-sm text-purple-700 space-y-1">
                    <li>Select a source food and amount</li>
                    <li>Select a target food you want to substitute with</li>
                    <li>
                      The calculator determines how much of the target food equals the calories in your source food
                    </li>
                    <li>Use this information to make informed substitutions</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">Example Equivalence</h3>
                  <div className="text-center space-y-3">
                    <div className="p-3 bg-white rounded-lg">
                      <p className="text-sm text-gray-700 font-medium">
                        <strong>100g</strong> of <strong>Rice (130 kcal)</strong>
                      </p>
                    </div>
                    <div className="text-xl font-bold text-purple-600">≈</div>
                    <div className="p-3 bg-white rounded-lg">
                      <p className="text-sm text-gray-700 font-medium">
                        <strong>250g</strong> of <strong>Broccoli (52 kcal)</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Source Food - Mobile optimized */}
                <div className="space-y-4 p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 text-base">Na minha dieta, preciso comer:</h3>
                  <div className="space-y-3">
                    <div>
                      <Label className="text-sm font-medium">Amount</Label>
                      <div className="flex mt-1">
                        <Input
                          type="number"
                          value={sourceAmount}
                          onChange={(e) => setSourceAmount(e.target.value)}
                          className="rounded-r-none h-12 text-base"
                        />
                        <span className="bg-gray-100 border border-l-0 px-4 py-3 text-sm text-gray-600 rounded-r-md flex items-center">
                          g
                        </span>
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Food</Label>
                      <Select value={sourceFood} onValueChange={setSourceFood}>
                        <SelectTrigger className="mt-1 h-12">
                          <SelectValue placeholder="Select food" />
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
                  </div>
                </div>

                {/* Target Food - Mobile optimized */}
                <div className="space-y-4 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 text-base">But I want to eat:</h3>
                  <div>
                    <Label className="text-sm font-medium">Food</Label>
                    <Select value={targetFood} onValueChange={setTargetFood}>
                      <SelectTrigger className="mt-1 h-12">
                        <SelectValue placeholder="Select food" />
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
                </div>

                <Button
                  onClick={calculateEquivalence}
                  disabled={!sourceFood || !targetFood}
                  className="w-full bg-purple-600 hover:bg-purple-700 h-12 text-base font-medium"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Calcular
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

      

        {/* Results - Mobile optimized */}
        {result && (
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Equivalence Result</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
                <div className="text-center space-y-4">
                  <div className="p-3 bg-white rounded-lg">
                    <p className="text-base text-gray-700 font-medium">
                      <strong>{result.sourceAmount}g</strong> of
                    </p>
                    <p className="text-lg font-bold text-purple-600 truncate">{result.sourceFood}</p>
                  </div>

                  <div className="text-3xl font-bold text-purple-600">≈</div>

                  <div className="p-3 bg-white rounded-lg">
                    <p className="text-base text-gray-700 font-medium">
                      <strong>{result.targetAmount.toFixed(1)}g</strong> of
                    </p>
                    <p className="text-lg font-bold text-blue-600 truncate">{result.targetFood}</p>
                  </div>

                  <div className="bg-white p-3 rounded-md">
                    <p className="text-sm text-gray-600">
                      Both contain approximately <strong>{result.calories.toFixed(1)} kcal</strong>
                    </p>
                  </div>
                </div>
              </div>
                {/* Additional content for better content-to-ad ratio */}
                <div className="mt-6 bg-purple-50 p-4 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-2">Substitution Tip</h4>
                <p className="text-sm text-purple-700">
                  When substituting foods, consider the volume difference. Lower calorie foods often have more volume,
                  which can help you feel fuller while consuming fewer calories. This is especially true for vegetables
                  and fruits compared to more calorie-dense foods.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Educational Content Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Entendendo Equivalências Calóricas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">
                As equivalências calóricas ajudam você a fazer substituições inteligentes na sua dieta, mantendo o
                equilíbrio energético enquanto varia os nutrientes e sabores.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-800 mb-2">Como Funciona o Cálculo</h3>
                <p className="text-sm text-blue-700 mb-2">
                  A equivalência é baseada no conteúdo cal��rico total dos alimentos:
                </p>
                <div className="bg-white p-3 rounded border text-sm">
                  <code className="text-blue-600">
                    Quantidade Equivalente = (Calorias do Alimento Original × Quantidade Original) ÷ Calorias por grama
                    do Alimento Substituto
                  </code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practical Examples */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Exemplos Práticos de Equivalências</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Substituições para Perda de Peso</h4>
                <div className="grid gap-4">
                  <div className="bg-gradient-to-r from-red-50 to-green-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-red-700 font-medium">100g Arroz Branco (130 kcal)</span>
                      <span className="text-gray-500">→</span>
                      <span className="text-green-700 font-medium">380g Abobrinha (65 kcal)</span>
                    </div>
                    <p className="text-xs text-gray-600">Redução de 50% nas calorias com muito mais volume e fibras</p>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-green-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-red-700 font-medium">50g Chocolate (250 kcal)</span>
                      <span className="text-gray-500">→</span>
                      <span className="text-green-700 font-medium">480g Morango (154 kcal)</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      Satisfaça a vontade de doce com menos calorias e mais nutrientes
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Substituições para Ganho de Massa</h4>
                <div className="grid gap-4">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-700 font-medium">100g Peito de Frango (165 kcal)</span>
                      <span className="text-gray-500">→</span>
                      <span className="text-purple-700 font-medium">80g Salmão (166 kcal)</span>
                    </div>
                    <p className="text-xs text-gray-600">Mesmas calorias, mas com ômega-3 e gorduras boas</p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-700 font-medium">100g Aveia (389 kcal)</span>
                      <span className="text-gray-500">→</span>
                      <span className="text-purple-700 font-medium">85g Quinoa (368 kcal)</span>
                    </div>
                    <p className="text-xs text-gray-600">Proteína completa com todos os aminoácidos essenciais</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Tips */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Estratégias Avançadas de Substituição</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Substituições por Macronutriente</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-green-400 pl-3">
                    <h5 className="font-medium text-green-800 text-sm">Carboidratos</h5>
                    <p className="text-xs text-green-700">Prefira integrais: aveia → quinoa → arroz integral</p>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-3">
                    <h5 className="font-medium text-blue-800 text-sm">Proteínas</h5>
                    <p className="text-xs text-blue-700">Varie as fontes: frango → peixe → leguminosas</p>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-3">
                    <h5 className="font-medium text-yellow-800 text-sm">Gorduras</h5>
                    <p className="text-xs text-yellow-700">Escolha as boas: azeite → abacate → castanhas</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Considerações Importantes</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                  <li>Volume e saciedade podem variar drasticamente</li>
                  <li>Considere o índice glicêmico dos carboidratos</li>
                  <li>Avalie a biodisponibilidade dos nutrientes</li>
                  <li>Pense na praticidade e custo dos alimentos</li>
                  <li>Considere alergias e intolerâncias</li>
                  <li>Varie para obter diferentes micronutrientes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Meal Planning with Equivalences */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Planejamento de Refeições com Equivalências</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700 text-sm">
                Use equivalências para criar variedade nas suas refeições mantendo o controle calórico:
              </p>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Exemplo: Café da Manhã (300 kcal)</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white p-3 rounded">
                    <h5 className="font-medium text-blue-700">Opção 1</h5>
                    <p>2 fatias pão integral + 1 ovo</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <h5 className="font-medium text-green-700">Opção 2</h5>
                    <p>1 xícara aveia + 1 banana</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <h5 className="font-medium text-purple-700">Opção 3</h5>
                    <p>200ml iogurte + 30g granola</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Dica Pro</h4>
                <p className="text-sm text-blue-700">
                  Crie um "banco" de equivalências dos seus alimentos favoritos para facilitar o planejamento semanal e
                  evitar monotonia na dieta.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
    </>
  )
}
