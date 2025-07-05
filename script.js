// --- Configuration ---
// REMPLACEZ par votre numéro WhatsApp avec indicatif pays (ex: 2250700000000, 33612345678)
const WHATSAPP_NUMBER = "221772096824"; // <-- Numéro WhatsApp mis à jour selon votre exemple
const AVAILABLE_SIZES = ['S', 'M', 'L', 'XL']; // Tailles standard disponibles

// Votre liste de produits. NOTE : Ajout de la propriété 'sizes' aux produits.
// Si un produit n'a pas de tailles standard (ex: pièce unique), mettez 'sizes: []'.
const PRODUCTS_DATA = [
    // Maillots Ensembles (12000 FCFA)
    { id: 1, name: "Ensemble Domicile", team: "Barça", price: 12000, type: "Ensemble", image: "images/Barça.jpg", sizes: AVAILABLE_SIZES },
    { id: 2, name: "Ensemble Domicile", team: "Real", price: 12000, type: "Ensemble", image: "images/Real_ensemble.jpg", sizes: AVAILABLE_SIZES },
    { id: 3, name: "Ensemble Extérieur", team: "Paris", price: 12000, type: "Ensemble", image: "images/Paris_Ensemble.jpg", sizes: AVAILABLE_SIZES },
    // Ajoutez d'autres ensembles en ajoutant la ligne correspondante avec sizes: AVAILABLE_SIZES

    // Maillots Club (8000 FCFA)
    { id: 101, name: "Maillot Domicile", team: "Barça", price: 8000, type: "Club", image: "images/Barça1.jpg", sizes: AVAILABLE_SIZES }, // Corrigé l'espace dans le chemin de l'image
    { id: 102, name: "Maillot Domicile", team: "Real", price: 8000, type: "Club", image: "images/Real.jpg", sizes: AVAILABLE_SIZES },
    { id: 103, name: "Maillot Domicile", team: "Aston Villa", price: 8000, type: "Club", image: "images/Aston_Villa.jpg", sizes: AVAILABLE_SIZES },
    { id: 104, name: "Maillot Domicile", team: "City", price: 8000, type: "Club", image: "images/City.jpg", sizes: AVAILABLE_SIZES },
    { id: 105, name: "Maillot Domicile", team: "Al Nasser", price: 8000, type: "Club", image: "images/Al_Nasser.jpg", sizes: AVAILABLE_SIZES },
    { id: 106, name: "Maillot Domicile", team: "Arsenal", price: 8000, type: "Club", image: "images/Arsenal.jpg", sizes: AVAILABLE_SIZES },
    { id: 107, name: "Maillot Domicile", team: "Paris", price: 8000, type: "Club", image: "images/Paris.jpg", sizes: AVAILABLE_SIZES },
    { id: 108, name: "Maillot Domicile", team: "Newcastle", price: 8000, type: "Club", image: "images/Newcastle.jpg", sizes: AVAILABLE_SIZES },
    { id: 109, name: "Maillot Domicile", team: "Santos", price: 8000, type: "Club", image: "images/Santos.jpg", sizes: AVAILABLE_SIZES },
    { id: 110, name: "Maillot Domicile", team: "Marseille", price: 8000, type: "Club", image: "images/Marseille.jpg", sizes: AVAILABLE_SIZES },
    { id: 111, name: "Maillot Domicile", team: "Leipzig", price: 8000, type: "Club", image: "images/Leipzig.jpg", sizes: AVAILABLE_SIZES },
    { id: 112, name: "Maillot Domicile", team: "Paris FC", price: 8000, type: "Club", image: "images/Paris_Fc.jpg", sizes: AVAILABLE_SIZES },
    { id: 113, name: "Maillot Domicile", team: "Inter Milan", price: 8000, type: "Club", image: "images/Inter.jpg", sizes: AVAILABLE_SIZES }, // Renommé pour clarté
    { id: 114, name: "Maillot Domicile", team: "Inter Miami", price: 8000, type: "Club", image: "images/Inter_Miami.jpg", sizes: AVAILABLE_SIZES }, // Corrigé Inter Miami
    { id: 115, name: "Maillot Domicile", team: "Bayern", price: 8000, type: "Club", image: "images/Bayern.jpg", sizes: AVAILABLE_SIZES },
    { id: 116, name: "Maillot Domicile", team: "Juventus", price: 8000, type: "Club", image: "images/Juventus.jpg", sizes: AVAILABLE_SIZES },
    // Ajoutez d'autres maillots club...

    // Maillots Sélection Nationale (8000 FCFA)
     { id: 201, name: "Maillot Domicile", team: "Brésil", price: 8000, type: "National", image: "images/Bresil.jpg", sizes: AVAILABLE_SIZES },
     { id: 202, name: "Maillot Domicile", team: "Japon", price: 8000, type: "National", image: "images/Japon.jpg", sizes: AVAILABLE_SIZES },
     { id: 203, name: "Maillot Domicile", team: "Portugal", price: 8000, type: "National", image: "images/Portugal.jpg", sizes: AVAILABLE_SIZES },
     { id: 204, name: "Maillot Domicile", team: "Maroc", price: 8000, type: "National", image: "images/Maroc.jpg", sizes: AVAILABLE_SIZES },
     { id: 205, name: "Maillot Domicile", team: "Jamaïque", price: 8000, type: "National", image: "images/Jamaique.jpg", sizes: AVAILABLE_SIZES },
     { id: 206, name: "Maillot Domicile", team: "Sénégal", price: 8000, type: "National", image: "images/Senegal.jpg", sizes: AVAILABLE_SIZES },
     // Ajoutez d'autres maillots sélection...

    // Maillot Palestine (9000 FCFA)
    { id: 301, name: "Maillot", team: "Palestine", price: 9000, type: "Palestine", image: "images/Palestine.jpg", sizes: AVAILABLE_SIZES },

    // Maillots de Collection (Prix variables)
    { id: 401, name: "Maillot Rétro Maradona 86", team: "Collection", price: 10000, type: "Collection", image: "images/Collection.jpg", sizes: ['M', 'L'] }, // Exemple de tailles spécifiques
    { id: 402, name: "Maillot Milan 2007 (Collection)", team: "Collection", price: 10000, type: "Collection", image: "images/Collection1.jpg", sizes: ['L'] }, // Exemple avec nom plus précis et taille spécifique
     
    // Ajoutez d'autres maillots de collection avec leurs prix spécifiques et tailles (sizes: [...]) ou sizes: [] si pas de taille standard
];


