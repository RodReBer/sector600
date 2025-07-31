import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Clock, User } from "lucide-react"

const featuredNews = [
  {
    id: 1,
    title: "Nueva propuesta de ley para la educación técnica",
    excerpt:
      "Robert Silva presenta un proyecto innovador para fortalecer la educación técnica en todo el país, incluyendo nuevos centros de formación y programas de becas para estudiantes.",
    category: "Legislativa",
    date: "2024-01-15",
    readTime: "5 min",
    author: "Robert Silva",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: 2,
    title: "Reunión con productores rurales del interior",
    excerpt:
      "El Sector 600 se reúne con representantes del agro para discutir políticas de desarrollo rural y escuchar las necesidades del sector productivo.",
    category: "Agenda",
    date: "2024-01-12",
    readTime: "3 min",
    author: "Equipo Sector 600",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
  },
  {
    id: 3,
    title: "Comunicado sobre la situación económica nacional",
    excerpt:
      "Nuestra posición frente a los desafíos económicos actuales y las propuestas de solución para promover el crecimiento sostenible del país.",
    category: "Comunicado",
    date: "2024-01-10",
    readTime: "4 min",
    author: "Sector 600",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
  },
]

export function FeaturedNews() {
  const mainNews = featuredNews[0]
  const sideNews = featuredNews.slice(1)

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 lg:mb-16">
          <div className="mb-6 lg:mb-0">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
              Últimas Noticias
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Mantente informado</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
              Las últimas novedades sobre nuestras actividades, propuestas y el trabajo que realizamos por Uruguay.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="hidden lg:flex items-center gap-2 bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 px-6 py-3"
          >
            <Link href="/medios">
              Ver todas las noticias
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={mainNews.image || "/placeholder.svg"}
                  alt={mainNews.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-600 hover:bg-red-700 text-white border-0">{mainNews.category}</Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white text-sm space-x-4 mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(mainNews.date).toLocaleDateString("es-UY")}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {mainNews.readTime}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {mainNews.author}
                    </div>
                  </div>
                </div>
              </div>
              <CardHeader className="p-6 sm:p-8">
                <CardTitle className="text-2xl sm:text-3xl font-bold group-hover:text-red-600 transition-colors duration-300 leading-tight">
                  {mainNews.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 sm:px-8 pb-6 sm:pb-8">
                <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">{mainNews.excerpt}</p>
                <Button
                  asChild
                  variant="ghost"
                  className="p-0 h-auto text-red-600 hover:text-red-700 text-lg font-medium"
                >
                  <Link href={`/noticias/${mainNews.id}`} className="flex items-center gap-2">
                    Leer artículo completo
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Side Articles */}
          <div className="space-y-6 lg:space-y-8">
            {sideNews.map((news, index) => (
              <Card
                key={news.id}
                className="group hover:shadow-xl transition-all duration-500 border-0 bg-white overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col sm:flex-row lg:flex-col">
                  <div className="relative aspect-video sm:aspect-square lg:aspect-video sm:w-1/3 lg:w-full overflow-hidden">
                    <img
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800 border-0 text-xs">
                        {news.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex-1 p-4 sm:p-6 lg:p-4">
                    <div className="flex items-center text-xs text-gray-500 space-x-3 mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(news.date).toLocaleDateString("es-UY")}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {news.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold group-hover:text-red-600 transition-colors duration-300 mb-3 leading-tight">
                      {news.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{news.excerpt}</p>
                    <Button
                      asChild
                      variant="ghost"
                      className="p-0 h-auto text-red-600 hover:text-red-700 text-sm font-medium"
                    >
                      <Link href={`/noticias/${news.id}`} className="flex items-center gap-1">
                        Leer más
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="text-center mt-12 lg:hidden">
          <Button
            asChild
            variant="outline"
            className="bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 px-8 py-3"
          >
            <Link href="/medios" className="flex items-center gap-2">
              Ver todas las noticias
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
