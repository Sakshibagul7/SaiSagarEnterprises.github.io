











const products = [
    {
        id: 1,
        name: "Royal 1121 XXL Steam Basmati Rice",
        cat: "Grains",
        origin: "Taraori, Punjab / Haryana",
        hsn: "1006.30.20",
        desc: "Extra-long slender grain aged for 24 months. Milled from select paddy with average cooked grain length exceeding 22mm. Zero chalkiness, delicate floral aroma.",
        specs: "Grain Length: 8.35mm | Moisture: <11.8% | Broken: <0.5% | Purity: 99.5%",
        badge: "Aged 2 Years",
        badgeClass: "badge-bestseller",
        rating: 4.9,
        reviewsCount: 142,
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
        fallbackEmoji: "🍚",
        variants: [
            { label: "1 kg Pouch", weightKg: 1, retail: 140, mrp: 165, bulk: 115 },
            { label: "5 kg Family Bag", weightKg: 5, retail: 640, mrp: 780, bulk: 520 },
            { label: "25 kg PP Bag", weightKg: 25, retail: 2750, mrp: 3350, bulk: 2350 },
            { label: "50 kg Mandi Jute Bag", weightKg: 50, retail: 5100, mrp: 6250, bulk: 4400 }
        ]
    },
    {
        id: 2,
        name: "Desi Toor Dal (Unpolished Arhar Dal)",
        cat: "Pulses",
        origin: "Latur, Maharashtra",
        hsn: "0713.60.00",
        desc: "100% sortex-cleaned farm direct pigeon peas. Machine split without chemical water or oil polishing. Retains natural dietary fiber, enzymes, and rich golden taste.",
        specs: "Moisture: <10.5% | Polish: None (Natural) | Foreign Matter: 0.05% Max",
        badge: "Unpolished Grade A",
        badgeClass: "badge-sortex",
        rating: 4.8,
        reviewsCount: 189,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rxIaXoDiV6qRbNCOCpYx_Av7v5O11InO_-jPkQmorA&s=10",
        fallbackEmoji: "🫘",
        variants: [
            { label: "1 kg Pouch", weightKg: 1, retail: 155, mrp: 185, bulk: 125 },
            { label: "5 kg Bag", weightKg: 5, retail: 740, mrp: 890, bulk: 610 },
            { label: "25 kg Bag", weightKg: 25, retail: 3450, mrp: 4100, bulk: 2900 },
            { label: "50 kg Wholesale Bag", weightKg: 50, retail: 6500, mrp: 7800, bulk: 5600 }
        ]
    },
    {
        id: 3,
        name: "MP Sharbati Golden Whole Wheat",
        cat: "Wheat & Flours",
        origin: "Sehore, Madhya Pradesh",
        hsn: "1001.99.10",
        desc: "Celebrated Sehore rain-fed golden wheat grains with sweet palate and high amber luster. Machine destoned and sortex cleaned for domestic and commercial milling.",
        specs: "Protein: >13.2% | Moisture: <11.0% | Foreign Matter: <0.1% | Natural Amber",
        badge: "Direct Farm Gate",
        badgeClass: "badge-mandi",
        rating: 4.9,
        reviewsCount: 96,
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
        fallbackEmoji: "🌾",
        variants: [
            { label: "5 kg Consumer Bag", weightKg: 5, retail: 245, mrp: 290, bulk: 205 },
            { label: "10 kg Bag", weightKg: 10, retail: 470, mrp: 550, bulk: 395 },
            { label: "30 kg Bag", weightKg: 30, retail: 1350, mrp: 1600, bulk: 1140 },
            { label: "50 kg Jute Bag", weightKg: 50, retail: 2150, mrp: 2550, bulk: 1850 }
        ]
    },
    {
        id: 4,
        name: "Salem Supreme Golden Turmeric Powder",
        cat: "Spices",
        origin: "Salem, Tamil Nadu",
        hsn: "0910.30.20",
        desc: "High-curcumin finger turmeric slow cold-milled to preserve volatile essential oils. Deep amber golden tint with intense warm earthy fragrance. Zero starch adulteration.",
        specs: "Curcumin: 3.8% - 4.2% | Total Ash: <6.8% | Moisture: <8.5% | Lab Tested",
        badge: "Curcumin 3.8%+",
        badgeClass: "badge-organic",
        rating: 4.9,
        reviewsCount: 215,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNMAy2-esJE6guDm9vZp6lY4W-8TzUt41NnP5AtkZbgw&s",
        variants: [
            { label: "500 g Pack", weightKg: 0.5, retail: 105, mrp: 130, bulk: 85 },
            { label: "1 kg Pack", weightKg: 1, retail: 195, mrp: 245, bulk: 155 },
            { label: "5 kg Catering Box", weightKg: 5, retail: 890, mrp: 1150, bulk: 720 },
            { label: "25 kg Bulk Drum", weightKg: 25, retail: 4100, mrp: 5200, bulk: 3450 }
        ]
    },
    {
        id: 5,
        name: "Guntur Teja S17 Dry Red Chilli (Stemless)",
        cat: "Spices",
        origin: "Guntur, Andhra Pradesh",
        hsn: "0904.21.10",
        desc: "Hand-graded stemless Teja S17 chillies with blazing fiery heat and radiant natural red pigment. Sun dried on clean tarpaulins and sorted for commercial spice processors.",
        specs: "Pungency: 75,000–85,000 SHU | ASTA Color: 80–90 | Moisture: <9.5%",
        badge: "Fiery Hot",
        badgeClass: "badge-bestseller",
        rating: 4.8,
        reviewsCount: 167,
        image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=600&q=80",
        fallbackEmoji: "🌶️",
        variants: [
            { label: "250 g Pouch", weightKg: 0.25, retail: 75, mrp: 95, bulk: 60 },
            { label: "1 kg Pack", weightKg: 1, retail: 270, mrp: 330, bulk: 215 },
            { label: "5 kg Commercial Bag", weightKg: 5, retail: 1250, mrp: 1550, bulk: 980 },
            { label: "25 kg Gunny Bale", weightKg: 25, retail: 5600, mrp: 6900, bulk: 4600 }
        ]
    },
    {
        id: 6,
        name: "Saurashtra Bold Groundnuts (Raw Peanuts)",
        cat: "Oil Seeds",
        origin: "Rajkot / Junagadh, Gujarat",
        hsn: "1202.42.10",
        desc: "Bold 40/50 count unroasted peanuts sourced straight from Gujarat APMC yards. Plump sweet kernels with high natural oil content. Machine sorted and aflatoxin tested.",
        specs: "Count: 40/50 per Ounce | Oil Content: >48% | Moisture: <7% | Sortex Clean",
        badge: "Bold 40/50",
        badgeClass: "badge-sortex",
        rating: 4.7,
        reviewsCount: 104,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOVFXsGlTfHPWLB48OmkXxfkLRgtjOk2L1p859SK-S4w&s=10",
        fallbackEmoji: "🥜",
        variants: [
            { label: "1 kg Pouch", weightKg: 1, retail: 135, mrp: 165, bulk: 105 },
            { label: "5 kg Bag", weightKg: 5, retail: 640, mrp: 780, bulk: 495 },
            { label: "25 kg Jute Bag", weightKg: 25, retail: 2950, mrp: 3600, bulk: 2350 },
            { label: "50 kg Wholesale Bag", weightKg: 50, retail: 5650, mrp: 6900, bulk: 4500 }
        ]
    },
    {
        id: 7,
        name: "Desi Chana Dal (Split Chickpeas)",
        cat: "Pulses",
        origin: "Bikaner, Rajasthan",
        hsn: "0713.20.00",
        desc: "Selected desi brown chickpeas machine de-husked and split. Firm texture that holds shape during cooking, giving rich thickness to dal and besan preparations.",
        specs: "Sortex Cleaned: 99.8% | Moisture: <10.5% | No Artificial Color or Polish",
        badge: "Pure Desi",
        badgeClass: "badge-mandi",
        rating: 4.8,
        reviewsCount: 132,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00LZJJd6zpxgxqkNBcPgZ2NCfhePeMY-m69hO6OVwOg&s=10",
        fallbackEmoji: "🟠",
        variants: [
            { label: "1 kg Pouch", weightKg: 1, retail: 98, mrp: 120, bulk: 78 },
            { label: "5 kg Bag", weightKg: 5, retail: 470, mrp: 570, bulk: 375 },
            { label: "25 kg Bag", weightKg: 25, retail: 2200, mrp: 2650, bulk: 1780 },
            { label: "50 kg Wholesale Bag", weightKg: 50, retail: 4250, mrp: 5100, bulk: 3450 }
        ]
    },
    {
        id: 8,
        name: "Chakki Fresh Sharbati Atta (Whole Wheat Flour)",
        cat: "Wheat & Flours",
        origin: "In-house Stone Milled (Nashik)",
        hsn: "1101.00.00",
        desc: "Slow-speed traditional chakki milled whole wheat flour with 100% natural bran. Yields extra soft, pliable rotis that stay tender for hours. Zero maida or bleaching.",
        specs: "100% Whole Grain with Bran | Dietary Fiber: 11.2% | Stone Milled Fresh Weekly",
        badge: "Cold Stone Milled",
        badgeClass: "badge-organic",
        rating: 4.9,
        reviewsCount: 220,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsPZu7YKAwhA4B07tKNIgCnOZcM12zakGUaUUK_d64kA&s=10",
        fallbackEmoji: "🌾",
        variants: [
            { label: "5 kg Bag", weightKg: 5, retail: 265, mrp: 310, bulk: 220 },
            { label: "10 kg Bag", weightKg: 10, retail: 510, mrp: 595, bulk: 425 },
            { label: "25 kg Bag", weightKg: 25, retail: 1240, mrp: 1450, bulk: 1020 }
        ]
    },
    {
        id: 9,
        name: "Sona Masoori Raw Rice (Aged 18 Months)",
        cat: "Grains",
        origin: "Kurnool, Andhra Pradesh",
        hsn: "1006.30.10",
        desc: "Lightweight and aromatic medium grain rice. Naturally matured for 18 months to ensure fluffy non-sticky grains upon boiling. Ideal for wholesome everyday meals.",
        specs: "Grain Type: Medium Raw | Ageing: 18+ Months | Moisture: <12% | Starch Light",
        badge: "Old Crop Aged",
        badgeClass: "badge-bestseller",
        rating: 4.8,
        reviewsCount: 118,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwNXycvEiaaqXTq-mCFXVsr6lwR6zj8rhY5qrJpAe9Ow&s",
        fallbackEmoji: "🍚",
        variants: [
            { label: "5 kg Bag", weightKg: 5, retail: 360, mrp: 420, bulk: 295 },
            { label: "10 kg Bag", weightKg: 10, retail: 690, mrp: 810, bulk: 575 },
            { label: "25 kg Bag", weightKg: 25, retail: 1650, mrp: 1950, bulk: 1390 },
            { label: "50 kg Wholesale Bag", weightKg: 50, retail: 3150, mrp: 3750, bulk: 2680 }
        ]
    },
    {
        id: 10,
        name: "Natural White Sesame Seeds (Safed Til)",
        cat: "Oil Seeds",
        origin: "Amreli, Gujarat",
        hsn: "1207.40.90",
        desc: "99.95% purity sortex cleaned white sesame seeds. Natural nutty sweetness, pristine uniform seed size, and rich natural calcium and antioxidants.",
        specs: "Purity: 99.95% Sortex Clean | Moisture: <5.5% | FFA: <1.5% | Odour Free",
        badge: "99.95% Purity",
        badgeClass: "badge-sortex",
        rating: 4.9,
        reviewsCount: 76,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-9JF_0s1pQ55pfP-snjQsdcOc0ubIJ_3vUxhJrW9xMQ&s=10",
        fallbackEmoji: "⚪",
        variants: [
            { label: "500 g Pack", weightKg: 0.5, retail: 135, mrp: 160, bulk: 105 },
            { label: "1 kg Pack", weightKg: 1, retail: 255, mrp: 310, bulk: 205 },
            { label: "5 kg Commercial Bag", weightKg: 5, retail: 1190, mrp: 1450, bulk: 975 },
            { label: "25 kg Bag", weightKg: 25, retail: 5400, mrp: 6600, bulk: 4500 }
        ]
    },
    {
        id: 11,
        name: "Malabar Bold Green Cardamom (8mm+ Extra Bold)",
        cat: "Spices",
        origin: "Idukki, Kerala",
        hsn: "0908.31.00",
        desc: "Direct plantation auction sorted 8mm+ giant emerald green cardamom pods. Packed with concentrated aromatic oils, full black seeds, and crisp outer shell.",
        specs: "Size: 8mm+ Extra Bold | Colour: Deep Natural Green | Volatile Oil: >7.5%",
        badge: "8mm+ Extra Bold",
        badgeClass: "badge-organic",
        rating: 5.0,
        reviewsCount: 88,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFEV1tiQzZ_jKpBZd6ZEyDV55HyxzOIia8EV7aQ1wDgg&s=10",
        fallbackEmoji: "🟢",
        variants: [
            { label: "100 g Zipper Pouch", weightKg: 0.1, retail: 340, mrp: 410, bulk: 290 },
            { label: "250 g Pouch", weightKg: 0.25, retail: 820, mrp: 980, bulk: 695 },
            { label: "1 kg Vacuum Sealed Box", weightKg: 1, retail: 3150, mrp: 3800, bulk: 2680 }
        ]
    },
    {
        id: 12,
        name: "Yellow Moong Dal (Dhuli Moong)",
        cat: "Pulses",
        origin: "Akola, Maharashtra",
        hsn: "0713.31.00",
        desc: "Premium dehusked and machine cleaned yellow split moong dal. Highly digestible, quick cooking, light on the stomach with zero artificial chemical polish or gloss.",
        specs: "Moisture: <10% | Sortex Clean: 99.8% | Naturally Dried | Protein Rich",
        badge: "Easy Digest",
        badgeClass: "badge-mandi",
        rating: 4.8,
        reviewsCount: 140,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61IzeofgXO1hD5ybRonqoIlQcTUzR5W4plZlh0ch9Kg&s=10https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkz9HTf35kzHGmYhA_O9n4YnBze0Sn22jeFC8zV2kBWA&s",
        fallbackEmoji: "🟡",
        variants: [
            { label: "1 kg Pouch", weightKg: 1, retail: 145, mrp: 175, bulk: 118 },
            { label: "5 kg Bag", weightKg: 5, retail: 690, mrp: 840, bulk: 565 },
            { label: "25 kg Bag", weightKg: 25, retail: 3250, mrp: 3950, bulk: 2700 }
        ]
    }
];




