"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Mail, MessageSquare, Send } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import AdSenseAd from "@/components/adsense-ad"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="text-blue-600 hover:underline text-sm mb-2 block">
              ← Voltar ao Início
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
              <Mail className="w-8 h-8 mr-3 text-blue-600" />
              Entre em Contato
            </h1>
            <p className="text-gray-600">Estamos aqui para ajudar você</p>
          </div>
        </div>
        {/* <AdSenseAd
          adSlot="1234567890"
          adFormat="horizontal"
          className="h-16 md:h-20 flex items-center justify-center"
        /> */}
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="w-6 h-6 mr-2 text-blue-600" />
                Envie sua Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-green-600 mb-2">
                    <Send className="w-12 h-12 mx-auto mb-3" />
                  </div>
                  <h3 className="text-green-800 font-semibold mb-2">Mensagem Enviada!</h3>
                  <p className="text-green-700 text-sm">Obrigado pelo seu contato. Responderemos em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Assunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="Assunto da sua mensagem"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 min-h-[120px]"
                      placeholder="Descreva sua dúvida, sugestão ou problema..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Perguntas Frequentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Como os dados são armazenados?</h4>
                    <p className="text-gray-600 text-sm">
                      Todos os seus dados de alimentos são armazenados localmente no seu navegador. Não enviamos essas
                      informações para nossos servidores.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">As informações calóricas são precisas?</h4>
                    <p className="text-gray-600 text-sm">
                      Nos esforçamos para fornecer dados precisos baseados em fontes confiáveis, mas sempre recomendamos
                      verificar com profissionais de saúde.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">O serviço é realmente gratuito?</h4>
                    <p className="text-gray-600 text-sm">
                      Sim, todas as funcionalidades são completamente gratuitas. Mantemos o serviço através de
                      publicidade não intrusiva.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Posso usar em dispositivos móveis?</h4>
                    <p className="text-gray-600 text-sm">
                      Sim, nossa aplicação é totalmente responsiva e funciona perfeitamente em smartphones e tablets.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* <AdSenseAd
              adSlot="0987654321"
              adFormat="rectangle"
              className="h-64 flex items-center justify-center rounded-lg"
            /> */}

            <Card>
              <CardHeader>
                <CardTitle>Outras Formas de Contato</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Tempo de Resposta:</strong> Normalmente respondemos em até 24 horas
                  </p>
                  <p className="text-gray-700">
                    <strong>Idiomas:</strong> Português e Inglês
                  </p>
                  <p className="text-gray-700">
                    <strong>Horário de Atendimento:</strong> Segunda a Sexta, 9h às 18h (horário de Brasília)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sugestões e Melhorias</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Valorizamos muito o feedback dos nossos usuários. Se você tem ideias para melhorar nossa aplicação,
                  novos recursos que gostaria de ver implementados, ou encontrou algum bug, por favor nos informe
                  através do formulário ao lado.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
