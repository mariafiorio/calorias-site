import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import Head from "next/head"
import { MBCalculator } from "@/components/mb-calculadora"

const articles: Record<
  string,
  {
    title: string
    content: string
    date: string
    readTime: string
    category: string
    description: string
  }
> = {
  "como-calcular-calorias-diarias": {
    title: "Como Calcular Suas Calorias Diárias Necessárias",
    description:
      "Aprenda a calcular quantas calorias você precisa consumir por dia para manter, perder ou ganhar peso.",
    date: "2024-01-15",
    readTime: "3 min",
    category: "Nutrição",
    content: `
      <p>Calcular suas necessidades calóricas diárias é fundamental para manter um peso saudável e atingir seus objetivos de saúde. O cálculo envolve diversos fatores como idade, sexo, peso, altura e nível de atividade física.</p>
      <h2>Metabolismo Basal (TMB)</h2>
      <p>O primeiro passo é calcular seu metabolismo basal usando a fórmula de Harris-Benedict:</p>
      <ul>
        <li><strong>Homens:</strong> TMB = 88,362 + (13,397 × peso em kg) + (4,799 × altura em cm) - (5,677 × idade)</li>
        <li><strong>Mulheres:</strong> TMB = 447,593 + (9,247 × peso em kg) + (3,098 × altura em cm) - (4,330 × idade)</li>
      </ul>

      <h2>Fator de Atividade</h2>
      <p>Multiplique seu TMB pelo fator correspondente ao seu nível de atividade:</p>
      <ul>
        <li>Sedentário (pouco ou nenhum exercício): TMB × 1,2</li>
        <li>Levemente ativo (exercício leve 1-3 dias/semana): TMB × 1,375</li>
        <li>Moderadamente ativo (exercício moderado 3-5 dias/semana): TMB × 1,55</li>
        <li>Muito ativo (exercício intenso 6-7 dias/semana): TMB × 1,725</li>
        <li>Extremamente ativo (exercício muito intenso, trabalho físico): TMB × 1,9</li>
      </ul>

      <h2>Ajustes para Objetivos</h2>
      <p>Para <strong>perder peso:</strong> reduza 300-500 calorias do total calculado. Para <strong>ganhar peso:</strong> adicione 300-500 calorias. Para <strong>manter o peso:</strong> mantenha o valor calculado.</p>

      <p>Lembre-se: estes são valores estimados. Monitore seu progresso e ajuste conforme necessário. Consulte sempre um nutricionista para orientação personalizada.</p>
    `,
  },
  "alimentos-baixas-calorias": {
    title: "10 Alimentos com Baixas Calorias para Sua Dieta",
    description:
      "Descubra alimentos nutritivos e saborosos que têm poucas calorias e podem ajudar no controle de peso.",
    date: "2024-01-14",
    readTime: "4 min",
    category: "Alimentação",
    content: `
      <p>Incluir alimentos de baixa caloria na sua dieta é uma estratégia eficaz para controlar o peso sem abrir mão do sabor e da nutrição. Estes alimentos geralmente são ricos em água, fibras e nutrientes essenciais.</p>

      <h2>Lista dos 10 Melhores Alimentos de Baixa Caloria</h2>

      <h3>1. Pepino (16 kcal/100g)</h3>
      <p>Rico em água (96%) e com propriedades hidratantes. Excelente para saladas e lanches refrescantes.</p>

      <h3>2. Alface (14 kcal/100g)</h3>
      <p>Base perfeita para saladas, rica em folato e vitamina K. Proporciona volume às refeições com poucas calorias.</p>

      <h3>3. Aipo (16 kcal/100g)</h3>
      <p>Crocante e saboroso, rico em potássio e vitamina C. Ótimo para lanches com baixo teor calórico.</p>

      <h3>4. Tomate (18 kcal/100g)</h3>
      <p>Rico em licopeno, um poderoso antioxidante. Versátil para diversas preparações culinárias.</p>

      <h3>5. Espinafre (23 kcal/100g)</h3>
      <p>Fonte de ferro, ácido fólico e vitaminas A e C. Pode ser consumido cru ou cozido.</p>

      <h3>6. Brócolis (34 kcal/100g)</h3>
      <p>Rico em vitamina C, fibras e compostos antioxidantes. Excelente fonte de nutrientes com poucas calorias.</p>

      <h3>7. Couve-flor (25 kcal/100g)</h3>
      <p>Versátil, pode substituir arroz ou batata em diversas receitas. Rica em vitamina C e fibras.</p>

      <h3>8. Abobrinha (17 kcal/100g)</h3>
      <p>Suave e versátil, pode ser usada em massas, sopas e refogados. Rica em potássio e vitamina A.</p>

      <h3>9. Rabanete (16 kcal/100g)</h3>
      <p>Sabor picante e refrescante, rico em vitamina C. Adiciona sabor às saladas sem calorias extras.</p>

      <h3>10. Cogumelos (22 kcal/100g)</h3>
      <p>Ricos em proteínas vegetais e vitaminas do complexo B. Proporcionam sabor umami às preparações.</p>

      <h2>Dicas de Consumo</h2>
      <p>Combine estes alimentos em saladas coloridas, sopas nutritivas ou como acompanhamentos. Eles ajudam a aumentar o volume das refeições, proporcionando saciedade com poucas calorias.</p>
    `,
  },
  "diferenca-calorias-proteinas-carboidratos": {
    title: "Diferença Entre Calorias de Proteínas e Carboidratos",
    description: "Entenda como o corpo processa diferentes macronutrientes e suas implicações calóricas.",
    date: "2024-01-13",
    readTime: "5 min",
    category: "Nutrição",
    content: `
      <p>Embora proteínas e carboidratos forneçam 4 kcal por grama, o corpo os processa de maneira muito diferente, impactando o metabolismo, saciedade e composição corporal.</p>

      <h2>Efeito Térmico dos Alimentos</h2>
      <p>O <strong>efeito térmico</strong> representa a energia gasta para digerir, absorver e metabolizar os nutrientes:</p>
      <ul>
        <li><strong>Proteínas:</strong> 20-30% das calorias são gastas no processo digestivo</li>
        <li><strong>Carboidratos:</strong> 5-10% das calorias são gastas na digestão</li>
        <li><strong>Gorduras:</strong> 0-5% das calorias são gastas na digestão</li>
      </ul>

      <h2>Impacto na Saciedade</h2>
      <p>As proteínas promovem maior saciedade devido a:</p>
      <ul>
        <li>Liberação de hormônios da saciedade (GLP-1, CCK)</li>
        <li>Maior tempo de digestão</li>
        <li>Estabilização dos níveis de açúcar no sangue</li>
      </ul>

      <p>Os carboidratos complexos também promovem saciedade, mas os simples podem causar picos de insulina seguidos de fome.</p>

      <h2>Metabolismo e Armazenamento</h2>
      <p><strong>Proteínas:</strong> Raramente são convertidas em gordura. São usadas para:</p>
      <ul>
        <li>Construção e reparo muscular</li>
        <li>Produção de enzimas e hormônios</li>
        <li>Energia quando necessário</li>
      </ul>

      <p><strong>Carboidratos:</strong> São a fonte preferida de energia do corpo:</p>
      <ul>
        <li>Armazenados como glicogênio nos músculos e fígado</li>
        <li>Excesso pode ser convertido em gordura</li>
        <li>Fornecem energia rápida para o cérebro e músculos</li>
      </ul>

      <h2>Recomendações Práticas</h2>
      <p>Para otimizar o controle calórico:</p>
      <ul>
        <li>Inclua proteína em todas as refeições (0,8-1,2g por kg de peso corporal)</li>
        <li>Prefira carboidratos complexos (aveia, quinoa, batata-doce)</li>
        <li>Combine proteínas com carboidratos para melhor saciedade</li>
        <li>Distribua os macronutrientes ao longo do dia</li>
      </ul>

      <p>Entender essas diferenças ajuda a fazer escolhas alimentares mais inteligentes para seus objetivos de saúde e peso.</p>
    `,
  },
  "frutas-menos-calorias": {
    title: "As 15 Frutas com Menos Calorias",
    description: "Lista completa das frutas com menor densidade calórica para incluir na sua alimentação saudável.",
    date: "2024-01-12",
    readTime: "3 min",
    category: "Alimentação",
    content: `
      <p>As frutas são essenciais para uma alimentação equilibrada, fornecendo vitaminas, minerais, fibras e antioxidantes. Algumas frutas são especialmente baixas em calorias, sendo ideais para quem busca controlar o peso.</p>

      <h2>Ranking das 15 Frutas com Menos Calorias (por 100g)</h2>

      <ol>
        <li><strong>Melancia (30 kcal)</strong> - Rica em água e licopeno, hidratante e refrescante</li>
        <li><strong>Melão (34 kcal)</strong> - Fonte de vitamina A e potássio, ideal para hidratação</li>
        <li><strong>Morango (32 kcal)</strong> - Rico em vitamina C e antioxidantes</li>
        <li><strong>Limão (29 kcal)</strong> - Excelente fonte de vitamina C, ótimo para temperos</li>
        <li><strong>Mamão papaya (43 kcal)</strong> - Rico em enzimas digestivas e vitamina A</li>
        <li><strong>Pêssego (39 kcal)</strong> - Fonte de vitamina C e fibras</li>
        <li><strong>Maracujá (97 kcal)</strong> - Rico em fibras e com propriedades calmantes</li>
        <li><strong>Goiaba (68 kcal)</strong> - Excelente fonte de vitamina C e fibras</li>
        <li><strong>Kiwi (61 kcal)</strong> - Rico em vitamina C, K e fibras</li>
        <li><strong>Laranja (47 kcal)</strong> - Clássica fonte de vitamina C e fibras</li>
        <li><strong>Tangerina (53 kcal)</strong> - Rica em vitamina C e fácil de consumir</li>
        <li><strong>Maçã (52 kcal)</strong> - Rica em fibras e antioxidantes</li>
        <li><strong>Pera (57 kcal)</strong> - Boa fonte de fibras e potássio</li>
        <li><strong>Ameixa (46 kcal)</strong> - Rica em antioxidantes e fibras</li>
        <li><strong>Carambola (31 kcal)</strong> - Baixa caloria e rica em vitamina C</li>
      </ol>

      <h2>Benefícios das Frutas de Baixa Caloria</h2>
      <ul>
        <li><strong>Alto teor de água:</strong> Ajudam na hidratação e saciedade</li>
        <li><strong>Ricas em fibras:</strong> Promovem saciedade e saúde digestiva</li>
        <li><strong>Antioxidantes:</strong> Combatem os radicais livres</li>
        <li><strong>Vitaminas e minerais:</strong> Essenciais para o funcionamento do organismo</li>
      </ul>

      <h2>Dicas de Consumo</h2>
      <p>Para maximizar os benefícios:</p>
      <ul>
        <li>Consuma as frutas inteiras em vez de sucos</li>
        <li>Varie as cores para obter diferentes nutrientes</li>
        <li>Use como lanches entre as refeições</li>
        <li>Combine com proteínas para maior saciedade</li>
        <li>Prefira frutas da estação para melhor sabor e preço</li>
      </ul>

      <p>Incluir essas frutas na sua dieta diária é uma forma deliciosa e nutritiva de controlar as calorias sem abrir mão do sabor e dos nutrientes essenciais.</p>
    `,
  },
  "equivalencia-calorica-exercicios": {
    title: "Equivalência Calórica: Alimentos vs Exercícios",
    description: "Descubra quanto exercício é necessário para queimar as calorias dos seus alimentos favoritos.",
    date: "2024-01-11",
    readTime: "4 min",
    category: "Exercícios",
    content: `
      <p>Entender a equivalência entre calorias consumidas e exercícios necessários para queimá-las pode ser uma ferramenta poderosa para o controle de peso. Esta perspectiva ajuda a tomar decisões mais conscientes sobre alimentação e atividade física.</p>

      <h2>Equivalências Comuns (para pessoa de 70kg)</h2>

      <h3>Lanches e Exercícios</h3>
      <ul>
        <li><strong>1 fatia de pizza (285 kcal)</strong> = 35 minutos de caminhada rápida</li>
        <li><strong>1 chocolate ao leite 30g (150 kcal)</strong> = 18 minutos de corrida leve</li>
        <li><strong>1 refrigerante 350ml (140 kcal)</strong> = 25 minutos de ciclismo</li>
        <li><strong>1 hambúrguer simples (250 kcal)</strong> = 30 minutos de natação</li>
        <li><strong>1 sorvete pequeno (200 kcal)</strong> = 40 minutos de caminhada</li>
      </ul>

      <h3>Refeições e Atividades</h3>
      <ul>
        <li><strong>Prato de feijoada (800 kcal)</strong> = 1h20min de corrida moderada</li>
        <li><strong>Sanduíche completo (450 kcal)</strong> = 1 hora de dança</li>
        <li><strong>Porção de batata frita (365 kcal)</strong> = 45 minutos de musculação</li>
        <li><strong>Açaí com granola (400 kcal)</strong> = 50 minutos de tênis</li>
      </ul>

      <h2>Queima Calórica por Atividade (por hora - 70kg)</h2>
      <ul>
        <li><strong>Caminhada leve:</strong> 240 kcal/h</li>
        <li><strong>Caminhada rápida:</strong> 320 kcal/h</li>
        <li><strong>Corrida leve:</strong> 480 kcal/h</li>
        <li><strong>Corrida intensa:</strong> 720 kcal/h</li>
        <li><strong>Ciclismo moderado:</strong> 400 kcal/h</li>
        <li><strong>Natação:</strong> 500 kcal/h</li>
        <li><strong>Musculação:</strong> 360 kcal/h</li>
        <li><strong>Dança:</strong> 300 kcal/h</li>
        <li><strong>Futebol:</strong> 600 kcal/h</li>
        <li><strong>Tênis:</strong> 480 kcal/h</li>
      </ul>

      <h2>Fatores que Influenciam a Queima</h2>
      <p>A queima calórica varia conforme:</p>
      <ul>
        <li><strong>Peso corporal:</strong> Pessoas mais pesadas queimam mais calorias</li>
        <li><strong>Intensidade:</strong> Maior intensidade = maior queima</li>
        <li><strong>Duração:</strong> Exercícios mais longos queimam mais</li>
        <li><strong>Composição corporal:</strong> Mais músculos = maior metabolismo</li>
        <li><strong>Idade e sexo:</strong> Homens jovens geralmente queimam mais</li>
      </ul>

      <h2>Estratégias Práticas</h2>
      <ul>
        <li>Use essas equivalências para motivação, não como regra rígida</li>
        <li>Foque na qualidade dos alimentos, não apenas nas calorias</li>
        <li>Combine exercícios aeróbicos com musculação</li>
        <li>Lembre-se: é mais fácil não consumir calorias do que queimá-las</li>
        <li>Mantenha um estilo de vida ativo além dos exercícios formais</li>
      </ul>

      <p>O objetivo não é criar uma relação punitiva com a comida, mas sim desenvolver consciência sobre o equilíbrio entre consumo e gasto energético para uma vida mais saudável.</p>
    `,
  },
  "metabolismo-basal-como-calcular":{
    title: "Metabolismo Basal: Como Calcular e Aumentar",
    description: "Aprenda sobre metabolismo basal, como calculá-lo e estratégias para acelerá-lo naturalmente.",
    date: "2024-01-10",
    readTime: "6 min",
    category: "Metabolismo",
    content: `

    <MBCalculator />

      <p>O metabolismo basal representa a quantidade mínima de energia que seu corpo precisa para manter funções vitais, como respiração, circulação e regulação da temperatura, mesmo em repouso absoluto.</p>
  
      <h2>O Que é Metabolismo Basal?</h2>
      <p>O metabolismo basal (MB) corresponde às calorias gastas pelo corpo para manter suas funções vitais quando está em repouso completo. Ele é responsável por cerca de 60% a 75% do gasto calórico diário.</p>
  
      <h2>Como Calcular o Metabolismo Basal?</h2>
      <p>Existem fórmulas científicas que ajudam a estimar o MB. As mais comuns são:</p>
  
      <h3>1. Fórmula de Harris-Benedict</h3>
      <ul>
        <li><strong>Homens:</strong> 66 + (13,7 × peso em kg) + (5 × altura em cm) – (6,8 × idade)</li>
        <li><strong>Mulheres:</strong> 655 + (9,6 × peso em kg) + (1,8 × altura em cm) – (4,7 × idade)</li>
      </ul>
  
      <h3>2. Fórmula de Mifflin-St Jeor (mais precisa)</h3>
      <ul>
        <li><strong>Homens:</strong> (10 × peso em kg) + (6,25 × altura em cm) – (5 × idade) + 5</li>
        <li><strong>Mulheres:</strong> (10 × peso em kg) + (6,25 × altura em cm) – (5 × idade) – 161</li>
      </ul>
  
      <p>Após o cálculo do MB, multiplica-se o valor pelo <strong>fator de atividade física</strong> para estimar o gasto calórico diário total.</p>
  
      <h2>Fatores que Influenciam o Metabolismo Basal</h2>
      <ul>
        <li><strong>Idade:</strong> o metabolismo tende a desacelerar com o envelhecimento</li>
        <li><strong>Sexo:</strong> homens geralmente têm MB mais alto que mulheres</li>
        <li><strong>Composição corporal:</strong> mais músculos = metabolismo mais rápido</li>
        <li><strong>Genética:</strong> algumas pessoas naturalmente têm MB mais elevado</li>
        <li><strong>Hormônios:</strong> disfunções hormonais podem afetar o MB</li>
      </ul>
  
      <h2>Como Aumentar o Metabolismo Basal</h2>
      <ul>
        <li><strong>Pratique exercícios de força:</strong> aumentam a massa muscular, que consome mais energia</li>
        <li><strong>Durma bem:</strong> a falta de sono reduz o MB e desequilibra hormônios</li>
        <li><strong>Consuma proteínas:</strong> possuem maior efeito térmico e ajudam na saciedade</li>
        <li><strong>Beba água fria:</strong> o corpo gasta energia para aquecê-la</li>
        <li><strong>Não pule refeições:</strong> jejuns prolongados podem reduzir o MB</li>
        <li><strong>Inclua alimentos termogênicos:</strong> como gengibre, pimenta e chá verde</li>
      </ul>
  
      <p>Entender o metabolismo basal é essencial para planejar uma alimentação equilibrada e alcançar objetivos como perda de peso, manutenção ou ganho de massa. Com estratégias adequadas, é possível estimular o organismo a gastar mais energia de forma natural e saudável.</p>
    `,
    },  
    "calorias-vazias-o-que-evitar":{
        title: "Calorias Vazias: O Que São e Como Evitar",
        description: "Entenda o conceito de calorias vazias e aprenda a identificar alimentos que devem ser evitados.",
        date: "2024-01-09",
        readTime: "4 min",
        category: "Nutrição",
        content: `
          <p>As calorias vazias são aquelas que fornecem energia, mas quase nenhum valor nutricional. Elas são comuns em alimentos ultraprocessados e podem dificultar o controle de peso e comprometer a saúde.</p>
      
          <h2>O Que São Calorias Vazias?</h2>
          <p>Calorias vazias vêm de alimentos ricos em açúcares adicionados e gorduras saturadas, mas com pouco ou nenhum valor nutritivo. São exemplos típicos:</p>
          <ul>
            <li>Refrigerantes e bebidas açucaradas</li>
            <li>Doces, balas e chocolates ao leite</li>
            <li>Fast foods fritos</li>
            <li>Bolos industrializados e salgadinhos</li>
          </ul>
      
          <h2>Impactos das Calorias Vazias</h2>
          <ul>
            <li><strong>Ganho de peso:</strong> Alta densidade calórica e baixa saciedade</li>
            <li><strong>Deficiências nutricionais:</strong> Poucos nutrientes essenciais</li>
            <li><strong>Problemas metabólicos:</strong> Aumento do risco de diabetes e colesterol alto</li>
          </ul>
      
          <h2>Como Evitar Calorias Vazias</h2>
          <ul>
            <li>Leia os rótulos dos alimentos</li>
            <li>Evite alimentos com ingredientes como xarope de milho, açúcar invertido e gordura vegetal hidrogenada</li>
            <li>Prefira alimentos in natura e minimamente processados</li>
            <li>Substitua refrigerantes por água, chá ou sucos naturais sem açúcar</li>
          </ul>
      
          <p>Reduzir o consumo de calorias vazias é essencial para uma alimentação mais nutritiva e equilibrada.</p>
        `,
      },
      "densidade-calorica-alimentos":{
        title: "Densidade Calórica dos Alimentos: Guia Completo",
        description: "Compreenda a densidade calórica e como ela pode ajudar no controle de peso e saciedade.",
        date: "2024-01-08",
        readTime: "5 min",
        category: "Nutrição",
        content: `
          <p>A densidade calórica é uma medida que relaciona a quantidade de calorias com o volume ou peso de um alimento. Entender esse conceito é fundamental para quem busca controlar o peso com mais inteligência nutricional.</p>
      
          <h2>O Que é Densidade Calórica?</h2>
          <p>Ela indica quantas calorias existem em 100 gramas de um alimento. Alimentos com <strong>alta densidade calórica</strong> têm muitas calorias em pouco volume, enquanto os de <strong>baixa densidade</strong> são menos calóricos e mais volumosos.</p>
      
          <h2>Exemplos</h2>
          <ul>
            <li><strong>Alta densidade:</strong> Queijos amarelos, frituras, doces, nozes</li>
            <li><strong>Baixa densidade:</strong> Frutas, legumes, sopas, verduras, água</li>
          </ul>
      
          <h2>Como Utilizar a Densidade Calórica a Seu Favor</h2>
          <ul>
            <li>Escolha alimentos que saciem mais com menos calorias</li>
            <li>Combine proteínas magras com vegetais volumosos</li>
            <li>Evite alimentos calóricos em excesso, especialmente os processados</li>
          </ul>
      
          <h2>Vantagens dos Alimentos de Baixa Densidade Calórica</h2>
          <ul>
            <li>Promovem saciedade com menos calorias</li>
            <li>Ajudam no controle de peso</li>
            <li>Ricos em fibras, vitaminas e minerais</li>
          </ul>
      
          <p>Entender a densidade calórica permite montar refeições mais saudáveis, satisfatórias e com controle inteligente de calorias.</p>
        `,
      },
      "calorias-por-idade-necessidades":{
        title: "Necessidades Calóricas por Idade e Gênero",
        description: "Tabela completa das necessidades calóricas diárias por faixa etária, gênero e nível de atividade.",
        date: "2024-01-07",
        readTime: "4 min",
        category: "Nutrição",
        content: `
          <p>A quantidade de calorias que uma pessoa precisa diariamente varia de acordo com diversos fatores, como idade, sexo, composição corporal e nível de atividade física.</p>
      
          <h2>Por que as Necessidades Calóricas Variam?</h2>
          <ul>
            <li><strong>Idade:</strong> Metabolismo mais acelerado na infância e adolescência, e tende a diminuir com o envelhecimento</li>
            <li><strong>Sexo:</strong> Homens geralmente têm maior massa muscular e, portanto, maior necessidade calórica</li>
            <li><strong>Atividade física:</strong> Quanto mais ativo, maior o gasto calórico</li>
          </ul>
      
          <h2>Tabela de Necessidades Calóricas Diárias (Estimativas)</h2>
          <p><strong>Adultos (18-60 anos)</strong></p>
          <ul>
            <li>Homens sedentários: 2.200 kcal</li>
            <li>Homens ativos: 2.800 kcal</li>
            <li>Mulheres sedentárias: 1.800 kcal</li>
            <li>Mulheres ativas: 2.400 kcal</li>
          </ul>
      
          <p><strong>Idosos (60+ anos)</strong></p>
          <ul>
            <li>Homens: 2.000–2.400 kcal</li>
            <li>Mulheres: 1.600–2.000 kcal</li>
          </ul>
      
          <h2>Como Ajustar Suas Calorias</h2>
          <ul>
            <li>Use uma calculadora de TMB + Nível de Atividade</li>
            <li>Considere objetivos: manter peso, emagrecer ou ganhar massa</li>
            <li>Procure orientação de nutricionista para personalização</li>
          </ul>
      
          <p>Adaptar a ingestão calórica às suas características individuais é essencial para manter a saúde e o equilíbrio corporal.</p>
        `,
      },
        "alimentos-substitutos-baixa-caloria":{
        title: "Substitutos de Baixa Caloria para Alimentos Comuns",
        description: "Lista de substituições inteligentes para reduzir calorias sem perder sabor nas suas refeições.",
        date: "2024-01-06",
        readTime: "5 min",
        category: "Alimentação",
        content: `
          <p>Reduzir calorias sem abrir mão do sabor é possível com substituições alimentares inteligentes. Pequenas trocas no dia a dia fazem grande diferença ao longo do tempo.</p>
      
          <h2>Substituições Inteligentes no Dia a Dia</h2>
          <ul>
            <li><strong>Leite integral → Leite desnatado ou vegetal sem açúcar</strong></li>
            <li><strong>Arroz branco → Arroz integral ou couve-flor triturada</strong></li>
            <li><strong>Batata frita → Batata-doce assada ou chips de legumes</strong></li>
            <li><strong>Açúcar → Stevia ou eritritol</strong></li>
            <li><strong>Maionese → Iogurte natural desnatado ou homus</strong></li>
            <li><strong>Pão francês → Pão integral ou wrap de alface</strong></li>
          </ul>
      
          <h2>Vantagens das Substituições</h2>
          <ul>
            <li>Redução significativa de calorias</li>
            <li>Aumento do teor de fibras e nutrientes</li>
            <li>Melhor controle glicêmico</li>
            <li>Mais saciedade com menos volume calórico</li>
          </ul>
      
          <h2>Dicas para Aplicar na Rotina</h2>
          <ul>
            <li>Planeje suas refeições com antecedência</li>
            <li>Leia os rótulos e compare opções no mercado</li>
            <li>Priorize alimentos naturais e minimamente processados</li>
          </ul>
      
          <p>Com criatividade e planejamento, é possível tornar sua alimentação mais leve, saudável e saborosa.</p>
        `,
      },
      "calorias-liquidas-bebidas":{
        title: "Calorias Líquidas: O Perigo das Bebidas Calóricas",
        description: "Descubra como as bebidas podem sabotar sua dieta e alternativas de baixa caloria.",
        date: "2024-01-05",
        readTime: "3 min",
        category: "Bebidas",
        content: `
          <p>As bebidas calóricas são uma das principais fontes ocultas de calorias na alimentação moderna. Por serem consumidas rapidamente e sem saciedade, acabam contribuindo para o excesso calórico diário.</p>
      
          <h2>O Que São Calorias Líquidas?</h2>
          <p>São as calorias provenientes de líquidos, como refrigerantes, sucos industrializados, bebidas alcoólicas e cafés com açúcar ou chantilly. Elas passam despercebidas, mas podem somar centenas de calorias por dia.</p>
      
          <h2>Bebidas Mais Calóricas</h2>
          <ul>
            <li>Refrigerantes: até 140 kcal por lata</li>
            <li>Sucos de caixinha: até 120 kcal por copo</li>
            <li>Capuccino com chantilly: até 250 kcal</li>
            <li>Álcool (cerveja, vinho): de 100 a 200 kcal por dose</li>
          </ul>
      
          <h2>Alternativas de Baixa Caloria</h2>
          <ul>
            <li>Água com gás e limão</li>
            <li>Chás naturais sem açúcar</li>
            <li>Água saborizada com frutas</li>
            <li>Café puro ou com adoçante</li>
          </ul>
      
          <p>Evitar calorias líquidas é uma das formas mais eficazes de reduzir o consumo calórico sem sentir fome ou restringir alimentos sólidos.</p>
        `,
      },
       "termogenese-alimentos-queima-calorias":{
        title: "Termogênese: Alimentos que Ajudam a Queimar Calorias",
        description: "Conheça alimentos termogênicos que aceleram o metabolismo e ajudam na queima de calorias.",
        date: "2024-01-04",
        readTime: "4 min",
        category: "Metabolismo",
        content: `
          <p>A termogênese é o processo pelo qual o corpo gasta energia para digerir, absorver e armazenar nutrientes. Alguns alimentos intensificam esse processo, ajudando a acelerar o metabolismo.</p>
      
          <h2>O Que São Alimentos Termogênicos?</h2>
          <p>São alimentos que exigem maior esforço do organismo para serem metabolizados, aumentando o gasto energético total. Eles também podem estimular o sistema nervoso e elevar a temperatura corporal.</p>
      
          <h2>Principais Alimentos Termogênicos</h2>
          <ul>
            <li><strong>Pimenta vermelha:</strong> Rica em capsaicina, eleva a temperatura corporal</li>
            <li><strong>Gengibre:</strong> Estimula a digestão e a circulação</li>
            <li><strong>Canela:</strong> Ajuda no controle glicêmico e acelera o metabolismo</li>
            <li><strong>Café:</strong> Contém cafeína, que estimula o sistema nervoso</li>
            <li><strong>Chá verde:</strong> Rico em catequinas e cafeína</li>
          </ul>
      
          <h2>Como Incluir na Rotina</h2>
          <ul>
            <li>Use gengibre em sucos e chás</li>
            <li>Tempere alimentos com pimenta ou canela</li>
            <li>Consuma café e chá verde com moderação</li>
          </ul>
      
          <p>Os alimentos termogênicos não fazem milagres, mas aliados a uma dieta equilibrada e exercícios físicos, podem potencializar a queima calórica.</p>
        `,
      },
        "porcoes-ideais-controle-calorias":{
        title: "Porções Ideais para Controle de Calorias",
        description: "Aprenda a determinar porções adequadas para manter o controle calórico sem passar fome.",
        date: "2024-01-03",
        readTime: "4 min",
        category: "Alimentação",
        content: `
          <p>Manter o controle das porções é essencial para evitar o consumo excessivo de calorias e garantir uma alimentação equilibrada.</p>
      
          <h2>Por Que as Porções São Importantes?</h2>
          <p>Muitas vezes, o problema não está no que você come, mas na quantidade. Porções exageradas podem transformar alimentos saudáveis em vilões da dieta.</p>
      
          <h2>Dicas Visuais para Porções</h2>
          <ul>
            <li><strong>Proteína magra:</strong> tamanho da palma da mão</li>
            <li><strong>Carboidratos:</strong> quantidade equivalente a um punho fechado</li>
            <li><strong>Gorduras saudáveis:</strong> tamanho de uma colher de sopa</li>
            <li><strong>Verduras e legumes:</strong> metade do prato</li>
          </ul>
      
          <h2>Estratégias para Controlar as Porções</h2>
          <ul>
            <li>Use pratos menores para evitar exageros</li>
            <li>Evite comer diretamente da embalagem</li>
            <li>Sirva-se uma vez e evite repetir</li>
            <li>Coma devagar e preste atenção na saciedade</li>
          </ul>
      
          <p>Com pequenas mudanças nos hábitos, é possível controlar melhor as calorias sem precisar pesar ou contar cada alimento.</p>
        `,
      },
       "calorias-proteinas-vegetais-animais":{
        title: "Calorias em Proteínas Vegetais vs Animais",
        description: "Comparação calórica e nutricional entre fontes de proteína vegetal e animal.",
        date: "2024-01-02",
        readTime: "5 min",
        category: "Proteínas",
        content: `
          <p>As proteínas são fundamentais para construção muscular, saciedade e funcionamento geral do organismo. Mas será que todas têm o mesmo impacto calórico? Vamos comparar proteínas vegetais e animais.</p>
      
          <h2>Proteínas Animais</h2>
          <ul>
            <li><strong>Peito de frango (100g):</strong> ~165 kcal</li>
            <li><strong>Ovo (1 unidade):</strong> ~70 kcal</li>
            <li><strong>Carne vermelha magra (100g):</strong> ~250 kcal</li>
            <li><strong>Leite desnatado (200ml):</strong> ~70 kcal</li>
          </ul>
      
          <h2>Proteínas Vegetais</h2>
          <ul>
            <li><strong>Feijão cozido (100g):</strong> ~76 kcal</li>
            <li><strong>Lentilha (100g):</strong> ~116 kcal</li>
            <li><strong>Grão-de-bico (100g):</strong> ~164 kcal</li>
            <li><strong>Tofu (100g):</strong> ~70 kcal</li>
          </ul>
      
          <h2>Diferenças Nutricionais</h2>
          <ul>
            <li><strong>Vegetais:</strong> Menor densidade calórica, mais fibras e menos gordura</li>
            <li><strong>Animais:</strong> Proteína completa, maior teor de vitamina B12 e ferro heme</li>
          </ul>
      
          <h2>Dica:</h2>
          <p>Combinar diferentes fontes vegetais (como arroz + feijão) garante todos os aminoácidos essenciais. Alternar entre ambas as fontes pode ser o melhor caminho para uma dieta equilibrada.</p>
        `,
      },
        "jejum-intermitente-calorias":{
        title: "Jejum Intermitente e Controle de Calorias",
        description: "Como o jejum intermitente pode ajudar no controle calórico e perda de peso.",
        date: "2024-01-01",
        readTime: "6 min",
        category: "Dietas",
        content: `
          <p>O jejum intermitente tem ganhado destaque como estratégia eficiente para o controle de calorias e emagrecimento. Ele envolve ciclos alternados de alimentação e abstinência de alimentos.</p>
      
          <h2>Como Funciona o Jejum Intermitente?</h2>
          <p>Existem vários protocolos, mas os mais comuns são:</p>
          <ul>
            <li><strong>16:8:</strong> 16 horas de jejum e 8 horas de alimentação</li>
            <li><strong>5:2:</strong> 5 dias com alimentação normal e 2 dias com baixa caloria</li>
            <li><strong>Jejum alternado:</strong> Dias alternados de jejum parcial</li>
          </ul>
      
          <h2>Benefícios para o Controle Calórico</h2>
          <ul>
            <li><strong>Redução automática de calorias:</strong> Menor janela de alimentação</li>
            <li><strong>Maior sensibilidade à saciedade:</strong> Evita comer por impulso</li>
            <li><strong>Estimula a queima de gordura:</strong> Durante os períodos de jejum</li>
          </ul>
      
          <h2>Cuidados e Dicas</h2>
          <ul>
            <li>Evite exageros nas janelas de alimentação</li>
            <li>Priorize alimentos nutritivos e saciantes</li>
            <li>Hidrate-se bem durante o jejum</li>
            <li>Consulte um profissional antes de iniciar</li>
          </ul>
      
          <p>O jejum intermitente pode ser uma ferramenta poderosa, mas deve ser usado com responsabilidade e equilíbrio.</p>
        `,
      },
         "calorias-carboidratos-simples-complexos":{
        title: "Calorias em Carboidratos Simples vs Complexos",
        description: "Diferenças calóricas e metabólicas entre carboidratos simples e complexos.",
        date: "2023-12-31",
        readTime: "4 min",
        category: "Carboidratos",
        content: `
          <p>Carboidratos são a principal fonte de energia para o corpo, mas nem todos são iguais. A escolha entre carboidratos simples e complexos influencia o controle calórico e a saúde metabólica.</p>
      
          <h2>Carboidratos Simples</h2>
          <ul>
            <li><strong>Exemplos:</strong> Açúcar branco, doces, refrigerantes, pães brancos</li>
            <li><strong>Características:</strong> Alta carga glicêmica, rápida digestão, pouca saciedade</li>
            <li><strong>Calorias:</strong> 1 colher de sopa de açúcar = ~80 kcal</li>
          </ul>
      
          <h2>Carboidratos Complexos</h2>
          <ul>
            <li><strong>Exemplos:</strong> Aveia, batata-doce, arroz integral, leguminosas</li>
            <li><strong>Características:</strong> Digestão lenta, mais fibras e nutrientes</li>
            <li><strong>Calorias:</strong> 100g de batata-doce = ~86 kcal (mas com maior saciedade)</li>
          </ul>
      
          <h2>Qual Escolher?</h2>
          <ul>
            <li>Prefira carboidratos complexos para manter energia constante e evitar picos de fome</li>
            <li>Use os simples com moderação, especialmente se estiver controlando calorias</li>
          </ul>
      
          <p>Optar por carboidratos de qualidade ajuda a manter o controle de peso, melhora a digestão e proporciona mais energia ao longo do dia.</p>
        `,
      },
        "alimentos-alta-saciedade-baixa-caloria":{
        title: "Alimentos de Alta Saciedade e Baixa Caloria",
        description: "Lista de alimentos que proporcionam saciedade com poucas calorias para controle de peso.",
        date: "2023-12-30",
        readTime: "4 min",
        category: "Alimentação",
        content: `
          <p>Para quem busca emagrecer ou controlar o peso, escolher alimentos que promovem saciedade com poucas calorias é fundamental. Eles ajudam a reduzir a fome sem comprometer o equilíbrio calórico.</p>
      
          <h2>Top Alimentos com Alta Saciedade e Baixa Caloria</h2>
          <ul>
            <li><strong>Ovos:</strong> Fonte de proteína que promove saciedade duradoura</li>
            <li><strong>Aveia:</strong> Rica em fibras solúveis, prolonga o esvaziamento gástrico</li>
            <li><strong>Leguminosas (feijão, lentilha):</strong> Altas em fibras e proteína vegetal</li>
            <li><strong>Frutas ricas em água e fibras:</strong> Maçã, pera, melancia</li>
            <li><strong>Vegetais crus ou cozidos:</strong> Baixíssimos em calorias e ricos em volume</li>
            <li><strong>Iogurte natural:</strong> Rico em proteína e com baixo teor calórico</li>
          </ul>
      
          <h2>Por Que Eles Funcionam?</h2>
          <ul>
            <li>Ricos em fibras e/ou proteínas</li>
            <li>Baixa densidade calórica (menos calorias por grama)</li>
            <li>Alimentos volumosos que ocupam mais espaço no estômago</li>
          </ul>
      
          <h2>Dica Extra</h2>
          <p>Combine esses alimentos entre si (como ovo com aveia, ou frutas com iogurte) para criar lanches e refeições ainda mais nutritivas e satisfatórias.</p>
        `,
      },
    
        "calorias-gorduras-boas-ruins":{
        title: "Calorias em Gorduras: Boas vs Ruins",
        description: "Entenda as diferenças entre tipos de gordura e seu impacto calórico na saúde.",
        date: "2023-12-29",
        readTime: "5 min",
        category: "Gorduras",
        content: `
          <p>As gorduras são essenciais para o funcionamento do organismo, mas é importante saber diferenciar as "boas" das "ruins". Todas fornecem 9 kcal por grama — mais que o dobro de proteínas e carboidratos.</p>
      
          <h2>Gorduras Boas (Insaturadas)</h2>
          <ul>
            <li><strong>Azeite de oliva:</strong> Fonte de gorduras monoinsaturadas</li>
            <li><strong>Abacate:</strong> Rico em gorduras saudáveis e fibras</li>
            <li><strong>Oleaginosas:</strong> Castanhas, nozes e amêndoas</li>
            <li><strong>Peixes gordurosos:</strong> Salmão, sardinha, ricos em ômega-3</li>
          </ul>
      
          <p><strong>Benefícios:</strong> Protegem o coração, ajudam na absorção de vitaminas e promovem saciedade.</p>
      
          <h2>Gorduras Ruins (Saturadas e Trans)</h2>
          <ul>
            <li><strong>Frituras:</strong> Principal fonte de gordura trans</li>
            <li><strong>Alimentos ultraprocessados:</strong> Biscoitos recheados, salgadinhos</li>
            <li><strong>Carnes gordurosas e embutidos:</strong> Ricos em gordura saturada</li>
          </ul>
      
          <p><strong>Riscos:</strong> Aumentam colesterol LDL, risco de doenças cardiovasculares e inflamações.</p>
      
          <h2>Dica:</h2>
          <p>Prefira fontes naturais e use com moderação. Mesmo as gorduras boas podem atrapalhar o déficit calórico se consumidas em excesso.</p>
        `,
      },
      "hidratacao-metabolismo-calorias": {
        title: "Hidratação e Seu Impacto no Metabolismo",
        description: "Como a hidratação adequada pode influenciar o metabolismo e a queima de calorias.",
        date: "2023-12-28",
        readTime: "3 min",
        category: "Hidratação",
        content: `
          <p>A água é vital para praticamente todas as funções do corpo, incluindo o metabolismo. Manter-se bem hidratado pode influenciar diretamente o gasto calórico diário.</p>
      
          <h2>Como a Hidratação Afeta o Metabolismo</h2>
          <ul>
            <li><strong>Estimula a termogênese:</strong> Beber água pode aumentar temporariamente o metabolismo</li>
            <li><strong>Auxilia na digestão:</strong> Enzimas digestivas dependem de água para funcionar</li>
            <li><strong>Evita confusão entre sede e fome:</strong> Reduz o risco de comer em excesso</li>
          </ul>
      
          <h2>Quanto Beber por Dia?</h2>
          <ul>
            <li>Adultos: ~35 ml de água por kg de peso corporal</li>
            <li>Em média: 2 a 2,5 litros por dia</li>
            <li>Aumente a ingestão em dias quentes ou de treino intenso</li>
          </ul>
      
          <h2>Dicas para Aumentar o Consumo</h2>
          <ul>
            <li>Tenha sempre uma garrafinha por perto</li>
            <li>Adicione limão ou hortelã para variar o sabor</li>
            <li>Estabeleça metas ao longo do dia (ex: 1 copo por hora)</li>
          </ul>
      
          <p>Uma hidratação adequada pode ser o diferencial para manter o metabolismo ativo e apoiar seus objetivos de saúde e emagrecimento.</p>
        `,
      },
     "calorias-alimentos-organicos-convencionais":{
        title: "Diferença Calórica: Orgânicos vs Convencionais",
        description: "Comparação calórica entre alimentos orgânicos e convencionais.",
        date: "2023-12-27",
        readTime: "4 min",
        category: "Alimentação",
        content: `
          <p>Os alimentos orgânicos são cultivados sem agrotóxicos ou fertilizantes sintéticos, mas será que isso muda o valor calórico comparado aos convencionais?</p>
      
          <h2>Diferença Nutricional</h2>
          <ul>
            <li>Em geral, orgânicos e convencionais possuem calorias similares</li>
            <li>Alguns estudos indicam maior concentração de antioxidantes nos orgânicos</li>
            <li>A diferença calórica é mais evidente em produtos industrializados rotulados como "orgânicos"</li>
          </ul>
      
          <h2>Alimentos Naturais In Natura</h2>
          <p>Uma maçã orgânica e uma convencional têm praticamente o mesmo número de calorias (~52 kcal/100g).</p>
      
          <h2>Industrializados Orgânicos</h2>
          <p>Alimentos como biscoitos, bolos ou barras “orgânicas” podem conter mais açúcar ou gordura vegetal, elevando o valor calórico mesmo com ingredientes naturais.</p>
      
          <h2>Vale a Pena?</h2>
          <ul>
            <li>Sim, se o objetivo é evitar agrotóxicos e apoiar práticas sustentáveis</li>
            <li>Mas atenção: "orgânico" nem sempre é sinônimo de "menos caloria"</li>
          </ul>
      
          <p>Escolher entre orgânico e convencional vai além das calorias — envolve saúde, meio ambiente e valores pessoais.</p>
        `,
      },

      
      
 "sono-metabolismo-calorias": {
  title: "Sono e Seu Impacto no Metabolismo de Calorias",
  description: "Como a qualidade do sono afeta o metabolismo e o controle de peso.",
  date: "2023-12-26",
  readTime: "5 min",
  category: "Metabolismo",
  content: `
    <p>O sono desempenha um papel crucial na regulação do metabolismo e no equilíbrio calórico do corpo. Dormir mal pode interferir diretamente na sua capacidade de queimar calorias e controlar o apetite.</p>

    <h2>Como o Sono Afeta o Metabolismo?</h2>
    <ul>
      <li><strong>Redução do gasto energético basal:</strong> O corpo funciona em ritmo mais lento</li>
      <li><strong>Aumento da resistência à insulina:</strong> Mais propenso a armazenar gordura</li>
      <li><strong>Desequilíbrio hormonal:</strong> Aumenta grelina (fome) e reduz leptina (saciedade)</li>
    </ul>

    <h2>Impactos do Sono Ruim na Alimentação</h2>
    <ul>
      <li>Maior desejo por alimentos calóricos e açucarados</li>
      <li>Dificuldade em controlar o apetite</li>
      <li>Menor motivação para praticar exercícios</li>
    </ul>

    <h2>Dicas para Melhorar o Sono</h2>
    <ul>
      <li>Durma de 7 a 9 horas por noite</li>
      <li>Evite cafeína e telas antes de dormir</li>
      <li>Crie uma rotina de horário para deitar e acordar</li>
      <li>Ambiente escuro e silencioso favorece o sono profundo</li>
    </ul>

    <p>Uma boa noite de sono não só revigora, mas também ajuda a manter o metabolismo ativo e o controle calórico sob controle.</p>
  `,
},
"calorias-temperos-especiarias":{
    title: "Calorias em Temperos e Especiarias",
    description: "Guia calórico de temperos e especiarias para temperar sem adicionar muitas calorias.",
    date: "2023-12-25",
    readTime: "3 min",
    category: "Temperos",
    content: `
      <p>Temperos e especiarias podem transformar refeições sem aumentar significativamente o valor calórico. Ao contrário de molhos prontos, eles realçam o sabor com poucos ou nenhum caloria.</p>
  
      <h2>Temperos Naturais e Seus Benefícios</h2>
      <ul>
        <li><strong>Alho e cebola:</strong> Ricos em compostos antioxidantes e quase sem calorias</li>
        <li><strong>Orégano e manjericão:</strong> Sabor marcante com ~5 kcal por colher de sopa</li>
        <li><strong>Cúrcuma (açafrão-da-terra):</strong> Propriedades anti-inflamatórias</li>
        <li><strong>Cominho e páprica:</strong> Intensificam o sabor e ajudam na digestão</li>
        <li><strong>Ervas frescas:</strong> Como coentro e salsa, praticamente sem calorias</li>
      </ul>
  
      <h2>Evite Temperos Prontos</h2>
      <ul>
        <li>Molhos industrializados podem conter açúcar, gordura e sódio</li>
        <li>Caldo de carne em cubo pode ter até 20 kcal por porção e aditivos químicos</li>
      </ul>
  
      <h2>Dica:</h2>
      <p>Experimente fazer seus próprios mixes de tempero naturais e evitar os produtos industrializados. O sabor será mais autêntico e saudável.</p>
    `,
  },
   "metodos-cocao-impacto-calorias":{
    title: "Métodos de Cocção e Impacto nas Calorias",
    description: "Como diferentes métodos de preparo afetam o conteúdo calórico dos alimentos.",
    date: "2023-12-24",
    readTime: "4 min",
    category: "Culinária",
    content: `
      <p>O modo como você prepara os alimentos pode influenciar diretamente na quantidade de calorias da refeição final. Conheça os métodos mais comuns e como afetam o valor energético.</p>
  
      <h2>Métodos Mais Leves</h2>
      <ul>
        <li><strong>Grelhado:</strong> Usa pouco ou nenhum óleo</li>
        <li><strong>Cozido no vapor:</strong> Mantém nutrientes e não adiciona calorias extras</li>
        <li><strong>Assado:</strong> Uma boa opção, desde que sem excesso de gordura</li>
      </ul>
  
      <h2>Métodos que Aumentam as Calorias</h2>
      <ul>
        <li><strong>Frito:</strong> Pode adicionar até 100 kcal extras por colher de óleo</li>
        <li><strong>Refogado com muito óleo:</strong> Mesmo vegetais leves podem virar calóricos</li>
        <li><strong>Empanados:</strong> Farinha e gordura aumentam o valor energético</li>
      </ul>
  
      <h2>Dicas para Reduzir Calorias no Preparo</h2>
      <ul>
        <li>Use air fryer ou forno em vez de fritar</li>
        <li>Prefira azeite em pequenas quantidades</li>
        <li>Evite molhos prontos e gordurosos</li>
      </ul>
  
      <p>Com pequenas trocas na forma de preparo, é possível reduzir significativamente as calorias das refeições sem perder sabor.</p>
    `,
  },
   "calorias-lanches-saudaveis":{
    title: "Lanches Saudáveis com Poucas Calorias",
    description: "Opções de lanches nutritivos e de baixa caloria para manter a energia durante o dia.",
    date: "2023-12-23",
    readTime: "4 min",
    category: "Lanches",
    content: `
      <p>Manter a energia ao longo do dia sem extrapolar nas calorias é possível com lanches leves, nutritivos e fáceis de preparar. Veja ideias práticas que cabem na rotina e na dieta.</p>
  
      <h2>Opções de Lanches com Poucas Calorias</h2>
      <ul>
        <li><strong>Iogurte natural com frutas:</strong> Fonte de proteína e fibras (~120 kcal)</li>
        <li><strong>Ovo cozido com cenoura:</strong> Rico em proteína e vitamina A (~100 kcal)</li>
        <li><strong>Banana com aveia:</strong> Doce natural, saciante (~110 kcal)</li>
        <li><strong>Castanhas (5 unidades):</strong> Fonte de gorduras boas (~90 kcal)</li>
        <li><strong>Maçã com canela:</strong> Refrescante, rica em fibras (~70 kcal)</li>
        <li><strong>Chips de vegetais no forno:</strong> Sem fritura, saborosos (~80 kcal por porção)</li>
      </ul>
  
      <h2>Dicas para Lanches Inteligentes</h2>
      <ul>
        <li>Evite produtos industrializados com excesso de açúcar ou gordura</li>
        <li>Combine proteínas e fibras para maior saciedade</li>
        <li>Prepare porções antecipadamente para facilitar a escolha saudável</li>
      </ul>
  
      <p>Lanches equilibrados ajudam a evitar picos de fome e mantêm a dieta sob controle sem abrir mão do sabor.</p>
    `,
  },
   "calorias-por-estacao-alimentos-sazonais":{
    title: "Calorias por Estação: Alimentos Sazonais",
    description: "Guia de alimentos sazonais e suas características calóricas ao longo do ano.",
    date: "2023-12-22",
    readTime: "5 min",
    category: "Sazonal",
    content: `
      <p>Consumir alimentos da estação é uma excelente forma de economizar, obter mais nutrientes e controlar calorias. Os produtos colhidos na época certa costumam ser mais saborosos e acessíveis.</p>
  
      <h2>Primavera</h2>
      <ul>
        <li><strong>Morango:</strong> ~32 kcal/100g, rico em antioxidantes</li>
        <li><strong>Ervilha:</strong> ~81 kcal/100g, boa fonte de proteína vegetal</li>
      </ul>
  
      <h2>Verão</h2>
      <ul>
        <li><strong>Melancia:</strong> ~30 kcal/100g, muito hidratante</li>
        <li><strong>Abacaxi:</strong> ~50 kcal/100g, refrescante e diurético</li>
      </ul>
  
      <h2>Outono</h2>
      <ul>
        <li><strong>Maçã:</strong> ~52 kcal/100g, rica em fibras</li>
        <li><strong>Batata-doce:</strong> ~86 kcal/100g, ótima para saciedade</li>
      </ul>
  
      <h2>Inverno</h2>
      <ul>
        <li><strong>Laranja:</strong> ~47 kcal/100g, rica em vitamina C</li>
        <li><strong>Inhame:</strong> ~98 kcal/100g, aquece e nutre</li>
      </ul>
  
      <p>Variar os alimentos conforme as estações ajuda a manter uma dieta equilibrada e com boa variedade de calorias e nutrientes.</p>
    `,
  },

     "deficit-calorico-perda-peso": {
    title: "Déficit Calórico: Chave para Perda de Peso",
    description: "Como criar e manter um déficit calórico saudável para perda de peso sustentável.",
    date: "2023-12-21",
    readTime: "5 min",
    category: "Perda de Peso",
    content: `
      <p>O déficit calórico é o principal fator por trás da perda de peso. Ele ocorre quando você consome menos calorias do que o corpo gasta, forçando o organismo a usar as reservas de gordura como energia.</p>
  
      <h2>Como Calcular o Déficit Calórico?</h2>
      <ul>
        <li><strong>1º passo:</strong> Calcule o seu gasto energético total diário (GET)</li>
        <li><strong>2º passo:</strong> Subtraia 300 a 600 kcal para uma perda saudável</li>
        <li><strong>Exemplo:</strong> Se seu GET é 2200 kcal, consuma entre 1600 e 1900 kcal/dia</li>
      </ul>
  
      <h2>Formas de Criar o Déficit</h2>
      <ul>
        <li>Reduzir porções e calorias ingeridas</li>
        <li>Aumentar a atividade física</li>
        <li>Combinar ambos para um resultado mais sustentável</li>
      </ul>
  
      <h2>Dicas Importantes</h2>
      <ul>
        <li>Evite restrições extremas, que geram efeito rebote</li>
        <li>Priorize alimentos nutritivos e saciantes</li>
        <li>Mantenha a hidratação e o sono em dia</li>
      </ul>
  
      <p>Manter um déficit calórico de forma consciente é a base para perder peso com saúde e manter os resultados a longo prazo.</p>
    `,
  }
  
  
  
  
  
  
      
      
      

      
      
      
      
      
      
      
      
      
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = articles[slug]

  if (!article) {
    notFound()
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
    </Head>
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 py-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-blue-600 hover:underline text-sm mb-2 block">
              ← Voltar ao Blog
            </Link>
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{article.title}</h1>
            <p className="text-gray-600">{article.description}</p>
          </div>
        </div>
        {/* <AdSenseAd
          adSlot="1234567890"
          adFormat="horizontal"
          className="h-16 md:h-20 flex items-center justify-center"
        /> */}
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <Card>
          <CardContent className="prose prose-lg max-w-none p-8">
                              {(await params).slug === "metabolismo-basal-como-calcular" && (
        <MBCalculator />
      )}
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </CardContent>
        </Card>

        {/* AdSense Rectangle Space */}
        {/* <AdSenseAd
          adSlot="0987654321"
          adFormat="rectangle"
          className="h-64 flex items-center justify-center rounded-lg my-8"
        /> */}

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Ferramentas Úteis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/register">
                <Button variant="outline" className="w-full bg-transparent">
                  Registrar Alimentos
                </Button>
              </Link>
              <Link href="/compare">
                <Button variant="outline" className="w-full bg-transparent">
                  Comparar Calorias
                </Button>
              </Link>
              <Link href="/equivalence">
                <Button variant="outline" className="w-full bg-transparent">
                  Calcular Equivalência
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
    </>
  )
}
