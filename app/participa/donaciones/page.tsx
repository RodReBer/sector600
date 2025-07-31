"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Shield, Heart, ExternalLink } from "lucide-react"

const donationAmounts = [
  { value: "500", label: "$500" },
  { value: "1000", label: "$1.000" },
  { value: "2500", label: "$2.500" },
  { value: "5000", label: "$5.000" },
  { value: "custom", label: "Otro monto" },
]

export default function DonationsPage() {
  const [selectedAmount, setSelectedAmount] = useState("1000")
  const [customAmount, setCustomAmount] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ci: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Donation submitted:", { selectedAmount, customAmount, formData })
    // Aquí se integrará PayPal
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-100 text-red-800">Participá</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Doná al Sector 600</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tu aporte nos ayuda a seguir trabajando por un Uruguay mejor. Cada contribución cuenta para fortalecer
              nuestro proyecto político.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Donation Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Realizar Donación
                  </CardTitle>
                  <CardDescription>Completa el formulario para hacer tu aporte al Sector 600</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Amount Selection */}
                    <div>
                      <Label className="text-base font-semibold mb-4 block">Selecciona el monto de tu donación</Label>
                      <RadioGroup
                        value={selectedAmount}
                        onValueChange={setSelectedAmount}
                        className="grid grid-cols-2 md:grid-cols-3 gap-4"
                      >
                        {donationAmounts.map((amount) => (
                          <div key={amount.value}>
                            <RadioGroupItem value={amount.value} id={amount.value} className="peer sr-only" />
                            <Label
                              htmlFor={amount.value}
                              className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-red-600 peer-data-[state=checked]:bg-red-50 cursor-pointer transition-all"
                            >
                              {amount.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>

                      {selectedAmount === "custom" && (
                        <div className="mt-4">
                          <Label htmlFor="customAmount">Monto personalizado (UYU)</Label>
                          <Input
                            id="customAmount"
                            type="number"
                            placeholder="Ingresa el monto"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      )}
                    </div>

                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nombre completo *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="ci">Cédula de identidad *</Label>
                        <Input
                          id="ci"
                          required
                          value={formData.ci}
                          onChange={(e) => setFormData({ ...formData, ci: e.target.value })}
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
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Mensaje (opcional)</Label>
                      <Textarea
                        id="message"
                        placeholder="¿Quieres dejarnos algún mensaje?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    {/* PayPal Integration Placeholder */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">Integración PayPal</h3>
                      <p className="text-gray-600 mb-4">Aquí se integrará el botón de PayPal para procesar el pago</p>
                      <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                        <p>
                          <strong>Para integrar PayPal:</strong>
                        </p>
                        <p>1. Configurar cuenta PayPal Business</p>
                        <p>2. Obtener Client ID y Secret</p>
                        <p>3. Implementar PayPal SDK</p>
                        <p>4. Configurar webhooks para confirmaciones</p>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-lg py-3">
                      Proceder al Pago con PayPal
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Information Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Donación Segura
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Transacciones encriptadas con PayPal
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Datos protegidos y seguros
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Recibo automático por email
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Cumplimiento legal electoral
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>¿Por qué donar?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">Tu donación nos permite:</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span>Financiar campañas de comunicación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span>Organizar eventos y actividades</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span>Desarrollar propuestas técnicas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span>Mantener la estructura territorial</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span>Promover la participación ciudadana</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Información Legal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-500 mb-4">
                    Las donaciones están reguladas por la Ley de Financiamiento de Partidos Políticos. Todas las
                    contribuciones son reportadas a la Corte Electoral según corresponde.
                  </p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver Marco Legal
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
