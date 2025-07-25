import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Head from "next/head"

const articles = [
  {
    slug: "como-calcular-calorias-diarias",
    title: "Como Calcular Suas Calorias Diárias Necessárias",
    description:
      "Aprenda a calcular quantas calorias você precisa consumir por dia para manter, perder ou ganhar peso.",
    date: "2024-01-15",
    readTime: "3 min",
    category: "Nutrição",
  },
  {
    slug: "alimentos-baixas-calorias",
    title: "10 Alimentos com Baixas Calorias para Sua Dieta",
    description:
      "Descubra alimentos nutritivos e saborosos que têm poucas calorias e podem ajudar no controle de peso.",
    date: "2024-01-14",
    readTime: "4 min",
    category: "Alimentação",
  },
  {
    slug: "diferenca-calorias-proteinas-carboidratos",
    title: "Diferença Entre Calorias de Proteínas e Carboidratos",
    description: "Entenda como o corpo processa diferentes macronutrientes e suas implicações calóricas.",
    date: "2024-01-13",
    readTime: "5 min",
    category: "Nutrição",
  },
  {
    slug: "frutas-menos-calorias",
    title: "As 15 Frutas com Menos Calorias",
    description: "Lista completa das frutas com menor densidade calórica para incluir na sua alimentação saudável.",
    date: "2024-01-12",
    readTime: "3 min",
    category: "Alimentação",
  },
  {
    slug: "equivalencia-calorica-exercicios",
    title: "Equivalência Calórica: Alimentos vs Exercícios",
    description: "Descubra quanto exercício é necessário para queimar as calorias dos seus alimentos favoritos.",
    date: "2024-01-11",
    readTime: "4 min",
    category: "Exercícios",
  },
  {
    slug: "metabolismo-basal-como-calcular",
    title: "Metabolismo Basal: Como Calcular e Aumentar",
    description: "Aprenda sobre metabolismo basal, como calculá-lo e estratégias para acelerá-lo naturalmente.",
    date: "2024-01-10",
    readTime: "6 min",
    category: "Metabolismo",
  },
  {
    slug: "calorias-vazias-o-que-evitar",
    title: "Calorias Vazias: O Que São e Como Evitar",
    description: "Entenda o conceito de calorias vazias e aprenda a identificar alimentos que devem ser evitados.",
    date: "2024-01-09",
    readTime: "4 min",
    category: "Nutrição",
  },
  {
    slug: "densidade-calorica-alimentos",
    title: "Densidade Calórica dos Alimentos: Guia Completo",
    description: "Compreenda a densidade calórica e como ela pode ajudar no controle de peso e saciedade.",
    date: "2024-01-08",
    readTime: "5 min",
    category: "Nutrição",
  },
  {
    slug: "calorias-por-idade-necessidades",
    title: "Necessidades Calóricas por Idade e Gênero",
    description: "Tabela completa das necessidades calóricas diárias por faixa etária, gênero e nível de atividade.",
    date: "2024-01-07",
    readTime: "4 min",
    category: "Nutrição",
  },
  {
    slug: "alimentos-substitutos-baixa-caloria",
    title: "Substitutos de Baixa Caloria para Alimentos Comuns",
    description: "Lista de substituições inteligentes para reduzir calorias sem perder sabor nas suas refeições.",
    date: "2024-01-06",
    readTime: "5 min",
    category: "Alimentação",
  },
  {
    slug: "calorias-liquidas-bebidas",
    title: "Calorias Líquidas: O Perigo das Bebidas Calóricas",
    description: "Descubra como as bebidas podem sabotar sua dieta e alternativas de baixa caloria.",
    date: "2024-01-05",
    readTime: "3 min",
    category: "Bebidas",
  },
  {
    slug: "termogenese-alimentos-queima-calorias",
    title: "Termogênese: Alimentos que Ajudam a Queimar Calorias",
    description: "Conheça alimentos termogênicos que aceleram o metabolismo e ajudam na queima de calorias.",
    date: "2024-01-04",
    readTime: "4 min",
    category: "Metabolismo",
  },
  {
    slug: "porcoes-ideais-controle-calorias",
    title: "Porções Ideais para Controle de Calorias",
    description: "Aprenda a determinar porções adequadas para manter o controle calórico sem passar fome.",
    date: "2024-01-03",
    readTime: "4 min",
    category: "Alimentação",
  },
  {
    slug: "calorias-proteinas-vegetais-animais",
    title: "Calorias em Proteínas Vegetais vs Animais",
    description: "Comparação calórica e nutricional entre fontes de proteína vegetal e animal.",
    date: "2024-01-02",
    readTime: "5 min",
    category: "Proteínas",
  },
  {
    slug: "jejum-intermitente-calorias",
    title: "Jejum Intermitente e Controle de Calorias",
    description: "Como o jejum intermitente pode ajudar no controle calórico e perda de peso.",
    date: "2024-01-01",
    readTime: "6 min",
    category: "Dietas",
  },
  {
    slug: "calorias-carboidratos-simples-complexos",
    title: "Calorias em Carboidratos Simples vs Complexos",
    description: "Diferenças calóricas e metabólicas entre carboidratos simples e complexos.",
    date: "2023-12-31",
    readTime: "4 min",
    category: "Carboidratos",
  },
  {
    slug: "alimentos-alta-saciedade-baixa-caloria",
    title: "Alimentos de Alta Saciedade e Baixa Caloria",
    description: "Lista de alimentos que proporcionam saciedade com poucas calorias para controle de peso.",
    date: "2023-12-30",
    readTime: "4 min",
    category: "Alimentação",
  },
  {
    slug: "calorias-gorduras-boas-ruins",
    title: "Calorias em Gorduras: Boas vs Ruins",
    description: "Entenda as diferenças entre tipos de gordura e seu impacto calórico na saúde.",
    date: "2023-12-29",
    readTime: "5 min",
    category: "Gorduras",
  },
  {
    slug: "hidratacao-metabolismo-calorias",
    title: "Hidratação e Seu Impacto no Metabolismo",
    description: "Como a hidratação adequada pode influenciar o metabolismo e a queima de calorias.",
    date: "2023-12-28",
    readTime: "3 min",
    category: "Hidratação",
  },
  {
    slug: "calorias-alimentos-organicos-convencionais",
    title: "Diferença Calórica: Orgânicos vs Convencionais",
    description: "Comparação calórica entre alimentos orgânicos e convencionais.",
    date: "2023-12-27",
    readTime: "4 min",
    category: "Alimentação",
  },
  {
    slug: "sono-metabolismo-calorias",
    title: "Sono e Seu Impacto no Metabolismo de Calorias",
    description: "Como a qualidade do sono afeta o metabolismo e o controle de peso.",
    date: "2023-12-26",
    readTime: "5 min",
    category: "Metabolismo",
  },
  {
    slug: "calorias-temperos-especiarias",
    title: "Calorias em Temperos e Especiarias",
    description: "Guia calórico de temperos e especiarias para temperar sem adicionar muitas calorias.",
    date: "2023-12-25",
    readTime: "3 min",
    category: "Temperos",
  },
  {
    slug: "metodos-cocao-impacto-calorias",
    title: "Métodos de Cocção e Impacto nas Calorias",
    description: "Como diferentes métodos de preparo afetam o conteúdo calórico dos alimentos.",
    date: "2023-12-24",
    readTime: "4 min",
    category: "Culinária",
  },
  {
    slug: "calorias-lanches-saudaveis",
    title: "Lanches Saudáveis com Poucas Calorias",
    description: "Opções de lanches nutritivos e de baixa caloria para manter a energia durante o dia.",
    date: "2023-12-23",
    readTime: "4 min",
    category: "Lanches",
  },
  {
    slug: "calorias-por-estacao-alimentos-sazonais",
    title: "Calorias por Estação: Alimentos Sazonais",
    description: "Guia de alimentos sazonais e suas características calóricas ao longo do ano.",
    date: "2023-12-22",
    readTime: "5 min",
    category: "Sazonal",
  },
  {
    slug: "deficit-calorico-perda-peso",
    title: "Déficit Calórico: Chave para Perda de Peso",
    description: "Como criar e manter um déficit calórico saudável para perda de peso sustentável.",
    date: "2023-12-21",
    readTime: "5 min",
    category: "Perda de Peso",
  },
//   {
//     slug: "calorias-superalimentos",
//     title: "Calorias em Superalimentos: Vale a Pena?",
//     description: "Análise calórica e nutricional dos principais superalimentos e seus benefícios.",
//     date: "2023-12-20",
//     readTime: "4 min",
//     category: "Superalimentos",
//   },
//   {
//     slug: "calorias-refeicoes-pre-pos-treino",
//     title: "Calorias em Refeições Pré e Pós-Treino",
//     description: "Guia calórico para otimizar a alimentação antes e depois dos exercícios.",
//     date: "2023-12-19",
//     readTime: "5 min",
//     category: "Exercícios",
//   },
//   {
//     slug: "calorias-alimentos-processados",
//     title: "Calorias em Alimentos Processados vs Naturais",
//     description: "Comparação calórica entre alimentos processados e naturais e seus impactos na saúde.",
//     date: "2023-12-18",
//     readTime: "4 min",
//     category: "Processados",
//   },
//   {
//     slug: "calorias-vegetarianos-veganos",
//     title: "Controle de Calorias em Dietas Vegetarianas",
//     description: "Estratégias para controle calórico em dietas vegetarianas e veganas.",
//     date: "2023-12-17",
//     readTime: "5 min",
//     category: "Vegetarianismo",
//   },
//   {
//     slug: "calorias-gravidez-amamentacao",
//     title: "Necessidades Calóricas na Gravidez e Amamentação",
//     description: "Guia de necessidades calóricas especiais durante gravidez e período de amamentação.",
//     date: "2023-12-16",
//     readTime: "5 min",
//     category: "Maternidade",
//   },
//   {
//     slug: "calorias-terceira-idade",
//     title: "Necessidades Calóricas na Terceira Idade",
//     description: "Como as necessidades calóricas mudam com o envelhecimento e como se adaptar.",
//     date: "2023-12-15",
//     readTime: "4 min",
//     category: "Terceira Idade",
//   },
//   {
//     slug: "calorias-atletas-esportistas",
//     title: "Necessidades Calóricas para Atletas",
//     description: "Cálculo de necessidades calóricas específicas para atletas e praticantes de esportes.",
//     date: "2023-12-14",
//     readTime: "6 min",
//     category: "Esportes",
//   },
//   {
//     slug: "calorias-stress-emocional",
//     title: "Stress Emocional e Seu Impacto nas Calorias",
//     description: "Como o stress afeta o metabolismo e a relação com a comida e calorias.",
//     date: "2023-12-13",
//     readTime: "4 min",
//     category: "Psicologia",
//   },
//   {
//     slug: "calorias-suplementos-alimentares",
//     title: "Calorias em Suplementos Alimentares",
//     description: "Guia calórico dos principais suplementos alimentares e quando utilizá-los.",
//     date: "2023-12-12",
//     readTime: "4 min",
//     category: "Suplementos",
//   },
//   {
//     slug: "calorias-fast-food-alternativas",
//     title: "Calorias em Fast Food e Alternativas Saudáveis",
//     description: "Comparação calórica de fast foods populares e opções mais saudáveis.",
//     date: "2023-12-11",
//     readTime: "5 min",
//     category: "Fast Food",
//   },
//   {
//     slug: "calorias-cafe-da-manha-ideal",
//     title: "Café da Manhã Ideal: Calorias e Nutrientes",
//     description: "Como montar um café da manhã equilibrado em calorias e nutrientes.",
//     date: "2023-12-10",
//     readTime: "4 min",
//     category: "Café da Manhã",
//   },
//   {
//     slug: "calorias-jantar-leve-nutritivo",
//     title: "Jantar Leve e Nutritivo: Controle de Calorias",
//     description: "Dicas para um jantar que não comprometa o controle calórico e a qualidade do sono.",
//     date: "2023-12-09",
//     readTime: "4 min",
//     category: "Jantar",
//   },
//   {
//     slug: "calorias-almoco-equilibrado",
//     title: "Almoço Equilibrado: Calorias e Saciedade",
//     description: "Como montar um almoço que forneça energia sem excesso de calorias.",
//     date: "2023-12-08",
//     readTime: "4 min",
//     category: "Almoço",
//   },
//   {
//     slug: "calorias-doces-sobremesas-saudaveis",
//     title: "Doces e Sobremesas com Menos Calorias",
//     description: "Receitas e alternativas de sobremesas deliciosas com redução calórica.",
//     date: "2023-12-07",
//     readTime: "5 min",
//     category: "Sobremesas",
//   },
//   {
//     slug: "calorias-alcool-impacto-dieta",
//     title: "Álcool e Calorias: Impacto na Dieta",
//     description: "Como o consumo de álcool afeta o controle calórico e estratégias para moderação.",
//     date: "2023-12-06",
//     readTime: "4 min",
//     category: "Álcool",
//   },
//   {
//     slug: "calorias-fibras-digestao",
//     title: "Fibras e Calorias: Impacto na Digestão",
//     description: "Como as fibras afetam a absorção de calorias e a saúde digestiva.",
//     date: "2023-12-05",
//     readTime: "4 min",
//     category: "Fibras",
//   },
//   {
//     slug: "calorias-inverno-verao",
//     title: "Necessidades Calóricas: Inverno vs Verão",
//     description: "Como as estações do ano influenciam nossas necessidades calóricas.",
//     date: "2023-12-04",
//     readTime: "3 min",
//     category: "Sazonal",
//   },
//   {
//     slug: "calorias-criancas-adolescentes",
//     title: "Necessidades Calóricas de Crianças e Adolescentes",
//     description: "Guia de necessidades calóricas específicas para diferentes fases do crescimento.",
//     date: "2023-12-03",
//     readTime: "5 min",
//     category: "Pediatria",
//   },
//   {
//     slug: "calorias-atividade-fisica-tipos",
//     title: "Queima de Calorias por Tipo de Atividade Física",
//     description: "Tabela de queima calórica para diferentes tipos de exercícios e atividades.",
//     date: "2023-12-02",
//     readTime: "5 min",
//     category: "Exercícios",
//   },
//   {
//     slug: "calorias-mitos-verdades",
//     title: "Mitos e Verdades Sobre Calorias",
//     description: "Desmistificando conceitos errados sobre calorias e metabolismo.",
//     date: "2023-12-01",
//     readTime: "5 min",
//     category: "Mitos",
//   },
//   {
//     slug: "calorias-dietas-populares",
//     title: "Análise Calórica das Dietas Mais Populares",
//     description: "Comparação calórica e eficácia das dietas mais seguidas atualmente.",
//     date: "2023-11-30",
//     readTime: "6 min",
//     category: "Dietas",
//   },
//   {
//     slug: "calorias-rotulagem-alimentos",
//     title: "Como Ler Rótulos: Informações Calóricas",
//     description: "Guia para interpretar corretamente as informações calóricas nos rótulos dos alimentos.",
//     date: "2023-11-29",
//     readTime: "4 min",
//     category: "Rotulagem",
//   },
//   {
//     slug: "calorias-restaurantes-como-escolher",
//     title: "Como Escolher Opções com Menos Calorias em Restaurantes",
//     description: "Estratégias para manter o controle calórico ao comer fora de casa.",
//     date: "2023-11-28",
//     readTime: "4 min",
//     category: "Restaurantes",
//   },
//   {
//     slug: "",
//     title: "O Futuro das Calorias na Alimentação",
//     description: "Tendências e inovações no controle calórico e alimentação personalizada.",
//     date: "2023-11-27",
//     readTime: "5 min",
//     category: "Futuro",
//   },
]

export default function BlogPage() {
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
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2627213694460628"
     crossOrigin="anonymous"></script>
    </Head>
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="text-blue-600 hover:underline text-sm mb-2 block">
              ← Voltar ao Calculador
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog de Nutrição e Calorias</h1>
            <p className="text-gray-600">Artigos especializados sobre calorias, nutrição e alimentação saudável</p>
          </div>
        </div>
        {/* <AdSenseAd
          adSlot="1234567890"
          adFormat="horizontal"
          className="h-16 md:h-20 flex items-center justify-center"
        /> */}

      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid gap-6">
          {articles.map((article, index) => (
            <Card key={article.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{article.category}</span>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString("pt-BR")}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-xl hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">{article.description}</CardDescription>
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Ler artigo completo
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}

          {/* <AdSenseAd
            adSlot="0987654321"
            adFormat="rectangle"
            className="h-64 flex items-center justify-center rounded-lg my-8"
          /> */}

        </div>
      </main>
    </div>
    </>
  )
}
