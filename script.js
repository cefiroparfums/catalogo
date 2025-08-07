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
    // ... (todos los demás perfumes del catálogo)
];

let allPerfumes = [];
let filteredPerfumes = [];
let currentPerfume = null;

document.addEventListener('DOMContentLoaded', () => {
    allPerfumes = perfumeData;
    filteredPerfumes = [...allPerfumes];
    renderPerfumes();
    initializeEventListeners();
});

function initializeEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', e => {
        if (e.key === 'Enter') performSearch();
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            applyGenderFilter(this.getAttribute('data-filter'));
        });
    });

    document.getElementById('shareLinkBtn').addEventListener('click', copyLink);
    document.getElementById('contactWhatsAppBtn').addEventListener('click', contactWhatsApp);
}

function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    
    filteredPerfumes = query === '' ? [...allPerfumes] : 
        allPerfumes.filter(perfume => {
            const searchText = [
                perfume.nombre_comercial,
                perfume.casa_fabricante,
                perfume.notas.salida,
                perfume.notas.corazon,
                perfume.notas.fondo
            ].join(' ').toLowerCase();
            
            return searchText.includes(query);
        });
    
    renderPerfumes();
}

function applyGenderFilter(gender) {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();
    
    let baseList = searchQuery === '' ? allPerfumes : 
        allPerfumes.filter(perfume => {
            const searchText = [
                perfume.nombre_comercial,
                perfume.casa_fabricante,
                perfume.notas.salida,
                perfume.notas.corazon,
                perfume.notas.fondo
            ].join(' ').toLowerCase();
            
            return searchText.includes(searchQuery);
        });

    filteredPerfumes = gender === 'all' ? baseList : 
        baseList.filter(perfume => perfume.genero === gender);
    
    renderPerfumes();
}

function renderPerfumes() {
    const catalog = document.getElementById('perfumeCatalog');
    
    if (filteredPerfumes.length === 0) {
        catalog.innerHTML = `
            <div class="col-12">
                <div class="no-results">
                    <i class="fas fa-search fa-4x mb-4"></i>
                    <h4>No se encontraron perfumes</h4>
                    <p>Intenta con otros términos de búsqueda o filtros</p>
                </div>
            </div>
        `;
        return;
    }

    catalog.innerHTML = filteredPerfumes.map((perfume, index) => `
        <div class="col">
            <div class="card perfume-card h-100">
                <div class="position-relative">
                    <img src="${perfume.imagen_url}" class="card-img-top" alt="${perfume.nombre_comercial}" 
                         onerror="this.src='https://via.placeholder.com/300x300/f8f6f0/1a1a1a?text=Sin+Imagen'">
                    <span class="gender-badge ${perfume.genero.toLowerCase()}">${perfume.genero}</span>
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="perfume-name">${perfume.nombre_comercial}</h5>
                    <p class="brand-name">${perfume.casa_fabricante}</p>
                    <p class="notes-preview flex-grow-1">${getNotesPreview(perfume.notas)}</p>
                    <button class="btn btn-details mt-auto" onclick="showPerfumeDetails(${index})">
                        Ver Detalles
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function getNotesPreview(notas) {
    const allNotes = [notas.salida, notas.corazon, notas.fondo]
        .filter(note => note?.trim())
        .join(', ');
    
    return allNotes.length > 80 ? 
        allNotes.substring(0, 80) + '...' : 
        allNotes || 'Notas no especificadas';
}

function showPerfumeDetails(index) {
    const perfume = filteredPerfumes[index];
    currentPerfume = perfume;
    
    document.getElementById('modalTitle').textContent = perfume.nombre_comercial;
    document.getElementById('modalBrand').textContent = perfume.casa_fabricante;
    document.getElementById('modalImage').src = perfume.imagen_url;
    
    const genderBadge = document.getElementById('modalGender');
    genderBadge.textContent = perfume.genero;
    genderBadge.className = `badge ${perfume.genero.toLowerCase()}`;
    
    document.getElementById('modalTopNotes').innerHTML = 
        perfume.notas.salida || '<span class="empty-note">No especificadas</span>';
    document.getElementById('modalHeartNotes').innerHTML = 
        perfume.notas.corazon || '<span class="empty-note">No especificadas</span>';
    document.getElementById('modalBaseNotes').innerHTML = 
        perfume.notas.fondo || '<span class="empty-note">No especificadas</span>';
    
    new bootstrap.Modal(document.getElementById('perfumeModal')).show();
}

function contactWhatsApp() {
    if (!currentPerfume) return;
    
    const message = `¡Hola Céfiro! Me interesa el perfume *${currentPerfume.nombre_comercial}* de ${currentPerfume.casa_fabricante}. ¿Podrían darme más información sobre disponibilidad y precio? ¡Gracias! 🌿`;
    const whatsappUrl = `https://wa.me/573106197587?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function copyLink() {
    const url = window.location.href;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => showToast());
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = url;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast();
    }
}

function showToast() {
    new bootstrap.Toast(document.getElementById('copyToast')).show();
}

// Hacer las funciones accesibles globalmente para los eventos onclick en HTML
window.showPerfumeDetails = showPerfumeDetails;