// --- DOM Elements ---
const productListDiv = document.getElementById('product-list');
const collectionListDiv = document.getElementById('collection-list');
const cartIcon = document.getElementById('cart-icon');
const cartCountSpan = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const closeCartBtn = document.getElementById('close-cart-btn');

// Panier - Étape 1
const cartStepItemsDiv = document.getElementById('cart-step-items');
const cartItemsDiv = document.getElementById('cart-items');
const cartTotalSpan = document.getElementById('cart-total');
const proceedToCheckoutBtn = document.getElementById('proceed-to-checkout-btn');

// Panier - Étape 2 (Formulaire)
const cartStepFormDiv = document.getElementById('cart-step-form');
const customerInfoForm = document.getElementById('customer-info-form');
const customerNameInput = document.getElementById('customer-name');
const customerAddressInput = document.getElementById('customer-address');
const sendWhatsappOrderBtn = document.getElementById('send-whatsapp-order-btn');
const backToCartBtn = document.getElementById('back-to-cart-btn');


// --- Cart State ---
let cart = [];

// --- Local Storage ---
const saveCart = () => {
    localStorage.setItem('futurefit_cart', JSON.stringify(cart));
};

const loadCart = () => {
    const storedCart = localStorage.getItem('futurefit_cart');
    if (storedCart) {
        // Parse JSON and ensure correct structure, handle potential old data format
        try {
            cart = JSON.parse(storedCart);
            // Basic validation/migration if necessary (e.g., ensuring 'size' property exists)
            cart = cart.map(item => {
                 // Check if essential properties exist
                 if (item && item.product && typeof item.quantity === 'number') {
                      // Ensure size exists, default to 'N/A' if not present
                     return { ...item, size: item.size || 'N/A' };
                 }
                 return null; // Filter out invalid items
            }).filter(item => item !== null);

        } catch (e) {
            console.error("Failed to parse cart from localStorage", e);
            cart = []; // Reset cart if loading fails
        }
    }
};

