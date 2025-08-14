"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { collection, addDoc, query, orderBy, getDocs, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Alert } from "@/components/ui/alert";
import { Lightbulb, Send, Users, ThumbsUp, MessageSquare, TrendingUp, Star } from "lucide-react";

const categorias = [
  "Educación",
  "Salud",
  "Transporte",
  "Medio Ambiente",
  "Economía",
  "Seguridad",
  "Cultura",
  "Deportes",
  "Vivienda",
  "Tecnología",
  "Desarrollo Rural",
  "Participación Ciudadana",
]

// Interface for propuestas
interface Propuesta {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: string;
  nombre: string;
  fecha: Date;
  destacada?: boolean;
}

export default function PlataformaCiudadanaPage() {
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    descripcion: "",
    justificacion: "",
    beneficiarios: "",
    recursos: "",
    nombre: "",
    email: "",
    departamento: "",
    telefono: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [propuestasDestacadas, setPropuestasDestacadas] = useState<Propuesta[]>([]);
  const router = useRouter();
  
  useEffect(() => {
    const loadPropuestasDestacadas = async () => {
      try {
        const q = query(
          collection(db, "propuestas"), 
          where("destacada", "==", true),
          orderBy("fecha", "desc")
        );
        const querySnapshot = await getDocs(q);
        const propuestasData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          fecha: doc.data().fecha.toDate(),
        })) as Propuesta[];
        setPropuestasDestacadas(propuestasData);
      } catch (error) {
        console.error("Error loading propuestas destacadas:", error);
      }
    };

    loadPropuestasDestacadas();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      await addDoc(collection(db, "propuestas"), {
        titulo: formData.titulo,
        descripcion: formData.descripcion,
        fecha: new Date(),
        // Añadiendo el resto de los campos
        categoria: formData.categoria,
        justificacion: formData.justificacion,
        beneficiarios: formData.beneficiarios,
        recursos: formData.recursos,
        nombre: formData.nombre,
        email: formData.email,
        departamento: formData.departamento,
        telefono: formData.telefono,
      });
      
      setSuccess(true);
      // Reset form
      setFormData({
        titulo: "",
        categoria: "",
        descripcion: "",
        justificacion: "",
        beneficiarios: "",
        recursos: "",
        nombre: "",
        email: "",
        departamento: "",
        telefono: "",
      });
      
      // Redirect after 2 seconds
      setTimeout(() => {
        router.push("/propuestas");
      }, 2000);
    } catch (error) {
      setError("Error al enviar la propuesta. Por favor, intente nuevamente.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-100 text-red-800">Participá</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Plataforma Ciudadana</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tu voz importa. Presentá tus ideas e iniciativas para mejorar el Uruguay. Las mejores propuestas son
            analizadas por nuestros equipos técnicos e incorporadas a nuestro programa de gobierno.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Lightbulb className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">247</div>
              <div className="text-gray-600">Propuestas Recibidas</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">1,234</div>
              <div className="text-gray-600">Ciudadanos Participando</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <ThumbsUp className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">8,567</div>
              <div className="text-gray-600">Votos Emitidos</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">23</div>
              <div className="text-gray-600">Propuestas Implementadas</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulario */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Presentar Nueva Propuesta
                </CardTitle>
                <CardDescription>
                  Completa el formulario con tu idea. Nuestro equipo la revisará y la pondrá a consideración de la
                  comunidad.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Información de la Propuesta */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Información de la Propuesta</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="titulo">Título de la propuesta *</Label>
                        <Input
                          id="titulo"
                          required
                          placeholder="Ej: Mejoramiento del transporte público en mi barrio"
                          value={formData.titulo}
                          onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                        />
                      </div>

                      <div>
                        <Label htmlFor="categoria">Categoría *</Label>
                        <Select
                          value={formData.categoria}
                          onValueChange={(value) => setFormData({ ...formData, categoria: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona una categoría" />
                          </SelectTrigger>
                          <SelectContent>
                            {categorias.map((cat) => (
                              <SelectItem key={cat} value={cat}>
                                {cat}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="descripcion">Descripción de la propuesta *</Label>
                        <Textarea
                          id="descripcion"
                          required
                          rows={4}
                          placeholder="Describe tu propuesta de manera clara y concisa..."
                          value={formData.descripcion}
                          onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                        />
                      </div>

                      <div>
                        <Label htmlFor="justificacion">Justificación *</Label>
                        <Textarea
                          id="justificacion"
                          required
                          rows={3}
                          placeholder="¿Por qué es importante esta propuesta? ¿Qué problema resuelve?"
                          value={formData.justificacion}
                          onChange={(e) => setFormData({ ...formData, justificacion: e.target.value })}
                        />
                      </div>

                      <div>
                        <Label htmlFor="beneficiarios">¿Quiénes se beneficiarían?</Label>
                        <Input
                          id="beneficiarios"
                          placeholder="Ej: Vecinos del barrio, estudiantes, adultos mayores..."
                          value={formData.beneficiarios}
                          onChange={(e) => setFormData({ ...formData, beneficiarios: e.target.value })}
                        />
                      </div>

                      <div>
                        <Label htmlFor="recursos">Recursos necesarios (opcional)</Label>
                        <Textarea
                          id="recursos"
                          rows={2}
                          placeholder="¿Qué recursos serían necesarios para implementar esta propuesta?"
                          value={formData.recursos}
                          onChange={(e) => setFormData({ ...formData, recursos: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Información Personal */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Tus Datos</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nombre">Nombre completo *</Label>
                        <Input
                          id="nombre"
                          required
                          value={formData.nombre}
                          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
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
                        <Label htmlFor="departamento">Departamento</Label>
                        <Input
                          id="departamento"
                          value={formData.departamento}
                          onChange={(e) => setFormData({ ...formData, departamento: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="telefono">Teléfono</Label>
                        <Input
                          id="telefono"
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {error && (
                    <Alert variant="destructive" className="mb-4">
                      {error}
                    </Alert>
                  )}

                  {success && (
                    <Alert className="mb-4 bg-green-50 text-green-800 border-green-200">
                      ¡Propuesta enviada con éxito! Serás redirigido a la página de propuestas.
                    </Alert>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700"
                    disabled={submitting}
                  >
                    {submitting ? "Enviando..." : "Enviar Propuesta"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Cómo funciona */}
            <Card>
              <CardHeader>
                <CardTitle>¿Cómo funciona?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Enviá tu propuesta</h4>
                      <p className="text-sm text-gray-600">Completa el formulario con tu idea</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Revisión técnica</h4>
                      <p className="text-sm text-gray-600">Nuestro equipo analiza la viabilidad</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Votación ciudadana</h4>
                      <p className="text-sm text-gray-600">La comunidad vota las mejores ideas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium">Implementación</h4>
                      <p className="text-sm text-gray-600">Las propuestas más votadas se implementan</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Propuestas Destacadas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  Propuestas Destacadas
                </CardTitle>
                <CardDescription>
                  Las propuestas más relevantes seleccionadas por nuestro equipo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {propuestasDestacadas.map((propuesta) => (
                    <div key={propuesta.id} className="border-b pb-4 last:border-0 last:pb-0">
                      <h4 className="font-medium text-gray-900 mb-1">{propuesta.titulo}</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{propuesta.categoria}</Badge>
                        <span className="text-sm text-gray-500">
                          {propuesta.fecha.toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">{propuesta.descripcion}</p>
                      <p className="text-sm text-gray-500 mt-1">Por: {propuesta.nombre}</p>
                    </div>
                  ))}
                  {propuestasDestacadas.length === 0 && (
                    <p className="text-sm text-gray-500 text-center py-4">
                      No hay propuestas destacadas en este momento
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Cómo funciona */}
            <Card>
              <CardHeader>
                <CardTitle>Propuestas Recientes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {propuestasRecientes.map((prop, index) => (
                    <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
                      <h4 className="font-medium text-sm mb-1">{prop.titulo}</h4>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>por {prop.autor}</span>
                        <span>{prop.fecha}</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <Badge variant="outline" className="text-xs">
                          {prop.categoria}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <ThumbsUp className="h-3 w-3" />
                          {prop.votos}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contacto */}
            <Card>
              <CardHeader>
                <CardTitle>¿Necesitás ayuda?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Si tenés dudas sobre cómo presentar tu propuesta, contactanos.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Contactar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
