"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, query, orderBy, getDocs, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lightbulb, TrendingUp, MapPin, ChartBar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";

interface Propuesta {
  id: string;
  titulo: string;
  descripcion: string;
  fecha: Date;
  categoria: string;
  departamento: string;
  nombre: string;
  justificacion: string;
  beneficiarios: string;
}

interface CategoryStat {
  categoria: string;
  count: number;
}

interface DepartmentStat {
  departamento: string;
  count: number;
}

export default function PropuestasPage() {
  const [propuestas, setPropuestas] = useState<Propuesta[]>([]);
  const [categoryStats, setCategoryStats] = useState<CategoryStat[]>([]);
  const [departmentStats, setDepartmentStats] = useState<DepartmentStat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    categoria: "",
    departamento: "",
    nombre: "",
    justificacion: "",
    beneficiarios: "",
  });

  useEffect(() => {
    const loadPropuestas = async () => {
      // Set a timeout to avoid hanging if Firestore doesn't respond
      const timeoutId = setTimeout(() => {
        if (loading) {
          setError("Tiempo de espera agotado. Por favor, recarga la página.");
          setLoading(false);
        }
      }, 10000); // 10 second timeout
      
      try {
        // Check if db is initialized
        if (!db) {
          setError("Base de datos no inicializada. Por favor, recarga la página.");
          setLoading(false);
          clearTimeout(timeoutId);
          return;
        }
        
        const q = query(collection(db, "propuestas"), orderBy("fecha", "desc"));
        const querySnapshot = await getDocs(q);
        
        // Process documents with error handling for each document
        const propuestasData = querySnapshot.docs.map(doc => {
          try {
            const data = doc.data();
            // Safely handle date conversion with fallback
            let fecha = new Date();
            if (data.fecha) {
              try {
                fecha = data.fecha.toDate();
              } catch (dateError) {
                console.error("Error converting date:", dateError);
              }
            }
            
            return {
              id: doc.id,
              ...data,
              // Ensure all required fields have default values
              titulo: data.titulo || "Sin título",
              descripcion: data.descripcion || "Sin descripción",
              categoria: data.categoria || "General",
              departamento: data.departamento || "No especificado",
              nombre: data.nombre || "Anónimo",
              justificacion: data.justificacion || "",
              beneficiarios: data.beneficiarios || "",
              fecha: fecha,
            };
          } catch (docError) {
            console.error("Error processing document:", docError);
            // Return a safe default document
            return {
              id: doc.id,
              titulo: "Error al cargar propuesta",
              descripcion: "No se pudo cargar el contenido de esta propuesta",
              categoria: "Error",
              departamento: "No disponible",
              nombre: "Sistema",
              justificacion: "",
              beneficiarios: "",
              fecha: new Date(),
            };
          }
        }) as Propuesta[];
        
        setPropuestas(propuestasData);

        // Calculate statistics with null safety
        const categories: { [key: string]: number } = {};
        const departments: { [key: string]: number } = {};

        propuestasData.forEach(propuesta => {
          const categoria = propuesta.categoria || "No especificada";
          const departamento = propuesta.departamento || "No especificado";
          
          categories[categoria] = (categories[categoria] || 0) + 1;
          departments[departamento] = (departments[departamento] || 0) + 1;
        });

        const categoryStats = Object.entries(categories)
          .map(([categoria, count]) => ({ categoria, count }))
          .sort((a, b) => b.count - a.count);

        const departmentStats = Object.entries(departments)
          .map(([departamento, count]) => ({ departamento, count }))
          .sort((a, b) => b.count - a.count);

        setCategoryStats(categoryStats);
        setDepartmentStats(departmentStats);
        
        clearTimeout(timeoutId);
      } catch (error) {
        console.error("Error loading proposals:", error);
        setError("Error al cargar las propuestas. Por favor, intenta nuevamente.");
        clearTimeout(timeoutId);
      } finally {
        setLoading(false);
      }
    };

    loadPropuestas();
    
    // Cleanup function
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-100 text-red-800">Propuestas</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Propuestas Ciudadanas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conocé las propuestas enviadas por la ciudadanía y sé parte del cambio que queremos para Uruguay.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                </div>
                {loading ? (
                  <div className="animate-pulse h-8 bg-gray-200 rounded w-16 mx-auto mb-1"></div>
                ) : (
                  <div className="text-2xl font-bold text-gray-900 mb-1">{propuestas.length}</div>
                )}
                <div className="text-gray-600">Propuestas Recibidas</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                {loading ? (
                  <div className="animate-pulse h-8 bg-gray-200 rounded w-32 mx-auto mb-1"></div>
                ) : (
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {categoryStats && categoryStats.length > 0 
                      ? categoryStats[0]?.categoria || "N/A" 
                      : "N/A"}
                  </div>
                )}
                <div className="text-gray-600">Categoría más Popular</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                {loading ? (
                  <div className="animate-pulse h-8 bg-gray-200 rounded w-32 mx-auto mb-1"></div>
                ) : (
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {departmentStats && departmentStats.length > 0
                      ? departmentStats[0]?.departamento || "N/A" 
                      : "N/A"}
                  </div>
                )}
                <div className="text-gray-600">Departamento más Activo</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-12">
          <Button asChild>
            <Link href="/participa/plataforma">
              Enviar mi propuesta
            </Link>
          </Button>
        </div>

        {/* Proposals List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-pulse space-y-4 max-w-md mx-auto">
              <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
              <div className="h-24 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              <div className="h-24 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        ) : error ? (
          <div className="text-center bg-red-50 border border-red-100 rounded-lg p-6 max-w-lg mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="rounded-full bg-red-100 p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
            </div>
            <p className="text-red-600 font-medium mb-2">Error</p>
            <p className="text-gray-600 mb-4">{error}</p>
            <Button 
              onClick={() => window.location.reload()} 
              className="bg-red-600 hover:bg-red-700"
            >
              Reintentar
            </Button>
          </div>
        ) : propuestas.length === 0 ? (
          <div className="text-center bg-gray-50 border border-gray-100 rounded-lg p-6 max-w-lg mx-auto">
            <p className="text-gray-600 mb-4">No hay propuestas disponibles en este momento.</p>
            <Button asChild>
              <Link href="/participa/plataforma">
                Sé el primero en enviar una propuesta
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-6">
            {propuestas.map((propuesta) => (
              <Card key={propuesta.id} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{propuesta.titulo}</h3>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="secondary">{propuesta.categoria}</Badge>
                          {propuesta.departamento && (
                            <Badge variant="outline">{propuesta.departamento}</Badge>
                          )}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {propuesta.fecha instanceof Date ? 
                          propuesta.fecha.toLocaleDateString() : 
                          "Fecha no disponible"
                        }
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{propuesta.descripcion}</p>
                    {propuesta.justificacion && (
                      <div className="mb-4">
                        <h4 className="font-medium mb-1">Justificación:</h4>
                        <p className="text-gray-600">{propuesta.justificacion}</p>
                      </div>
                    )}
                    {propuesta.beneficiarios && (
                      <div className="mb-4">
                        <h4 className="font-medium mb-1">Beneficiarios:</h4>
                        <p className="text-gray-600">{propuesta.beneficiarios}</p>
                      </div>
                    )}
                    <div className="text-sm text-gray-500">
                      Propuesta por: {propuesta.nombre || "Anónimo"}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Category Statistics */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <ChartBar className="h-5 w-5 mr-2 text-red-600" />
            Estadísticas por Categoría
          </h2>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="h-5 bg-gray-200 rounded w-24"></div>
                      <div className="h-5 bg-gray-200 rounded w-16"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <Card>
              <CardContent className="p-4 text-center text-gray-500">
                No se pudieron cargar las estadísticas
              </CardContent>
            </Card>
          ) : categoryStats.length === 0 ? (
            <Card>
              <CardContent className="p-4 text-center text-gray-500">
                No hay datos de categorías disponibles
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryStats.map((stat) => (
                <Card key={stat.categoria} className="hover:shadow-md transition-all">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="font-medium">{stat.categoria}</div>
                      <Badge>{stat.count} propuesta{stat.count !== 1 ? 's' : ''}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Department Statistics */}
        <div className="mt-12 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-red-600" />
            Estadísticas por Departamento
          </h2>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="h-5 bg-gray-200 rounded w-24"></div>
                      <div className="h-5 bg-gray-200 rounded w-16"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <Card>
              <CardContent className="p-4 text-center text-gray-500">
                No se pudieron cargar las estadísticas
              </CardContent>
            </Card>
          ) : departmentStats.length === 0 ? (
            <Card>
              <CardContent className="p-4 text-center text-gray-500">
                No hay datos de departamentos disponibles
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {departmentStats.map((stat) => (
                <Card key={stat.departamento} className="hover:shadow-md transition-all">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="font-medium">{stat.departamento}</div>
                      <Badge>{stat.count} propuesta{stat.count !== 1 ? 's' : ''}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