let currentPricingMode = "retail"; 
let selectedCategory = "All";
let selectedVariantMap = {}; 


products.forEach(p => {
    selectedVariantMap[p.id] = 0;
});


let cart = JSON.parse(localStorage.getItem("sse_cart") || "{}");


let currentUser = JSON.parse(localStorage.getItem("sse_user") || "null");


let orders = JSON.parse(localStorage.getItem("sse_orders") || "[]");


if (orders.length === 0) {
    orders = [
        {
            id: "SSE-2026-1042",
            date: "14 Oct 2026, 11:30 AM",
            customerName: "Rajesh Sharma (Annapurna Caterers)",
            customerPhone: "+91 98220 44910",
            customerEmail: "rajesh@annapurnacatering.in",
            shippingAddress: "Plot 14, MIDC Ambad, Nashik, Maharashtra 422010",
            customerType: "business",
            gstin: "27AABCA5512B1Z4",
            items: [
                { name: "Royal 1121 XXL Steam Basmati Rice (25 kg PP Bag)", qty: 4, unitPrice: 2350, hsn: "1006.30.20" },
                { name: "Desi Toor Dal (50 kg Wholesale Bag)", qty: 2, unitPrice: 5600, hsn: "0713.60.00" }
            ],
            subtotal: 20600,
            cgst: 515,
            sgst: 515,
            deliveryFee: 0,
            total: 21630,
            paymentMethod: "Pine Labs Online (UPI)",
            paymentStatus: "Paid (Pine Labs Ref: PL-8849201)",
            orderStatus: "Dispatched",
            trackingNumber: "VRL-NSK-492104",
            transporter: "VRL Logistics (Nashik APMC Cargo Hub)",
            notes: "Loaded on Pallet #3. Moisture check certificate enclosed."
        },
        {
            id: "SSE-2026-1039",
            date: "12 Oct 2026, 04:15 PM",
            customerName: "Sunita Patil",
            customerPhone: "+91 80873 23550",
            customerEmail: "sunita.patil@gmail.com",
            shippingAddress: "B-402, Sai Vihar, Gangapur Road, Nashik, Maharashtra 422005",
            customerType: "retail",
            gstin: "",
            items: [
                { name: "Chakki Fresh Sharbati Atta (10 kg Bag)", qty: 2, unitPrice: 510, hsn: "1101.00.00" },
                { name: "Salem Supreme Golden Turmeric Powder (1 kg Pack)", qty: 1, unitPrice: 195, hsn: "0910.30.20" },
                { name: "Desi Toor Dal (5 kg Bag)", qty: 1, unitPrice: 740, hsn: "0713.60.00" }
            ],
            subtotal: 1955,
            cgst: 48.88,
            sgst: 48.88,
            deliveryFee: 0,
            total: 2052.76,
            paymentMethod: "Pine Labs Online (Cards)",
            paymentStatus: "Paid (Pine Labs Ref: PL-8711409)",
            orderStatus: "Delivered",
            trackingNumber: "DEL-NSK-819230",
            transporter: "Delhivery Surface",
            notes: "Delivered to recipient with digital OTP confirmation."
        }
    ];
    localStorage.setItem("sse_orders", JSON.stringify(orders));
}


