// =============================================================================
//  CONTENIDO DE LA LANDING — todo el copy vive aquí para edición fácil.
//  Regla de IP: solo capacidades y beneficios. Nada de arquitectura interna,
//  estructura de carpetas, comandos ni nombres de herramientas subyacentes.
// =============================================================================

import {
  Network,
  CalendarRange,
  GitBranch,
  Users,
  ListChecks,
  ShieldAlert,
  CalendarClock,
  ClipboardList,
  RefreshCw,
  Presentation,
  Rocket,
  FileSignature,
  ScrollText,
  MessageSquare,
  Workflow,
  Layers,
  type LucideIcon,
} from "lucide-react";

export const brand = {
  name: "Mindden",
  product: "Framework de Management Agéntico",
  internalNote: "Documento de uso interno · Mindden",
};

export const hero = {
  eyebrow: "Gestión de proyectos · Agéntica",
  title: "Un sistema operativo de gestión de proyectos que trabaja contigo.",
  subtitle:
    "El Project Manager aporta el criterio. El sistema planifica, mantiene el control e informa — solo. Evidencias siempre vivas, memoria que no se pierde y cero trabajo manual de mantenimiento.",
  primaryCta: "Ver las capacidades",
  secondaryCta: "Cómo se siente usarlo",
  badges: [
    "15 capacidades automatizadas",
    "Memoria persistente",
    "Ciclo semanal vivo",
    "Tu infraestructura · tu modelo",
  ],
};

// --- Problema: antes / después --------------------------------------------
export const problem = {
  title: "La gestión de proyectos no falla por falta de talento. Falla por fricción.",
  subtitle:
    "El PM dedica más tiempo a mantener documentos vivos que a dirigir. Esto es lo que cambia.",
  before: {
    label: "Gestión tradicional",
    items: [
      "Planificaciones que envejecen el día después de hacerlas.",
      "El estado real del proyecto vive en la cabeza del PM.",
      "Actualizar Gantt, riesgos e informes consume horas cada semana.",
      "Lo que se cuenta al cliente y lo que se gestiona dentro divergen.",
      "Cuando alguien se va, su contexto se va con él.",
    ],
  },
  after: {
    label: "Con el Framework",
    items: [
      "Evidencias que se actualizan solas en cuanto cambia la realidad.",
      "Una única fuente de verdad, consultable en lenguaje natural.",
      "El cierre de la semana se resuelve en minutos, no en horas.",
      "Versión interna y versión cliente, siempre coherentes y sin trabajo extra.",
      "Memoria persistente: cada decisión y corrección queda registrada.",
    ],
  },
};

