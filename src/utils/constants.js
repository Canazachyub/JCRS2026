export const EVENT_CONFIG = {
  name: 'XXIX Jornada Científica Regional Sur',
  shortName: 'JCRS Arequipa 2026',
  slogan: 'Avances en el Manejo Integral de Enfermedades Crónicas, Infecciosas y Oncológicas',
  organizer: 'CIEM 2026',
  dates: {
    start: '2026-03-06',
    end: '2026-03-11',
    formatted: '06 al 11 de Marzo de 2026',
  },
  location: {
    city: 'Arequipa',
    country: 'Perú',
    venue: 'Por confirmar',
  },
}

// Áreas de Investigación
export const AREAS_INVESTIGACION = [
  { id: 1, nombre: 'Ciencias Básicas y Biotecnología' },
  { id: 2, nombre: 'Ciencias Clínico-Quirúrgicas' },
  { id: 3, nombre: 'Salud Pública y Atención Primaria de Salud (APS)' },
  { id: 4, nombre: 'Educación Médica y Bioética' },
]

// Links oficiales de bases científicas (PDFs en Drive)
export const BASES_CIENTIFICAS = {
  protocolo: {
    id: 'protocolo',
    nombre: 'Protocolo de Investigación',
    descripcion: 'Bases para presentación de protocolos de investigación',
    url: 'https://drive.google.com/file/d/1Z9f60oSxD_Z-kHd_ZWHyppn0TLnkpmHo/view',
    icon: 'FlaskConical',
  },
  trabajo: {
    id: 'trabajo',
    nombre: 'Trabajo de Investigación',
    descripcion: 'Bases para presentación de trabajos de investigación',
    url: 'https://drive.google.com/file/d/1w7EHNF1FYsxDkDgxkIS3AvfpDsaPv8S4/view',
    icon: 'FileText',
  },
  casosClinicos: {
    id: 'casos-clinicos',
    nombre: 'Casos Clínicos',
    descripcion: 'Bases para presentación de casos clínicos',
    url: 'https://drive.google.com/file/d/1k3lGmoCtnMRsTGEuRAT1zafMPxqFFbcy/view',
    icon: 'Stethoscope',
  },
  atlas: {
    id: 'atlas',
    nombre: 'Atlas Científico',
    descripcion: 'Bases para el concurso de Atlas Científico',
    url: 'https://drive.google.com/file/d/1ObbL4DWFgnVtRpAa0V_hFR0E4rijY1Xo/view',
    icon: 'BookOpen',
  },
}

// Documentación para el concurso científico (Cartas Aval)
export const DOCUMENTACION = {
  cartaAvalTrabajo: {
    nombre: 'Carta Aval - Trabajo de Investigación',
    descripcion: 'Documento de respaldo para un proyecto de investigación',
    url: 'https://docs.google.com/document/d/1F4yquTkQJtPRuIUkb9xuCBCR6RQ-7wty/edit?rtpof=true',
  },
  cartaAvalProtocolo: {
    nombre: 'Carta Aval - Protocolo de Investigación',
    descripcion: 'Aprobación formal del plan o protocolo de investigación',
    url: 'https://docs.google.com/document/d/1WkTz1bhxvNJxnYsrWNqiFx25FHhpxE2U/edit',
  },
  cartaAvalCaso: {
    nombre: 'Carta Aval - Caso Clínico',
    descripcion: 'Respaldo para la presentación de un caso médico específico',
    url: 'https://docs.google.com/document/d/1H7c0IkUPcOrz95k9ugVl5BnIPMkwWJEd/edit',
  },
  fichaAutores: {
    nombre: 'Ficha de Datos de Autores y Asesores',
    descripcion: 'Formulario para registrar información de las personas involucradas',
    url: 'https://docs.google.com/document/d/15YIYxze874BXXfmn-CQvVASGswjS2FRA/edit',
  },
}

// Formularios de inscripción FASE 1
export const FORMULARIOS_FASE1 = {
  casosClinicos: {
    nombre: 'Inscripción Casos Clínicos',
    fase: 'FASE 1',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSf4UZdXUpMnaLpS4e16L8r8-RAd_MyXDKtKnvXzKdc5a14g6Q/viewform',
    icon: 'Stethoscope',
  },
  protocolo: {
    nombre: 'Inscripción Proyecto de Investigación',
    fase: 'FASE 1',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSe2GnZ8AgXMKmysPwh4yhYoFMRGGf3Sfxq7sk2pH01JILAJYQ/viewform',
    icon: 'FlaskConical',
  },
  trabajo: {
    nombre: 'Inscripción Trabajo de Investigación',
    fase: 'FASE 1',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSceGma4drgGLbeuFJM9FGhFAmJ7KG4RA_A9s9DQ2X8tFm0Blw/viewform',
    icon: 'FileText',
  },
}

