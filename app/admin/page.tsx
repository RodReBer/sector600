"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FileText, Users, MessageSquare, Calendar, Settings, Plus, Edit, Trash2 } from "lucide-react"

// Mock data for demonstration
const mockNews = [
  { id: 1, title: "Nueva propuesta educativa", status: "published", date: "2024-01-15" },
  { id: 2, title: "Reunión con productores", status: "draft", date: "2024-01-12" },
]

const mockProposals = [
  { id: 1, title: "Ley de Educación Técnica", status: "active", votes: 245 },
  { id: 2, title: "Desarrollo Rural Sostenible", status: "draft", votes: 0 },
]

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [credentials, setCredentials] = useState({ username: "", password: "" })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple authentication - in production, use proper auth
    if (credentials.username === "admin" && credentials.password === "sector600") {
      setIsAuthenticated(true)
    } else {
      alert("Credenciales incorrectas")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Panel de Administración</CardTitle>
            <CardDescription>Ingresa tus credenciales para acceder</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username">Usuario</Label>
                <Input
                  id="username"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                Ingresar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Panel de Administración</h1>
          <p className="text-gray-600">Gestiona el contenido del sitio web del Sector 600</p>
        </div>

        <Tabs defaultValue="news" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="news" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Noticias
            </TabsTrigger>
            <TabsTrigger value="proposals" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Propuestas
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Eventos
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Usuarios
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Configuración
            </TabsTrigger>
          </TabsList>

          {/* News Management */}
          <TabsContent value="news">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Gestión de Noticias</h2>
                <Button className="bg-red-600 hover:bg-red-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Nueva Noticia
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Crear/Editar Noticia</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="newsTitle">Título</Label>
                      <Input id="newsTitle" placeholder="Título de la noticia" />
                    </div>
                    <div>
                      <Label htmlFor="newsCategory">Categoría</Label>
                      <Input id="newsCategory" placeholder="Ej: Legislativa, Comunicado, Agenda" />
                    </div>
                    <div>
                      <Label htmlFor="newsContent">Contenido</Label>
                      <Textarea id="newsContent" rows={6} placeholder="Contenido de la noticia..." />
                    </div>
                    <div className="flex gap-2">
                      <Button type="submit" className="bg-red-600 hover:bg-red-700">
                        Publicar
                      </Button>
                      <Button type="button" variant="outline">
                        Guardar Borrador
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Noticias Existentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockNews.map((news) => (
                      <div key={news.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold">{news.title}</h3>
                          <p className="text-sm text-gray-500">{news.date}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={news.status === "published" ? "default" : "secondary"}>
                            {news.status === "published" ? "Publicado" : "Borrador"}
                          </Badge>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Proposals Management */}
          <TabsContent value="proposals">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Gestión de Propuestas</h2>
                <Button className="bg-red-600 hover:bg-red-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Nueva Propuesta
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Crear/Editar Propuesta de Ley</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="proposalTitle">Título de la Propuesta</Label>
                      <Input id="proposalTitle" placeholder="Título de la propuesta de ley" />
                    </div>
                    <div>
                      <Label htmlFor="proposalSummary">Resumen</Label>
                      <Textarea id="proposalSummary" rows={3} placeholder="Resumen ejecutivo de la propuesta..." />
                    </div>
                    <div>
                      <Label htmlFor="proposalContent">Contenido Completo</Label>
                      <Textarea id="proposalContent" rows={8} placeholder="Texto completo de la propuesta de ley..." />
                    </div>
                    <div>
                      <Label htmlFor="proposalFile">Archivo PDF (opcional)</Label>
                      <Input id="proposalFile" type="file" accept=".pdf" />
                    </div>
                    <div className="flex gap-2">
                      <Button type="submit" className="bg-red-600 hover:bg-red-700">
                        Publicar Propuesta
                      </Button>
                      <Button type="button" variant="outline">
                        Guardar Borrador
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Propuestas Existentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockProposals.map((proposal) => (
                      <div key={proposal.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold">{proposal.title}</h3>
                          <p className="text-sm text-gray-500">{proposal.votes} votos ciudadanos</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={proposal.status === "active" ? "default" : "secondary"}>
                            {proposal.status === "active" ? "Activa" : "Borrador"}
                          </Badge>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Events Management */}
          <TabsContent value="events">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Gestión de Eventos</h2>
                <Button className="bg-red-600 hover:bg-red-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Nuevo Evento
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Crear/Editar Evento</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="eventTitle">Título del Evento</Label>
                        <Input id="eventTitle" placeholder="Nombre del evento" />
                      </div>
                      <div>
                        <Label htmlFor="eventDate">Fecha</Label>
                        <Input id="eventDate" type="date" />
                      </div>
                      <div>
                        <Label htmlFor="eventTime">Hora</Label>
                        <Input id="eventTime" type="time" />
                      </div>
                      <div>
                        <Label htmlFor="eventLocation">Ubicación</Label>
                        <Input id="eventLocation" placeholder="Dirección del evento" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="eventDescription">Descripción</Label>
                      <Textarea id="eventDescription" rows={4} placeholder="Descripción del evento..." />
                    </div>
                    <Button type="submit" className="bg-red-600 hover:bg-red-700">
                      Crear Evento
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Users Management */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Gestión de Usuarios</CardTitle>
                <CardDescription>Administra los usuarios registrados y sus permisos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Funcionalidad de gestión de usuarios en desarrollo...</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Configuración del Sitio</CardTitle>
                <CardDescription>Ajustes generales del sitio web</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="siteTitle">Título del Sitio</Label>
                    <Input id="siteTitle" defaultValue="Sector 600 - Partido Colorado" />
                  </div>
                  <div>
                    <Label htmlFor="siteDescription">Descripción</Label>
                    <Textarea id="siteDescription" defaultValue="Sitio oficial del Sector 600 del Partido Colorado" />
                  </div>
                  <div>
                    <Label htmlFor="contactEmail">Email de Contacto</Label>
                    <Input id="contactEmail" type="email" defaultValue="info@sector600.uy" />
                  </div>
                  <Button type="submit" className="bg-red-600 hover:bg-red-700">
                    Guardar Configuración
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