// --- Tres pilares -----------------------------------------------------------
export interface Pillar {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const pillars: Pillar[] = [
  {
    icon: Network,
    title: "Capacidades automatizadas",
    body: "15 competencias encadenadas que generan, conectan y versionan cada evidencia del proyecto a partir de la anterior. El PM dirige; el sistema produce.",
  },
  {
    icon: RefreshCw,
    title: "Memoria persistente",
    body: "El sistema recuerda cada decisión, cada riesgo y cada corrección del proyecto. No empieza de cero nunca: actúa como un PM que ha estado en todas las reuniones.",
  },
  {
    icon: CalendarClock,
    title: "Ciclo semanal vivo",
    body: "Un ritmo que mantiene todo al día. El PM solo aporta contexto al cierre de la semana; la planificación, el control y los informes se rehacen en cascada.",
  },
];

// --- Capacidades (15) en 3 bloques ------------------------------------------
export interface Capability {
  icon: LucideIcon;
  name: string;
  benefit: string;
}

export interface CapabilityBlock {
  id: string;
  label: string;
  tagline: string;
  items: Capability[];
}

export const capabilityBlocks: CapabilityBlock[] = [
  {
    id: "base",
    label: "Evidencias base",
    tagline: "El esqueleto del proyecto, generado y conectado de principio a fin.",
    items: [
      {
        icon: Network,
        name: "Estructura de desglose del trabajo",
        benefit:
          "Descompone el proyecto en fases, épicas, tareas y subtareas a partir de la propuesta firmada. La piedra angular de la que cuelga todo lo demás.",
      },
      {
        icon: CalendarRange,
        name: "Planificación temporal dinámica",
        benefit:
          "Convierte el desglose en un calendario día a día con estados visuales. Se reprograma sola en cuanto algo se mueve.",
      },
      {
        icon: GitBranch,
        name: "Camino crítico",
        benefit:
          "Identifica qué tareas no pueden retrasarse sin mover el Go-Live, y explica el porqué de cada una. Se recalcula cada semana.",
      },
      {
        icon: CalendarClock,
        name: "Calendario de discovery",
        benefit:
          "Planifica todas las sesiones con el cliente: quién, cuándo y sobre qué, con la carga repartida por semana e interlocutor.",
      },
      {
        icon: ListChecks,
        name: "Trazabilidad de requerimientos",
        benefit:
          "Documenta qué está dentro del alcance, qué queda fuera y bajo qué criterio se acepta cada entregable. Control de alcance a prueba de discusiones.",
      },
      {
        icon: ShieldAlert,
        name: "Matriz de riesgos",
        benefit:
          "Prioriza riesgos con probabilidad e impacto, y mantiene dos versiones: una interna completa y otra prudente para el cliente.",
      },
      {
        icon: Users,
        name: "Registro de stakeholders",
        benefit:
          "Mapea a todos los actores con análisis de poder e interés para uso interno, y un directorio limpio para compartir con el cliente.",
      },
    ],
  },
  {
    id: "ciclo",
    label: "Ciclo semanal",
    tagline: "El motor que mantiene el proyecto vivo, semana tras semana.",
    items: [
      {
        icon: ClipboardList,
        name: "Plan semanal",
        benefit:
          "Genera la planificación de la semana leyendo el estado real de todo el proyecto. Una vista interna con trazabilidad y otra limpia para el cliente.",
      },
      {
        icon: RefreshCw,
        name: "Cierre semanal automático",
        benefit:
          "El PM aporta el contexto de la semana en lenguaje natural; el sistema actualiza planificación, camino crítico, riesgos y memoria en cascada.",
      },
      {
        icon: Presentation,
        name: "Informe de dirección",
        benefit:
          "Construye el informe ejecutivo para el comité por acumulación de cada cierre. Documento detallado y presentación ágil, listos para reunión.",
      },
    ],
  },
  {
    id: "soporte",
    label: "Soporte",
    tagline: "Las piezas que rodean al proyecto, con la misma coherencia.",
    items: [
      {
        icon: Rocket,
        name: "Presentación de kickoff",
        benefit:
          "Arranca el proyecto con el cliente usando los datos reales ya generados: contexto, alcance, equipo, gobernanza, calendario e hitos.",
      },
      {
        icon: FileSignature,
        name: "Actas de reunión con trazabilidad",
        benefit:
          "Convierte una transcripción en un acta formal con decisiones, acciones y cuestiones identificadas y numeradas para su seguimiento.",
      },
      {
        icon: ScrollText,
        name: "Guion de sesión",
        benefit:
          "Prepara cada reunión con el cliente: bloques temáticos, preguntas accionables y los riesgos vinculados a tratar.",
      },
    ],
  },
];

// --- Ciclo semanal: día en la vida ------------------------------------------
export interface CycleDay {
  day: string;
  title: string;
  body: string;
  actor: "pm" | "system";
}

export const weeklyCycle = {
  title: "Una semana, sin fricción.",
  subtitle:
    "El PM dedica su tiempo a dirigir y a hablar con el cliente. El mantenimiento del proyecto deja de ser una tarea.",
  steps: [
    {
      day: "Lunes",
      title: "Planificación",
      body: "El sistema entrega el plan de la semana a partir del estado real del proyecto. El PM lo revisa y arranca.",
      actor: "system",
    },
    {
      day: "Mar – Jue",
      title: "Ejecución",
      body: "El proyecto avanza. Reuniones, discovery, entregables. El PM solo se ocupa de lo que aporta criterio.",
      actor: "pm",
    },
    {
      day: "Viernes",
      title: "Cierre",
      body: "El PM cuenta cómo ha ido la semana. El sistema reprograma en cascada, actualiza riesgos y deja todo listo para el lunes.",
      actor: "system",
    },
  ] as CycleDay[],
};

// --- Conversaciones de ejemplo (cómo se siente) -----------------------------
export interface ChatOutput {
  label: string;
  format: string;
}

export interface ChatExample {
  title: string;
  pm: string;
  system: string;
  outputs: ChatOutput[];
}

export const conversations = {
  title: "Se conduce hablando.",
  subtitle:
    "Sin formularios, sin macros, sin plantillas que rellenar a mano. El PM describe la realidad y recibe evidencias actualizadas.",
  examples: [
    {
      title: "Cierre de semana",
      pm: "Esta semana cerramos la fase de análisis. La integración con el ERP se retrasa una semana porque seguimos pendientes de los accesos.",
      system:
        "Marco la fase de análisis como finalizada y desplazo la integración. He recalculado las fechas de todo lo que depende de ella y actualizado los riesgos asociados.",
      outputs: [
        { label: "Planificación reprogramada", format: "Excel" },
        { label: "Camino crítico recalculado", format: "Excel" },
        { label: "Riesgo actualizado", format: "Excel · 2 versiones" },
      ],
    },
    {
      title: "Arranque de proyecto",
      pm: "Acabamos de firmar la propuesta con el cliente. Móntame la planificación del proyecto a partir de ella.",
      system:
        "Descompongo el alcance en fases, épicas y tareas, calculo el calendario con sus dependencias e identifico qué no puede retrasarse sin mover el Go-Live. Quedan listas las evidencias base, conectadas entre sí.",
      outputs: [
        { label: "Desglose del trabajo", format: "Excel" },
        { label: "Planificación temporal", format: "Excel" },
        { label: "Camino crítico", format: "Excel" },
      ],
    },
    {
      title: "Riesgo materializado",
      pm: "El interlocutor de negocio estará de baja dos semanas. Es quien valida los requisitos funcionales.",
      system:
        "Lo registro como riesgo de alto impacto sobre la validación funcional, con un plan de mitigación propuesto, y lo reflejo en la versión que comparte con el cliente con lenguaje neutro.",
      outputs: [
        { label: "Riesgo nuevo priorizado", format: "Excel" },
        { label: "Versión cliente generada", format: "Excel" },
      ],
    },
    {
      title: "Acta de reunión",
      pm: "Te paso la transcripción de la sesión de hoy con el cliente. Sácame el acta.",
      system:
        "Genero el acta formal con los asistentes, los temas tratados y las decisiones, acciones y cuestiones abiertas, cada una identificada y numerada para su seguimiento posterior.",
      outputs: [
        { label: "Acta formal", format: "Word" },
        { label: "Decisiones y acciones trazadas", format: "incluido" },
      ],
    },
    {
      title: "Pregunta al proyecto",
      pm: "¿Qué decidimos al final sobre el alcance del módulo de nóminas y por qué?",
      system:
        "Recupero la decisión, su fecha y el razonamiento que la motivó. El proyecto recuerda cada decisión con su porqué, aunque se tomara hace semanas o la planteara otra persona.",
      outputs: [
        { label: "Respuesta con su contexto", format: "al instante" },
      ],
    },
    {
      title: "Preparar dirección",
      pm: "Prepárame el informe para el comité de seguimiento del jueves.",
      system:
        "Construyo el informe ejecutivo con el avance, las desviaciones y las decisiones acumuladas de las últimas semanas. Te dejo el documento detallado y la presentación para la reunión.",
      outputs: [
        { label: "Informe ejecutivo", format: "Word" },
        { label: "Presentación de comité", format: "PowerPoint" },
      ],
    },
  ] as ChatExample[],
};

// --- Ventajas diferenciales -------------------------------------------------
export interface Advantage {
  title: string;
  body: string;
}

export const advantages = {
  title: "Por qué es distinto.",
  subtitle:
    "No es una plantilla ni un cuadro de mando. Es un sistema que entiende el proyecto y actúa sobre él.",
  items: [
    {
      title: "Reprogramación en cascada",
      body: "Un retraso en una tarea se propaga automáticamente a todo lo que depende de ella, hasta la última fecha del proyecto. Sin arrastre manual.",
    },
    {
      title: "Doble versión sin trabajo extra",
      body: "Toda información sensible se filtra sola: la versión cliente se deriva de la interna y nunca se editan por separado.",
    },
    {
      title: "Memoria que no se pierde",
      body: "Cada decisión, riesgo y corrección queda registrada con su porqué, no solo el qué. Puedes preguntar al proyecto en lenguaje natural y obtener la respuesta con su contexto, aunque se decidiera hace meses. El conocimiento del proyecto sobrevive a las personas y a las vacaciones.",
    },
    {
      title: "Visión de portfolio",
      body: "Con varios proyectos a la vez, mira por encima de todos ellos: detecta conflictos de recursos, solapes de hitos y patrones de riesgo que ya ocurrieron en otro proyecto, antes de que vuelvan a doler. La experiencia de cada proyecto alimenta a los demás.",
    },
  ] as Advantage[],
};

// --- Impacto ----------------------------------------------------------------
export interface Metric {
  value: string;
  label: string;
}

export const impact = {
  title: "El resultado.",
  subtitle:
    "Menos tiempo en mantener el proyecto, más tiempo en dirigirlo bien.",
  metrics: [
    { value: "Minutos", label: "para cerrar la semana, no horas" },
    { value: "100%", label: "de las evidencias siempre actualizadas" },
    { value: "1", label: "única fuente de verdad del proyecto" },
    { value: "0", label: "esfuerzo manual de mantenimiento" },
  ] as Metric[],
};

export const finalCta = {
  title: "Esto es lo que te estaba intentando enseñar.",
  body: "Un PM dirige. El sistema se encarga del resto del trabajo de gestión — y lo mantiene vivo de principio a fin.",
};

// --- Cómo funciona (3 pasos + posicionamiento) ------------------------------
export interface HowStep {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const howItWorks = {
  eyebrow: "Cómo funciona",
  title: "Describes la realidad. El sistema hace el resto.",
  subtitle:
    "No hay formularios que rellenar ni plantillas que mantener. El trabajo de gestión sucede en tres movimientos.",
  steps: [
    {
      icon: MessageSquare,
      title: "Tú describes",
      body: "Cuentas en lenguaje natural lo que ha pasado: una sesión, un retraso, una decisión o una simple pregunta. Sin campos ni formatos.",
    },
    {
      icon: Workflow,
      title: "Interpreta y actúa",
      body: "Entiende qué evidencias quedan afectadas, las actualiza en cascada y mantiene la coherencia entre todas — incluidas la versión interna y la del cliente.",
    },
    {
      icon: Layers,
      title: "Evidencias vivas",
      body: "Recibes los documentos al día al instante, y una memoria que conserva cada decisión con su porqué. El proyecto nunca pierde el contexto.",
    },
  ] as HowStep[],
  positioning: {
    eyebrow: "Dónde está el valor",
    lead: "El valor está en el sistema, no en el documento.",
    body: "Un Gantt lo hace cualquiera. La diferencia está en cómo el sistema encadena cada capacidad, recuerda el proyecto entero y aplica el mismo criterio de delivery, semana tras semana.",
    punch: "Eso es lo que no se improvisa.",
  },
};

// --- Soberanía del dato -----------------------------------------------------
export const dataSovereignty = {
  title: "Tus datos, donde tú decidas.",
  body: "El sistema corre donde tú elijas — tu propio equipo, un servidor on-premise o tu nube — y se conecta al modelo de IA que prefieras, incluido uno local. La gestión del proyecto no obliga a sacar tu información de tu perímetro.",
  points: [
    "Despliegue a tu medida: local, on-premise o nube",
    "Modelo de IA a tu elección, propio o de terceros",
    "El dato no abandona tu entorno si así lo decides",
  ],
};
