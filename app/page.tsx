import Link from "next/link"
import { Calculator, Scale, Plus, Save, Info, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Head from 'next/head';

export default function HomePage() {
  return (
    <>  
    <Head>
    <meta name="google-adsense-account" content="ca-pub-2627213694460628"/>
      <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2627213694460628"
    crossOrigin="anonymous"
  ></script>
    </Head>
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Mobile-optimized Header */}

      <header className="bg-white shadow-sm border-b">
        <div className="px-4 py-3">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 text-center">calorias.live</h1>
        </div>
        {/* AdSense Banner Space - Mobile optimized */}

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
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
              Blog de Nutrição
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Acesse nosso blog com mais de 50 artigos especializados sobre calorias, nutrição e alimentação saudável.
            </p>
            <Link href="/blog">
              <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                Ver Artigos
              </Button>
            </Link>
          </CardContent>
        </Card>
     {/* Educational Content - Added for better content-to-ad ratio */}
     <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Info className="w-5 h-5 mr-2 text-blue-600" />
              Understanding Calories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">
                A calorie is a unit of energy. In nutrition, calories refer to the energy people get from the food and
                drink they consume, and the energy they use during physical activity.
              </p>

              <h3 className="font-medium text-gray-900">Why Count Calories?</h3>
              <p className="text-gray-700">Counting calories can help you:</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Maintain a healthy weight</li>
                <li>Lose weight in a controlled manner</li>
                <li>Gain weight if needed</li>
                <li>Make more informed food choices</li>
              </ul>

              <h3 className="font-medium text-gray-900">Calorie Needs</h3>
              <p className="text-gray-700">
                The average adult needs about 2,000-2,500 calories per day, but this varies based on age, gender,
                weight, height, and activity level. Athletes may need significantly more, while those trying to lose
                weight may aim for fewer calories.
              </p>
            </div>
          </CardContent>
        </Card>
        {/* AdSense Rectangle Space - Mobile optimized */}

        {/* Quick Navigation - Mobile optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">          <Link href="/register" className="block">
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

        {/* Additional Educational Content - Added for better content-to-ad ratio */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Common Food Calorie Reference</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-2 border-b">Food (100g)</th>
                    <th className="text-right p-2 border-b">Calories</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b">Apple</td>
                    <td className="text-right p-2 border-b">52 kcal</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">Banana</td>
                    <td className="text-right p-2 border-b">89 kcal</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">Chicken Breast</td>
                    <td className="text-right p-2 border-b">165 kcal</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">Brown Rice (cooked)</td>
                    <td className="text-right p-2 border-b">112 kcal</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">Broccoli</td>
                    <td className="text-right p-2 border-b">34 kcal</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">Salmon</td>
                    <td className="text-right p-2 border-b">208 kcal</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">Egg</td>
                    <td className="text-right p-2 border-b">155 kcal</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">Avocado</td>
                    <td className="text-right p-2 border-b">160 kcal</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Note: Values are approximate and may vary based on specific varieties and preparation methods.
            </p>
          </CardContent>
        </Card>
      </main>

      {/* Footer - Mobile optimized */}
      <footer className="bg-white border-t mt-8">

        <div className="px-4 py-6 text-center text-gray-600 text-sm">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link href="/about" className="hover:text-blue-600">
              Sobre
            </Link>
            <Link href="/privacy" className="hover:text-blue-600">
              Privacidade
            </Link>
            <Link href="/terms" className="hover:text-blue-600">
              Termos
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contato
            </Link>
            <Link href="/blog" className="hover:text-blue-600">
              Blog
            </Link>
          </div>
          <p>&copy; 2024 Food Calorie Calculator. All rights reserved.</p>
          <p className="mt-2">
            This tool is designed for educational purposes only. Always consult with a healthcare professional before
            making significant changes to your diet.
          </p>
        </div>
      </footer>
    </div>
    </>
  )
}
