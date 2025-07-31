import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Clock, CheckCircle, AlertCircle, Users, Calendar, Download } from "lucide-react"

const proyectosLey = [
  {
    id: 1,
    titulo: "Ley de Fortalecimiento de la Educación Técnica",
    numero: "PL-2024-001",
    estado: "En Comisión",
    fechaPresentacion: "2024-01-15",
    autor: "Robert Silva",
    resumen:
      "Propuesta integral para modernizar y expandir la educación técnica en Uruguay, creando nuevos centros de formación y programas de vinculación con el sector productivo.",
    comision: "Comisión de Educación y Cultura",
    votos: { favor: 8, contra: 2, abstencion: 1 },
    proximaFecha: "2024-02-20",
    documentos: ["Proyecto original", "Informe técnico", "Audiencias públicas"],
  },
  {
    id: 2,
    titulo: "Ley de Desarrollo Rural Sostenible",
    numero: "PL-2024-002",
    estado: "Aprobado en Diputados",
    fechaPresentacion: "2024-01-10",
    autor: "Robert Silva",
    resumen:
      "Marco normativo para promover el desarrollo integral de las zonas rurales, mejorando la infraestructura, conectividad y oportunidades económicas.",
    comision: "Comisión de Ganadería, Agricultura y Pesca",
    votos: { favor: 52, contra: 28, abstencion: 5 },
    proximaFecha: "2024-02-15",
    documentos: ["Proyecto original", "Modificaciones", "Dictamen de mayoría"],
  },
  {
    id: 3,
    titulo: "Ley de Transparencia Municipal",
    numero: "PL-2024-003",
    estado: "En estudio",
    fechaPresentacion: "2024-01-08",
    autor: "Sector 600",
    resumen:
      "Fortalecimiento de los mecanismos de transparencia y participación ciudadana en los gobiernos departamentales y municipales.",
    comision: "Comisión de Constitución y Legislación",
    votos: null,
    proximaFecha: "2024-02-25",
    documentos: ["Proyecto original", "Antecedentes"],
  },
]

const getEstadoColor = (estado: string) => {
  switch (estado) {
    case "Aprobado en Diputados":
      return "bg-green-100 text-green-800"
    case "En Comisión":
      return "bg-blue-100 text-blue-800"
    case "En estudio":
      return "bg-yellow-100 text-yellow-800"
    case "Sancionado":
      return "bg-green-100 text-green-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getEstadoIcon = (estado: string) => {
  switch (estado) {
    case "Aprobado en Diputados":
      return CheckCircle
    case "Sancionado":
      return CheckCircle
    case "En Comisión":
      return Clock
    case "En estudio":
      return AlertCircle
    default:
      return FileText
  }
}

export default function LaborLegislativaPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-100 text-red-800">Acción Política</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Labor Legislativa</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seguimiento detallado de todas nuestras iniciativas legislativas en el Parlamento. Transparencia total sobre
            el estado de cada proyecto de ley.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-600">Proyectos Presentados</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600 mb-2">8</div>
              <div className="text-gray-600">Leyes Aprobadas</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-yellow-600 mb-2">5</div>
              <div className="text-gray-600">En Trámite</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
              <div className="text-gray-600">En Estudio</div>
            </CardContent>
          </Card>
        </div>

        {/* Proyectos de Ley */}
        <div className="space-y-8">
          {proyectosLey.map((proyecto) => {
            const EstadoIcon = getEstadoIcon(proyecto.estado)

            return (
              <Card key={proyecto.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-3">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                            <EstadoIcon className="h-6 w-6 text-red-600" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900">{proyecto.titulo}</h2>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline">{proyecto.numero}</Badge>
                              <Badge className={getEstadoColor(proyecto.estado)}>{proyecto.estado}</Badge>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6">{proyecto.resumen}</p>

                      {/* Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Información General</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-gray-500" />
                              <span>Autor: {proyecto.autor}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-gray-500" />
                              <span>
                                Presentado: {new Date(proyecto.fechaPresentacion).toLocaleDateString("es-UY")}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-gray-500" />
                              <span>Comisión: {proyecto.comision}</span>
                            </div>
                          </div>
                        </div>

                        {proyecto.votos && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Última Votación</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-green-600">A favor:</span>
                                <span className="font-medium">{proyecto.votos.favor}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-red-600">En contra:</span>
                                <span className="font-medium">{proyecto.votos.contra}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Abstenciones:</span>
                                <span className="font-medium">{proyecto.votos.abstencion}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Documents */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Documentos</h4>
                        <div className="flex flex-wrap gap-2">
                          {proyecto.documentos.map((doc, idx) => (
                            <Button key={idx} variant="outline" size="sm" className="bg-transparent">
                              <Download className="h-3 w-3 mr-1" />
                              {doc}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                      <Card className="bg-gray-50">
                        <CardContent className="p-6">
                          <h4 className="font-semibold mb-4">Próximos Pasos</h4>
                          <div className="space-y-3">
                            <div className="text-sm">
                              <span className="text-gray-600">Próxima fecha:</span>
                              <div className="font-medium">
                                {new Date(proyecto.proximaFecha).toLocaleDateString("es-UY")}
                              </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-red-600 h-2 rounded-full"
                                style={{
                                  width:
                                    proyecto.estado === "Sancionado"
                                      ? "100%"
                                      : proyecto.estado === "Aprobado en Diputados"
                                        ? "75%"
                                        : proyecto.estado === "En Comisión"
                                          ? "50%"
                                          : "25%",
                                }}
                              ></div>
                            </div>
                            <div className="text-xs text-gray-500">
                              {proyecto.estado === "Sancionado"
                                ? "Proceso completado"
                                : proyecto.estado === "Aprobado en Diputados"
                                  ? "Pasa al Senado"
                                  : proyecto.estado === "En Comisión"
                                    ? "En análisis técnico"
                                    : "Estudio preliminar"}
                            </div>
                          </div>

                          <Button className="w-full mt-6 bg-red-600 hover:bg-red-700">Seguir Proyecto</Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <Card className="mt-16 bg-red-50 border-red-200">
          <CardContent className="text-center py-12">
            <h3 className="text-2xl font-bold text-red-800 mb-4">Seguí Nuestro Trabajo Legislativo</h3>
            <p className="text-red-700 mb-6 max-w-2xl mx-auto">
              Mantente informado sobre el avance de nuestros proyectos de ley y participa en el proceso legislativo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <a href="/participa/contacto">Contactar Legisladores</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
              >
                <a href="/propuestas">Ver Todas las Propuestas</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