let pendingOrderDraft = null;




function saveCart() {
    localStorage.setItem("sse_cart", JSON.stringify(cart));
    updateCartCountBadge();
}

function updateCartCountBadge() {
    const totalItems = Object.values(cart).reduce((sum, q) => sum + q, 0);
    const countEl = document.getElementById("cartCountBadge");
    if (countEl) {
        countEl.textContent = totalItems;
    }
}

function showToast(message, isSuccess = true) {
    const toast = document.getElementById("siteToast");
    if (!toast) return;
    toast.innerHTML = (isSuccess ? "✓ " : "ℹ ") + message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3200);
}

function formatINR(number) {
    return "₹" + Math.round(number).toLocaleString("en-IN");
}

function formatINRDecimal(number) {
    return "₹" + Number(number).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}




function showView(viewId) {
    if (viewId === "cart" || viewId === "checkout" || viewId === "confirmation") {
        const target = document.getElementById("cartView");
        document.querySelectorAll(".view-panel").forEach(panel => {
            panel.classList.remove("active");
        });
        if (target) {
            target.classList.add("active");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
    }

    document.querySelectorAll(".view-panel").forEach(panel => {
        panel.classList.remove("active");
    });
    const target = document.getElementById(viewId + "View");
    if (target) {
        target.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    
    if (viewId === "home") {
        renderProducts();
    } else if (viewId === "orders") {
        renderOrdersList();
    } else if (viewId === "admin") {
        renderAdminDashboard();
    }
}




function setPricingMode(mode) {
    currentPricingMode = mode;
    document.querySelectorAll(".toggle-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.mode === mode);
    });
    renderProducts();
    showToast(mode === "bulk" ? "Wholesale Mandi Pricing activated (Volume Bags)" : "Retail Consumer Pricing activated");
}

function filterCategory(cat) {
    selectedCategory = cat;
    document.querySelectorAll(".cat-pill-card").forEach(pill => {
        pill.classList.toggle("active", pill.dataset.cat === cat);
    });
    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.toggle("active", item.dataset.cat === cat);
    });
    renderProducts();
}

function selectProductVariant(productId, variantIndex, event) {
    if (event) event.stopPropagation();
    selectedVariantMap[productId] = variantIndex;
    renderSingleProductCard(productId);
}