// --- Rendering ---

// Function to render a single product card HTML
const renderProductCard = (product) => {
    // Check if product has sizes defined and if the array is not empty
    const hasSizes = product.sizes && product.sizes.length > 0;

    const sizeOptionsHtml = hasSizes
        ? `<div class="size-select">
               <label for="size-${product.id}">Taille:</label>
               <select id="size-${product.id}">
                   ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
               </select>
           </div>`
        : ''; // No size selection if sizes array is empty or doesn't exist


    return `
        <div class="product-card" data-id="${product.id}">
            <img src="${product.image}" alt="${product.name} ${product.team}">
            <h3>${product.name}</h3>
            <p>${product.team}</p>
            ${sizeOptionsHtml} <!-- Add size selection here if available -->
            <p class="price">${product.price.toLocaleString('fr-FR')} FCFA</p>
            <button class="add-to-cart-btn" data-id="${product.id}">Ajouter au panier</button>
        </div>
    `;
};

// Function to render products into their respective sections
const renderProducts = () => {
    productListDiv.innerHTML = ''; // Clear existing products
    collectionListDiv.innerHTML = ''; // Clear existing collection items

    const clubNationalProducts = PRODUCTS_DATA.filter(p => p.type !== "Collection");
    const collectionProducts = PRODUCTS_DATA.filter(p => p.type === "Collection");


    clubNationalProducts.forEach(product => {
        productListDiv.innerHTML += renderProductCard(product);
    });

     collectionProducts.forEach(product => {
        collectionListDiv.innerHTML += renderProductCard(product);
    });

     // Show/hide collection section title
     const collectionSection = document.getElementById('collection-section');
     if (collectionProducts.length === 0) {
         collectionSection.style.display = 'none';
     } else {
         collectionSection.style.display = 'block';
     }

      // Trigger product card entry animation after they are added to the DOM
      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
         const productCards = document.querySelectorAll('.product-card');
         productCards.forEach((card, index) => {
              // Apply animation with staggered delay
             card.style.animation = `slideInUp 0.6s ease-out forwards ${(index % 5) * 0.1}s`; // Example staggering up to 5 items per row
         });
      });
};


