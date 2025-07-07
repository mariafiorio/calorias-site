import Link from "next/link"
import { FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import AdSenseAd from "@/components/adsense-ad"

export const metadata = {
  title: "Termos de Uso - Food Calorie Calculator",
  description: "Termos de uso do Food Calorie Calculator. Leia os termos e condições para uso da nossa aplicação.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="text-blue-600 hover:underline text-sm mb-2 block">
              ← Voltar ao Início
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
              <FileText className="w-8 h-8 mr-3 text-blue-600" />
              Termos de Uso
            </h1>
            <p className="text-gray-600">Última atualização: Janeiro de 2024</p>
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
            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar o Food Calorie Calculator, você concorda em cumprir e estar vinculado a estes Termos de
              Uso. Se você não concordar com qualquer parte destes termos, não deve usar nosso serviço.
            </p>

            <h2>2. Descrição do Serviço</h2>
            <p>O Food Calorie Calculator é uma aplicação web gratuita que permite aos usuários:</p>
            <ul>
              <li>Registrar informações calóricas de alimentos</li>
              <li>Comparar calorias entre diferentes alimentos</li>
              <li>Calcular equivalências calóricas</li>
              <li>Acessar conteúdo educacional sobre nutrição</li>
            </ul>

            <h2>3. Uso Aceitável</h2>
            <p>Você concorda em usar o serviço apenas para fins legais e de acordo com estes termos. É proibido:</p>
            <ul>
              <li>Usar o serviço para qualquer propósito ilegal ou não autorizado</li>
              <li>Tentar interferir no funcionamento do serviço</li>
              <li>Copiar, modificar ou distribuir o conteúdo sem autorização</li>
              <li>Usar sistemas automatizados para acessar o serviço</li>
              <li>Transmitir vírus ou códigos maliciosos</li>
            </ul>

            <h2>4. Conteúdo do Usuário</h2>
            <p>
              Os dados de alimentos que você registra são armazenados localmente no seu dispositivo. Você é responsável
              pela precisão e legalidade das informações que insere. Não nos responsabilizamos por dados perdidos ou
              corrompidos.
            </p>

            <h2>5. Precisão das Informações</h2>
            <p>
              Embora nos esforcemos para fornecer informações precisas sobre calorias e nutrição, não garantimos a
              exatidão completa de todos os dados. As informações são fornecidas apenas para fins educacionais e não
              substituem aconselhamento médico profissional.
            </p>

            <h2>6. Isenção de Responsabilidade Médica</h2>
            <p>
              <strong>IMPORTANTE:</strong> Este serviço é apenas para fins informativos e educacionais. Não fornecemos
              aconselhamento médico, diagnóstico ou tratamento. Sempre consulte um profissional de saúde qualificado
              antes de fazer mudanças significativas em sua dieta ou estilo de vida.
            </p>

            <h2>7. Propriedade Intelectual</h2>
            <p>
              O conteúdo, design, código e funcionalidades do Food Calorie Calculator são protegidos por direitos
              autorais e outras leis de propriedade intelectual. Você pode usar o serviço para fins pessoais, mas não
              pode reproduzir, distribuir ou criar obras derivadas sem nossa autorização expressa.
            </p>

            <h2>8. Publicidade</h2>
            <p>
              Nosso serviço é financiado através de publicidade fornecida pelo Google AdSense. Ao usar nosso serviço,
              você concorda com a exibição de anúncios e com a coleta de dados para personalização de anúncios conforme
              descrito em nossa Política de Privacidade.
            </p>

            <h2>9. Limitação de Responsabilidade</h2>
            <p>
              Em nenhuma circunstância seremos responsáveis por danos diretos, indiretos, incidentais, especiais ou
              consequenciais resultantes do uso ou incapacidade de usar nosso serviço, incluindo mas não limitado a
              perda de dados, lucros ou oportunidades de negócio.
            </p>

            <h2>10. Disponibilidade do Serviço</h2>
            <p>
              Embora nos esforcemos para manter o serviço disponível 24/7, não garantimos que o serviço será
              ininterrupto ou livre de erros. Reservamo-nos o direito de modificar, suspender ou descontinuar o serviço
              a qualquer momento.
            </p>

            <h2>11. Modificações dos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor
              imediatamente após a publicação. Seu uso continuado do serviço após as alterações constitui aceitação dos
              novos termos.
            </p>

            <h2>12. Lei Aplicável</h2>
            <p>
              Estes termos são regidos pelas leis do Brasil. Qualquer disputa será resolvida nos tribunais competentes
              do Brasil.
            </p>

            <h2>13. Contato</h2>
            <p>
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através da nossa{" "}
              <Link href="/contact">página de contato</Link>.
            </p>
          </CardContent>
        </Card>

        {/* <AdSenseAd
          adSlot="0987654321"
          adFormat="rectangle"
          className="h-64 flex items-center justify-center rounded-lg my-8"
        /> */}
      </main>
    </div>
  )
}