// Formularios adicionales
export const FORMULARIOS_EXTRAS = {
  atlas: {
    nombre: 'Atlas de Ciencia en Arequipa',
    descripcion: 'Inscripción para Atlas Científico',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSc0o_egf7cmSEsvMA6Q3p_R1_64vV-GQW5-TOQilkJxP1iYlA/viewform',
    icon: 'BookOpen',
  },
  meme: {
    nombre: 'Meme Científico',
    descripcion: 'Inscripción para concurso de Meme Científico',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSfObgX1IdTtPBs5sRqGm6JK_XYUnN44biEbUAU_lE4pF3VMPg/viewform',
    icon: 'Smile',
  },
}

export const LINKS = {
  inscripcion: {
    individual: '/inscripcion/individual',
    corporativo: '/inscripcion/corporativo',
    consultar: '/inscripcion/consultar',
  },
  bases: {
    trabajos: '/bases/trabajos',
    protocolos: '/bases/protocolos',
    casosClinicos: '/bases/casos-clinicos',
    atlas: '/bases/atlas',
  },
  recursos: {
    programa: '/programa',
    plantillas: '/recursos/plantillas',
    libroResumenes: '/recursos/libro-resumenes',
  },
  social: {
    instagram: 'https://www.instagram.com/jcrs_aqp2026/',
    facebook: 'https://www.facebook.com/jcrs.arequipa.2026',
    tiktok: 'https://tiktok.com/@jcrs_aqp2026',
    whatsappChannel: 'https://whatsapp.com/channel/0029Vb7YNve6buMDTgM23o3w',
  },
  contacto: {
    email: 'jcrs.socimep@org.com',
    telefono: '+51 999 999 999',
  },
}

// Formularios Casos Clínicos por Fases
export const FORMULARIOS_CASOS_CLINICOS = {
  fase1: {
    documentacion: {
      nombre: 'Fase I - Documentación',
      descripcion: 'Recepción de documentación administrativa, Resumen e In-Extenso',
      url: 'https://forms.gle/1MWSGJ67abkkHK5N6',
      fechaInicio: '19/01/26',
      fechaLimite: '11/02/26',
    },
    correcciones: {
      nombre: 'Fase I - Correcciones',
      descripcion: 'Rectificación de observaciones',
      url: 'https://forms.gle/7y6dBPSbccE6McvM8',
      fechaInicio: '24/02/26',
      fechaLimite: '25/02/26',
    },
  },
  fase2: {
    diapositivas: {
      nombre: 'Fase II - Diapositivas',
      descripcion: 'Recepción de diapositivas para exposición clasificatoria',
      url: 'https://forms.gle/icmvpKxZLcADvBHo8',
      fechaInicio: '02/03/26',
      fechaLimite: '04/03/26',
    },
    cambioExpositor: {
      nombre: 'Fase II - Cambio de Expositor',
      descripcion: 'Solicitud de cambio de expositor',
      url: 'https://forms.gle/uM6H72jjtiDrNW396',
    },
  },
  faseFinal: {
    presentacionFinal: {
      nombre: 'Fase Final - Presentación Final',
      descripcion: 'Envío de presentación final (opcional)',
      url: 'https://forms.gle/PWBNJUCLA196oqHY6',
      fechaLimite: '08/03/26 (08:45 hrs)',
    },
    cambioExpositor: {
      nombre: 'Fase Final - Cambio de Expositor',
      descripcion: 'Solicitud de cambio de expositor para fase final',
      url: 'https://forms.gle/S7Ye6hpbrJxnf4EUA',
    },
  },
}