// Function to render the cart items in the modal
const renderCartItems = () => {
    cartItemsDiv.innerHTML = ''; // Clear existing items
    let total = 0;
    let totalItemsCount = 0;

    if (cart.length === 0) {
         cartItemsDiv.innerHTML = '<p class="empty-cart-message">Votre panier est vide.</p>';
         proceedToCheckoutBtn.disabled = true;
         proceedToCheckoutBtn.style.opacity = 0.5;
         proceedToCheckoutBtn.style.cursor = 'not-allowed';
    } else {
        proceedToCheckoutBtn.disabled = false;
        proceedToCheckoutBtn.style.opacity = 1;
        proceedToCheckoutBtn.style.cursor = 'pointer';

        cart.forEach(item => {
            const itemTotal = item.product.price * item.quantity;
            total += itemTotal;
            totalItemsCount += item.quantity;

             // Display size only if it's not 'N/A'
            const itemSizeDisplay = (item.size && item.size !== 'N/A') ? ` (Taille: ${item.size})` : '';

            const cartItemHtml = `
                <div class="cart-item" data-id="${item.product.id}" data-size="${item.size || 'N/A'}">
                     <img src="${item.product.image}" alt="${item.product.name}">
                    <div class="item-details">
                        <h3>${item.product.name}</h3>
                        <p>${item.product.team}${itemSizeDisplay} - ${item.product.price.toLocaleString('fr-FR')} FCFA</p>
                    </div>
                    <div class="quantity-controls">
                        <button class="decrease-quantity">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase-quantity">+</button>
                    </div>
                    <button class="remove-item-btn">Supprimer</button>
                </div>
            `;
            cartItemsDiv.innerHTML += cartItemHtml;
        });

         // Trigger cart item entry animation
         requestAnimationFrame(() => {
              const cartItems = cartItemsDiv.querySelectorAll('.cart-item');
              cartItems.forEach((item, index) => {
                 item.style.animation = `slideInLeft 0.5s ease-out forwards ${index * 0.1}s`; // Staggered animation
              });
         });
    }


    cartTotalSpan.textContent = total.toLocaleString('fr-FR');
    cartCountSpan.textContent = totalItemsCount; // Update cart icon count
     // Trigger pulse animation on cart icon when items change
     cartIcon.classList.add('pulse-animate');
     setTimeout(() => {
         cartIcon.classList.remove('pulse-animate');
     }, 1000); // Remove class after animation duration
};

// --- Cart & Form Logic ---

const findProductById = (id) => {
    // IDs from dataset are strings, convert to number for comparison
    const productIdNum = parseInt(id, 10);
    return PRODUCTS_DATA.find(product => product.id === productIdNum);
};

// Modified addToCart to handle size
const addToCart = (productId, size) => {
    const productToAdd = findProductById(productId);
    if (!productToAdd) {
        console.error("Product not found with ID:", productId);
        return; // Product not found
    }

    // Determine the size to add to cart
    // If size was selected (and is not undefined/null), use it.
    // Otherwise, if the product *should* have sizes but none selected, default to 'N/A'.
    // If the product naturally doesn't have sizes defined in PRODUCTS_DATA, default to 'N/A'.
    let selectedSize = 'N/A';
     if (productToAdd.sizes && productToAdd.sizes.length > 0) {
         // Product has defined sizes, use the selected one.
         // Ensure selected size is one of the allowed sizes or default if not.
         if (size && productToAdd.sizes.includes(size)) {
              selectedSize = size;
         } else if (productToAdd.sizes.length > 0) {
              // If sizes exist but selected is invalid or missing, take the first available as default
              selectedSize = productToAdd.sizes[0]; // Or handle as an error
             console.warn(`Invalid or missing size selected for product ${productId}. Using first available size: ${selectedSize}`);
         }
         // If product.sizes exists but is empty [], selectedSize remains 'N/A'
     }
    // If product.sizes does NOT exist, selectedSize remains 'N/A'


    // Find if item with SAME PRODUCT and SAME SIZE is already in cart
    const existingItemIndex = cart.findIndex(item =>
        item.product.id === productToAdd.id && item.size === selectedSize
    );

    if (existingItemIndex > -1) {
        // Item (with this size) already in cart, increase quantity
        cart[existingItemIndex].quantity++;
    } else {
        // Item not in cart (or not with this size), add new item
        cart.push({ product: productToAdd, quantity: 1, size: selectedSize });
    }

    saveCart();
    renderCartItems(); // Re-render to show changes immediately in modal if open
    // Optional: Add a visual feedback on the button/card - moved to event listener
    // console.log(`${productToAdd.name} (${selectedSize}) ajouté au panier.`); // For debugging
};

