-- Insertar datos de ejemplo para el sitio web

-- Insertar usuario administrador
INSERT INTO users (name, email, role) VALUES 
('Administrador', 'admin@sector600.uy', 'admin'),
('Robert Silva', 'robert.silva@sector600.uy', 'leader'),
('Editor Web', 'editor@sector600.uy', 'editor');

-- Insertar noticias de ejemplo
INSERT INTO news (title, content, excerpt, category, status, author_id) VALUES 
(
    'Nueva propuesta de ley para la educación técnica',
    'El Sector 600, liderado por Robert Silva, presenta una innovadora propuesta de ley que busca fortalecer la educación técnica en todo el país. Esta iniciativa contempla la creación de nuevos centros de formación técnica, la actualización de equipamiento y la vinculación directa con el sector productivo.

La propuesta incluye un presupuesto específico para la modernización de los centros existentes y la creación de al menos 10 nuevos centros distribuidos estratégicamente en el interior del país. Además, se establece un sistema de becas para estudiantes de bajos recursos y programas de intercambio con instituciones internacionales.

"La educación técnica es fundamental para el desarrollo económico del país", expresó Robert Silva durante la presentación de la propuesta. "Necesitamos formar a los jóvenes con las competencias que demanda el mercado laboral del siglo XXI".',
    'Robert Silva presenta un proyecto innovador para fortalecer la educación técnica en todo el país, incluyendo nuevos centros de formación y programas de becas.',
    'Legislativa',
    'published',
    2
),
(
    'Reunión con productores rurales del interior',
    'Representantes del Sector 600 mantuvieron una productiva reunión con productores rurales de los departamentos de Salto, Paysandú y Río Negro para discutir las principales problemáticas del sector agropecuario y las propuestas de solución.

Durante el encuentro se abordaron temas como el acceso al crédito, la infraestructura rural, los costos de producción y las oportunidades de exportación. Los productores destacaron la necesidad de mejorar los caminos rurales y el acceso a internet en las zonas más alejadas.

El Sector 600 se comprometió a incluir estas demandas en su programa de gobierno, priorizando el desarrollo rural sostenible y la mejora de la calidad de vida en el interior del país.',
    'El Sector 600 se reúne con representantes del agro para discutir políticas de desarrollo rural y escuchar las necesidades del sector.',
    'Agenda',
    'published',
    2
),
(
    'Comunicado sobre la situación económica nacional',
    'Ante la coyuntura económica actual, el Sector 600 del Partido Colorado expresa su posición y presenta propuestas concretas para enfrentar los desafíos económicos que atraviesa el país.

Consideramos fundamental implementar políticas que promuevan el crecimiento económico sostenible, la generación de empleo de calidad y la reducción de la desigualdad. Para ello, proponemos:

1. Incentivos fiscales para las pequeñas y medianas empresas
2. Inversión en infraestructura y tecnología
3. Fortalecimiento del sistema educativo
4. Promoción de la innovación y el emprendedurismo

Estamos convencidos de que con políticas adecuadas y el compromiso de todos los sectores, Uruguay puede superar los desafíos actuales y construir un futuro próspero para todas las familias uruguayas.',
    'Nuestra posición frente a los desafíos económicos actuales y las propuestas de solución para promover el crecimiento sostenible.',
    'Comunicado',
    'published',
    2
);

-- Insertar propuestas de ley de ejemplo
INSERT INTO proposals (title, summary, content, status, author_id) VALUES 
(
    'Ley de Fortalecimiento de la Educación Técnica',
    'Propuesta integral para modernizar y expandir la educación técnica en Uruguay, creando nuevos centros de formación y programas de vinculación con el sector productivo.',
    'PROYECTO DE LEY

Artículo 1º.- Créase el Sistema Nacional de Educación Técnica Avanzada (SINETA) con el objetivo de fortalecer la formación técnica y profesional en todo el territorio nacional.

Artículo 2º.- El SINETA tendrá las siguientes funciones:
a) Coordinar la oferta educativa técnica a nivel nacional
b) Establecer estándares de calidad para la formación técnica
c) Promover la vinculación entre centros educativos y sector productivo
d) Administrar el sistema de becas y ayudas estudiantiles

