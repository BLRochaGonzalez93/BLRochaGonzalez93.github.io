const translations = {
  es: {
    "accessibility.skip": "Saltar al contenido principal",
    "nav.projects": "Proyectos",
    "nav.caseStudy": "Caso de estudio",
    "featured.kicker": "Case study destacado",
    "featured.title": "Proyecto recomendado para revisar primero",
    "featured.description": "El portfolio está preparado para que un reclutador pueda empezar por un proyecto principal, entender el objetivo técnico y después profundizar en el código, la arquitectura y la build cuando estén publicados.",
    "featured.badge": "Foco actual",
    "featured.projectTitle": "Third Person Controller",
    "featured.projectSummary": "Prototipo base para demostrar movimiento en tercera persona, input modular, cámara orbital, salto, gravedad y separación limpia de responsabilidades gameplay.",
    "featured.demonstratesTitle": "Qué demuestra",
    "featured.demonstrates1": "Arquitectura gameplay modular.",
    "featured.demonstrates2": "Separación entre input, movimiento, cámara y animación.",
    "featured.demonstrates3": "Documentación orientada a revisión técnica.",
    "featured.reviewerTitle": "Ruta de revisión",
    "featured.review1": "Leer la página del proyecto.",
    "featured.review2": "Revisar los scripts principales.",
    "featured.review3": "Probar la build cuando esté publicada.",
    "featured.ctaDetails": "Ver case study",
    "featured.ctaGithub": "Ver GitHub",
    "featured.metric1": "sistemas principales",
    "featured.metric2": "motor objetivo",
    "featured.metric3": "lenguaje base",
    "project1.proofTitle": "Prueba técnica",
    "project1.proof1": "Movimiento relativo a cámara",
    "project1.proof2": "Separación input / motor / cámara",
    "project2.proofTitle": "Prueba técnica",
    "project2.proof1": "Estados de ataque y recuperación",
    "project2.proof2": "Daño, hit detection y feedback",
    "project3.proofTitle": "Prueba técnica",
    "project3.proof1": "Datos de ítems reutilizables",
    "project3.proof2": "Inventario separado de la UI",
    "project4.proofTitle": "Prueba técnica",
    "project4.proof1": "Serialización y persistencia local",
    "project4.proof2": "Separación runtime / save data",
    "projectPage.flowTitle": "Flujo técnico previsto",
    "projectPage.flowIntro": "Esta página convierte el placeholder en una especificación técnica revisable: explica qué flujo tendrá el sistema y qué partes del código demostrarán valor profesional.",
    "project.u001.flow1": "Lee acciones del jugador desde teclado, ratón o gamepad.",
    "project.u001.flow2": "Normaliza el input para desacoplar controles y gameplay.",
    "project.u001.flow3": "Aplica movimiento, salto, gravedad y velocidad.",
    "project.u001.flow4": "Sincroniza cámara y animación con el estado del jugador.",
    "project.u002.flow1": "Recibe la intención de ataque desde input o IA.",
    "project.u002.flow2": "Controla ventanas de ataque, recuperación y bloqueo.",
    "project.u002.flow3": "Detecta impactos y valida objetivos afectados.",
    "project.u002.flow4": "Aplica daño y dispara feedback visual o sonoro.",
    "project.u003.flow1": "Define datos reutilizables para cada objeto.",
    "project.u003.flow2": "Gestiona slots, stackeo y reglas internas.",
    "project.u003.flow3": "Valida movimientos, uso y transferencia de ítems.",
    "project.u003.flow4": "Presenta el inventario sin mezclar lógica y UI.",
    "project.u004.flow1": "Recoge datos de runtime que deben persistir.",
    "project.u004.flow2": "Coordina guardado, carga y reseteo.",
    "project.u004.flow3": "Escribe y lee archivos locales serializados.",
    "project.u004.flow4": "Reconstruye el progreso al iniciar la partida.",
    "nav.stack": "Tecnologías",
    "nav.about": "Sobre mí",
    "nav.repositories": "Repositorios",
    "nav.contact": "Contacto",
    "hero.eyebrow": "Game Developer · Gameplay Programmer · Unity / C#",
    "hero.titleLine1": "Hola, soy",
    "hero.subtitle": "Desarrollo prototipos jugables, sistemas gameplay y experiencias interactivas con una base técnica clara, documentación cuidada y una presentación preparada para estudios y reclutadores.",
    "hero.ctaProjects": "Ver proyectos",
    "hero.ctaCv": "Descargar CV",
    "hero.highlight1": "motor principal",
    "hero.highlight2": "gameplay systems",
    "hero.highlight3": "portfolio técnico",
    "hero.status": "Disponible para oportunidades GameDev",
    "projects.kicker": "Portfolio visual",
    "projects.title": "Proyectos destacados",
    "projects.description": "Primera selección de prototipos y sistemas preparados para evolucionar hacia repositorios técnicos, builds descargables y case studies completos.",
    "status.prototype": "Prototipo",
    "status.concept": "Concepto",
    "status.planned": "Planificado",
    "project1.title": "Third Person Controller",
    "project1.description": "Controlador en tercera persona con movimiento relativo a cámara, salto, gravedad, input modular y sincronización con animaciones.",
    "project2.title": "Combat Prototype",
    "project2.description": "Base de combate con ataques, daño, feedback visual, estados simples y arquitectura preparada para ampliarse.",
    "project3.title": "Inventory & Items System",
    "project3.description": "Sistema de inventario basado en datos, objetos reutilizables, UI básica y flujo preparado para documentación técnica.",
    "project4.title": "Save System Prototype",
    "project4.description": "Prototipo de guardado local con serialización, datos de jugador, progreso persistente y estructura escalable.",
    "common.code": "Código",
    "common.details": "Detalles",
    "common.buildSoon": "Build próximamente",
    "stack.kicker": "Stack técnico",
    "stack.title": "Tecnologías y herramientas",
    "stack.description": "Herramientas principales para programar, prototipar, versionar, documentar y presentar proyectos de videojuegos.",
    "about.kicker": "Perfil",
    "about.title": "Sobre mí",
    "about.description1": "Soy Blas Luis Rocha González, desarrollador de videojuegos bajo el nick VRM Games. Mi foco principal está en Unity y C#, creando sistemas gameplay claros, prototipos jugables y documentación que permita entender rápidamente el valor técnico de cada proyecto.",
    "about.description2": "Mi objetivo con este portfolio es mostrar una evolución profesional real: proyectos seleccionados, repositorios ordenados, builds descargables y una presentación visual sencilla, moderna y útil para reclutadores.",
    "about.focusTitle": "Áreas de interés",
    "about.focus1": "Gameplay programming y arquitectura de sistemas",
    "about.focus2": "Controladores de jugador, cámara, input y UI",
    "about.focus3": "Prototipos jugables para portfolio técnico",
    "about.focus4": "GitHub, documentación y flujo profesional de trabajo",
    "repos.kicker": "Ecosistema",
    "repos.title": "Repositorios y enlaces principales",
    "repos.description": "La web funciona como capa visual del portfolio. GitHub centraliza el código, la documentación técnica y las builds publicadas mediante Releases.",
    "repos.websiteTitle": "Web portfolio",
    "repos.websiteDescription": "Primera impresión visual para reclutadores y estudios.",
    "repos.githubDescription": "Perfil público con proyectos, repositorios y documentación técnica.",
    "repos.projectsTitle": "Repositorios de proyectos",
    "repos.projectsDescription": "Código, documentación, capturas y enlaces a builds jugables.",
    "roadmap.kicker": "Evolución",
    "roadmap.title": "Roadmap del portfolio",
    "roadmap.item1": "Web portfolio bilingüe publicada en GitHub Pages.",
    "roadmap.item2": "Primer proyecto Unity documentado con capturas y código.",
    "roadmap.item3": "Build jugable enlazada desde GitHub Releases.",
    "roadmap.item4": "Portfolio listo para enviar a estudios y reclutadores.",
    "contact.kicker": "Contacto",
    "contact.title": "¿Hablamos?",
    "contact.description": "Estoy abierto a oportunidades relacionadas con desarrollo de videojuegos, gameplay programming, Unity, C# y creación de prototipos jugables.",
    "projectPage.backPortfolio": "Volver al portfolio",
    "projectPage.summaryTitle": "Resumen técnico",
    "projectPage.contributionTitle": "Mi contribución",
    "projectPage.systemsTitle": "Sistemas implementados",
    "projectPage.technologiesTitle": "Tecnologías",
    "projectPage.reviewTitle": "Ruta recomendada de revisión",
    "projectPage.reviewIntro": "Cuando el repositorio esté publicado, estos serán los archivos o sistemas principales que un reclutador técnico debería revisar primero.",
    "projectPage.statusTitle": "Estado y próximos pasos",
    "projectPage.statusLabel": "Estado actual",
    "projectPage.homeButton": "Volver a inicio",
    "projectPage.projectsButton": "Ver todos los proyectos",
    "projectPage.repoButton": "Ver GitHub",
    "projectPage.buildSoon": "Build próximamente",
    "projectPage.placeholderNote": "Contenido placeholder preparado para sustituirse por capturas, código y enlaces reales cuando el proyecto avance.",
    "project.u001.kicker": "Unity · C# · Gameplay Programming",
    "project.u001.title": "Third Person Controller",
    "project.u001.subtitle": "Base de controlador en tercera persona orientada a movimiento relativo a cámara, salto, gravedad, input modular y sincronización con animaciones.",
    "project.u001.summary": "Este proyecto está pensado como primer prototipo jugable del portfolio. Su objetivo es demostrar una arquitectura clara para separar input, movimiento, cámara y animación sin convertir el controlador del jugador en una clase monolítica.",
    "project.u001.contribution1": "Diseño del flujo de input del jugador y normalización de acciones.",
    "project.u001.contribution2": "Implementación del movimiento relativo a cámara y control de velocidad.",
    "project.u001.contribution3": "Estructura preparada para salto, gravedad y estados básicos del personaje.",
    "project.u001.contribution4": "Documentación técnica enfocada a revisión por reclutadores.",
    "project.u001.system1": "Player Input Reader",
    "project.u001.system2": "Third Person Motor",
    "project.u001.system3": "Camera Controller",
    "project.u001.system4": "Animation Sync",
    "project.u001.status": "Prototipo base",
    "project.u001.next1": "Crear repositorio individual del proyecto.",
    "project.u001.next2": "Añadir primera implementación jugable en Unity.",
    "project.u001.next3": "Publicar capturas, documentación y build Windows.",
    "project.u002.kicker": "Unity · C# · Combat Systems",
    "project.u002.title": "Combat Prototype",
    "project.u002.subtitle": "Prototipo de combate centrado en ataques, daño, estados simples, feedback visual y estructura preparada para expansión.",
    "project.u002.summary": "Este placeholder está pensado para un futuro sistema de combate modular. La intención es separar entrada, ejecución de ataques, detección de impacto, daño y feedback para poder escalar el prototipo con nuevas acciones.",
    "project.u002.contribution1": "Diseño de una base de estados para ataque, recuperación y bloqueo de acciones.",
    "project.u002.contribution2": "Planificación de hit detection, daño y respuesta visual.",
    "project.u002.contribution3": "Preparación de una estructura ampliable para enemigos y feedback.",
    "project.u002.contribution4": "Documentación futura de decisiones de arquitectura gameplay.",
    "project.u002.system1": "Combat State Controller",
    "project.u002.system2": "Hit Detection",
    "project.u002.system3": "Damage Handler",
    "project.u002.system4": "Visual Feedback",
    "project.u002.status": "Concepto técnico",
    "project.u002.next1": "Definir alcance del primer prototipo de combate.",
    "project.u002.next2": "Implementar ataques básicos y feedback visual.",
    "project.u002.next3": "Documentar arquitectura y publicar una demo corta.",
    "project.u003.kicker": "Unity · C# · UI / Data",
    "project.u003.title": "Inventory & Items System",
    "project.u003.subtitle": "Sistema de inventario basado en datos, objetos reutilizables, UI básica y flujo preparado para documentación técnica.",
    "project.u003.summary": "Este proyecto servirá para demostrar cómo estructurar datos de objetos, slots de inventario, interacción con UI y separación entre lógica de gameplay y presentación visual.",
    "project.u003.contribution1": "Diseño de datos para ítems reutilizables.",
    "project.u003.contribution2": "Planificación de slots, stackeo y reglas de inventario.",
    "project.u003.contribution3": "Preparación de UI básica para visualizar y mover objetos.",
    "project.u003.contribution4": "Documentación de flujo entre datos, lógica y vista.",
    "project.u003.system1": "Item Data",
    "project.u003.system2": "Inventory Slots",
    "project.u003.system3": "Inventory UI",
    "project.u003.system4": "Item Interaction",
    "project.u003.status": "Planificado",
    "project.u003.next1": "Definir modelo de datos de los ítems.",
    "project.u003.next2": "Crear prototipo de UI y comportamiento de slots.",
    "project.u003.next3": "Añadir capturas y explicación del flujo técnico.",
    "project.u004.kicker": "Unity · C# · Persistence",
    "project.u004.title": "Save System Prototype",
    "project.u004.subtitle": "Prototipo de guardado local con serialización, datos de jugador, progreso persistente y estructura escalable.",
    "project.u004.summary": "Este proyecto estará centrado en persistencia local y organización de datos guardables. El objetivo será demostrar una base clara para guardar progreso, configuración y datos del jugador.",
    "project.u004.contribution1": "Diseño de estructura de datos serializables.",
    "project.u004.contribution2": "Planificación de sistema de guardado y carga local.",
    "project.u004.contribution3": "Separación entre datos de runtime y datos persistentes.",
    "project.u004.contribution4": "Preparación de documentación de casos de uso y limitaciones.",
    "project.u004.system1": "Save Manager",
    "project.u004.system2": "Serializable Player Data",
    "project.u004.system3": "Progress Persistence",
    "project.u004.system4": "Load / Reset Flow",
    "project.u004.status": "Planificado",
    "project.u004.next1": "Definir datos mínimos a persistir.",
    "project.u004.next2": "Implementar guardado y carga con JSON.",
    "project.u004.next3": "Documentar limitaciones y posibles mejoras.",
    "projectPage.engineLabel": "Motor",
    "projectPage.languageLabel": "Lenguaje",
    "projectPage.statusFactLabel": "Estado",
    "project.u001.review1": "Lectura y normalización de input",
    "project.u001.review2": "Movimiento, gravedad y salto",
    "project.u001.review3": "Cámara orbital y seguimiento",
    "project.u001.review4": "Sincronización con Animator",
    "project.u002.review1": "Control de estados de combate",
    "project.u002.review2": "Ejecución de ataques",
    "project.u002.review3": "Aplicación de daño",
    "project.u002.review4": "Respuesta visual y feedback",
    "project.u003.review1": "Definición de datos de objetos",
    "project.u003.review2": "Slots y reglas de inventario",
    "project.u003.review3": "Lógica principal del inventario",
    "project.u003.review4": "Presentación UI",
    "project.u004.review1": "Coordinación de guardado y carga",
    "project.u004.review2": "Datos persistentes del jugador",
    "project.u004.review3": "Lectura y escritura local",
    "project.u004.review4": "Inicialización del sistema",
    "contact.email": "Enviar email",
    "notFound.kicker": "Error 404",
    "notFound.title": "Página no encontrada",
    "notFound.description": "La página que buscas no existe, ha cambiado de ubicación o todavía no está publicada dentro del portfolio.",
    "notFound.homeButton": "Volver al portfolio",
    "notFound.projectsButton": "Ver proyectos",
    "notFound.helpText": "También puedes revisar mi perfil de GitHub o contactar conmigo si necesitas un enlace concreto."
  },
  en: {
    "accessibility.skip": "Skip to main content",
    "nav.projects": "Projects",
    "nav.caseStudy": "Case Study",
    "featured.kicker": "Featured case study",
    "featured.title": "Recommended project to review first",
    "featured.description": "The portfolio is structured so recruiters can start with one main project, understand the technical goal and then dive into code, architecture and the playable build once published.",
    "featured.badge": "Foco actual",
    "featured.projectTitle": "Third Person Controller",
    "featured.projectSummary": "Core prototype designed to demonstrate third-person movement, modular input, orbital camera, jump, gravity and clean separation of gameplay responsibilities.",
    "featured.demonstratesTitle": "What it demonstrates",
    "featured.demonstrates1": "Modular gameplay architecture.",
    "featured.demonstrates2": "Separation between input, movement, camera and animation.",
    "featured.demonstrates3": "Documentation aimed at technical review.",
    "featured.reviewerTitle": "Review path",
    "featured.review1": "Read the project page.",
    "featured.review2": "Review the main scripts.",
    "featured.review3": "Try the build once published.",
    "featured.ctaDetails": "View case study",
    "featured.ctaGithub": "View GitHub",
    "featured.metric1": "main systems",
    "featured.metric2": "target engine",
    "featured.metric3": "base language",
    "project1.proofTitle": "Technical proof",
    "project1.proof1": "Camera-relative movement",
    "project1.proof2": "Input / motor / camera separation",
    "project2.proofTitle": "Technical proof",
    "project2.proof1": "Attack and recovery states",
    "project2.proof2": "Damage, hit detection and feedback",
    "project3.proofTitle": "Technical proof",
    "project3.proof1": "Reusable item data",
    "project3.proof2": "Inventory separated from UI",
    "project4.proofTitle": "Technical proof",
    "project4.proof1": "Serialization and local persistence",
    "project4.proof2": "Runtime / save data separation",
    "projectPage.flowTitle": "Planned technical flow",
    "projectPage.flowIntro": "This page turns the placeholder into a reviewable technical specification: it explains the expected system flow and which code areas will prove professional value.",
    "project.u001.flow1": "Reads player actions from keyboard, mouse or gamepad.",
    "project.u001.flow2": "Normalizes input to decouple controls from gameplay.",
    "project.u001.flow3": "Applies movement, jump, gravity and speed.",
    "project.u001.flow4": "Synchronizes camera and animation with player state.",
    "project.u002.flow1": "Receives attack intent from input or AI.",
    "project.u002.flow2": "Controls attack, recovery and action-lock windows.",
    "project.u002.flow3": "Detects hits and validates affected targets.",
    "project.u002.flow4": "Applies damage and triggers visual or audio feedback.",
    "project.u003.flow1": "Defines reusable data for each item.",
    "project.u003.flow2": "Manages slots, stacking and internal rules.",
    "project.u003.flow3": "Validates movement, usage and item transfers.",
    "project.u003.flow4": "Presents inventory without mixing logic and UI.",
    "project.u004.flow1": "Collects runtime data that must persist.",
    "project.u004.flow2": "Coordinates saving, loading and reset flow.",
    "project.u004.flow3": "Reads and writes serialized local files.",
    "project.u004.flow4": "Rebuilds progress when the game starts.",
    "nav.stack": "Tech Stack",
    "nav.about": "About",
    "nav.repositories": "Repositories",
    "nav.contact": "Contact",
    "hero.eyebrow": "Game Developer · Gameplay Programmer · Unity / C#",
    "hero.titleLine1": "Hi, I am",
    "hero.subtitle": "I build playable prototypes, gameplay systems and interactive experiences with a clear technical foundation, strong documentation and a presentation designed for studios and recruiters.",
    "hero.ctaProjects": "View projects",
    "hero.ctaCv": "Download CV",
    "hero.highlight1": "main engine",
    "hero.highlight2": "gameplay systems",
    "hero.highlight3": "technical portfolio",
    "hero.status": "Available for GameDev opportunities",
    "projects.kicker": "Visual portfolio",
    "projects.title": "Featured projects",
    "projects.description": "An initial selection of prototypes and systems prepared to evolve into technical repositories, downloadable builds and complete case studies.",
    "status.prototype": "Prototype",
    "status.concept": "Concept",
    "status.planned": "Planned",
    "project1.title": "Third Person Controller",
    "project1.description": "Third-person controller with camera-relative movement, jump, gravity, modular input and animation synchronization.",
    "project2.title": "Combat Prototype",
    "project2.description": "Combat foundation with attacks, damage, visual feedback, simple states and an architecture ready to expand.",
    "project3.title": "Inventory & Items System",
    "project3.description": "Data-driven inventory system with reusable items, basic UI and a workflow prepared for technical documentation.",
    "project4.title": "Save System Prototype",
    "project4.description": "Local save prototype with serialization, player data, persistent progress and scalable structure.",
    "common.code": "Code",
    "common.details": "Details",
    "common.buildSoon": "Build coming soon",
    "stack.kicker": "Technical stack",
    "stack.title": "Technologies and tools",
    "stack.description": "Core tools used to program, prototype, version, document and present game development projects.",
    "about.kicker": "Profile",
    "about.title": "About me",
    "about.description1": "I am Blas Luis Rocha González, a game developer working under the nickname VRM Games. My main focus is Unity and C#, creating clear gameplay systems, playable prototypes and documentation that makes the technical value of each project easy to understand.",
    "about.description2": "The goal of this portfolio is to show real professional progression: curated projects, organized repositories, downloadable builds and a clean, modern presentation useful for recruiters.",
    "about.focusTitle": "Areas of interest",
    "about.focus1": "Gameplay programming and systems architecture",
    "about.focus2": "Player controllers, camera, input and UI",
    "about.focus3": "Playable prototypes for a technical portfolio",
    "about.focus4": "GitHub, documentation and professional workflow",
    "repos.kicker": "Ecosystem",
    "repos.title": "Main repositories and links",
    "repos.description": "This website works as the visual layer of the portfolio. GitHub centralizes source code, technical documentation and builds published through Releases.",
    "repos.websiteTitle": "Portfolio website",
    "repos.websiteDescription": "A visual first impression for recruiters and studios.",
    "repos.githubDescription": "Public profile with projects, repositories and technical documentation.",
    "repos.projectsTitle": "Project repositories",
    "repos.projectsDescription": "Code, documentation, screenshots and links to playable builds.",
    "roadmap.kicker": "Progression",
    "roadmap.title": "Portfolio roadmap",
    "roadmap.item1": "Bilingual portfolio website published with GitHub Pages.",
    "roadmap.item2": "First Unity project documented with screenshots and code.",
    "roadmap.item3": "Playable build linked from GitHub Releases.",
    "roadmap.item4": "Portfolio ready to share with studios and recruiters.",
    "contact.kicker": "Contact",
    "contact.title": "Let’s talk",
    "contact.description": "I am open to opportunities related to game development, gameplay programming, Unity, C# and playable prototype creation.",
    "projectPage.backPortfolio": "Back to portfolio",
    "projectPage.summaryTitle": "Technical summary",
    "projectPage.contributionTitle": "My contribution",
    "projectPage.systemsTitle": "Implemented systems",
    "projectPage.technologiesTitle": "Technologies",
    "projectPage.reviewTitle": "Recommended review path",
    "projectPage.reviewIntro": "Once the repository is published, these will be the main files or systems a technical recruiter should review first.",
    "projectPage.statusTitle": "Status and next steps",
    "projectPage.statusLabel": "Current status",
    "projectPage.homeButton": "Back home",
    "projectPage.projectsButton": "View all projects",
    "projectPage.repoButton": "View GitHub",
    "projectPage.buildSoon": "Build coming soon",
    "projectPage.placeholderNote": "Placeholder content prepared to be replaced with real screenshots, code and links as the project evolves.",
    "project.u001.kicker": "Unity · C# · Gameplay Programming",
    "project.u001.title": "Third Person Controller",
    "project.u001.subtitle": "Third-person controller foundation focused on camera-relative movement, jump, gravity, modular input and animation synchronization.",
    "project.u001.summary": "This project is planned as the first playable prototype in the portfolio. Its goal is to demonstrate a clean architecture that separates input, movement, camera and animation without turning the player controller into a monolithic class.",
    "project.u001.contribution1": "Design of the player input flow and normalized actions.",
    "project.u001.contribution2": "Implementation of camera-relative movement and speed control.",
    "project.u001.contribution3": "Structure prepared for jump, gravity and basic character states.",
    "project.u001.contribution4": "Technical documentation focused on recruiter review.",
    "project.u001.system1": "Player Input Reader",
    "project.u001.system2": "Third Person Motor",
    "project.u001.system3": "Camera Controller",
    "project.u001.system4": "Animation Sync",
    "project.u001.status": "Base prototype",
    "project.u001.next1": "Create the individual project repository.",
    "project.u001.next2": "Add the first playable Unity implementation.",
    "project.u001.next3": "Publish screenshots, documentation and Windows build.",
    "project.u002.kicker": "Unity · C# · Combat Systems",
    "project.u002.title": "Combat Prototype",
    "project.u002.subtitle": "Combat prototype focused on attacks, damage, simple states, visual feedback and a structure ready for expansion.",
    "project.u002.summary": "This placeholder is planned for a future modular combat system. The intention is to separate input, attack execution, hit detection, damage and feedback so the prototype can scale with new actions.",
    "project.u002.contribution1": "Design of a state foundation for attack, recovery and action locking.",
    "project.u002.contribution2": "Planning for hit detection, damage and visual response.",
    "project.u002.contribution3": "Preparation of an expandable structure for enemies and feedback.",
    "project.u002.contribution4": "Future documentation of gameplay architecture decisions.",
    "project.u002.system1": "Combat State Controller",
    "project.u002.system2": "Hit Detection",
    "project.u002.system3": "Damage Handler",
    "project.u002.system4": "Visual Feedback",
    "project.u002.status": "Technical concept",
    "project.u002.next1": "Define the scope of the first combat prototype.",
    "project.u002.next2": "Implement basic attacks and visual feedback.",
    "project.u002.next3": "Document the architecture and publish a short demo.",
    "project.u003.kicker": "Unity · C# · UI / Data",
    "project.u003.title": "Inventory & Items System",
    "project.u003.subtitle": "Data-driven inventory system with reusable items, basic UI and a workflow prepared for technical documentation.",
    "project.u003.summary": "This project will demonstrate how to structure item data, inventory slots, UI interaction and separation between gameplay logic and visual presentation.",
    "project.u003.contribution1": "Design of reusable item data.",
    "project.u003.contribution2": "Planning for slots, stacking and inventory rules.",
    "project.u003.contribution3": "Preparation of a basic UI to display and move items.",
    "project.u003.contribution4": "Documentation of the flow between data, logic and view.",
    "project.u003.system1": "Item Data",
    "project.u003.system2": "Inventory Slots",
    "project.u003.system3": "Inventory UI",
    "project.u003.system4": "Item Interaction",
    "project.u003.status": "Planned",
    "project.u003.next1": "Define the item data model.",
    "project.u003.next2": "Create the UI prototype and slot behavior.",
    "project.u003.next3": "Add screenshots and explain the technical flow.",
    "project.u004.kicker": "Unity · C# · Persistence",
    "project.u004.title": "Save System Prototype",
    "project.u004.subtitle": "Local save prototype with serialization, player data, persistent progress and scalable structure.",
    "project.u004.summary": "This project will focus on local persistence and organization of saveable data. The goal is to demonstrate a clear foundation to save progress, settings and player data.",
    "project.u004.contribution1": "Design of serializable data structures.",
    "project.u004.contribution2": "Planning of local save and load flow.",
    "project.u004.contribution3": "Separation between runtime data and persistent data.",
    "project.u004.contribution4": "Preparation of use-case documentation and limitations.",
    "project.u004.system1": "Save Manager",
    "project.u004.system2": "Serializable Player Data",
    "project.u004.system3": "Progress Persistence",
    "project.u004.system4": "Load / Reset Flow",
    "project.u004.status": "Planned",
    "project.u004.next1": "Define the minimum data to persist.",
    "project.u004.next2": "Implement save and load with JSON.",
    "project.u004.next3": "Document limitations and possible improvements.",
    "projectPage.engineLabel": "Engine",
    "projectPage.languageLabel": "Language",
    "projectPage.statusFactLabel": "Status",
    "project.u001.review1": "Input reading and normalization",
    "project.u001.review2": "Movement, gravity and jump",
    "project.u001.review3": "Orbital camera and follow behavior",
    "project.u001.review4": "Animator synchronization",
    "project.u002.review1": "Combat state control",
    "project.u002.review2": "Attack execution",
    "project.u002.review3": "Damage application",
    "project.u002.review4": "Visual response and feedback",
    "project.u003.review1": "Item data definition",
    "project.u003.review2": "Slots and inventory rules",
    "project.u003.review3": "Main inventory logic",
    "project.u003.review4": "UI presentation",
    "project.u004.review1": "Save and load coordination",
    "project.u004.review2": "Persistent player data",
    "project.u004.review3": "Local read and write flow",
    "project.u004.review4": "System initialization",
    "contact.email": "Send email",
    "notFound.kicker": "Error 404",
    "notFound.title": "Page not found",
    "notFound.description": "The page you are looking for does not exist, has moved, or has not been published inside the portfolio yet.",
    "notFound.homeButton": "Back to portfolio",
    "notFound.projectsButton": "View projects",
    "notFound.helpText": "You can also check my GitHub profile or contact me if you need a specific link."
  }
};