function renderProducts() {
    const container = document.getElementById("productsGridContainer");
    if (!container) return;

    const searchInput = document.getElementById("siteSearchInput");
    const query = (searchInput ? searchInput.value : "").trim().toLowerCase();
    const sortSelect = document.getElementById("productSortSelect");
    const sortBy = sortSelect ? sortSelect.value : "featured";

    let filtered = products.filter(p => {
        const matchesCategory = (selectedCategory === "All" || p.cat === selectedCategory);
        const matchesQuery = !query || (p.name + " " + p.cat + " " + p.origin + " " + p.desc + " " + p.specs).toLowerCase().includes(query);
        return matchesCategory && matchesQuery;
    });

    
    if (sortBy === "price-low") {
        filtered.sort((a, b) => {
            const vA = a.variants[selectedVariantMap[a.id] || 0];
            const vB = b.variants[selectedVariantMap[b.id] || 0];
            return (currentPricingMode === "bulk" ? vA.bulk : vA.retail) - (currentPricingMode === "bulk" ? vB.bulk : vB.retail);
        });
    } else if (sortBy === "price-high") {
        filtered.sort((a, b) => {
            const vA = a.variants[selectedVariantMap[a.id] || 0];
            const vB = b.variants[selectedVariantMap[b.id] || 0];
            return (currentPricingMode === "bulk" ? vB.bulk : vB.retail) - (currentPricingMode === "bulk" ? vA.bulk : vA.retail);
        });
    } else if (sortBy === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    
    const countEl = document.getElementById("filteredProductsCount");
    if (countEl) {
        countEl.textContent = `Showing ${filtered.length} verified commodities`;
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state-card">
                <div class="empty-state-icon">🌾</div>
                <h3 class="empty-state-title">No matching commodities found</h3>
                <p class="empty-state-desc">We source hundreds of mandi grades. Try searching for rice, toor dal, turmeric, or wheat.</p>
                <button class="btn btn-secondary" onclick="document.getElementById('siteSearchInput').value=''; filterCategory('All');">Clear Search & Filters</button>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(p => generateProductCardHtml(p)).join("");
}

function generateProductCardHtml(p) {
    const currentVarIdx = selectedVariantMap[p.id] || 0;
    const v = p.variants[currentVarIdx];
    const priceVal = currentPricingMode === "bulk" ? v.bulk : v.retail;
    const mrpVal = v.mrp;
    const discountPct = Math.round(((mrpVal - priceVal) / mrpVal) * 100);

    const variantPillsHtml = p.variants.map((variant, idx) => `
        <button type="button" class="variant-chip ${idx === currentVarIdx ? 'active' : ''}" 
            onclick="selectProductVariant(${p.id}, ${idx}, event)">
            ${variant.label}
        </button>
    `).join("");

    return `
        <article class="product-card" id="productCard_${p.id}">
            <div class="product-image-wrap">
                <img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy">
                
                <div class="product-badge-strip">
                    <span class="product-badge ${p.badgeClass}">${p.badge}</span>
                </div>

                <div class="product-origin-chip">
                    📍 ${p.origin}
                </div>

                <button class="product-quick-view-btn" title="View Mandi Specs & Lab Certificate" onclick="openProductQuickView(${p.id})">
                    👁
                </button>
            </div>

            <div class="product-body">
                <div class="product-category-row">
                    <span class="product-category-tag">${p.cat}</span>
                    <span class="product-rating">★ ${p.rating} <span>(${p.reviewsCount})</span></span>
                </div>

                <h3 class="product-name" title="${p.name}">${p.name}</h3>
                <p class="product-specs-summary">${p.specs}</p>

                <div class="product-variants-label">Pack Variant:</div>
                <div class="product-variants-wrap">
                    ${variantPillsHtml}
                </div>

                <div class="product-pricing-wrap">
                    <div class="product-price-row">
                        <span class="product-current-price">${formatINR(priceVal)}</span>
                        <span class="product-mrp-price">${formatINR(mrpVal)}</span>
                        <span class="product-save-badge">Save ${discountPct}%</span>
                    </div>
                    <div class="product-bulk-hint">
                        ${currentPricingMode === 'bulk' ? '🏷 Mandi Wholesale Rate Applied' : '📦 Bulk discounts available for >25kg'}
                    </div>
                </div>

                <div class="product-actions">
                    <button class="btn btn-secondary btn-sm" onclick="openProductQuickView(${p.id})">
                        Specs
                    </button>
                    <button class="btn btn-primary btn-sm" onclick="openBulkEnquiryModal(${p.id}, ${currentVarIdx})">
                        Request Bulk Quote
                    </button>
                </div>
            </div>
        </article>
    `;
}

function renderSingleProductCard(productId) {
    const cardEl = document.getElementById(`productCard_${productId}`);
    const product = products.find(p => p.id === productId);
    if (cardEl && product) {
        cardEl.outerHTML = generateProductCardHtml(product);
    }
}




function openProductQuickView(productId) {
    const p = products.find(prod => prod.id === productId);
    if (!p) return;

    const modal = document.getElementById("quickViewModal");
    const content = document.getElementById("quickViewModalContent");
    if (!modal || !content) return;

    const currentVarIdx = selectedVariantMap[p.id] || 0;
    const v = p.variants[currentVarIdx];
    const priceVal = currentPricingMode === "bulk" ? v.bulk : v.retail;

    content.innerHTML = `
        <div class="quickview-header">
            <div>
                <span class="product-category-tag">${p.cat} · HSN ${p.hsn}</span>
                <h2 class="quickview-title">${p.name}</h2>
                <div class="quickview-origin">📍 Sourced direct from ${p.origin}</div>
            </div>
            <button class="modal-close-btn" onclick="closeQuickViewModal()">✕</button>
        </div>

        <div class="quickview-img-box">
            <img src="${p.image}" alt="${p.name}" class="quickview-img">
        </div>

        <p class="quickview-desc">
            ${p.desc}
        </p>

        <div class="quickview-specs-box">
            <div class="quickview-specs-title">
                Mandi Quality Parameters & Compliance:
            </div>
            <div class="quickview-specs-grid">
                <div><strong>Grading:</strong> Machine Sortex Clean</div>
                <div><strong>Moisture:</strong> Controlled (<12%)</div>
                <div><strong>FSSAI Standard:</strong> Central Lic Compliant</div>
                <div><strong>Packaging:</strong> Multi-layer food grade / Jute</div>
            </div>
        </div>

        <div class="quickview-footer">
            <div>
                <div class="quickview-pack-label">Current pack: ${v.label}</div>
                <div class="quickview-price">${formatINR(priceVal)}</div>
            </div>
            <button class="btn btn-primary" onclick="openBulkEnquiryModal(${p.id}, ${currentVarIdx}); closeQuickViewModal();">
                Request Bulk Quote →
            </button>
        </div>
    `;

    modal.style.display = "grid";
}

function closeQuickViewModal() {
    const modal = document.getElementById("quickViewModal");
    if (modal) modal.style.display = "none";
}





let isEnquirySubmitting = false;






function openBulkEnquiryModal(productId, variantIndex) {
    const modal = document.getElementById("bulkEnquiryModal");
    if (!modal) return;

    
    hideEnquiryAlert();
    const successView = document.getElementById("enquirySuccessView");
    const formEl = document.getElementById("bulkEnquiryForm");
    if (successView) successView.classList.add("hidden");
    if (formEl) formEl.classList.remove("hidden");

    
    const nameInput = document.getElementById("enquiryProductName");
    const unitSelect = document.getElementById("enquiryUnit");
    const packagingSelect = document.getElementById("enquiryPackaging");

    let productName = "General Mandi Agricultural Commodities";
    let defaultUnit = "50 kg bags";
    let defaultPackaging = "50 kg Traditional Mandi Jute Bags";

    if (productId) {
        const prod = products.find(p => p.id === productId);
        if (prod) {
            productName = prod.name;
            const vIdx = variantIndex !== undefined ? variantIndex : (selectedVariantMap[productId] || 0);
            const variant = prod.variants && prod.variants[vIdx] ? prod.variants[vIdx] : null;

            if (variant) {
                if (variant.weightKg >= 1000) {
                    defaultUnit = "metric tonnes";
                    defaultPackaging = "1,000 kg Heavy-Duty Jumbo Bags";
                } else if (variant.weightKg === 50) {
                    defaultUnit = "50 kg bags";
                    defaultPackaging = "50 kg Traditional Mandi Jute Bags";
                } else if (variant.weightKg === 25) {
                    defaultUnit = "25 kg bags";
                    defaultPackaging = "25 kg Food-Grade PP Woven Bags";
                } else if (variant.weightKg <= 10) {
                    defaultUnit = "kg";
                    defaultPackaging = "5 kg / 10 kg Consumer / Retail Bags";
                }
            }
        }
    }

    if (nameInput) {
        nameInput.value = productName;
    }
    if (unitSelect && defaultUnit) {
        unitSelect.value = defaultUnit;
    }
    if (packagingSelect && defaultPackaging) {
        packagingSelect.value = defaultPackaging;
    }

    
    if (currentUser) {
        const companyInput = document.getElementById("enquiryCompany");
        const nameField = document.getElementById("enquiryFullName");
        const emailField = document.getElementById("enquiryEmail");
        const phoneField = document.getElementById("enquiryPhone");
        if (companyInput && !companyInput.value && currentUser.company) companyInput.value = currentUser.company;
        if (nameField && !nameField.value && currentUser.name) nameField.value = currentUser.name;
        if (emailField && !emailField.value && currentUser.email) emailField.value = currentUser.email;
        if (phoneField && !phoneField.value && currentUser.phone) phoneField.value = currentUser.phone;
    }

    modal.style.display = "grid";

    
    setTimeout(() => {
        const qtyField = document.getElementById("enquiryQuantity");
        if (qtyField) qtyField.focus();
    }, 120);
}




function closeBulkEnquiryModal() {
    const modal = document.getElementById("bulkEnquiryModal");
    if (modal) {
        modal.style.display = "none";
    }
    hideEnquiryAlert();
}




function hideEnquiryAlert() {
    const alertEl = document.getElementById("enquiryErrorAlert");
    if (alertEl) {
        alertEl.textContent = "";
        alertEl.classList.remove("show", "enquiry-alert-error", "enquiry-alert-success", "enquiry-alert-info");
        alertEl.style.display = "none";
    }
}




function showEnquiryAlert(message, type = "error") {
    const alertEl = document.getElementById("enquiryErrorAlert");
    if (!alertEl) return;
    alertEl.textContent = message;
    alertEl.className = `enquiry-alert enquiry-alert-${type} show`;
    alertEl.style.display = "flex";
    alertEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
}




function resetAndShowEnquiryForm() {
    const formEl = document.getElementById("bulkEnquiryForm");
    const successView = document.getElementById("enquirySuccessView");
    if (formEl) {
        formEl.reset();
        formEl.classList.remove("hidden");
    }
    if (successView) {
        successView.classList.add("hidden");
    }
    hideEnquiryAlert();
    openBulkEnquiryModal();
}









async function handleBulkEnquirySubmit(event) {
    if (event) event.preventDefault();

    
    if (isEnquirySubmitting) return;

    hideEnquiryAlert();

    
    const honeypot = document.getElementById("enquiryHoneypot");
    if (honeypot && honeypot.value.trim() !== "") {
        console.warn("Spam submission blocked via honeypot trap.");
        return; 
    }

    
    const lastSubmission = localStorage.getItem("sse_last_enquiry_timestamp");
    const now = Date.now();
    if (lastSubmission && (now - Number(lastSubmission)) < 15000) {
        const waitSec = Math.ceil((15000 - (now - Number(lastSubmission))) / 1000);
        showEnquiryAlert(`Please wait ${waitSec} seconds before submitting another enquiry.`, "info");
        return;
    }

    
    const productName = (document.getElementById("enquiryProductName")?.value || "").trim();
    const quantity = (document.getElementById("enquiryQuantity")?.value || "").trim();
    const quantityUnit = (document.getElementById("enquiryUnit")?.value || "").trim();
    const packagingPref = (document.getElementById("enquiryPackaging")?.value || "").trim();
    const purchaseFrequency = (document.getElementById("enquiryFrequency")?.value || "").trim();
    const companyName = (document.getElementById("enquiryCompany")?.value || "").trim();
    const contactPerson = (document.getElementById("enquiryFullName")?.value || "").trim();
    const businessEmail = (document.getElementById("enquiryEmail")?.value || "").trim();
    const mobileNumber = (document.getElementById("enquiryPhone")?.value || "").trim();
    const deliveryCity = (document.getElementById("enquiryCity")?.value || "").trim();
    const deliveryState = (document.getElementById("enquiryState")?.value || "").trim();
    const pinCode = (document.getElementById("enquiryPin")?.value || "").trim();
    const targetPrice = (document.getElementById("enquiryTargetPrice")?.value || "").trim();
    const qualitySpecs = (document.getElementById("enquirySpecs")?.value || "").trim();
    const additionalMessage = (document.getElementById("enquiryMessage")?.value || "").trim();

    
    if (!productName) {
        showEnquiryAlert("Please select or specify a commodity product name.");
        return;
    }
    if (!quantity || Number(quantity) <= 0 || isNaN(Number(quantity))) {
        showEnquiryAlert("Please enter a valid positive quantity required.");
        document.getElementById("enquiryQuantity")?.focus();
        return;
    }
    if (!companyName) {
        showEnquiryAlert("Please enter your Company / Firm trading name.");
        document.getElementById("enquiryCompany")?.focus();
        return;
    }
    if (!contactPerson) {
        showEnquiryAlert("Please enter the contact person's full name.");
        document.getElementById("enquiryFullName")?.focus();
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!businessEmail || !emailRegex.test(businessEmail)) {
        showEnquiryAlert("Please enter a valid business email address (e.g. procurement@company.com).");
        document.getElementById("enquiryEmail")?.focus();
        return;
    }
    const phoneClean = mobileNumber.replace(/[^0-9]/g, "");
    if (!mobileNumber || phoneClean.length < 10) {
        showEnquiryAlert("Please enter a valid 10-digit mobile number.");
        document.getElementById("enquiryPhone")?.focus();
        return;
    }
    if (!deliveryCity) {
        showEnquiryAlert("Please specify the delivery city / mandi destination.");
        document.getElementById("enquiryCity")?.focus();
        return;
    }
    if (!pinCode || !/^[0-9]{6}$/.test(pinCode)) {
        showEnquiryAlert("Please enter a valid 6-digit Indian PIN code (e.g. 400703).");
        document.getElementById("enquiryPin")?.focus();
        return;
    }

    
    const dateObj = new Date();
    const dateFormatted = dateObj.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
    const timeFormatted = dateObj.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
    const submissionTimestamp = `${dateFormatted}, ${timeFormatted} IST`;

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const dateCompact = dateObj.getFullYear().toString() +
        String(dateObj.getMonth() + 1).padStart(2, "0") +
        String(dateObj.getDate()).padStart(2, "0");
    const enquiryRef = `SSE-ENQ-${dateCompact}-${randomSuffix}`;

    
    const templateParams = {
        enquiry_reference: enquiryRef,
        submission_time: submissionTimestamp,
        product_name: productName,
        quantity_required: quantity,
        quantity_unit: quantityUnit,
        quantity_display: `${quantity} ${quantityUnit}`,
        packaging_preference: packagingPref,
        purchase_frequency: purchaseFrequency,
        company_name: companyName,
        contact_person: contactPerson,
        business_email: businessEmail,
        mobile_number: mobileNumber,
        delivery_city: deliveryCity,
        delivery_state: deliveryState,
        pin_code: pinCode,
        delivery_location: `${deliveryCity}, ${deliveryState} - ${pinCode}`,
        target_price: targetPrice || "Not specified / Mandi spot rate",
        quality_specs: qualitySpecs || "Standard sortex & moisture compliant",
        additional_message: additionalMessage || "None",
        recipient_email: (typeof EMAIL_CONFIG !== "undefined" && EMAIL_CONFIG.businessRecipientEmail) ? EMAIL_CONFIG.businessRecipientEmail : "info@saisagarenterprises.in"
    };

    
    isEnquirySubmitting = true;
    const submitBtn = document.getElementById("enquirySubmitBtn");
    const btnText = document.getElementById("enquiryBtnText");
    if (submitBtn) {
        submitBtn.disabled = true;
        if (btnText) {
            btnText.innerHTML = '<span class="btn-spinner"></span> Transmitting Enquiry to Mandi Desk...';
        }
    }

    
    const resetButtonState = () => {
        isEnquirySubmitting = false;
        if (submitBtn) {
            submitBtn.disabled = false;
            if (btnText) {
                btnText.textContent = "Submit Bulk Enquiry →";
            }
        }
    };

    
    const isConfigMissing = (typeof EMAIL_CONFIG === "undefined") ||
        !EMAIL_CONFIG.serviceId ||
        EMAIL_CONFIG.serviceId === "YOUR_EMAILJS_SERVICE_ID" ||
        !EMAIL_CONFIG.publicKey ||
        EMAIL_CONFIG.publicKey === "YOUR_EMAILJS_PUBLIC_KEY";

    if (isConfigMissing) {
        resetButtonState();
        showEnquiryAlert(
            "EmailJS Configuration Required: Please update your EmailJS Service ID, Template ID, and Public Key in 'email-config.js'. Your entered enquiry details have been preserved below.",
            "error"
        );
        console.warn("EmailJS configuration pending in email-config.js. Entered enquiry parameters preserved:", templateParams);
        return; 
    }

    if (typeof emailjs === "undefined") {
        resetButtonState();
        showEnquiryAlert(
            "EmailJS SDK failed to load. Please check your internet connection or contact our Mandi Desk via WhatsApp (+91 80873 23550). Form data preserved.",
            "error"
        );
        return;
    }

    
    try {
        if (emailjs.init && EMAIL_CONFIG.publicKey) {
            emailjs.init({ publicKey: EMAIL_CONFIG.publicKey });
        }

        const response = await emailjs.send(
            EMAIL_CONFIG.serviceId,
            EMAIL_CONFIG.templateId,
            templateParams,
            EMAIL_CONFIG.publicKey
        );

        if (response && (response.status === 200 || response.text === "OK")) {
            
            localStorage.setItem("sse_last_enquiry_timestamp", String(Date.now()));

            
            if (EMAIL_CONFIG.customerConfirmationTemplateId && EMAIL_CONFIG.customerConfirmationTemplateId.trim() !== "") {
                emailjs.send(
                    EMAIL_CONFIG.serviceId,
                    EMAIL_CONFIG.customerConfirmationTemplateId,
                    {
                        ...templateParams,
                        to_name: contactPerson,
                        to_email: businessEmail
                    },
                    EMAIL_CONFIG.publicKey
                ).catch(confErr => {
                    console.warn("Optional customer auto-reply acknowledgment failed:", confErr);
                });
            }

            
            renderEnquirySuccessScreen(enquiryRef, templateParams);
            showToast(`Bulk enquiry ${enquiryRef} registered successfully!`);

            
            const formEl = document.getElementById("bulkEnquiryForm");
            if (formEl) formEl.reset();
        } else {
            throw new Error(response.text || "Unexpected email delivery status");
        }
    } catch (err) {
        console.error("EmailJS transmission error:", err);
        const errMsg = err.text || err.message || "Network / Gateway Error";
        showEnquiryAlert(
            `Failed to deliver bulk enquiry via email service: ${errMsg}. Your entered details have been preserved. You can re-submit or contact our Mandi Desk directly on WhatsApp.`,
            "error"
        );
    } finally {
        resetButtonState();
    }
}




function renderEnquirySuccessScreen(refId, params) {
    const formEl = document.getElementById("bulkEnquiryForm");
    const successView = document.getElementById("enquirySuccessView");
    const refDisplay = document.getElementById("enquiryRefDisplay");
    const summaryCard = document.getElementById("enquirySummaryCard");
    const waBtn = document.getElementById("enquiryWhatsAppFollowupBtn");

    if (formEl) formEl.classList.add("hidden");
    if (successView) successView.classList.remove("hidden");

    if (refDisplay) refDisplay.textContent = refId;

    if (summaryCard) {
        summaryCard.innerHTML = `
            <div class="enquiry-summary-row">
                <span class="enquiry-summary-label">Commodity</span>
                <span class="enquiry-summary-val">${params.product_name}</span>
            </div>
            <div class="enquiry-summary-row">
                <span class="enquiry-summary-label">Volume & Lot</span>
                <span class="enquiry-summary-val">${params.quantity_display}</span>
            </div>
            <div class="enquiry-summary-row">
                <span class="enquiry-summary-label">Packaging</span>
                <span class="enquiry-summary-val">${params.packaging_preference}</span>
            </div>
            <div class="enquiry-summary-row">
                <span class="enquiry-summary-label">Purchase Frequency</span>
                <span class="enquiry-summary-val">${params.purchase_frequency}</span>
            </div>
            <div class="enquiry-summary-row">
                <span class="enquiry-summary-label">Procuring Firm</span>
                <span class="enquiry-summary-val">${params.company_name} (${params.contact_person})</span>
            </div>
            <div class="enquiry-summary-row">
                <span class="enquiry-summary-label">Destination</span>
                <span class="enquiry-summary-val">${params.delivery_location}</span>
            </div>
            <div class="enquiry-summary-row">
                <span class="enquiry-summary-label">Registered At</span>
                <span class="enquiry-summary-val">${params.submission_time}</span>
            </div>
        `;
    }

    if (waBtn) {
        const waMsg = encodeURIComponent(
            `Hello Sai Sagar Enterprises Mandi Desk, I have submitted Bulk Enquiry Reference ${refId} for ${params.quantity_display} of ${params.product_name}. Please share firm spot mandi rates for delivery to ${params.delivery_city} (${params.pin_code}).`
        );
        const waNumber = (typeof EMAIL_CONFIG !== "undefined" && EMAIL_CONFIG.businessWhatsApp) ? EMAIL_CONFIG.businessWhatsApp : "918087323550";
        waBtn.href = `https://wa.me/${waNumber}?text=${waMsg}`;
    }
}






document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" || e.keyCode === 27) {
        closeBulkEnquiryModal();
        closeQuickViewModal();
        closeAuthModal();
    }
});


