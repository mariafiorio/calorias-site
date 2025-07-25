'use client'

import { Calculator, Scale, Plus, Save, Info, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Head from 'next/head';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import { use } from "react";
import "../globals.css"
export default function HomePage() {
    const t = useTranslations('HomePage');

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
            {t('hero.title')}
          </h2>
          <p className="text-base md:text-xl text-gray-600 mb-6 leading-relaxed">
            {t('hero.description')}
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 w-full sm:w-auto text-lg py-3 px-8">
              {t('hero.cta')}
            </Button>
          </Link>
        </div>

        {/* Features Grid - Mobile optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Card className="text-center">
            <CardHeader className="pb-3">
              <Plus className="w-10 h-10 mx-auto text-green-600 mb-3" />
              <CardTitle className="text-lg">{t('features.register.title')}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-sm leading-relaxed">
                {t('features.register.description')}
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-3">
              <Scale className="w-10 h-10 mx-auto text-blue-600 mb-3" />
              <CardTitle className="text-lg">{t('features.compare.title')}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-sm leading-relaxed">
                {t('features.compare.description')}
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-3">
              <Calculator className="w-10 h-10 mx-auto text-purple-600 mb-3" />
              <CardTitle className="text-lg">{t('features.equivalence.title')}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-sm leading-relaxed">
                {t('features.equivalence.description')}
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="pb-3">
              <Save className="w-10 h-10 mx-auto text-orange-600 mb-3" />
              <CardTitle className="text-lg">{t('features.save.title')}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-sm leading-relaxed">
                {t('features.save.description')}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
              {t('blog.title')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              {t('blog.description')}
            </p>
            <Link href="/blog">
              <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                {t('blog.cta')}
              </Button>
            </Link>
          </CardContent>
        </Card>
     {/* Educational Content - Added for better content-to-ad ratio */}
     <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Info className="w-5 h-5 mr-2 text-blue-600" />
              {t('education.title')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">
                {t('education.intro')}
              </p>

              <h3 className="font-medium text-gray-900">{t('education.why.title')}</h3>
              <p className="text-gray-700">{t('education.why.intro')}</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>{t('education.why.maintain')}</li>
                <li>{t('education.why.lose')}</li>
                <li>{t('education.why.gain')}</li>
                <li>{t('education.why.informed')}</li>
              </ul>

              <h3 className="font-medium text-gray-900">{t('education.needs.title')}</h3>
              <p className="text-gray-700">
                {t('education.needs.intro')}
              </p>
            </div>
          </CardContent>
        </Card>
        {/* AdSense Rectangle Space - Mobile optimized */}

        {/* Quick Navigation - Mobile optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Link href="/register" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-green-50 border-green-200">
              <CardHeader className="text-center py-6">
                <Plus className="w-8 h-8 mx-auto text-green-600 mb-2" />
                <CardTitle className="text-green-600 text-lg">{t('quicknav.register')}</CardTitle>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/compare" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-blue-50 border-blue-200">
              <CardHeader className="text-center py-6">
                <Scale className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                <CardTitle className="text-blue-600 text-lg">{t('quicknav.compare')}</CardTitle>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/equivalence" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-purple-50 border-purple-200">
              <CardHeader className="text-center py-6">
                <Calculator className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                <CardTitle className="text-purple-600 text-lg">{t('quicknav.equivalence')}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        </div>

        {/* Additional Educational Content - Added for better content-to-ad ratio */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>{t('reference.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-2 border-b">{t('reference.food')}</th>
                    <th className="text-right p-2 border-b">{t('reference.calories')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b">{t('reference.apple')}</td>
                    <td className="text-right p-2 border-b">52 kcal</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">{t('reference.banana')}</td>
                    <td className="text-right p-2 border-b">89 kcal</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">{t('reference.chicken')}</td>
                    <td className="text-right p-2 border-b">165 kcal</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">{t('reference.rice')}</td>
                    <td className="text-right p-2 border-b">112 kcal</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">{t('reference.broccoli')}</td>
                    <td className="text-right p-2 border-b">34 kcal</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">{t('reference.salmon')}</td>
                    <td className="text-right p-2 border-b">208 kcal</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">{t('reference.egg')}</td>
                    <td className="text-right p-2 border-b">155 kcal</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">{t('reference.avocado')}</td>
                    <td className="text-right p-2 border-b">160 kcal</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              {t('reference.note')}
            </p>
          </CardContent>
        </Card>
      </main>

      {/* Footer - Mobile optimized */}
      <footer className="bg-white border-t mt-8">
        <div className="px-4 py-6 text-center text-gray-600 text-sm">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link href="/about" className="hover:text-blue-600">
              {t('footer.about')}
            </Link>
            <Link href="/privacy" className="hover:text-blue-600">
              {t('footer.privacy')}
            </Link>
            <Link href="/terms" className="hover:text-blue-600">
              {t('footer.terms')}
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              {t('footer.contact')}
            </Link>
            <Link href="/blog" className="hover:text-blue-600">
              {t('footer.blog')}
            </Link>
          </div>
          <p>&copy; 2024 {t('footer.copyright')}</p>
          <p className="mt-2">
            {t('footer.disclaimer')}
          </p>
        </div>
      </footer>
    </div>
    </>
  )
}
