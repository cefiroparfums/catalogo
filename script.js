// Datos del catálogo
const perfumeData = [
    {
        "nombre_comercial": "VALENTINO DONNA",
        "casa_fabricante": "Valentino",
        "notas": {
            "salida": "",
            "corazon": "",
            "fondo": "Notas atalcadas, avainilladas"
        },
        "genero": "Femenino",
        "imagen_url": "https://www.perfumesbogota.com.co/cdn/shop/products/VALENTINO_DONNA_BORN_IN_ROMA_1024x1024@2x.webp?v=1677722034"
    },
    {
        "nombre_comercial": "BLEECKER STREET",
        "casa_fabricante": "Bond No. 9",
        "notas": {
            "salida": "Hojas de violeta, arándano, tomillo",
            "corazon": "Cedro, jazmín, vainilla, canela",
            "fondo": "Musgo de roble, gamuza, pachulí, ámbar"
        },
        "genero": "Unisex",
        "imagen_url": "https://perfumescolombia.com.co/cdn/shop/files/bond-n9-bleecker-street-karol-g-100ml-edp-11-premium-4477199.webp?v=1751883931"
    },
    {
        "nombre_comercial": "FLOWERBOMB",
        "casa_fabricante": "Viktor & Rolf",
        "notas": {
            "salida": "Osmanthus, té, bergamota",
            "corazon": "Orquídea, rosa, fresia, flor de naranjo africano, jazmín",
            "fondo": "Pachulí, almizcle"
        },
        "genero": "Femenino",
        "imagen_url": "https://m.media-amazon.com/images/I/61RWULJE6+L._SX522_.jpg"
    },
    {
        "nombre_comercial": "ECLAIRE",
        "casa_fabricante": "Lattafa",
        "notas": {
            "salida": "Caramelo, leche, azúcar",
            "corazon": "Flores blancas, miel",
            "fondo": "Vainilla, praliné, almizcle"
        },
        "genero": "Femenino",
        "imagen_url": "https://http2.mlstatic.com/D_NQ_NP_792591-MLA84559080116_052025-O.webp"
    },
    {
        "nombre_comercial": "YARA MOI",
        "casa_fabricante": "Lattafa",
        "notas": {
            "salida": "",
            "corazon": "",
            "fondo": ""
        },
        "genero": "Femenino",
        "imagen_url": "https://veronnaperfumeria.com/cdn/shop/files/photo-output_130_1800x1800.heic.jpg?v=1718414496"
    },
    {
        "nombre_comercial": "CLOUD",
        "casa_fabricante": "Ariana Grande",
        "notas": {
            "salida": "Flor de lavanda, pera jugosa, bergamota",
            "corazon": "Crema de coco, praliné, orquídea de vainilla",
            "fondo": "Almizcles sensuales, maderas rubias cremosas"
        },
        "genero": "Femenino",
        "imagen_url": "https://http2.mlstatic.com/D_NQ_NP_726719-MLU72836480957_112023-O.webp"
    },
    {
        "nombre_comercial": "GOOD GIRL SUPREME",
        "casa_fabricante": "Carolina Herrera",
        "notas": {
            "salida": "Bayas, jazmín",
            "corazon": "Nardos, haba tonka tostada",
            "fondo": "Vetiver"
        },
        "genero": "Femenino",
        "imagen_url": "https://medipielsa.vtexassets.com/arquivos/ids/194648-800-auto?v=638617520790870000&width=800&height=auto&aspect=true"
    },
    {
        "nombre_comercial": "212 VIP ROSE",
        "casa_fabricante": "Carolina Herrera",
        "notas": {
            "salida": "Champagne Rosé, pimienta rosa",
            "corazon": "Flor de durazno, bouquet de rosas",
            "fondo": "Queenwood, almizcle"
        },
        "genero": "Femenino",
        "imagen_url": "https://noirperfumeria.co/cdn/shop/files/212-vip-ROse-NP.webp?v=1682953708&width=713"
    },
    {
        "nombre_comercial": "BRIGHT CRYSTAL",
        "casa_fabricante": "Versace",
        "notas": {
            "salida": "Yuzu, granada",
            "corazon": "Peonía, magnolia, flor de loto",
            "fondo": "Almizcle, ámbar"
        },
        "genero": "Femenino",
        "imagen_url": "https://static.wixstatic.com/media/7e4077_1c1412a8cc4c4dd4ab46ba24760f9920~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7e4077_1c1412a8cc4c4dd4ab46ba24760f9920~mv2.png"
    },
    {
        "nombre_comercial": "LA VIE EST BELLE",
        "casa_fabricante": "Lancôme",
        "notas": {
            "salida": "Frambuesa, pimienta rosa, bergamota (Oui La Vie Est Belle); Grosella negra, pera (La Vie Est Belle original)",
            "corazon": "Rosa, ylang-ylang (Oui La Vie Est Belle); Iris, jazmín, flor de azahar del naranjo (La Vie Est Belle original)",
            "fondo": "Notas dulces, iris, pachulí (Oui La Vie Est Belle); Pachulí, haba tonka, vainilla, praliné (La Vie Est Belle original)"
        },
        "genero": "Femenino",
        "imagen_url": "https://i5.walmartimages.com/asr/3d994134-2478-495e-b5ea-2244fcf4871c_2.a3c248744c84d72028dbee26ccf6f239.jpeg"
    },
    {
        "nombre_comercial": "COCONUT PASSION",
        "casa_fabricante": "Victoria's Secret",
        "notas": {
            "salida": "",
            "corazon": "",
            "fondo": "Vainilla, coco, notas dulces, lácteas, atalcadas, tropicales"
        },
        "genero": "Femenino",
        "imagen_url": "https://http2.mlstatic.com/D_NQ_NP_857926-MLU73809168593_012024-O.webp"
    },
    {
        "nombre_comercial": "BEAUTY RUSH JUICED BERRY",
        "casa_fabricante": "Victoria's Secret",
        "notas": {
            "salida": "",
            "corazon": "",
            "fondo": "Varias bayas (fresas, frambuesas, moras), notas dulces y cítricas"
        },
        "genero": "Femenino",
        "imagen_url": "https://m.media-amazon.com/images/I/61riQDFTskL._AC_SY606_.jpg"
    },
    {
        "nombre_comercial": "9PM",
        "casa_fabricante": "Afnan",
        "notas": {
            "salida": "Manzana, bergamota, lavanda, canela",
            "corazon": "Flor de naranjo, lirio del valle",
            "fondo": "Vainilla, haba tonka, ámbar, pachulí"
        },
        "genero": "Masculino",
        "imagen_url": "https://http2.mlstatic.com/D_NQ_NP_861650-CBT82788540392_032025-O.webp"
    },
    {
        "nombre_comercial": "VALENTINO UOMO BORN IN ROMA",
        "casa_fabricante": "Valentino",
        "notas": {
            "salida": "Salvia",
            "corazon": "Jengibre, sal mineral",
            "fondo": "Vetiver, madera de guayacán"
        },
        "genero": "Masculino",
        "imagen_url": "https://www.perfumesbogota.com.co/cdn/shop/products/D_NQ_NP_770818-MEC47398130236_092021-W_1024x1024@2x.jpg?v=1677779209"
    },
    {
        "nombre_comercial": "LE BEAU",
        "casa_fabricante": "Jean Paul Gaultier",
        "notas": {
            "salida": "Piña, iris, jengibre, ciprés",
            "corazon": "Coco, notas amaderadas",
            "fondo": "Ámbar, haba tonka"
        },
        "genero": "Masculino",
        "imagen_url": "https://www.perfumesbogota.com.co/cdn/shop/products/le_beau_le_male_1024x1024@2x.jpg?v=1677779652"
    },
    {
        "nombre_comercial": "ACQUA DI GIO PROFUMO",
        "casa_fabricante": "Giorgio Armani",
        "notas": {
            "salida": "Notas marinas",
            "corazon": "Romero, salvia, geranio",
            "fondo": "Incienso, pachulí"
        },
        "genero": "Masculino",
        "imagen_url": "https://perfumescolombia.com.co/cdn/shop/products/acqua-di-gio-profumo-11-premium-1959112.png?v=1751884239"
    },
    {
        "nombre_comercial": "CLUB DE NUIT INTENSE MAN",
        "casa_fabricante": "Armaf",
        "notas": {
            "salida": "Limón, piña, grosella negra, manzana, bergamota",
            "corazon": "Abedul, jazmín, rosa",
            "fondo": "Almizcle, ámbar gris, pachulí, vainilla"
        },
        "genero": "Masculino",
        "imagen_url": "https://exitocol.vtexassets.com/arquivos/ids/23602302/perfume-armaf-club-de-nuit-intense-man-hombre-locion-105ml.jpg?v=638563955996100000"
    },
    {
        "nombre_comercial": "BAD BOY",
        "casa_fabricante": "Carolina Herrera",
        "notas": {
            "salida": "Bergamota, pimienta negra, pimienta blanca",
            "corazon": "Cedro, salvia",
            "fondo": "Haba tonka, cacao, ámbar"
        },
        "genero": "Masculino",
        "imagen_url": "https://frutafrescaco.vtexassets.com/arquivos/ids/68925913-1600-auto?v=638887117472670000&width=1600&height=auto&aspect=true"
    },
    {
        "nombre_comercial": "ONE MILLION LUCKY",
        "casa_fabricante": "Paco Rabanne",
        "notas": {
            "salida": "Ciruela, notas ozónicas, pomelo, bergamota",
            "corazon": "Avellana, miel, cedro, madera de cachemira, jazmín, flor de naranjo",
            "fondo": "Amberwood, pachulí, musgo de roble, vetiver"
        },
        "genero": "Masculino",
        "imagen_url": "https://luryx.com.co/pub/media/catalog/product/cache/17a2882685dcb778cb02abe71b33b15c/_/6/_6_5_65131403_2.jpg"
    },
    {
        "nombre_comercial": "TERRE D HERMES",
        "casa_fabricante": "Hermès",
        "notas": {
            "salida": "Naranja, pomelo",
            "corazon": "Pimienta",
            "fondo": "Vetiver, cedro, pachulí, benjuí"
        },
        "genero": "Masculino",
        "imagen_url": "https://mwhite.com.co/cdn/shop/files/terre-de-hermes-parfum-200ml-perfumes-574.webp?v=1713450362&width=493"
    },
    {
        "nombre_comercial": "INVICTUS VICTORY",
        "casa_fabricante": "Paco Rabanne",
        "notas": {
            "salida": "Pimienta rosa, limón",
            "corazon": "Incienso, lavanda",
            "fondo": "Vainilla, haba tonka, ámbar"
        },
        "genero": "Masculino",
        "imagen_url": "https://http2.mlstatic.com/D_NQ_NP_634002-MLA47844547674_102021-O.webp"
    },
    {
        "nombre_comercial": "212 HEROES",
        "casa_fabricante": "Carolina Herrera",
        "notas": {
            "salida": "Pera, cannabis, jengibre",
            "corazon": "Geranio, salvia",
            "fondo": "Almizcle, cuero"
        },
        "genero": "Masculino",
        "imagen_url": "https://perfumescolombia.com.co/cdn/shop/products/212-men-heroes-11-premium-1064601.png?v=1751884226"
    },
    {
        "nombre_comercial": "KHAMRAH QAHWA",
        "casa_fabricante": "Lattafa",
        "notas": {
            "salida": "Cardamomo, jengibre, canela",
            "corazon": "Praliné, flores blancas, frutas confitadas",
            "fondo": "Café, haba tonka, benjuí, vainilla, almizcle"
        },
        "genero": "Unisex",
        "imagen_url": "https://cdn.wholesale55.com/wp-content/uploads/2024/11/Khamrah-Qahwa-EDP-100-ml-Unisex-by-Lattafa-1.jpg.jpeg"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el carrusel de perfumes
    initPerfumeCarousel();
    
    // Intersection Observer para animaciones
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Observar elementos con fade-in
    document.querySelectorAll('.fade-in').forEach(function(el) {
        observer.observe(el);
    });

    // Scroll suave para enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efecto navbar en scroll
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    let ticking = false;

    function updateNavbar() {
        const scrollTop = window.pageYOffset;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }

        // Ocultar/mostrar navbar
        if (scrollTop > lastScrollTop && scrollTop > 300) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });

    // Precargar imágenes críticas
    const criticalImages = [
        'https://images.unsplash.com/photo-1615634262417-98ba8b222d20',
        'https://images.unsplash.com/photo-1594035910387-fea47794261f',
        'https://images.unsplash.com/photo-1615368144592-6b7b0e8b1a6b'
    ];

    criticalImages.forEach(function(src) {
        const img = new Image();
        img.src = src + '?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80';
    });

    // Efecto hover para tarjetas de producto
    document.querySelectorAll('.product-card').forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Animación sutil para botones
    document.querySelectorAll('.btn-luxury, .btn-outline-luxury').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            if (this.href && !this.href.includes('#')) {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });
});

