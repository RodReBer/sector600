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
      try {
        const q = query(collection(db, "propuestas"), orderBy("fecha", "desc"));
        const querySnapshot = await getDocs(q);
        const propuestasData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          fecha: doc.data().fecha.toDate(),
        })) as Propuesta[];
        
        setPropuestas(propuestasData);

        // Calculate statistics
        const categories: { [key: string]: number } = {};
        const departments: { [key: string]: number } = {};

        propuestasData.forEach(propuesta => {
          if (propuesta.categoria) {
            categories[propuesta.categoria] = (categories[propuesta.categoria] || 0) + 1;
          }
          if (propuesta.departamento) {
            departments[propuesta.departamento] = (departments[propuesta.departamento] || 0) + 1;
          }
        });

        const categoryStats = Object.entries(categories).map(([categoria, count]) => ({
          categoria,
          count,
        })).sort((a, b) => b.count - a.count);

        const departmentStats = Object.entries(departments).map(([departamento, count]) => ({
          departamento,
          count,
        })).sort((a, b) => b.count - a.count);

        setCategoryStats(categoryStats);
        setDepartmentStats(departmentStats);
      } catch (error) {
        setError("Error al cargar las propuestas");
      } finally {
        setLoading(false);
      }
    };

    loadPropuestas();
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
                <div className="text-2xl font-bold text-gray-900 mb-1">{propuestas.length}</div>
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
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {categoryStats[0]?.categoria || "N/A"}
                </div>
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
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {departmentStats[0]?.departamento || "N/A"}
                </div>
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
          <div className="text-center">
            <p className="text-gray-600">Cargando propuestas...</p>
          </div>
        ) : error ? (
          <div className="text-center">
            <p className="text-red-600">{error}</p>
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
                        <div className="flex gap-2 mb-2">
                          <Badge variant="secondary">{propuesta.categoria}</Badge>
                          <Badge variant="outline">{propuesta.departamento}</Badge>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {propuesta.fecha.toLocaleDateString()}
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
                      Propuesta por: {propuesta.nombre}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Category Statistics */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Estadísticas por Categoría</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryStats.map((stat) => (
              <Card key={stat.categoria}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="font-medium">{stat.categoria}</div>
                    <Badge>{stat.count} propuestas</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Department Statistics */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Estadísticas por Departamento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {departmentStats.map((stat) => (
              <Card key={stat.departamento}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="font-medium">{stat.departamento}</div>
                    <Badge>{stat.count} propuestas</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