Artículo 3º.- Créase el Fondo Nacional para la Educación Técnica, financiado con recursos del Presupuesto Nacional y aportes del sector privado.

Artículo 4º.- Establécese la meta de crear al menos 10 nuevos centros de educación técnica en el quinquenio 2025-2030, priorizando las regiones con menor cobertura educativa.

Artículo 5º.- Los centros de educación técnica deberán actualizar sus programas curriculares cada dos años, incorporando las nuevas tecnologías y demandas del mercado laboral.',
    'active',
    2
),
(
    'Ley de Desarrollo Rural Sostenible',
    'Marco normativo para promover el desarrollo integral de las zonas rurales, mejorando la infraestructura, conectividad y oportunidades económicas.',
    'PROYECTO DE LEY

Artículo 1º.- La presente ley tiene por objeto promover el desarrollo sostenible de las zonas rurales del país, mejorando la calidad de vida de sus habitantes y fortaleciendo la competitividad del sector agropecuario.

Artículo 2º.- Créase el Programa Nacional de Desarrollo Rural Sostenible (PNDRS) que incluirá:
a) Mejoramiento de la infraestructura vial rural
b) Expansión de la conectividad digital
c) Fortalecimiento de los servicios de salud y educación rurales
d) Promoción de la diversificación productiva

Artículo 3º.- Establécese un régimen de incentivos fiscales para emprendimientos rurales que generen empleo local y promuevan prácticas sostenibles.

Artículo 4º.- Créase el Fondo de Desarrollo Rural, destinado a financiar proyectos de infraestructura y desarrollo productivo en zonas rurales.',
    'draft',
    2
);

-- Insertar eventos de ejemplo
INSERT INTO events (title, description, event_date, event_time, location, event_type) VALUES 
(
    'Plenario Departamental - Montevideo',
    'Reunión mensual del Sector 600 en Montevideo para analizar la coyuntura política y coordinar actividades territoriales.',
    '2024-02-15',
    '19:00',
    'Sede Partidaria - 18 de Julio 1234',
    'Plenario'
),
(
    'Conferencia: El Futuro de la Educación en Uruguay',
    'Robert Silva disertará sobre las propuestas educativas del Sector 600 y el futuro de la educación en nuestro país.',
    '2024-02-20',
    '18:30',
    'Auditorio de la Universidad Católica',
    'Conferencia'
),
(
    'Recorrida por el Interior - Salto',
    'Visita a productores rurales y reunión con dirigentes locales en el departamento de Salto.',
    '2024-02-25',
    '10:00',
    'Salto, Uruguay',
    'Recorrida'
);

-- Insertar propuestas ciudadanas de ejemplo
INSERT INTO citizen_proposals (title, description, category, author_name, author_email, status) VALUES 
(
    'Mejoramiento del transporte público en zonas periféricas',
    'Propuesta para mejorar la frecuencia y cobertura del transporte público en los barrios periféricos de Montevideo, especialmente en horarios nocturnos y fines de semana.',
    'Transporte',
    'María González',
    'maria.gonzalez@email.com',
    'approved'
),
(
    'Creación de espacios verdes en barrios carenciados',
    'Iniciativa para crear plazas y espacios verdes en barrios que carecen de áreas de esparcimiento, promoviendo la integración social y mejorando la calidad de vida.',
    'Urbanismo',
    'Carlos Rodríguez',
    'carlos.rodriguez@email.com',
    'pending'
),
(
    'Programa de apoyo a emprendedores jóvenes',
    'Propuesta para crear un programa específico de apoyo a emprendedores menores de 30 años, con acceso a crédito blando y capacitación empresarial.',
    'Economía',
    'Ana Martínez',
    'ana.martinez@email.com',
    'approved'
);