window.addEventListener("DOMContentLoaded", function() {
    const bulkModal = document.getElementById("bulkEnquiryModal");
    if (bulkModal) {
        bulkModal.addEventListener("click", function(e) {
            if (e.target === bulkModal) {
                closeBulkEnquiryModal();
            }
        });
    }

    const quickModal = document.getElementById("quickViewModal");
    if (quickModal) {
        quickModal.addEventListener("click", function(e) {
            if (e.target === quickModal) {
                closeQuickViewModal();
            }
        });
    }

    const authMod = document.getElementById("authModal");
    if (authMod) {
        authMod.addEventListener("click", function(e) {
            if (e.target === authMod) {
                closeAuthModal();
            }
        });
    }
});





function addToCart(productId, variantIndex) {
    openBulkEnquiryModal(productId, variantIndex);
}

function proceedToCheckout() {
    openBulkEnquiryModal();
}

function renderCart() {
    
}

function renderCheckoutSummary() {
    
}

function handleCheckoutSubmit(event) {
    if (event) event.preventDefault();
    openBulkEnquiryModal();
}

function closePineLabsModal() {
    const modal = document.getElementById("pineLabsModal");
    if (modal) modal.style.display = "none";
}




function renderTaxInvoice(order) {
    const container = document.getElementById("invoiceRenderArea");
    if (!container) return;

    const itemsRowsHtml = order.items.map((it, idx) => {
        const taxable = it.unitPrice * it.qty;
        return `
            <tr>
                <td>${idx + 1}</td>
                <td><strong>${it.name}</strong></td>
                <td>${it.hsn || '1006.30'}</td>
                <td class="text-right">${it.qty}</td>
                <td class="text-right">${formatINR(it.unitPrice)}</td>
                <td class="text-right">${formatINR(taxable)}</td>
            </tr>
        `;
    }).join("");

    container.innerHTML = `
        <div class="invoice-container">
            <div class="invoice-header">
                <div class="invoice-seller">
                    <h2>🌿 SAI SAGAR ENTERPRISES</h2>
                    <p>Agricultural Commodity Traders, Processors & Mandi Commission Agents</p>
                    <p>Gala No. 42-45, APMC Market Yard - Phase II, Nashik - Pune Highway, Maharashtra - 422003</p>
                    <p><strong>GSTIN:</strong> 27AABCS8891K1Z3 | <strong>FSSAI Lic:</strong> 11522036000214</p>
                    <p>Phone: +91 80873 23550 | Email: accounts@saisagarenterprises.in</p>
                </div>
                <div class="invoice-meta">
                    <span class="badge-verified">ORIGINAL TAX INVOICE</span>
                    <h3 class="mt-2">${order.id}</h3>
                    <p><strong>Date:</strong> ${order.date}</p>
                    <p><strong>LR / Tracking:</strong> ${order.trackingNumber}</p>
                    <p><strong>Carrier:</strong> ${order.transporter}</p>
                </div>
            </div>

            <div class="invoice-parties">
                <div class="party-box">
                    <h4>Billed & Shipped To:</h4>
                    <p><strong>${order.customerName}</strong></p>
                    <p>${order.shippingAddress}</p>
                    <p>Phone: ${order.customerPhone} | Email: ${order.customerEmail}</p>
                    ${order.gstin ? `<p><strong>Buyer GSTIN:</strong> ${order.gstin}</p>` : ''}
                </div>
                <div class="party-box">
                    <h4>Dispatch & Payment Details:</h4>
                    <p><strong>Payment Status:</strong> ${order.paymentStatus}</p>
                    <p><strong>Payment Mode:</strong> ${order.paymentMethod}</p>
                    <p><strong>Origin Mandi Warehouse:</strong> APMC Nashik Yard</p>
                    <p><strong>Quality Cert:</strong> Moisture & Sortex Verified Passed</p>
                </div>
            </div>

            <table class="invoice-table">
                <thead>
                    <tr>
                        <th class="col-w-40">#</th>
                        <th>Commodity Description</th>
                        <th class="col-w-90">HSN Code</th>
                        <th class="text-right col-w-70">Qty</th>
                        <th class="text-right col-w-100">Rate</th>
                        <th class="text-right col-w-110">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    ${itemsRowsHtml}
                </tbody>
            </table>

            <div class="invoice-totals">
                <div class="summary-row">
                    <span>Taxable Amount</span>
                    <strong>${formatINR(order.subtotal)}</strong>
                </div>
                <div class="summary-row">
                    <span>Central GST (CGST @ 2.5%)</span>
                    <span>${formatINRDecimal(order.cgst)}</span>
                </div>
                <div class="summary-row">
                    <span>State GST (SGST @ 2.5%)</span>
                    <span>${formatINRDecimal(order.sgst)}</span>
                </div>
                <div class="summary-row">
                    <span>Transportation & Handling</span>
                    <span>${order.deliveryFee === 0 ? 'FREE' : formatINR(order.deliveryFee)}</span>
                </div>
                <div class="summary-row total-row">
                    <span>Total Amount (INR)</span>
                    <span>${formatINRDecimal(order.total)}</span>
                </div>
            </div>

            <div class="invoice-signature">
                <div class="terms-text-box">
                    <strong>Terms & Mandi Conditions:</strong><br>
                    1. Goods once inspected and dispatched from APMC warehouse comply with Agmark & FSSAI specifications.<br>
                    2. Subject to Nashik Jurisdiction. Standard Mandi trading regulations apply.
                </div>
                <div class="signature-box">
                    <div class="signature-stamp">SAI SAGAR ENTERPRISES<br>★ VERIFIED DISPATCH ★</div>
                    <div class="party-box">Authorized Signatory</div>
                </div>
            </div>
        </div>

        <div class="no-print invoice-actions-bar">
            <button class="btn btn-primary" onclick="window.print()">
                🖨 Print / Download Official Tax Invoice
            </button>
            <button class="btn btn-secondary" onclick="trackSpecificOrder('${order.id}')">
                🚚 Track Live Consignment
            </button>
            <button class="btn btn-secondary" onclick="showView('home')">
                Continue Shopping →
            </button>
        </div>
    `;
}




