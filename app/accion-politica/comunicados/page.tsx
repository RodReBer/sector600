import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Megaphone, Calendar, Share2, Download, Search } from "lucide-react"

const comunicados = [
  {
    id: 1,
    titulo: "Posición del Sector 600 sobre la situación económica nacional",
    fecha: "2024-01-15",
    categoria: "Economía",
    resumen:
      "Comunicado oficial con nuestras propuestas para enfrentar los desafíos económicos actuales y promover el crecimiento sostenible.",
    contenido: `El Sector 600 del Partido Colorado expresa su posición frente a la coyuntura económica actual y presenta propuestas concretas para enfrentar los desafíos que atraviesa nuestro país.

Consideramos fundamental implementar políticas que promuevan el crecimiento económico sostenible, la generación de empleo de calidad y la reducción de la desigualdad. Para ello, proponemos:

1. Incentivos fiscales para las pequeñas y medianas empresas que generen empleo
2. Inversión en infraestructura y tecnología para mejorar la competitividad
3. Fortalecimiento del sistema educativo con foco en la formación técnica
4. Promoción de la innovación y el emprendedurismo

Estamos convencidos de que con políticas adecuadas y el compromiso de todos los sectores, Uruguay puede superar los desafíos actuales y construir un futuro próspero para todas las familias uruguayas.`,
    autor: "Robert Silva",
    descargas: 234,
  },
  {
    id: 2,
    titulo: "Apoyo a la propuesta de educación técnica",
    fecha: "2024-01-12",
    categoria: "Educación",
    resumen: "Respaldo total a la iniciativa de fortalecimiento de la educación técnica presentada en el Parlamento.",
    contenido: `El Sector 600 ratifica su compromiso con la transformación del sistema educativo uruguayo, particularmente en el área de la educación técnica.

La propuesta de ley presentada por nuestro líder Robert Silva representa un paso fundamental hacia la modernización de la educación en nuestro país. Esta iniciativa contempla:

- Creación de nuevos centros de educación técnica
- Actualización de equipamiento y tecnología
- Vinculación directa con el sector productivo
- Programas de becas para estudiantes

Consideramos que la educación técnica es clave para el desarrollo económico del país y para brindar oportunidades reales de progreso a nuestros jóvenes.`,
    autor: "Sector 600",
    descargas: 189,
  },
  {
    id: 3,
    titulo: "Llamado a la unidad nacional ante los desafíos globales",
    fecha: "2024-01-10",
    categoria: "Política General",
    resumen: "Convocatoria a todos los sectores políticos para trabajar unidos frente a los desafíos internacionales.",
    contenido: `En un contexto internacional complejo, el Sector 600 hace un llamado a la unidad nacional y al diálogo constructivo entre todas las fuerzas políticas del país.

Los desafíos globales requieren respuestas nacionales consensuadas. Por ello, proponemos:

1. Mesa de diálogo multipartidaria para temas estratégicos
2. Política de Estado en temas de seguridad y defensa
3. Consenso en política exterior y comercio internacional
4. Acuerdos básicos en educación y salud

Uruguay tiene una larga tradición de consensos que nos han permitido avanzar como sociedad. Es momento de recuperar esa tradición y trabajar juntos por el bien común.`,
    autor: "Sector 600",
    descargas: 156,
  },
]

const categorias = ["Todas", "Economía", "Educación", "Salud", "Política General", "Desarrollo Rural", "Seguridad"]

export default function ComunicadosPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-100 text-red-800">Acción Política</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Comunicados de Prensa</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Posiciones oficiales del Sector 600 sobre los temas más importantes de la agenda nacional. Transparencia
            total en nuestras posturas políticas.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Buscar comunicados..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {categorias.map((categoria) => (
              <Button
                key={categoria}
                variant="outline"
                size="sm"
                className="bg-transparent hover:bg-red-50 hover:text-red-600"
              >
                {categoria}
              </Button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-600 mb-2">23</div>
              <div className="text-gray-600">Comunicados este año</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">1.2K</div>
              <div className="text-gray-600">Descargas totales</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600 mb-2">89%</div>
              <div className="text-gray-600">Cobertura mediática</div>
            </CardContent>
          </Card>
        </div>

        {/* Comunicados */}
        <div className="space-y-8">
          {comunicados.map((comunicado) => (
            <Card key={comunicado.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Main Content */}
                  <div className="lg:col-span-3">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                          <Megaphone className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">{comunicado.titulo}</h2>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline">{comunicado.categoria}</Badge>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(comunicado.fecha).toLocaleDateString("es-UY")}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{comunicado.resumen}</p>

                    {/* Content Preview */}
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <div className="prose prose-sm max-w-none">
                        {comunicado.contenido
                          .split("\n\n")
                          .slice(0, 2)
                          .map((paragraph, idx) => (
                            <p key={idx} className="text-gray-700 mb-4 last:mb-0">
                              {paragraph}
                            </p>
                          ))}
                      </div>
                      <Button variant="ghost" className="text-red-600 hover:text-red-700 p-0 h-auto mt-4">
                        Leer comunicado completo →
                      </Button>
                    </div>

                    {/* Author and Stats */}
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <span>Por: {comunicado.autor}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Download className="h-4 w-4" />
                          <span>{comunicado.descargas} descargas</span>
                        </div>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Share2 className="h-4 w-4 mr-2" />
                          Compartir
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="lg:col-span-1">
                    <Card className="bg-gray-50">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-4">Acciones</h4>
                        <div className="space-y-3">
                          <Button className="w-full bg-red-600 hover:bg-red-700">
                            <Download className="h-4 w-4 mr-2" />
                            Descargar PDF
                          </Button>
                          <Button variant="outline" className="w-full bg-transparent">
                            <Share2 className="h-4 w-4 mr-2" />
                            Compartir
                          </Button>
                          <Button variant="outline" className="w-full bg-transparent">
                            Ver en Medios
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="bg-transparent">
              Anterior
            </Button>
            <Button variant="outline" size="sm" className="bg-red-600 text-white">
              1
            </Button>
            <Button variant="outline" size="sm" className="bg-transparent">
              2
            </Button>
            <Button variant="outline" size="sm" className="bg-transparent">
              3
            </Button>
            <Button variant="outline" size="sm" className="bg-transparent">
              Siguiente
            </Button>
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-16 bg-red-50 border-red-200">
          <CardContent className="text-center py-12">
            <h3 className="text-2xl font-bold text-red-800 mb-4">Recibí Nuestros Comunicados</h3>
            <p className="text-red-700 mb-6 max-w-2xl mx-auto">
              Suscribite para recibir todos nuestros comunicados de prensa directamente en tu email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <Button className="bg-red-600 hover:bg-red-700">Suscribirse</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
