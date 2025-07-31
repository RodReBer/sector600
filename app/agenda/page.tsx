"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, CalendarIcon, ExternalLink } from "lucide-react"

export default function AgendaPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-red-100 text-red-800">Agenda</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Agenda de Actividades</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente al día con todas nuestras actividades, eventos y reuniones. Participá activamente en la
            construcción del Uruguay que queremos.
          </p>
        </div>

        {/* Google Calendar Integration */}
        <div className="max-w-6xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5" />
                Calendario de Eventos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <CalendarIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Google Calendar</h3>
                  <p className="text-gray-600 mb-4">
                    Aquí se integrará el calendario de Google con todos nuestros eventos
                  </p>
                  <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                    <p>
                      <strong>Para integrar:</strong>
                    </p>
                    <p>1. Crear calendario público en Google Calendar</p>
                    <p>2. Obtener el código de inserción</p>
                    <p>3. Reemplazar este placeholder con el iframe</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Próximos Eventos Destacados */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-50 rounded-lg p-4 text-center min-w-[80px]">
                    <div className="text-2xl font-bold text-red-600">15</div>
                    <div className="text-sm text-red-600 font-medium">FEB</div>
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-2 bg-red-100 text-red-800">Plenario</Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Plenario Departamental - Montevideo</h3>
                    <p className="text-gray-600 mb-4">
                      Reunión mensual del Sector 600 en Montevideo para analizar la coyuntura política.
                    </p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>19:00 hs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>Sede Partidaria - 18 de Julio 1234</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>150 participantes esperados</span>
                      </div>
                    </div>
                    <Button size="sm" className="mt-4 bg-red-600 hover:bg-red-700">
                      Confirmar Asistencia
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 text-center min-w-[80px]">
                    <div className="text-2xl font-bold text-blue-600">20</div>
                    <div className="text-sm text-blue-600 font-medium">FEB</div>
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-2 bg-blue-100 text-blue-800">Conferencia</Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">El Futuro de la Educación</h3>
                    <p className="text-gray-600 mb-4">
                      Robert Silva disertará sobre las propuestas educativas del Sector 600.
                    </p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>18:30 hs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>Auditorio Universidad Católica</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>300 participantes esperados</span>
                      </div>
                    </div>
                    <Button size="sm" className="mt-4 bg-blue-600 hover:bg-blue-700">
                      Más Información
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enlaces útiles */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Accesos Rápidos</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" className="bg-transparent">
                <a href="#" className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Ver Calendario Completo
                </a>
              </Button>
              <Button asChild variant="outline" className="bg-transparent">
                <a href="#" className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  Suscribirse al Calendario
                </a>
              </Button>
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <a href="/participa/contacto">Proponer Evento</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