function trackOrderFromInput(event) {
    if (event) event.preventDefault();
    const input = document.getElementById("trackOrderIdInput");
    const orderId = input ? input.value.trim() : "";
    if (!orderId) {
        showToast("Please enter a valid Order ID (e.g. SSE-2026-1042)", false);
        return;
    }
    trackSpecificOrder(orderId);
}

function trackSpecificOrder(orderId) {
    showView("track");
    const resultContainer = document.getElementById("trackingResultContainer");
    if (!resultContainer) return;

    const order = orders.find(o => o.id.toLowerCase() === orderId.toLowerCase());

    if (!order) {
        resultContainer.innerHTML = `
            <div class="not-found-card">
                <strong>Order reference "${orderId}" not found</strong>
                <p class="empty-orders-desc">Please verify the order ID from your confirmation email or order history.</p>
            </div>
        `;
        return;
    }

    resultContainer.innerHTML = `
        <div class="tracking-card">
            <div class="tracking-header">
                <div class="order-history-header">
                    <div>
                        <span class="badge-verified">${order.orderStatus}</span>
                        <h2 class="order-history-id">${order.id}</h2>
                        <div class="order-history-meta">Booked on: ${order.date}</div>
                    </div>
                    <div class="text-right">
                        <div class="product-variants-label">Carrier / Lorry Receipt</div>
                        <strong class="facility-badge">${order.transporter}</strong>
                        <div>LR No: ${order.trackingNumber}</div>
                    </div>
                </div>
            </div>

            <div class="tracking-timeline">
                <div class="timeline-event passed">
                    <div class="timeline-icon">✓</div>
                    <div class="timeline-content">
                        <h4>Order Placed & Mandi Batch Assigned</h4>
                        <div class="timeline-time">${order.date} · APMC Market Yard Nashik</div>
                        <div class="timeline-desc">Order verified. Payment confirmed via ${order.paymentMethod}.</div>
                    </div>
                </div>

                <div class="timeline-event passed">
                    <div class="timeline-icon">✓</div>
                    <div class="timeline-content">
                        <h4>Multi-Stage Quality Check & Moisture Analysis</h4>
                        <div class="timeline-time">Warehouse Lab · Passed Standard <12% Moisture</div>
                        <div class="timeline-desc">Machine sortex verified for purity (>99.5%). Certified zero stone/foreign particle.</div>
                    </div>
                </div>

                <div class="timeline-event passed">
                    <div class="timeline-icon">✓</div>
                    <div class="timeline-content">
                        <h4>Moisture-Proof Bagging & Palletizing</h4>
                        <div class="timeline-time">Nashik Packing Facility</div>
                        <div class="timeline-desc">Commodities sealed in 5-ply food grade moisture barrier packaging and barcoded.</div>
                    </div>
                </div>

                <div class="timeline-event ${order.orderStatus === 'Dispatched' || order.orderStatus === 'Delivered' ? 'passed' : 'current'}">
                    <div class="timeline-icon">🚚</div>
                    <div class="timeline-content">
                        <h4>Handed over to Freight Carrier</h4>
                        <div class="timeline-time">${order.transporter} · LR: ${order.trackingNumber}</div>
                        <div class="timeline-desc">In transit via highway cargo corridor to destination hub: ${order.shippingAddress}</div>
                    </div>
                </div>

                <div class="timeline-event ${order.orderStatus === 'Delivered' ? 'passed' : ''}">
                    <div class="timeline-icon">${order.orderStatus === 'Delivered' ? '✓' : '📍'}</div>
                    <div class="timeline-content">
                        <h4>Final Destination Delivery</h4>
                        <div class="timeline-time">${order.orderStatus === 'Delivered' ? 'Completed' : 'Expected within 24-48 hours'}</div>
                        <div class="timeline-desc">Consignment will be unloaded at customer doorstep with delivery challan signoff.</div>
                    </div>
                </div>
            </div>

            <div class="tracking-footer-bar">
                <button class="btn btn-secondary btn-sm" onclick="renderTaxInvoice(orders.find(o => o.id === '${order.id}')); showView('confirmation');">
                    📄 View Tax Invoice
                </button>
                <a href="https://wa.me/918169094382?text=Hello%20Sai%20Sagar%20Enterprises,%20checking%20status%20for%20order%20${order.id}" 
                    target="_blank" class="btn btn-secondary btn-sm whatsapp-dispatch-link">
                    💬 WhatsApp Dispatch Desk
                </a>
            </div>
        </div>
    `;
}