// Modified removeFromCart to handle size (needs both ID and size to be unique)
const removeFromCart = (productId, size) => {
    const productIdNum = parseInt(productId, 10);
     // Filter based on both product ID and size
    cart = cart.filter(item =>
        !(item.product.id === productIdNum && item.size === size)
    );

    saveCart();
    renderCartItems(); // Re-render to show changes immediately in modal if open
};

// Modified changeQuantity to handle size
const changeQuantity = (productId, size, change) => {
    const productIdNum = parseInt(productId, 10);
    // Find item based on both product ID and size
    const itemIndex = cart.findIndex(item =>
        item.product.id === productIdNum && item.size === size
    );

    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;
        if (cart[itemIndex].quantity <= 0) {
            // If quantity is zero or less, remove the item
            removeFromCart(productIdNum, size);
        } else {
            saveCart();
            renderCartItems(); // Re-render to show changes immediately in modal if open
        }
    }
};

// Show the cart step and hide the form step
const showCartStep = () => {
     cartStepItemsDiv.classList.remove('hidden');
     cartStepFormDiv.classList.add('hidden');
     // Reset form validation states when returning
     customerInfoForm.reset();
     customerNameInput.classList.remove('invalid');
     customerAddressInput.classList.remove('invalid');
      // Ensure cart items are rendered when showing this step
     renderCartItems();
}

// Show the form step and hide the cart step
const showFormStep = () => {
     if (cart.length === 0) {
         alert("Votre panier est vide ! Ajoutez des articles avant de commander.");
         return;
     }
     cartStepItemsDiv.classList.add('hidden');
     cartStepFormDiv.classList.remove('hidden');
}


// --- WhatsApp Integration ---
const generateWhatsAppMessage = (customerName, customerAddress) => {
    let message = `Salut FAYE_ALBERT ! 👋 Je souhaite passer une commande.\n\n`;

    // Add customer info
    message += `*Nom :* ${customerName}\n`;
    message += `*Adresse de livraison :* ${customerAddress}\n\n`;

    message += `*Détail de la commande :*\n`;

    let total = 0;

    if (cart.length === 0) {
         // This case should be prevented by button disabling and form validation, but as a fallback:
        message += "Mon panier semble être vide, j'ai peut-être fait une erreur. 😅";
        return encodeURIComponent(message);
    }

    cart.forEach(item => {
        const itemTotal = item.product.price * item.quantity;
        total += itemTotal;
         // Add size to message only if it's not 'N/A'
        const itemSizeDisplay = (item.size && item.size !== 'N/A') ? ` (Taille: ${item.size})` : '';
        message += `- ${item.quantity} x ${item.product.name} (${item.product.team})${itemSizeDisplay} : ${itemTotal.toLocaleString('fr-FR')} FCFA\n`;
    });

    message += `\n*Total de la commande :* ${total.toLocaleString('fr-FR')} FCFA`;
    message += "\n\nMerci de me confirmer la disponibilité et de m'indiquer les prochaines étapes pour le paiement et la livraison. 😊";

    return encodeURIComponent(message); // Encode message for URL
};

const handleWhatsAppOrder = (event) => {
     event.preventDefault(); // Prevent default form submission

     const customerName = customerNameInput.value.trim();
     const customerAddress = customerAddressInput.value.trim();

     // Basic validation
     if (!customerName || !customerAddress) {
         alert("Veuillez remplir votre nom et votre adresse de livraison.");
         if (!customerName) customerNameInput.classList.add('invalid'); else customerNameInput.classList.remove('invalid');
         if (!customerAddress) customerAddressInput.classList.add('invalid'); else customerAddressInput.classList.remove('invalid');
         return;
     } else {
         customerNameInput.classList.remove('invalid');
         customerAddressInput.classList.remove('invalid');
     }


     if (cart.length === 0) {
         alert("Votre panier est vide ! Ajoutez des articles avant de commander.");
         // Optionally switch back to cart view
         showCartStep();
         return;
     }

    const message = generateWhatsAppMessage(customerName, customerAddress);
    const whatsappUrl = `https://wa.me/${+221772096824}?text=${message}`;

    // Open in a new tab/window
    window.open(whatsappUrl, '_blank');

    // Optional: Clear cart after sending (you might want to wait for confirmation)
    // const confirmClear = confirm("Votre commande a été envoyée sur WhatsApp. Voulez-vous vider votre panier maintenant ?");
    // if(confirmClear) {
        // cart = [];
        // saveCart();
        // renderCartItems();
        // hideCartModal(); // Close modal after sending
        // showCartStep(); // Reset modal view to cart step
    // }
    // For this example, let's NOT clear the cart automatically.

    // Close modal and reset form view after sending
     hideCartModal(); // Close modal after sending
     // setTimeout(showCartStep, 500); // Reset view after modal transition
     showCartStep(); // Reset view immediately for next open

};


