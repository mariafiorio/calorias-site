import Link from "next/link"
import { Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import AdSenseAd from "@/components/adsense-ad"

export const metadata = {
  title: "Política de Privacidade - Food Calorie Calculator",
  description:
    "Política de privacidade do Food Calorie Calculator. Saiba como coletamos, usamos e protegemos seus dados.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="text-blue-600 hover:underline text-sm mb-2 block">
              ← Voltar ao Início
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
              <Shield className="w-8 h-8 mr-3 text-blue-600" />
              Política de Privacidade
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
            <h2>1. Informações que Coletamos</h2>
            <p>
              O Food Calorie Calculator coleta informações limitadas para fornecer nossos serviços de cálculo calórico:
            </p>
            <ul>
              <li>
                <strong>Dados de Alimentos:</strong> Informações sobre alimentos que você registra (nome, calorias,
                quantidades)
              </li>
              <li>
                <strong>Dados de Uso:</strong> Como você interage com nossa aplicação
              </li>
              <li>
                <strong>Dados Técnicos:</strong> Endereço IP, tipo de navegador, sistema operacional
              </li>
              <li>
                <strong>Cookies:</strong> Para melhorar a experiência do usuário e exibir anúncios relevantes
              </li>
            </ul>

            <h2>2. Como Usamos Suas Informações</h2>
            <p>Utilizamos as informações coletadas para:</p>
            <ul>
              <li>Fornecer e manter nossos serviços de cálculo calórico</li>
              <li>Salvar suas preferências e dados de alimentos localmente</li>
              <li>Melhorar a funcionalidade da aplicação</li>
              <li>Exibir anúncios personalizados através do Google AdSense</li>
              <li>Analisar o uso da aplicação para melhorias</li>
            </ul>

            <h2>3. Armazenamento de Dados</h2>
            <p>
              Seus dados de alimentos são armazenados localmente no seu navegador (localStorage). Não enviamos essas
              informações para nossos servidores. Os dados permanecem no seu dispositivo e podem ser removidos a
              qualquer momento limpando os dados do navegador.
            </p>

            <h2>4. Google AdSense e Cookies</h2>
            <p>
              Utilizamos o Google AdSense para exibir anúncios. O Google pode usar cookies para personalizar anúncios
              com base em suas visitas anteriores ao nosso site e outros sites. Você pode optar por não receber anúncios
              personalizados visitando as
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
                Configurações de Anúncios do Google
              </a>
              .
            </p>

            <h2>5. Compartilhamento de Informações</h2>
            <p>Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros, exceto:</p>
            <ul>
              <li>Quando exigido por lei</li>
              <li>Para proteger nossos direitos ou propriedade</li>
              <li>Com provedores de serviços confiáveis (como Google AdSense) que nos ajudam a operar o site</li>
            </ul>

            <h2>6. Segurança dos Dados</h2>
            <p>
              Implementamos medidas de segurança apropriadas para proteger suas informações contra acesso não
              autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela internet é
              100% seguro.
            </p>

            <h2>7. Seus Direitos</h2>
            <p>Você tem o direito de:</p>
            <ul>
              <li>Acessar os dados que temos sobre você</li>
              <li>Corrigir dados imprecisos</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Optar por não receber anúncios personalizados</li>
              <li>Limpar dados locais do navegador a qualquer momento</li>
            </ul>

            <h2>8. Menores de Idade</h2>
            <p>
              Nosso serviço não é direcionado a menores de 13 anos. Não coletamos conscientemente informações pessoais
              de crianças menores de 13 anos. Se você é pai/mãe ou responsável e está ciente de que seu filho nos
              forneceu informações pessoais, entre em contato conosco.
            </p>

            <h2>9. Alterações nesta Política</h2>
            <p>
              Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos sobre mudanças
              significativas publicando a nova política nesta página com uma nova data de "última atualização".
            </p>

            <h2>10. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através da nossa{" "}
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
