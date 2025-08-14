"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { collection, query, orderBy, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Propuesta {
  id: string;
  titulo: string;
  descripcion: string;
  fecha: Date;
  destacada?: boolean;
  categoria: string;
  departamento: string;
  justificacion: string;
  beneficiarios: string;
  recursos: string;
  nombre: string;
  email: string;
  telefono: string;
}

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [propuestas, setPropuestas] = useState<Propuesta[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const isAdmin = sessionStorage.getItem("isAdmin");
    if (isAdmin) {
      setIsAuthenticated(true);
      loadPropuestas();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (
      email === process.env.NEXT_PUBLIC_ADMIN_EMAIL &&
      password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      sessionStorage.setItem("isAdmin", "true");
      setIsAuthenticated(true);
      loadPropuestas();
    } else {
      setError("Credenciales inválidas");
    }
  };

  const loadPropuestas = async () => {
    if (!db) {
      console.error("Firestore is not initialized");
      setError("Error: Base de datos no inicializada");
      return;
    }

    try {
      const q = query(collection(db, "propuestas"), orderBy("fecha", "desc"));
      const querySnapshot = await getDocs(q);
      const propuestasData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        fecha: doc.data().fecha.toDate(),
      })) as Propuesta[];
      setPropuestas(propuestasData);
    } catch (error) {
      console.error("Error loading propuestas:", error);
      setError("Error al cargar las propuestas");
    }
  };

  const handleDelete = async (id: string) => {
    if (!db) {
      console.error("Firestore is not initialized");
      setError("Error: Base de datos no inicializada");
      return;
    }

    if (window.confirm("¿Estás seguro de que deseas eliminar esta propuesta?")) {
      try {
        await deleteDoc(doc(db, "propuestas", id));
        await loadPropuestas();
      } catch (error) {
        console.error("Error deleting propuesta:", error);
        setError("Error al eliminar la propuesta");
      }
    }
  };

  const handleToggleDestacada = async (id: string, destacada: boolean) => {
    if (!db) {
      console.error("Firestore is not initialized");
      setError("Error: Base de datos no inicializada");
      return;
    }

    try {
      await updateDoc(doc(db, "propuestas", id), {
        destacada: !destacada
      });
      await loadPropuestas();
    } catch (error) {
      console.error("Error updating propuesta:", error);
      setError("Error al actualizar la propuesta");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Panel de Administración</CardTitle>
            <CardDescription>Ingresa tus credenciales para acceder</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && (
                <Alert variant="destructive">
                  {error}
                </Alert>
              )}

              <Button type="submit" className="w-full">
                Ingresar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Administrar Propuestas</h1>
            <p className="text-gray-600">Gestiona las propuestas enviadas por la ciudadanía</p>
          </div>
          <Button
            variant="ghost"
            onClick={() => {
              sessionStorage.removeItem("isAdmin");
              setIsAuthenticated(false);
            }}
          >
            Cerrar sesión
          </Button>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-6">
            {error}
          </Alert>
        )}

        <div className="grid gap-4">
          {propuestas.map((propuesta) => (
            <Card key={propuesta.id}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{propuesta.titulo}</h3>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="secondary">{propuesta.categoria}</Badge>
                          <Badge variant="outline">{propuesta.departamento}</Badge>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {propuesta.fecha.toLocaleDateString()}
                      </div>
                    </div>

                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="font-medium mb-1">Descripción:</h4>
                        <p className="text-gray-600">{propuesta.descripcion}</p>
                      </div>

                      {propuesta.justificacion && (
                        <div>
                          <h4 className="font-medium mb-1">Justificación:</h4>
                          <p className="text-gray-600">{propuesta.justificacion}</p>
                        </div>
                      )}

                      {propuesta.beneficiarios && (
                        <div>
                          <h4 className="font-medium mb-1">Beneficiarios:</h4>
                          <p className="text-gray-600">{propuesta.beneficiarios}</p>
                        </div>
                      )}

                      {propuesta.recursos && (
                        <div>
                          <h4 className="font-medium mb-1">Recursos necesarios:</h4>
                          <p className="text-gray-600">{propuesta.recursos}</p>
                        </div>
                      )}

                      <div className="border-t pt-4 mt-4">
                        <h4 className="font-medium mb-2">Información de contacto:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Nombre:</p>
                            <p className="text-gray-900">{propuesta.nombre}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Email:</p>
                            <p className="text-gray-900">{propuesta.email}</p>
                          </div>
                          {propuesta.telefono && (
                            <div>
                              <p className="text-sm text-gray-500">Teléfono:</p>
                              <p className="text-gray-900">{propuesta.telefono}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-4 ml-6">
                    <div className="flex items-center gap-2">
                      <Label htmlFor={`destacada-${propuesta.id}`}>Destacada</Label>
                      <Switch
                        id={`destacada-${propuesta.id}`}
                        checked={propuesta.destacada}
                        onCheckedChange={() => handleToggleDestacada(propuesta.id, propuesta.destacada || false)}
                      />
                    </div>
                    <Button
                      variant="destructive"
                      onClick={() => handleDelete(propuesta.id)}
                    >
                      Eliminar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