// Cronograma Casos Clínicos
export const CRONOGRAMA_CASOS_CLINICOS = {
  fase1: {
    nombre: 'FASE I - DOCUMENTACIÓN Y EVALUACIÓN',
    actividades: [
      { actividad: 'Recepción de documentación administrativa, Resumen e In-Extenso', inicio: '19/01/26 (00:00 hrs)', limite: '11/02/26 (23:59 hrs)', nota: '' },
      { actividad: 'Prórroga (5% descuento en Fase II)', inicio: '12/02/26 (00:00 hrs)', limite: '15/02/26 (23:59 hrs)', nota: '5% descuento' },
      { actividad: 'Envío de observaciones', inicio: '22/02/26 (00:00 hrs)', limite: '23/02/26 (23:59 hrs)', nota: '' },
      { actividad: 'Recepción de rectificación de observaciones', inicio: '24/02/26 (00:00 hrs)', limite: '25/02/26 (23:59 hrs)', nota: '' },
      { actividad: 'Carta de aceptación para Fase II', inicio: '28/02/26 (00:00 hrs)', limite: '01/03/26 (23:59 hrs)', nota: '' },
    ],
    clasificacion: 'Los 25 casos clínicos con mayor puntuación avanzan a la Fase II',
  },
  fase2: {
    nombre: 'FASE II - EXPOSICIÓN ORAL CLASIFICATORIA (TOP 25)',
    actividades: [
      { actividad: 'Recepción de diapositivas', inicio: '02/03/26 (00:00 hrs)', limite: '04/03/26 (23:59 hrs)', nota: '' },
      { actividad: 'Exposición oral clasificatoria', inicio: '06/03/26 (09:00 hrs)', limite: '07/03/26 (16:00 hrs)', nota: '' },
    ],
    formato: {
      tiempoExposicion: '10 minutos',
      tiempoPreguntas: '8 minutos',
      idioma: 'Español (obligatorio)',
    },
    evaluacion: {
      presentacionOral: '60%',
      inExtenso: '40%',
    },
    clasificacion: 'Los 5 casos clínicos con mayor puntuación avanzan a la Fase Final',
  },
  faseFinal: {
    nombre: 'FASE FINAL - EXPOSICIÓN ORAL (TOP 5)',
    actividades: [
      { actividad: 'Envío de presentación final (opcional)', inicio: '-', limite: '08/03/26 (08:45 hrs)', nota: '' },
      { actividad: 'Exposición Oral Final', inicio: '08/03/26', limite: '08/03/26', nota: '' },
      { actividad: 'Premiación', inicio: '08/03/26', limite: '08/03/26', nota: '' },
    ],
    formato: {
      tiempoExposicion: '10 minutos',
      tiempoPreguntas: '10 minutos',
      idioma: 'Español (obligatorio)',
    },
    evaluacion: {
      puntajeAcumulado: '20%',
      presentacionOral: '60%',
      inExtenso: '20%',
    },
  },
}

export const PRECIOS = {
  individual: {
    socimep: { nombre: 'Miembro SOCIMEP', precio: 50, moneda: 'PEN' },
    noSocimep: { nombre: 'No Miembro', precio: 80, moneda: 'PEN' },
    profesional: { nombre: 'Profesional', precio: 100, moneda: 'PEN' },
  },
  corporativo: {
    basico: { nombre: 'Básico (5-10)', precio: 200, moneda: 'PEN' },
    intermedio: { nombre: 'Intermedio (11-20)', precio: 350, moneda: 'PEN' },
    premium: { nombre: 'Premium (21+)', precio: 500, moneda: 'PEN' },
  },
}

export const CONCURSOS = [
  { id: 'trabajos', nombre: 'Trabajos de Investigación', icon: 'FileText' },
  { id: 'protocolos', nombre: 'Protocolos de Investigación', icon: 'FlaskConical' },
  { id: 'casos_clinicos', nombre: 'Casos Clínicos', icon: 'Stethoscope' },
  { id: 'atlas', nombre: 'Atlas Científico', icon: 'BookOpen' },
  { id: 'meme', nombre: 'Meme Científico', icon: 'Smile' },
]

export const UNIVERSIDADES_SUR = [
  'Universidad Nacional de San Agustín (UNSA)',
  'Universidad Católica de Santa María (UCSM)',
  'Universidad Andina Néstor Cáceres Velásquez',
  'Universidad Nacional del Altiplano (UNA)',
  'Universidad Nacional San Antonio Abad del Cusco (UNSAAC)',
  'Universidad Nacional Jorge Basadre Grohmann (UNJBG)',
  'Universidad Privada de Tacna (UPT)',
  'Universidad José Carlos Mariátegui (UJCM)',
  'Otra',
]

// Imágenes de Arequipa
// Imágenes de Arequipa para carrusel y tarjetas
export const IMAGES = {
  carousel: [
    {
      url: 'https://media.vogue.mx/photos/5e5c5b1f25623100081c437c/master/w_1600%2Cc_limit/Arequipa--paisaje.jpg',
      alt: 'Paisaje de Arequipa con el Misti',
    },
    {
      url: 'https://www.tierrasvivas.com/img/arequipa-altitude-06-1575.jpg',
      alt: 'Vista panorámica de Arequipa',
    },
    {
      url: 'https://content.r9cdn.net/rimg/dimg/0f/31/c78307fb-city-10174-1732d430b8c.jpg?width=1366&height=768&xhint=2500&yhint=1740&crop=true',
      alt: 'Ciudad de Arequipa',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Catedral_Arequipa%2C_Peru.jpg',
      alt: 'Catedral de Arequipa',
    },
  ],
  paisajeMisti: 'https://media.vogue.mx/photos/5e5c5b1f25623100081c437c/master/w_1600%2Cc_limit/Arequipa--paisaje.jpg',
  vistaPanoramica: 'https://www.tierrasvivas.com/img/arequipa-altitude-06-1575.jpg',
  ciudadArequipa: 'https://content.r9cdn.net/rimg/dimg/0f/31/c78307fb-city-10174-1732d430b8c.jpg?width=1366&height=768&xhint=2500&yhint=1740&crop=true',
  catedralArequipa: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Catedral_Arequipa%2C_Peru.jpg',
}
