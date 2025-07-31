import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Heart, Lightbulb } from "lucide-react"

export default function QuienesSomosPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-100 text-red-800">Nosotros</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">¿Quiénes somos?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos el Sector 600 del Partido Colorado, un movimiento político comprometido con la construcción de un
            Uruguay más justo, próspero y solidario.
          </p>
        </div>

        {/* Identity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Identidad</h2>
            <p className="text-lg text-gray-600 mb-6">
              El Sector 600 nace como una propuesta renovadora dentro del Partido Colorado, liderada por Robert Silva,
              con el objetivo de construir un proyecto político que responda a los desafíos del Uruguay del siglo XXI.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Nos caracterizamos por ser un sector inclusivo, dialoguista y comprometido con la participación ciudadana.
              Creemos en la política como herramienta de transformación social y en la importancia de escuchar a todos
              los sectores de la sociedad.
            </p>
            <p className="text-lg text-gray-600">
              Nuestro trabajo se basa en la construcción colectiva de propuestas, el diálogo permanente con la
              ciudadanía y el compromiso con la transparencia en la gestión pública.
            </p>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Robert Silva y el equipo del Sector 600"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nuestros Principios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Inclusión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Creemos en un Uruguay donde todos tengan oportunidades, sin importar su origen o condición social.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Transparencia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  La gestión pública debe ser transparente, con rendición de cuentas permanente a la ciudadanía.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Solidaridad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Trabajamos por una sociedad más solidaria, donde nadie quede atrás en el camino del progreso.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Innovación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Promovemos soluciones innovadoras para los desafíos actuales, adaptándonos a los nuevos tiempos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Manifesto */}
        <Card className="bg-red-50 border-red-200">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-red-800">Nuestro Manifiesto</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-red-700 italic">
              "Creemos en un Uruguay próspero, justo y solidario. Un país donde la educación sea la herramienta
              fundamental para el desarrollo, donde el trabajo digno sea una realidad para todos, y donde la
              participación ciudadana sea el motor de las transformaciones que necesitamos. Trabajamos cada día para
              construir ese Uruguay que soñamos, con diálogo, compromiso y la convicción de que juntos podemos lograr
              grandes cosas."
            </p>
            <p className="text-red-600 font-semibold mt-4">- Robert Silva y el Sector 600</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
