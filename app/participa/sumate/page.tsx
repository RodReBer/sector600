"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Users, Mail, Phone, MapPin, Heart } from "lucide-react"

const departamentos = [
  "Montevideo",
  "Canelones",
  "Maldonado",
  "Rocha",
  "Treinta y Tres",
  "Cerro Largo",
  "Rivera",
  "Artigas",
  "Salto",
  "Paysandú",
  "Río Negro",
  "Soriano",
  "Colonia",
  "San José",
  "Flores",
  "Florida",
  "Durazno",
  "Tacuarembó",
  "Lavalleja",
]

const areasInteres = [
  "Educación",
  "Salud",
  "Desarrollo Rural",
  "Economía y Empleo",
  "Medio Ambiente",
  "Cultura",
  "Deportes",
  "Juventud",
  "Género",
  "Derechos Humanos",
  "Seguridad",
  "Vivienda",
]

export default function SumatePage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    ci: "",
    departamento: "",
    localidad: "",
    profesion: "",
    experiencia: "",
    motivacion: "",
    areasInteres: [] as string[],
    disponibilidad: "",
    newsletter: false,
    terminos: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Aquí iría la lógica de envío
  }

  const handleAreaInteresChange = (area: string, checked: boolean) => {
    if (checked) {
      setFormData({ ...formData, areasInteres: [...formData.areasInteres, area] })
    } else {
      setFormData({ ...formData, areasInteres: formData.areasInteres.filter((a) => a !== area) })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-100 text-red-800">Participá</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sumate al Sector 600</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Únete a nuestro movimiento político y ayudanos a construir el Uruguay que queremos. Tu participación es
              fundamental para el cambio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Formulario de Adhesión
                  </CardTitle>
                  <CardDescription>
                    Completa tus datos para formar parte del Sector 600 y recibir información sobre nuestras
                    actividades.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Datos Personales */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Datos Personales</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="nombre">Nombre *</Label>
                          <Input
                            id="nombre"
                            required
                            value={formData.nombre}
                            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="apellido">Apellido *</Label>
                          <Input
                            id="apellido"
                            required
                            value={formData.apellido}
                            onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="telefono">Teléfono *</Label>
                          <Input
                            id="telefono"
                            required
                            value={formData.telefono}
                            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="ci">Cédula de Identidad *</Label>
                          <Input
                            id="ci"
                            required
                            value={formData.ci}
                            onChange={(e) => setFormData({ ...formData, ci: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="profesion">Profesión/Ocupación</Label>
                          <Input
                            id="profesion"
                            value={formData.profesion}
                            onChange={(e) => setFormData({ ...formData, profesion: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Ubicación */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Ubicación</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="departamento">Departamento *</Label>
                          <Select
                            value={formData.departamento}
                            onValueChange={(value) => setFormData({ ...formData, departamento: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona tu departamento" />
                            </SelectTrigger>
                            <SelectContent>
                              {departamentos.map((dept) => (
                                <SelectItem key={dept} value={dept}>
                                  {dept}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="localidad">Localidad</Label>
                          <Input
                            id="localidad"
                            value={formData.localidad}
                            onChange={(e) => setFormData({ ...formData, localidad: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Áreas de Interés */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Áreas de Interés</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {areasInteres.map((area) => (
                          <div key={area} className="flex items-center space-x-2">
                            <Checkbox
                              id={area}
                              checked={formData.areasInteres.includes(area)}
                              onCheckedChange={(checked) => handleAreaInteresChange(area, checked as boolean)}
                            />
                            <Label htmlFor={area} className="text-sm">
                              {area}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Experiencia y Motivación */}
                    <div>
                      <Label htmlFor="experiencia">Experiencia Política/Social</Label>
                      <Textarea
                        id="experiencia"
                        placeholder="Contanos sobre tu experiencia en política, organizaciones sociales, etc."
                        value={formData.experiencia}
                        onChange={(e) => setFormData({ ...formData, experiencia: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="motivacion">¿Por qué querés sumarte al Sector 600?</Label>
                      <Textarea
                        id="motivacion"
                        placeholder="Contanos qué te motiva a participar en nuestro proyecto político"
                        value={formData.motivacion}
                        onChange={(e) => setFormData({ ...formData, motivacion: e.target.value })}
                      />
                    </div>

                    {/* Disponibilidad */}
                    <div>
                      <Label htmlFor="disponibilidad">Disponibilidad para participar</Label>
                      <Select
                        value={formData.disponibilidad}
                        onValueChange={(value) => setFormData({ ...formData, disponibilidad: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="¿Cuánto tiempo podés dedicar?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pocas-horas">Pocas horas por mes</SelectItem>
                          <SelectItem value="algunas-horas">Algunas horas por semana</SelectItem>
                          <SelectItem value="varias-horas">Varias horas por semana</SelectItem>
                          <SelectItem value="tiempo-completo">Tiempo completo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="newsletter"
                          checked={formData.newsletter}
                          onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked as boolean })}
                        />
                        <Label htmlFor="newsletter">Quiero recibir el newsletter del Sector 600</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terminos"
                          checked={formData.terminos}
                          onCheckedChange={(checked) => setFormData({ ...formData, terminos: checked as boolean })}
                        />
                        <Label htmlFor="terminos">
                          Acepto los términos y condiciones y autorizo el uso de mis datos *
                        </Label>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={!formData.terminos}>
                      Sumarme al Sector 600
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    ¿Por qué sumarte?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span>Participá en la construcción de propuestas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span>Acceso a eventos y actividades exclusivas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span>Formación política y capacitación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span>Red de contactos y trabajo en equipo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span>Oportunidades de liderazgo territorial</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-red-500" />
                    <span>sumate@sector600.uy</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-red-500" />
                    <span>+598 2XXX XXXX</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span>Montevideo, Uruguay</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