const SELECTORS = {
  header: "[data-header]",
  navToggle: "[data-nav-toggle]",
  navMenu: "[data-nav-menu]",
  navLinks: ".nav-links a",
  languageButtons: "[data-set-lang]",
  translatable: "[data-i18n]",
  reveal: ".reveal",
  currentYear: "[data-current-year]"
};

const getInitialLanguage = () => {
  const storedLanguage = localStorage.getItem("vrm-portfolio-language");

  if (storedLanguage && translations[storedLanguage]) {
    return storedLanguage;
  }

  return navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
};

const applyLanguage = (language) => {
  const dictionary = translations[language] ?? translations.es;

  document.documentElement.lang = language;
  localStorage.setItem("vrm-portfolio-language", language);

  document.querySelectorAll(SELECTORS.translatable).forEach((element) => {
    const key = element.dataset.i18n;
    const translation = dictionary[key];

    if (translation) {
      element.textContent = translation;
    }
  });

  document.querySelectorAll(SELECTORS.languageButtons).forEach((button) => {
    const isActive = button.dataset.setLang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const setupLanguageSwitcher = () => {
  document.querySelectorAll(SELECTORS.languageButtons).forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.setLang);
    });
  });

  applyLanguage(getInitialLanguage());
};

const setupMobileNavigation = () => {
  const toggle = document.querySelector(SELECTORS.navToggle);
  const menu = document.querySelector(SELECTORS.navMenu);

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
};

const setupHeaderScroll = () => {
  const header = document.querySelector(SELECTORS.header);

  if (!header) return;

  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
};

const setupActiveNavigation = () => {
  const links = Array.from(document.querySelectorAll(SELECTORS.navLinks))
    .filter((link) => link.getAttribute("href")?.startsWith("#"));

  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        links.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0.01
    }
  );

  sections.forEach((section) => observer.observe(section));
};

const setupRevealAnimations = () => {
  const elements = document.querySelectorAll(SELECTORS.reveal);

  if (!elements.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14
    }
  );

  elements.forEach((element) => observer.observe(element));
};

const setupCurrentYear = () => {
  document.querySelectorAll(SELECTORS.currentYear).forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
};

const setupExternalLinkLogging = () => {
  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    link.addEventListener("click", () => {
      console.info(`Opening external link: ${link.href}`);
    });
  });
};

const setupIcons = () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setupCurrentYear();
  setupLanguageSwitcher();
  setupMobileNavigation();
  setupHeaderScroll();
  setupActiveNavigation();
  setupRevealAnimations();
  setupExternalLinkLogging();
  setupIcons();
});
