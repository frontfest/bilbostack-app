const talks = {
    'make-ui-components-for-web-framework-ecosystem': {
        title: 'Make UI Components for Web Framework Ecosystem',
        description: [
            '¿Es posible usar un componente UI creado con React en Angular? ¿Y uno en Vue.js en Ember? A pesar de la gran diversidad de frameworks dentro del mundo Frontend, en esta charla veremos como crear componentes e interfaz de usuario utilizando las APIs de la plataforma web de manera que podrá ser utilizados de forma agnóstica en cualquiera de los principales frameworks que lideran el ecosistema web.'
        ],
        speakers: [
            {
                name: 'Sergio Contreras',
                headline: ['Web Frontend advocate and amateur triathlete / GDE Web Technologies'],
                image: 'sergio-contreras.jpg',
            }
        ],
        when: '09:45-10:30'
    },

    'arte-generativo-con-css': {
        title: 'Arte generativo con CSS',
        description: [
            '¿Sabías que a través del arte generativo podemos generar obras autónomas a partir de un algoritmo? En esta charla vamos a aprender cómo utilizar CSS para crear arte, de la mano de <css-doodle />, un Web Component para dibujar patrones que pensarías que son imposibles de hacer con CSS.'
        ],
        speakers: [
            {
                name: 'Sonia Ruiz',
                headline: ['Frontend Developer'],
                image: 'sonia-ruiz.jpg',
            }
        ],
        when: '10:35-11:20'
    },

    'programación-funcional-para-el-día-a-día-mito-o-realidad': {
        title: 'Programación funcional para el día a día, ¿mito o realidad?',
        description: [
            'La programación funcional está de moda, eso es así. Este paradigma de programación constituye los cimientos de tecnologías tan punteras como React y sus hooks, Redux o los observables RxJS.',
            'La mayoría de los desarrolladores ya tenemos asimilados sus conceptos más básicos como reduce, map, filter… algunos incluso hacen katas con currificación o inmutabilidad. Sin embargo, integrarlo en nuestro día a día no siempre es sencillo, estamos acostumbrados a una programación imperativa con la que nos es difícil romper.',
            'En esta charla abordaremos problemas a los que nos enfrentamos a diario los programadores e intentaremos darle un enfoque funcional, descubriendo, la forma de integrar este paradigma en nuestro trabajo habitual y las ventajas que nos reporta. Plantearemos ejemplos prácticos que nos permitan salir de nuestra zona de comfort programático y empezar a explorar el universo funcional más allá de la vía láctea imperativa.'
        ],
        speakers: [
            {
                name: 'Henar Hernández',
                headline: ['Programadora (funcional siempre que puedo), madrugadora, curranta, enamorada de las comunidades y vividora nonstop'],
                image: 'henar-hernandez.jpg',
            }
        ],
        when: '12:00-12:45'
    },

    'tipografia-para-frontends': {
        title: 'Tipografía para frontends',
        description: [
            'Como encargados de que las interfaces que desarrollamos tengan la mejor experiencia de usuario, los frontends tenemos que conocer a fondo todas las herramientas de las que disponemos. La tipografía es una de esas herramientas y a veces las utilizamos muy por debajo de sus posibilidades. Esta charla es un recorrido desde las bases de la tipografía aplicada a la web, hasta el uso de las ya imparables variables fonts. Veremos cómo usar tipografía responsive, y componer textos equilibrados, así como otras técnicas de fácil aplicación pero que nos ayudarán a elevar el nivel de acabados de las interfaces que creamos.'
        ],
        speakers: [
            {
                name: 'Elena Ramírez',
                headline: ['Diseñadora interactiva y frontend especializada en tipografía en Ashler Design'],
                image: 'elena-ramirez.jpg',
            }
        ],
        when: '12:50-13:35'
    },

    'welcome-to-the-dark-side': {
        title: 'Welcome... to the dark side?',
        description: [
            'El modo oscuro ha sido un tema muy popular en el mundo de diseño de interfaz recientemente. De repente, parece que todo necesita dos modos: claro y oscuro. ¿Es eso verdad? En 40 minutos, vamos a analizar dónde y cuándo hay que diseñar una interfaz en modo oscuro, también revisaremos los errores típicos en el proceso de creación del mismo.'
        ],
        speakers: [
            {
                name: 'James Heda Weng',
                headline: ['Doctorado en Bellas Artes. Product Manager & UX Designer @ StyleSage'],
                image: 'james-heda-weng.jpg',
            }
        ],
        when: '15:00-15:45'
    },

    'mi-componente-mis-normas': {
        title: 'Mi componente, mis normas',
        description: [
            'Estamos acostumbrados a trabajar con componentes, creando piezas reutilizables de forma cómoda. El problema viene cuando un dev decide llamar a su propiedad name y otro username. En esta charla veremos cómo evitar este tipo de situaciones definiendo convenciones y modelos comunes que estén disponibles tanto para componentes como incluso para la parte back.',
            'Mostraremos algunas herramientas de Typescript y estructuración de repositorios de componentes que solemos utilizar para mantener el control de nuestros componentes.'
        ],
        speakers: [
            {
                name: 'Elizabeth Rodríguez',
                headline: ['Frontend, master of keyboards'],
                image: 'eli-rodriguez.jpg',
            },
            {
                name: 'Jon Rojí',
                headline: ['Frontend, master of unicorns'],
                image: 'jon-roji.jpg',
            }
        ],
        when: '15:50-16:35'
    },

    'primitive-obsession': {
        title: 'Primitive Obsession',
        description: [
            'Esta industria me ha enseñado que estar en continuo aprendizaje es necesario. En el camino hacia mi objetivo de convertirme en una buena programadora, he pasado por varias fases cíclicas que alternaban la sensación de no saber lo que haces y el subidón de estar aprendiendo algo complejo.',
            'Me encanta resolver problemas y cuando logro entender algo que me parecía complejo, me gusta escribirlo y explicarlo con mis palabras de newbie por si a alguien le puede ayudar. Y eso es lo que voy a tratar de hacer en esta charla.',
            '¿Puede el testeo ayudarte a refactorizar? ¿Qué ocurre cuando traemos datos al front? Eso de las buenas prácticas y el clean code mola, pero lo “divertido” es darse cuenta, en una prueba técnica para un empleo, que tu código tiene “olorcillo” y que te falta mucho por aprender. Os contaré lo que aprendí allí.',
            'En definitiva, te vamos a contar una historia con casos prácticos que ojalá te sean de utilidad.'
        ],
        speakers: [
            {
                name: 'Aida Albarrán',
                headline: ['Frontend, madre y cantante y, de la lógica, amante'],
                image: 'aida-albarran.jpg',
            }
        ],
        when: '17:15-18:00'
    },

    'the-art-of-front-end-architecture': {
        title: 'The Art of Front-end Architecture',
        description: [
            '... o cómo darse cuenta de que el desarrollo front-end es desarrollo de software.',
            'En mi día a día hago lo que puedo creando aplicaciones web "complejas". Aquí voy a compartir lo que he aprendido intentado que sean mantenibles, escalables, y agnósticas del framework.',
            'Veremos cómo crear software durable en el front end y cómo los principios de diseño nos ayudarán a tomar decisiones más inteligentes.',
        ],
        speakers: [
            {
                name: 'Adrià Fontcuberta',
                headline: ['Ingeniero de software interesado en JavaScript, CSS, clean code, lean software development y todo lo que se le parezca'],
                image: 'adria-fontcuberta.jpg',
            }
        ],
        when: '18:05-18:50'
    },
};

Object.keys(talks).forEach((k) => {
    talks[k].slug = k;
});

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

module.exports = {
    all () {
        return Object.keys(talks)
            .map((id) => clone(talks[id]));
    },
    getBySlug (slug) {
        const talk = talks[slug];
        if (!talk) return null;
        return clone(talk);
    }
};