// --- Event Listeners ---

// Use a single listener on the main content area for all product interactions
document.querySelector('main').addEventListener('click', (event) => {
    // Handle "Add to Cart" buttons
    if (event.target.classList.contains('add-to-cart-btn')) {
        const productId = event.target.dataset.id;
        const productCard = event.target.closest('.product-card');
        const sizeSelect = productCard.querySelector('.size-select select');
        // Get selected size, default to 'N/A' if select doesn't exist or no option selected
        const selectedSize = sizeSelect ? (sizeSelect.value || 'N/A') : 'N/A';

        addToCart(productId, selectedSize);

         // Optional: Visual feedback on the button
         event.target.textContent = "Ajouté!";
         event.target.disabled = true; // Disable temporarily
         setTimeout(() => {
             event.target.textContent = "Ajouter au panier";
             event.target.disabled = false;
         }, 1500); // Reset button text after 1.5 seconds
    }
    // Add other product interactions here if needed later (e.g., clicking image to see details)
});


// Show cart modal
cartIcon.addEventListener('click', () => {
    // renderCartItems(); // This is now called inside showCartStep
    showCartStep(); // Always show the cart view first
    cartModal.classList.add('visible'); // Show the modal itself
});

// Hide cart modal
const hideCartModal = () => {
     cartModal.classList.remove('visible');
     // Reset to cart step when modal is closed, in case it was on the form step
     // Use a small delay to allow the closing animation to start
     setTimeout(showCartStep, 300);
}
closeCartBtn.addEventListener('click', hideCartModal);


// Hide modal if clicking outside the cart content
cartModal.addEventListener('click', (event) => {
    // Check if the click target is the modal background itself, not the content
    if (event.target === cartModal) {
        hideCartModal();
    }
});

// Event delegation for quantity controls and remove button within the cart modal
cartItemsDiv.addEventListener('click', (event) => {
    const target = event.target;
    const cartItemElement = target.closest('.cart-item');

    if (!cartItemElement) return; // Click wasn't inside a cart item

    const productId = cartItemElement.dataset.id;
    const itemSize = cartItemElement.dataset.size || 'N/A'; // Get size from data attribute, default to 'N/A'

    if (target.classList.contains('increase-quantity')) {
        changeQuantity(productId, itemSize, 1);
    } else if (target.classList.contains('decrease-quantity')) {
        changeQuantity(productId, itemSize, -1);
    } else if (target.classList.contains('remove-item-btn')) {
        removeFromCart(productId, itemSize);
    }
});

// Handle click on "Procéder à la commande" button
proceedToCheckoutBtn.addEventListener('click', showFormStep);

// Handle click on "Retour au panier" button
backToCartBtn.addEventListener('click', showCartStep);


// Handle form submission to send WhatsApp order
customerInfoForm.addEventListener('submit', handleWhatsAppOrder);


// --- Initialization ---

// Load cart from localStorage and render on page load
loadCart();
renderProducts(); // Render all products initially
renderCartItems(); // Render initial cart state and update count/total (called here to update icon count)