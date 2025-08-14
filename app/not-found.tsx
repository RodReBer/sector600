import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-6">
          <AlertCircle className="h-16 w-16 text-red-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Página no encontrada
        </h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <div className="space-x-4">
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <Link href="/">
              Volver al inicio
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/participa/contacto">
              Contactar
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
