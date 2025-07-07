import Link from "next/link"
import { Info, Target, Users, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AdSenseAd from "@/components/adsense-ad"

export const metadata = {
  title: "Sobre Nós - Food Calorie Calculator",
  description:
    "Conheça a missão e história do Food Calorie Calculator.Saiba mais sobre nossa ferramenta de cálculo calórico.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="text-blue-600 hover:underline text-sm mb-2 block">
              ← Voltar ao Início
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
              <Info className="w-8 h-8 mr-3 text-blue-600" />
              Sobre o Food Calorie Calculator
            </h1>
            <p className="text-gray-600">Sua ferramenta confiável para controle calórico</p>
          </div>
        </div>
        {/* <AdSenseAd
          adSlot="1234567890"
          adFormat="horizontal"
          className="h-16 md:h-20 flex items-center justify-center"
        /> */}
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-6 h-6 mr-2 text-green-600" />
                Nossa Missão
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                O Food Calorie Calculator foi criado com a missão de democratizar o acesso a informações nutricionais
                precisas e ferramentas de controle calórico. Acreditamos que todos devem ter acesso a recursos que os
                ajudem a fazer escolhas alimentares mais conscientes e saudáveis.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Nossa plataforma oferece uma maneira simples e intuitiva de registrar alimentos, comparar calorias e
                calcular equivalências nutricionais, tudo de forma gratuita e acessível.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 mr-2 text-blue-600" />
                  Para Quem é Destinado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pessoas que buscam controlar o peso</li>
                  <li>• Atletas e praticantes de exercícios</li>
                  <li>• Profissionais da área de saúde</li>
                  <li>• Estudantes de nutrição</li>
                  <li>• Qualquer pessoa interessada em alimentação saudável</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="w-6 h-6 mr-2 text-red-600" />
                  Nossos Valores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • <strong>Gratuidade:</strong> Acesso livre a informações de saúde
                  </li>
                  <li>
                    • <strong>Precisão:</strong> Dados confiáveis e atualizados
                  </li>
                  <li>
                    • <strong>Simplicidade:</strong> Interface fácil de usar
                  </li>
                  <li>
                    • <strong>Privacidade:</strong> Seus dados permanecem seguros
                  </li>
                  <li>
                    • <strong>Educação:</strong> Promover conhecimento nutricional
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
{/* 
          <AdSenseAd
            adSlot="0987654321"
            adFormat="rectangle"
            className="h-64 flex items-center justify-center rounded-lg"
          /> */}

          <Card>
            <CardHeader>
              <CardTitle>Funcionalidades Principais</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-green-600 mb-2">Registro de Alimentos</h3>
                  <p className="text-gray-700 text-sm">
                    Adicione alimentos com suas informações calóricas e mantenha um banco de dados personalizado dos
                    seus alimentos favoritos.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 mb-2">Comparação de Calorias</h3>
                  <p className="text-gray-700 text-sm">
                    Compare o conteúdo calórico entre diferentes alimentos e quantidades para fazer escolhas mais
                    informadas.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-600 mb-2">Cálculo de Equivalência</h3>
                  <p className="text-gray-700 text-sm">
                    Descubra quanto de um alimento equivale a outro em termos calóricos, facilitando substituições na
                    dieta.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compromisso com a Qualidade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Trabalhamos continuamente para melhorar nossa plataforma e fornecer as informações mais precisas
                possíveis. Nossos dados são baseados em fontes confiáveis de nutrição e são regularmente atualizados.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Além das ferramentas de cálculo, oferecemos conteúdo educacional através do nosso
                <Link href="/blog" className="text-blue-600 hover:underline mx-1">
                  blog
                </Link>
                com artigos sobre nutrição, metabolismo e alimentação saudável.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Importante:</strong> Nossas ferramentas são para fins educacionais e informativos. Sempre
                  consulte um profissional de saúde qualificado para orientações personalizadas sobre dieta e nutrição.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tecnologia e Privacidade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nossa aplicação é desenvolvida com tecnologias modernas e seguras. Todos os seus dados de alimentos são
                armazenados localmente no seu navegador, garantindo total privacidade e controle sobre suas informações.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Utilizamos o Google AdSense para manter o serviço gratuito, mas sempre respeitando sua privacidade
                conforme descrito em nossa
                <Link href="/privacy" className="text-blue-600 hover:underline mx-1">
                  Política de Privacidade
                </Link>
                .
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Entre em Contato</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Valorizamos o feedback dos nossos usuários. Se você tem sugestões, dúvidas ou encontrou algum problema,
                não hesite em entrar em contato conosco.
              </p>
              <Link href="/contact">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Fale Conosco
                </button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