function initPerfumeCarousel() {
    const carouselInner = document.querySelector('#perfumeCarousel .carousel-inner');
    
    // Dividir los perfumes en grupos de 3 para cada slide
    const itemsPerSlide = 3;
    const slides = [];
    
    for (let i = 0; i < perfumeData.length; i += itemsPerSlide) {
        slides.push(perfumeData.slice(i, i + itemsPerSlide));
    }
    
    // Generar los slides del carrusel
    slides.forEach((slidePerfumes, index) => {
        const slide = document.createElement('div');
        slide.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        
        const row = document.createElement('div');
        row.className = 'row g-4 justify-content-center';
        
        slidePerfumes.forEach(perfume => {
            const col = document.createElement('div');
            col.className = 'col-lg-4';
            
            col.innerHTML = `
                <div class="product-card">
                    <img src="${perfume.imagen_url}" class="product-image w-100" alt="${perfume.nombre_comercial}" 
                         onerror="this.src='https://via.placeholder.com/300x300/f8f6f0/1a1a1a?text=Sin+Imagen'">
                    <div class="product-body">
                        <h5 class="product-title">${perfume.nombre_comercial}</h5>
                        <p class="product-description">${perfume.casa_fabricante}</p>
                        <p class="product-description">${getNotesPreview(perfume.notas)}</p>
                    </div>
                </div>
            `;
            
            row.appendChild(col);
        });
        
        slide.appendChild(row);
        carouselInner.appendChild(slide);
    });
}

function getNotesPreview(notas) {
    const allNotes = [notas.salida, notas.corazon, notas.fondo]
        .filter(note => note?.trim())
        .join(', ');
    
    return allNotes.length > 80 ? 
        allNotes.substring(0, 80) + '...' : 
        allNotes || 'Notas no especificadas';
}