function renderOrdersList() {
    const container = document.getElementById("ordersListContainer");
    if (!container) return;

    if (orders.length === 0) {
        container.innerHTML = `
            <div class="empty-orders-wrap">
                <div class="empty-orders-icon">📦</div>
                <h3 class="empty-orders-title">No orders placed yet</h3>
                <p class="empty-orders-desc">Your past retail and wholesale orders will appear here.</p>
                <button class="btn btn-primary" onclick="showView('home')">Start Shopping</button>
            </div>
        `;
        return;
    }

    container.innerHTML = orders.map(o => `
        <div class="order-history-card">
            <div class="order-history-header">
                <div>
                    <span class="badge-verified">${o.orderStatus}</span>
                    <h3 class="order-history-id">${o.id}</h3>
                    <div class="order-history-meta">${o.date} · ${o.items.length} line item(s)</div>
                </div>
                <div class="text-right">
                    <div class="order-history-total">${formatINRDecimal(o.total)}</div>
                    <div class="order-history-meta">${o.paymentStatus}</div>
                </div>
            </div>

            <div class="order-history-items-box">
                <strong>Items:</strong> ${o.items.map(it => `${it.name} (Qty: ${it.qty})`).join(", ")}
            </div>

            <div class="order-history-actions">
                <button class="btn btn-secondary btn-sm" onclick="trackSpecificOrder('${o.id}')">
                    🚚 Track Shipment
                </button>
                <button class="btn btn-primary btn-sm" onclick="renderTaxInvoice(orders.find(ord => ord.id === '${o.id}')); showView('confirmation');">
                    📄 View Tax Invoice
                </button>
            </div>
        </div>
    `).join("");
}




