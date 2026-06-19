// ============================================
// THE GLOW REPUBLIC - SERVICES DATA
// ============================================

const services = [
    // FACIALS
    { id: 1, name: "The Quick Dew", category: "facial", description: "Hydrating express facial", price: 350, duration: "30 min" },
    { id: 2, name: "The Pollution Purge", category: "facial", description: "Deep clean + extractions", price: 650, duration: "60 min" },
    { id: 3, name: "Algae Peel", category: "facial", description: "Brightening + natural peel", price: 600, duration: "50 min" },
    { id: 4, name: "Chemical Peel", category: "facial", description: "Sensitive skin + barrier repair", price: 700, duration: "60 min" },
    { id: 5, name: "Anti-Aging Collagen Facial", category: "facial", description: "Collagen boosting treatment", price: 750, duration: "60 min" },

    // LASHES
    { id: 6, name: "Classic Lash Set", category: "lash", description: "100-120 lashes per eye", price: 650, duration: "90 min" },
    { id: 7, name: "Hybrid Lash Set", category: "lash", description: "Mix of classic + volume", price: 750, duration: "105 min" },
    { id: 8, name: "Volume Lash Set", category: "lash", description: "Lightweight volume fans", price: 850, duration: "120 min" },
    { id: 9, name: "Mega Volume Lash Set", category: "lash", description: "Maximum drama", price: 1050, duration: "150 min" },
    { id: 10, name: "Lash Lift + Tint", category: "lash", description: "No extensions, curled look", price: 550, duration: "60 min" },
    { id: 11, name: "Lash Infill", category: "lash", description: "2-4 weeks after full set", price: 350, duration: "45-60 min" },

    // BROWS
    { id: 12, name: "Brow Wax and Shape", category: "brow", description: "Waxing + shaping", price: 180, duration: "20 min" },
    { id: 13, name: "Brow Threading", category: "brow", description: "Precise, gentle on skin", price: 150, duration: "15 min" },
    { id: 14, name: "Brow Lamination", category: "brow", description: "Smooths and lifts brow hair", price: 450, duration: "45 min" },
    { id: 15, name: "Brow Tint", category: "brow", description: "Semi-permanent color", price: 120, duration: "15 min" },
    { id: 16, name: "Lamination + Tint + Shape", category: "brow", description: "Complete brow makeover", price: 550, duration: "60 min" },
    { id: 17, name: "Sword Ombré Brows", category: "brow", description: "Semi-permanent tattooing", price: 1800, duration: "2 hours" },
    { id: 18, name: "Microblading", category: "brow", description: "Hair-stroke tattooing", price: 2200, duration: "2.5 hours" }
];

// ============================================
// DISPLAY FUNCTIONS
// ============================================

let currentFiltered = services;

function displayServices(servicesToShow) {
    const container = document.getElementById('dynamic-services');
    if (!container) return;
    
    if (servicesToShow.length === 0) {
        container.innerHTML = `<p style="text-align:center; padding:20px;">No services found. Try a different search.</p>`;
        return;
    }
    
    let html = '<div class="service-list">';
    servicesToShow.forEach(service => {
        html += `
            <div class="service-row" data-category="${service.category}">
                <span class="name">${service.name}</span>
                <span class="description">${service.description}</span>
                <span class="duration">${service.duration}</span>
                <span class="price">R${service.price}</span>
            </div>
        `;
    });
    html += '</div>';
    container.innerHTML = html;
}

function filterByCategory(category) {
    let filtered = category === 'all' ? services : services.filter(s => s.category === category);
    currentFiltered = filtered;
    displayServices(filtered);
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
}

function sortByPrice(order) {
    const sorted = [...currentFiltered].sort((a, b) => 
        order === 'low-to-high' ? a.price - b.price : b.price - a.price
    );
    displayServices(sorted);
}

function searchServices() {
    const term = document.getElementById('search-input').value.toLowerCase().trim();
    if (!term) { displayServices(services); currentFiltered = services; return; }
    const filtered = services.filter(s => 
        s.name.toLowerCase().includes(term) || 
        s.description.toLowerCase().includes(term) ||
        s.category.toLowerCase().includes(term)
    );
    currentFiltered = filtered;
    displayServices(filtered);
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    displayServices(services);
});