export const EVENT_CONFIG = {
  name: 'XXIX Jornada Científica Regional Sur',
  shortName: 'JCRS Arequipa 2026',
  slogan: 'Avances en el Manejo Integral de Enfermedades Crónicas, Infecciosas y Oncológicas',
  dates: {
    start: '2026-03-06',
    end: '2026-03-08',
    formatted: '6 al 8 de Marzo de 2026',
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

// ==========================================
// FORMULARIOS POR CATEGORÍA
// ==========================================

// 1. PROTOCOLO DE INVESTIGACIÓN - Formularios
export const FORMULARIOS_PROTOCOLO = {
  fase1: {
    inscripcion: {
      nombre: 'Inscripción y Envío de Documentación',
      descripcion: 'Fase I - Recepción de documentación',
      url: 'https://forms.gle/oCptzZiYbmNEyPRN9',
    },
    correcciones: {
      nombre: 'Subsanación de Observaciones',
      descripcion: 'Correcciones de documentación',
      url: 'https://forms.gle/4qAWRGLFzH5eHF8D8',
    },
  },
  fase2: {
    diapositivas: {
      nombre: 'Envío de Diapositivas',
      descripcion: 'Diapositivas para Fase I y II',
      url: 'https://forms.gle/mpQJkndsRoeQSHqcA',
    },
    confirmacionExpositor: {
      nombre: 'Confirmación de Autor Expositor y Ética',
      descripcion: 'Fase II',
      url: 'https://forms.gle/rtm1pv6YL2HrhHFk6',
    },
    cambioExpositor: {
      nombre: 'Solicitud de Reemplazo de Expositor',
      descripcion: 'Fase II',
      url: 'https://forms.gle/LQqfuKfXJy8hjzm59',
    },
  },
  faseFinal: {
    presentacionFinal: {
      nombre: 'Envío de Versión Final de Presentación',
      descripcion: 'Fase Final',
      url: 'https://forms.gle/L3GJrCvB2HUNZVYC8',
    },
    cambioExpositor: {
      nombre: 'Solicitud de Reemplazo de Expositor',
      descripcion: 'Fase Final',
      url: 'https://forms.gle/AJb4EUSfoRbJtV77A',
    },
  },
}

// 2. TRABAJO DE INVESTIGACIÓN - Formularios
export const FORMULARIOS_TRABAJO = {
  fase1: {
    inscripcion: {
      nombre: 'Inscripción y Envío de Documentación',
      descripcion: 'Fase I - Manuscrito máx. 3500 palabras',
      url: 'https://forms.gle/sbaCQAcZ1zFbxpfU6',
    },
    correcciones: {
      nombre: 'Subsanación de Observaciones',
      descripcion: 'Correcciones de documentación',
      url: 'https://forms.gle/6Msz8ttePbabtuJf8',
    },
  },
  fase2: {
    diapositivas: {
      nombre: 'Envío de Diapositivas',
      descripcion: 'Tras aceptación',
      url: 'https://forms.gle/p3cAaog4eMb6pAa1A',
    },
    confirmacionExpositor: {
      nombre: 'Confirmación de Autor Expositor y Ética',
      descripcion: 'Fase II',
      url: 'https://forms.gle/8RtBP6hKtz6huZxr5',
    },
    cambioExpositor: {
      nombre: 'Solicitud de Reemplazo de Expositor',
      descripcion: 'Fase II',
      url: 'https://forms.gle/qeBo5bzzRYSE2NFT7',
    },
  },
}

// 3. CASO CLÍNICO - Formularios (ya existente, actualizado)
export const FORMULARIOS_CASO_CLINICO = {
  fase1: {
    inscripcion: {
      nombre: 'Inscripción y Envío de Documentación',
      descripcion: 'Fase I - Incluye Consentimiento Informado',
      url: 'https://forms.gle/1MWSGJ67abkkHK5N6',
    },
    correcciones: {
      nombre: 'Subsanación de Observaciones',
      descripcion: 'Correcciones de documentación',
      url: 'https://forms.gle/7y6dBPSbccE6McvM8',
    },
  },
  fase2: {
    diapositivas: {
      nombre: 'Envío de Diapositivas',
      descripcion: 'Tras aceptación Fase I',
      url: 'https://forms.gle/icmvpKxZLcADvBHo8',
    },
    cambioExpositor: {
      nombre: 'Solicitud de Reemplazo de Expositor',
      descripcion: 'Fase II',
      url: 'https://forms.gle/uM6H72jjtiDrNW396',
    },
  },
  faseFinal: {
    presentacionFinal: {
      nombre: 'Envío de Versión Final de Presentación',
      descripcion: 'Fase Final',
      url: 'https://forms.gle/PWBNJUCLA196oqHY6',
    },
    cambioExpositor: {
      nombre: 'Solicitud de Reemplazo de Expositor',
      descripcion: 'Fase Final',
      url: 'https://forms.gle/S7Ye6hpbrJxnf4EUA',
    },
  },
}

// 4. ATLAS CIENTÍFICO - Formularios
export const FORMULARIOS_ATLAS = {
  inscripcion: {
    nombre: 'Inscripción y Envío de Requisitos',
    descripcion: 'Álbum PDF/Word 30-40 páginas',
    url: 'https://forms.gle/xpGxQDSoMhcGRw867',
  },
}

// ==========================================
// CRONOGRAMAS POR CATEGORÍA
// ==========================================

// 1. PROTOCOLO DE INVESTIGACIÓN - Cronograma
export const CRONOGRAMA_PROTOCOLO = {
  nombre: 'Protocolo de Investigación',
  basesUrl: 'https://drive.google.com/file/d/1Z9f60oSxD_Z-kHd_ZWHyppn0TLnkpmHo/view',
  topClasificados: 25,
  topFinal: 5,
  actividades: [
    { fecha: '17/01/2026 - 11/02/2026', actividad: 'Recepción de documentación (Fase I)', nota: 'Hasta las 23:59h' },
    { fecha: '12/02/2026 - 15/02/2026', actividad: 'Prórroga', nota: 'Penalización -5%' },
    { fecha: '22/02/2026 - 23/02/2026', actividad: 'Envío de observaciones', nota: '' },
    { fecha: '24/02/2026 - 25/02/2026', actividad: 'Rectificación de observaciones', nota: '' },
    { fecha: '28/02/2026 - 01/03/2026', actividad: 'Publicación de clasificados - Carta de aceptación Fase II', nota: 'TOP 25' },
    { fecha: '02/03/2026 - 04/03/2026', actividad: 'Recepción de diapositivas', nota: '' },
    { fecha: '06/03/2026 - 07/03/2026', actividad: 'Exposición Oral Fase II', nota: '10 min + 8 min preguntas' },
    { fecha: '08/03/2026', actividad: 'Exposición Final (TOP 5) y Premiación', nota: '' },
  ],
}

// 2. TRABAJO DE INVESTIGACIÓN - Cronograma
export const CRONOGRAMA_TRABAJO = {
  nombre: 'Trabajo de Investigación',
  basesUrl: 'https://drive.google.com/file/d/1w7EHNF1FYsxDkDgxkIS3AvfpDsaPv8S4/view',
  topClasificados: 30,
  topFinal: 5,
  actividades: [
    { fecha: '17/01/2026 - 11/02/2026', actividad: 'Recepción de documentación (Fase I)', nota: 'Manuscrito máx. 3500 palabras' },
    { fecha: '12/02/2026 - 15/02/2026', actividad: 'Prórroga', nota: 'Penalización -5%' },
    { fecha: '22/02/2026 - 23/02/2026', actividad: 'Envío de observaciones', nota: '' },
    { fecha: '24/02/2026 - 25/02/2026', actividad: 'Rectificación de observaciones', nota: '' },
    { fecha: '28/02/2026 - 01/03/2026', actividad: 'Publicación de clasificados - Carta de aceptación Fase II', nota: 'TOP 30' },
    { fecha: '02/03/2026 - 04/03/2026', actividad: 'Recepción de diapositivas', nota: '' },
    { fecha: '06/03/2026 - 07/03/2026', actividad: 'Exposición Oral Fase II', nota: '9:00-16:00h, 10 min + 8 min preguntas' },
    { fecha: '08/03/2026', actividad: 'Exposición Final (TOP 5) y Premiación', nota: '' },
  ],
}

// 3. CASO CLÍNICO - Cronograma
export const CRONOGRAMA_CASO_CLINICO = {
  nombre: 'Caso Clínico',
  basesUrl: 'https://drive.google.com/file/d/1k3lGmoCtnMRsTGEuRAT1zafMPxqFFbcy/view',
  topClasificados: 15,
  topFinal: 5,
  actividades: [
    { fecha: '19/01/2026 - 11/02/2026', actividad: 'Recepción de documentación (Fase I)', nota: 'Incluye Consentimiento Informado' },
    { fecha: '12/02/2026 - 15/02/2026', actividad: 'Prórroga', nota: 'Penalización -5%' },
    { fecha: '22/02/2026 - 23/02/2026', actividad: 'Envío de observaciones', nota: '' },
    { fecha: '24/02/2026 - 25/02/2026', actividad: 'Rectificación de observaciones', nota: '' },
    { fecha: '28/02/2026 - 01/03/2026', actividad: 'Carta de aceptación Fase II', nota: 'TOP 15' },
    { fecha: '02/03/2026 - 04/03/2026', actividad: 'Recepción de diapositivas', nota: '' },
    { fecha: '06/03/2026 - 07/03/2026', actividad: 'Exposición Oral Fase II', nota: '10 min + 8 min preguntas' },
    { fecha: '08/03/2026', actividad: 'Exposición Final (TOP 5) y Premiación', nota: '' },
  ],
}

// 4. ATLAS CIENTÍFICO - Cronograma
export const CRONOGRAMA_ATLAS = {
  nombre: 'Atlas Científico (Fotografía/Ilustración)',
  basesUrl: 'https://drive.google.com/file/d/1ObbL4DWFgnVtRpAa0V_hFR0E4rijY1Xo/view',
  actividades: [
    { fecha: '23/01/2026', actividad: 'Apertura de convocatoria', nota: '' },
    { fecha: '21/02/2026', actividad: 'Cierre de recepción', nota: 'Álbum PDF/Word 30-40 páginas' },
    { fecha: '28/02/2026', actividad: 'Publicación de finalistas', nota: '' },
    { fecha: '07/03/2026', actividad: 'Exposición Oral', nota: '9 min + 5 min preguntas' },
    { fecha: '08/03/2026', actividad: 'Premiación', nota: '' },
  ],
}

// CALENDARIO GENERAL - Fechas Clave
export const CALENDARIO_GENERAL = [
  { fecha: '17-19/01/2026', evento: 'Inicio de convocatorias' },
  { fecha: '11/02/2026', evento: 'Cierre recepción Protocolo, Trabajo y Caso Clínico' },
  { fecha: '15/02/2026', evento: 'Fin de prórroga (todas las categorías excepto Atlas)' },
  { fecha: '21/02/2026', evento: 'Cierre Atlas Científico' },
  { fecha: '22-25/02/2026', evento: 'Período de observaciones y rectificaciones' },
  { fecha: '28/02-01/03/2026', evento: 'Publicación de clasificados' },
  { fecha: '02-04/03/2026', evento: 'Recepción de diapositivas' },
  { fecha: '06-07/03/2026', evento: 'Exposiciones Orales Fase II' },
  { fecha: '08/03/2026', evento: 'Gran Final y Premiación' },
]

// Formularios adicionales (Meme Científico)
export const FORMULARIOS_EXTRAS = {
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
    telefono1: '+51 974 050 383',
    telefono2: '+51 978 281 215',
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

// URL de inscripción oficial UCSM
export const INSCRIPCION_URL = 'https://oda.ucsm.edu.pe/UCSMEventosAcademicos/Account/Login?ReturnUrl=%2FUCSMEventosAcademicos%2F%3F_gl%3D1%2A1wt36fc%2A_ga%2AOTA2Nzg3NDI0LjE3Njk2MTExNzU.%2A_ga_J8Y72BQ6PL%2AczE3Njk2MTExNzYkbzEkZzAkdDE3Njk2MTExNzYkajYwJGwwJGgw%2A_ga_LV0SHDLPL7%2AczE3Njk2MTExNzYkbzEkZzAkdDE3Njk2MTExNzYkajYwJGwwJGgw%26_ga%3D2.68960018.225502626.1769611175-906787424.1769611175'

// Pasos para inscribirse
export const PASOS_INSCRIPCION = [
  {
    numero: 1,
    titulo: 'Ingresar al botón "Inscribirme"',
    descripcion: 'Haz clic en el botón denominado "Inscribirme" para acceder al sistema de inscripciones.',
  },
  {
    numero: 2,
    titulo: 'Crear cuenta o iniciar sesión',
    descripcion: 'Deberás acceder a través de una cuenta con tu DNI y contraseña. Si no tienes cuenta, créala mediante el enlace "Regístrate aquí". La validación se realizará a través de tu correo electrónico. Si la inscripción se realiza desde el extranjero, utiliza tu número de documento de identificación.',
  },
  {
    numero: 3,
    titulo: 'Completar el formulario',
    descripcion: 'Llena el formulario con todos los datos requeridos. Se recomienda especial cuidado en el registro de nombres y apellidos, ya que estos serán consignados tal cual en los certificados. Tras verificar la información, haz clic en "Generar Deuda".',
  },
  {
    numero: 4,
    titulo: 'Realizar el pago',
    descripcion: 'Al completar este paso, la preinscripción quedará registrada. Para finalizar el proceso, deberás efectuar el pago a través de nuestros mecanismos de pago autorizados. Tu código de pago será tu número de DNI o documento de identificación.',
  },
  {
    numero: 5,
    titulo: 'Esperar confirmación',
    descripcion: 'La generación de la deuda en las distintas entidades financieras puede demorar algunos minutos luego de completar el formulario. En caso de presentar inconvenientes, se recomienda volver a ingresar al sistema.',
  },
  {
    numero: 6,
    titulo: 'Validar inscripción',
    descripcion: 'Una vez completado el registro y realizado el pago correspondiente, debes registrarte en el sistema para validar correctamente tu inscripción.',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSczz4Zl--u2LMvgOs9O2cTPh7XZjDc3PjBDAZgoRYUJe3WOUw/viewform',
    linkText: 'Validar mi inscripción',
  },
]

// Precios de preinscripción
export const PREINSCRIPCION = [
  {
    tipo: 'Primera Preinscripción estudiantes',
    fecha: '26 de enero - 07 de febrero',
    precio: 100,
  },
  {
    tipo: 'Segunda Preinscripción estudiantes',
    fecha: '08 de febrero - 20 de febrero',
    precio: 111,
  },
]

// Precios de inscripción regular
export const INSCRIPCION_REGULAR = [
  {
    tipo: 'Estudiantes',
    fecha: '21 de febrero - 02 de marzo',
    precio: 120,
  },
  {
    tipo: 'Profesionales o extranjeros',
    fecha: '21 de febrero - 02 de marzo',
    precio: 150,
  },
]

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