function calculateB2BEstimate(event) {
    if (event) event.preventDefault();
    const commodity = document.getElementById("b2bCommodity").value;
    const tonnage = parseFloat(document.getElementById("b2bTonnage").value) || 1;
    const packaging = document.getElementById("b2bPackaging").value;

    let baseRatePerMT = 42000; 
    if (commodity.includes("Basmati")) baseRatePerMT = 92000;
    else if (commodity.includes("Toor Dal")) baseRatePerMT = 118000;
    else if (commodity.includes("Wheat")) baseRatePerMT = 34000;
    else if (commodity.includes("Turmeric")) baseRatePerMT = 145000;
    else if (commodity.includes("Chilli")) baseRatePerMT = 210000;
    else if (commodity.includes("Groundnut")) baseRatePerMT = 94000;

    const estimatedGoods = baseRatePerMT * tonnage;
    const discountMultiplier = tonnage >= 20 ? 0.92 : (tonnage >= 5 ? 0.96 : 1.0);
    const finalEstimate = estimatedGoods * discountMultiplier;

    const resultBox = document.getElementById("b2bEstimateOutput");
    if (resultBox) {
        resultBox.innerHTML = `
            <div class="b2b-estimate-box">
                <div class="b2b-estimate-label">
                    Indicative Mandi Spot Quotation (${tonnage} Metric Tonnes / ${tonnage * 1000} kg)
                </div>
                <div class="b2b-estimate-value">
                    ${formatINR(finalEstimate)} <small class="b2b-estimate-sub">(Ex-Nashik APMC)</small>
                </div>
                <div class="b2b-estimate-note">
                    Includes ${packaging}. Volume rebate of ${Math.round((1 - discountMultiplier) * 100)}% applied. Final binding quote confirmed upon receipt of delivery pin code.
                </div>
            </div>
        `;
    }
}

function handleB2BSubmit(event) {
    event.preventDefault();
    showToast("Bulk inquiry registered! Our APMC commodity trading desk will contact you with firm mandi quotation within 2 business hours.");
    event.target.reset();
    const resultBox = document.getElementById("b2bEstimateOutput");
    if (resultBox) resultBox.innerHTML = "";
}




function renderAdminDashboard() {
    const countEl = document.getElementById("adminTotalOrdersCount");
    const revEl = document.getElementById("adminTotalRevenue");
    const tableBody = document.getElementById("adminOrdersTableBody");

    const totalRev = orders.reduce((sum, o) => sum + (o.total || 0), 0);
    if (countEl) countEl.textContent = orders.length;
    if (revEl) revEl.textContent = formatINR(totalRev);

    if (tableBody) {
        tableBody.innerHTML = orders.map(o => `
            <tr>
                <td><strong>${o.id}</strong></td>
                <td>${o.date}</td>
                <td>${o.customerName}</td>
                <td>${o.items.length} line(s)</td>
                <td><strong>${formatINR(o.total)}</strong></td>
                <td><span class="status-badge status-confirmed">${o.orderStatus}</span></td>
                <td>
                    <button class="btn btn-secondary btn-sm" onclick="renderTaxInvoice(orders.find(ord => ord.id === '${o.id}')); showView('confirmation');">
                        Invoice
                    </button>
                </td>
            </tr>
        `).join("");
    }
}




function openAuthModal() {
    const modal = document.getElementById("authModal");
    if (modal) modal.style.display = "grid";
}

function closeAuthModal() {
    const modal = document.getElementById("authModal");
    if (modal) modal.style.display = "none";
}

function handleAuthSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("authFullName").value.trim();
    const email = document.getElementById("authEmail").value.trim();
    const phone = document.getElementById("authPhone").value.trim();
    const company = document.getElementById("authCompany") ? document.getElementById("authCompany").value.trim() : "";
    const gstin = document.getElementById("authGstin") ? document.getElementById("authGstin").value.trim() : "";

    currentUser = { name, email, phone, company, gstin };
    localStorage.setItem("sse_user", JSON.stringify(currentUser));

    updateUserHeaderDisplay();
    closeAuthModal();
    showToast(`Welcome back, ${name}!`);
}

function updateUserHeaderDisplay() {
    const userBtn = document.getElementById("headerUserBtn");
    if (userBtn) {
        if (currentUser && currentUser.name) {
            userBtn.innerHTML = `👤 ${currentUser.name.split(" ")[0]}`;
        } else {
            userBtn.innerHTML = `👤 Sign In`;
        }
    }
}




document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    updateCartCountBadge();
    updateUserHeaderDisplay();

    
    const searchInput = document.getElementById("siteSearchInput");
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            renderProducts();
        });
    }

    
    document.querySelectorAll(".nav-item").forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const cat = item.dataset.cat;
            if (cat) filterCategory(cat);
        });
    });
});
