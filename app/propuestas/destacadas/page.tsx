import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ThumbsUp, MessageSquare, Share2, User, Calendar, ArrowRight } from "lucide-react"

const propuestasDestacadas = [
  {
    id: 1,
    titulo: "Mejoramiento del transporte público en zonas periféricas",
    descripcion:
      "Propuesta integral para mejorar la frecuencia y cobertura del transporte público en los barrios periféricos de Montevideo, especialmente en horarios nocturnos y fines de semana.",
    autor: "María González",
    departamento: "Montevideo",
    fecha: "2024-01-15",
    votos: 1247,
    comentarios: 89,
    categoria: "Transporte",
    estado: "En análisis",
    impacto: "Alto",
    detalles: [
      "Aumento de frecuencias en líneas que conectan barrios periféricos",
      "Extensión de horarios nocturnos hasta las 2:00 AM",
      "Creación de nuevas líneas alimentadoras",
      "Mejoramiento de paradas y refugios",
      "Sistema de información en tiempo real",
    ],
  },
  {
    id: 2,
    titulo: "Creación de espacios verdes en barrios carenciados",
    descripcion:
      "Iniciativa para crear plazas y espacios verdes en barrios que carecen de áreas de esparcimiento, promoviendo la integración social y mejorando la calidad de vida.",
    autor: "Carlos Rodríguez",
    departamento: "Canelones",
    fecha: "2024-01-10",
    votos: 892,
    comentarios: 56,
    categoria: "Urbanismo",
    estado: "Aprobada",
    impacto: "Medio",
    detalles: [
      "Identificación de terrenos disponibles en barrios carenciados",
      "Diseño participativo con vecinos",
      "Instalación de juegos infantiles y equipamiento deportivo",
      "Programas de mantenimiento comunitario",
      "Actividades recreativas y culturales",
    ],
  },
  {
    id: 3,
    titulo: "Programa de apoyo a emprendedores jóvenes",
    descripcion:
      "Propuesta para crear un programa específico de apoyo a emprendedores menores de 30 años, con acceso a crédito blando y capacitación empresarial.",
    autor: "Ana Martínez",
    departamento: "Salto",
    fecha: "2024-01-08",
    votos: 1156,
    comentarios: 73,
    categoria: "Economía",
    estado: "En desarrollo",
    impacto: "Alto",
    detalles: [
      "Créditos con tasa preferencial para jóvenes emprendedores",
      "Programa de mentorías con empresarios exitosos",
      "Capacitación en gestión empresarial y marketing digital",
      "Espacios de coworking subsidiados",
      "Red de contactos y networking",
    ],
  },
  {
    id: 4,
    titulo: "Telemedicina para zonas rurales",
    descripcion:
      "Implementación de un sistema de telemedicina para brindar atención médica especializada a poblaciones rurales alejadas de centros urbanos.",
    autor: "Dr. Pedro López",
    departamento: "Tacuarembó",
    fecha: "2024-01-05",
    votos: 743,
    comentarios: 42,
    categoria: "Salud",
    estado: "En análisis",
    impacto: "Alto",
    detalles: [
      "Equipamiento tecnológico en centros de salud rurales",
      "Capacitación de personal local en telemedicina",
      "Conexión con especialistas de hospitales centrales",
      "Sistema de historias clínicas digitales",
      "Programa de seguimiento remoto de pacientes crónicos",
    ],
  },
]

const getEstadoColor = (estado: string) => {
  switch (estado) {
    case "Aprobada":
      return "bg-green-100 text-green-800"
    case "En desarrollo":
      return "bg-blue-100 text-blue-800"
    case "En análisis":
      return "bg-yellow-100 text-yellow-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getImpactoColor = (impacto: string) => {
  switch (impacto) {
    case "Alto":
      return "bg-red-100 text-red-800"
    case "Medio":
      return "bg-orange-100 text-orange-800"
    case "Bajo":
      return "bg-gray-100 text-gray-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function PropuestasDestacadasPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-100 text-red-800">Propuestas</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Propuestas Ciudadanas Destacadas</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Las mejores propuestas presentadas por la ciudadanía a través de nuestra plataforma participativa. Ideas que
            están siendo analizadas e implementadas por nuestros equipos técnicos.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-600 mb-2">247</div>
              <div className="text-gray-600">Propuestas Recibidas</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600 mb-2">23</div>
              <div className="text-gray-600">Propuestas Aprobadas</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">45</div>
              <div className="text-gray-600">En Desarrollo</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">12.5K</div>
              <div className="text-gray-600">Votos Ciudadanos</div>
            </CardContent>
          </Card>
        </div>

        {/* Propuestas */}
        <div className="space-y-8">
          {propuestasDestacadas.map((propuesta) => (
            <Card key={propuesta.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Main Content */}
                  <div className="lg:col-span-3">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <Badge variant="outline">{propuesta.categoria}</Badge>
                      <Badge className={getEstadoColor(propuesta.estado)}>{propuesta.estado}</Badge>
                      <Badge className={getImpactoColor(propuesta.impacto)}>Impacto {propuesta.impacto}</Badge>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{propuesta.titulo}</h2>
                    <p className="text-gray-600 mb-6">{propuesta.descripcion}</p>

                    {/* Details */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3">Detalles de la propuesta:</h3>
                      <ul className="space-y-2">
                        {propuesta.detalles.map((detalle, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{detalle}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{propuesta.autor}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(propuesta.fecha).toLocaleDateString("es-UY")}</span>
                      </div>
                      <span>{propuesta.departamento}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        {propuesta.votos} votos
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        {propuesta.comentarios} comentarios
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Share2 className="h-4 w-4 mr-2" />
                        Compartir
                      </Button>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="lg:col-span-1">
                    <Card className="bg-gray-50">
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-4">Estado del Proyecto</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span>Progreso:</span>
                            <span className="font-medium">
                              {propuesta.estado === "Aprobada"
                                ? "100%"
                                : propuesta.estado === "En desarrollo"
                                  ? "60%"
                                  : "25%"}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-red-600 h-2 rounded-full"
                              style={{
                                width:
                                  propuesta.estado === "Aprobada"
                                    ? "100%"
                                    : propuesta.estado === "En desarrollo"
                                      ? "60%"
                                      : "25%",
                              }}
                            ></div>
                          </div>
                        </div>

                        <Button className="w-full mt-6 bg-red-600 hover:bg-red-700">Ver Detalles Completos</Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-16 bg-red-50 border-red-200">
          <CardContent className="text-center py-12">
            <h3 className="text-2xl font-bold text-red-800 mb-4">¿Tenés una propuesta?</h3>
            <p className="text-red-700 mb-6 max-w-2xl mx-auto">
              Presentá tu idea a través de nuestra plataforma ciudadana. Las mejores propuestas son analizadas por
              nuestros equipos técnicos e incorporadas a nuestro programa de gobierno.
            </p>
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <a href="/participa/plataforma">
                Presentar Propuesta
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
