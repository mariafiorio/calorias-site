import Link from "next/link"
import { Calculator, Scale, Plus, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Mobile-optimized Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 py-3">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 text-center">calorias.live</h1>
        </div>
        {/* AdSense Banner Space - Mobile optimized */}
        <div className="bg-gray-100 h-16 md:h-20 flex items-center justify-center text-gray-500 text-xs md:text-sm">
          [AdSense Banner - Mobile: 320x50, Desktop: 728x90]
        </div>
      </header>

      <main className="px-4 py-6 pb-20">
        {/* Hero Section - Mobile optimized */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            Compare Calorias
          </h2>
          <p className="text-base md:text-xl text-gray-600 mb-6 leading-relaxed">
            Registre alimentos, compare sua densidade calórica, e calcule equivalência entre alimentospara fazer melhores escolhas na sua dieta.          </p>
          <Link href="/register">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 w-full sm:w-auto text-lg py-3 px-8">
              Começar
            </Button>
          </Link>
        </div>

        {/* Features Grid - Mobile optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Card className="text-center">
            <CardHeader className="pb-3">
              <Plus className="w-10 h-10 mx-auto text-green-600 mb-3" />
              <CardTitle className="text-lg">Register Food Items</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-sm leading-relaxed">
                Add food items with their name, calories, and reference amount.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-3">
              <Scale className="w-10 h-10 mx-auto text-blue-600 mb-3" />
              <CardTitle className="text-lg">Compare Foods</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-sm leading-relaxed">
                Select two foods and compare their caloric content based on quantity.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-3">
              <Calculator className="w-10 h-10 mx-auto text-purple-600 mb-3" />
              <CardTitle className="text-lg">Calculate Equivalence</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-sm leading-relaxed">
                Find out how much of one food equals another in calories.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-3">
              <Save className="w-10 h-10 mx-auto text-orange-600 mb-3" />
              <CardTitle className="text-lg">Save Automatically</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-sm leading-relaxed">
                Your food items are automatically saved for future use.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* AdSense Rectangle Space - Mobile optimized */}
        <div className="bg-gray-100 h-48 md:h-64 flex items-center justify-center text-gray-500 text-xs md:text-sm mb-8 rounded-lg">
          [AdSense Rectangle - Mobile: 300x250, Desktop: 336x280]
        </div>

        {/* Quick Navigation - Mobile optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/register" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-green-50 border-green-200">
              <CardHeader className="text-center py-6">
                <Plus className="w-8 h-8 mx-auto text-green-600 mb-2" />
                <CardTitle className="text-green-600 text-lg">Registro</CardTitle>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/compare" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-blue-50 border-blue-200">
              <CardHeader className="text-center py-6">
                <Scale className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                <CardTitle className="text-blue-600 text-lg">Comparação</CardTitle>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/equivalence" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-purple-50 border-purple-200">
              <CardHeader className="text-center py-6">
                <Calculator className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                <CardTitle className="text-purple-600 text-lg">Equivalência</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </main>

      {/* Footer - Mobile optimized */}
      <footer className="bg-white border-t mt-8">
        <div className="bg-gray-100 h-16 md:h-20 flex items-center justify-center text-gray-500 text-xs md:text-sm">
          [AdSense Footer Banner - Mobile: 320x50, Desktop: 728x90]
        </div>
        <div className="px-4 py-6 text-center text-gray-600 text-sm">
          <p>&copy; 2024 Food Calorie Calculator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
