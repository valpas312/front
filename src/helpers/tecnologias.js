const tecnologias = new Promise((resolve) => {
    setTimeout(() =>{
        resolve([
            {
                "nombre": "ReactJS",
                "imagen": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                "descripcion": "React es una biblioteca de JavaScript para construir interfaces de usuario. React es mantenida por Facebook y la comunidad de software libre.",
                "desarrollo": "Front-End"
            },
            {
                "nombre": "NodeJS",
                "imagen": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
                "descripcion": "Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación ECMAScript, asíncrono, con I/O de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.",
                "desarrollo": "Back-End"
            },
            {
                "nombre": "MongoDB",
                "imagen": "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
                "descripcion": "MongoDB es un sistema de base de datos NoSQL, orientado a documentos y de código abierto. En lugar de guardar los datos en tablas, tal y como se hace en las bases de datos relacionales, MongoDB guarda estructuras de datos BSON, una especificación similar a JSON, con alguna extensión.",
                "desarrollo": "Back-End"
            },
            {
                "nombre": "ExpressJS",
                "imagen": "https://cdn.buttercms.com/4XpulFfySpWyYTXuaVL2",
                "descripcion": "Express.js, o simplemente Express, es un marco de aplicación web para Node.js, lanzado como software libre y de código abierto bajo la Licencia MIT. Es diseñado para construir aplicaciones web y APIs.",
                "desarrollo": "Back-End"
            },
            {
                "nombre": "ChakraUI",
                "imagen": "https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/media/logo-colored@2x.png?raw=true",
                "descripcion": "Chakra UI es una biblioteca de componentes de interfaz de usuario simple, modular y accesible que se basa en el sistema de diseño de componentes de la interfaz de usuario de la aplicación Chakra.",
                "desarrollo": "Front-End"
            },
            {
                "nombre": "TypeScript",
                "imagen": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
                "descripcion": "TypeScript es un lenguaje de programación de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipado estático y objetos basados en clases.",
                "desarrollo": "Front-End"
            },
            {
                "nombre": "Redux",
                "imagen": "https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png",
                "descripcion": "Redux es una biblioteca de código abierto para JavaScript diseñada para manejar el estado de la aplicación. Es más comúnmente utilizado con bibliotecas como React o Angular para construir interfaces de usuario.",
                "desarrollo": "Front-End"
            },
            {
                "nombre": "React-Router-Dom",
                "imagen": "https://reactrouter.com/_brand/react-router-stacked-color.png",
                "descripcion": "React Router es una biblioteca de enrutamiento para React. Es una colección de componentes de navegación que comparten la API de enrutamiento declarativa de React.",
                "desarrollo": "Front-End"
            },
            {
                "nombre": "Axios",
                "imagen": "https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png",
                "descripcion": "Axios es una biblioteca popular de JavaScript que se utiliza para realizar solicitudes HTTP desde el navegador o Node.js. Es una biblioteca de cliente HTTP basada en promesas que se puede utilizar en el navegador y en Node.js.",
                "desarrollo": "Front-End"
            },
            {
                "nombre": "Vite",
                "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png",
                "descripcion": "Vite es un entorno de desarrollo web que permite a los desarrolladores crear aplicaciones web modernas y eficientes. Vite es un proyecto de código abierto y es compatible con JavaScript, TypeScript, JSX y Vue.",
                "desarrollo": "Front-End"
            },
            {
                "nombre": "React-Query",
                "imagen": "https://velog.velcdn.com/images/aroo_ming/post/adfec5f9-fac6-47d0-acf9-3fbd68b376f0/image.png",
                "descripcion": "React Query es una biblioteca de gestión de estado de datos para React que hace que la gestión de datos en aplicaciones React sea sencilla, intuitiva y escalable.",
                "desarrollo": "Front-End"
            },
            {
                "nombre": "Mongoose",
                "imagen": "https://tsed.io/mongoose.png",
                "descripcion": "Mongoose es una biblioteca de modelado de objetos MongoDB para Node.js. Proporciona una solución basada en esquemas para modelar datos de su aplicación.", 
                "desarrollo": "Back-End"
            },
            {
                "nombre": "Nodemailer",
                "imagen": "https://i0.wp.com/community.nodemailer.com/wp-content/uploads/2015/10/n2-2.png?fit=422%2C360&ssl=1",
                "descripcion": "Nodemailer es un módulo de Node.js que permite enviar correos electrónicos. Es compatible con Unicode y se puede utilizar con varios servicios de correo electrónico.",
                "desarrollo": "Back-End"
            },
            {
                "nombre": "bcrypt",
                "imagen": "https://media.licdn.com/dms/image/D5612AQH__npk-Wyjlw/article-cover_image-shrink_720_1280/0/1715507262342?e=2147483647&v=beta&t=JLfBSzbwyJeOQRn-xzJNFOZzf5mphFdGx7e_ouAtOXE",
                "descripcion": "bcrypt es una función de hashing de contraseñas basada en Blowfish. Es una función de hash de contraseñas que es más segura que las funciones de hash tradicionales.",
                "desarrollo": "Back-End"
            }
            ]);
    }, 4000);
});

export default tecnologias;