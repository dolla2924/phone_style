document.addEventListener('DOMContentLoaded', () => {
    // --- بيانات المنتجات (تم تحديث فئة 'gadgets' لمنتجات أكثر جاذبية) ---
    const products = [
        {
            id: 'watches-1',
            name: 'X8 ULTRA',
            description: 'ساعة ذكية بشاشة كبيرة وإمكانيات رياضية متقدمة.',
            price: 320.00,
            image: 'imges1/img1.jpg',
            category: 'watches'
        },
        {
            id: 'watches-2',
            name: 'SP8 ULTRA MAX',
            description: 'ساعة رياضية فاخرة بمستشعرات دقيقة وعمر بطارية طويل.',
            price: 600.00,
            image: 'imges1/img2.jpg',
            category: 'watches'
        },
        {
            id: 'watches-3',
            name: 'X10S',
            description: 'ساعة ذكية بتصميم عصري وأداء عالي.',
            price: 750.00,
            image: 'imges1/img4.jpg',
            category: 'watches'
        },
        {
            id: 'watches-4',
            name: 'X8+ ULTRA',
            description: 'إصدار مطور من الساعات الذكية مع مقاومة للماء.',
            price: 680.00,
            image: 'imges1/img5.png',
            category: 'watches'
        },
        {
            id: 'watches-5',
            name: 'ZT_MAX60',
            description: 'ساعة اقتصادية بجودة جيدة ومزايا تتبع اللياقة.',
            price: 480.00,
            image: 'imges1/img6.jpg',
            category: 'watches'
        },
        {
            id: 'audio-1',
            name: 'سماعات أذن بلوتوث (A)',
            description: 'صوت محيطي نقي، عمر بطارية طويل، وخاصية عزل الضوضاء.',
            price: 520.00,
            image: 'image1.jpg',
            category: 'audio'
        },
        {
            id: 'audio-2',
            name: 'سماعات أذن بلوتوث (B)',
            description: 'تصميم مريح ومقاومة للعرق، مثالية للرياضة.',
            price: 350.00,
            image: 'image2.jpg',
            category: 'audio'
        },
        {
            id: 'audio-3',
            name: 'سماعات أذن بلوتوث (C)',
            description: 'جودة صوت ممتازة وميكروفون مدمج لإجراء المكالمات.',
            price: 520.00,
            image: 'imges2/image3.jpg',
            category: 'audio'
        },
        {
            id: 'audio-4',
            name: 'سماعات أذن بلوتوث (D)',
            description: 'صوت جهوري قوي وتوصيل مستقر عبر البلوتوث.',
            price: 420.00,
            image: 'imges2/image4.jpg',
            category: 'audio'
        },
        {
            id: 'audio-5',
            name: 'سماعات أذن بلوتوث (E)',
            description: 'صوت محيطي نقي، عمر بطارية طويل، وخاصية عزل الضوضاء.',
            price: 420.00,
            image: 'imges2/image5.jpg',
            category: 'audio'
        },
        {
            id: 'audio-6',
            name: 'سماعات أذن بلوتوث (F)',
            description: 'سماعات صغيرة الحجم ومناسبة للاستخدام اليومي.',
            price: 300.00,
            image: 'imges2/image6.jpg',
            category: 'audio'
        },
        {
            id: 'audio-7',
            name: 'سماعات أذن بلوتوث (G)',
            description: 'سعر اقتصادي وأداء صوتي جيد.',
            price: 200.00,
            image: 'imges2/image7.jpg',
            category: 'audio'
        },
        {
            id: 'audio-8',
            name: 'سماعات أذن بلوتوث (H)',
            description: 'جودة صوت ممتازة ومريحة للاستخدام لفترات طويلة.',
            price: 380.00,
            image: 'imges2/image8.jpg',
            category: 'audio'
        },
        {
            id: 'audio-9',
            name: 'سماعات أذن بلوتوث (I)',
            description: 'صوت محيطي نقي، عمر بطارية طويل، وخاصية عزل الضوضاء.',
            price: 500.00,
            image: 'imges2/image9.jpg',
            category: 'audio'
        },
        {
            id: 'power-bank-1',
            name: 'باور بانك 20000 مللي أمبير',
            description: 'شاحن محمول فائق السرعة، يشحن هاتفك لعدة مرات.',
            price: 250.00,
            image: 'imges2/image1.jpg', 
            category: 'chargers'
        },
        {
            id: 'phone-case-1',
            name: 'جراب حماية شفاف',
            description: 'جراب نحيف ومرن، يحمي هاتفك من الصدمات والخدوش.',
            price: 55.00,
            image: 'imges1/img4.jpg', 
            category: 'phone-accessories'
        },
        {
            id: 'car-charger-1',
            name: 'شاحن سيارة سريع',
            description: 'شاحن سيارة بمنفذين USB، يدعم الشحن السريع.',
            price: 90.00,
            image: 'imges2/image6.jpg', 
            category: 'chargers'
        },
        {
            id: 'gadget-1',
            name: 'إضاءة حلقية للتصوير (Ring Light)',
            description: 'إضاءة احترافية بثلاثة ألوان قابلة للتعديل، مثالية للبث المباشر والفيديوهات.',
            price: 180.00,
            image: 'imges_gadgets/ringlight.jpg', 
            category: 'gadgets'
        }, 
        {
            id: 'gadget-2',
            name: 'حامل هاتف آلي دوار',
            description: 'حامل ذكي يتتبع الحركة، مثالي لتصوير المحتوى دون الحاجة للمساعدة.',
            price: 290.00,
            image: 'imges_gadgets/autopod.jpg', 
            category: 'gadgets'
        },
        {
            id: 'gadget-3',
            name: 'عدسة تكبير احترافية للهاتف',
            description: 'عدسة زووم عالية الدقة 18X، لتحويل كاميرا هاتفك إلى كاميرا احترافية.',
            price: 350.00,
            image: 'imges_gadgets/zoomlens.jpg', 
            category: 'gadgets'
        },
        {
            id: 'wireless-charger-1',
            name: 'شاحن لاسلكي',
            description: 'شاحن أنيق بتصميم دائري، يدعم أحدث تقنيات الشحن اللاسلكي.',
            price: 180.00,
            image: 'imges1/img2.jpg', 
            category: 'chargers'
        },
        {
            id: 'screen-protector-1',
            name: 'واقي شاشة زجاجي',
            description: 'طبقة حماية من الزجاج المقوى، تمنع الخدوش وتحمي الشاشة من الكسر.',
            price: 45.00,
            image: 'imges1/img1.jpg', 
            category: 'phone-accessories'
        }
    ];

    // --- عناصر DOM الرئيسية ---
    const sections = {
        hero: document.getElementById('hero-section'),
        menu: document.getElementById('menu-section'),
        cartSidebar: document.getElementById('cart-sidebar'),
        checkout: document.getElementById('checkout-section'),
        about: document.getElementById('about-section'),
        contact: document.getElementById('contact-section')
    };

    const navLinks = document.querySelectorAll('.nav-links a');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-links');
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const checkoutBtn = document.getElementById('checkout-btn');
    const menuItemsGrid = document.getElementById('menu-items-grid');
    const menuCategoriesContainer = document.getElementById('menu-categories');
    const checkoutForm = document.getElementById('checkout-form');
    const orderConfirmationOverlay = document.getElementById('order-confirmation-overlay');
    const closeConfirmationBtn = document.getElementById('close-confirmation-btn');
    const orderSummaryMini = document.getElementById('order-summary-mini');
    const scrollToMenuBtn = document.querySelector('.scroll-to-menu');
    const backToMenuBtn = document.querySelector('.btn-back-to-menu');
    const cartDetailsInput = document.getElementById('cart-details-input');
    const totalPriceInput = document.getElementById('total-price-input');
    
    // *** الزر الجديد للوضع الليلي/النهاري ***
    const themeToggle = document.getElementById('theme-toggle'); 
    
    // *** حاوية الإشعارات لضمان وجودها ***
    const notificationContainer = (() => {
        let container = document.getElementById('notification-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'notification-container';
            document.body.appendChild(container);
        }
        return container;
    })();


    let cart = JSON.parse(localStorage.getItem('restaurantCart')) || [];

    // --- وظائف عامة ---

    function showSection(sectionId) {
        Object.keys(sections).forEach(key => {
            const sectionElement = sections[key];
            if (sectionElement && key !== 'cartSidebar') {
                sectionElement.classList.remove('active-section');
            }
        });

        const targetSection = sections[sectionId];
        if (targetSection) {
            targetSection.classList.add('active-section');
            if (sectionId !== 'hero' && !sections.cartSidebar.classList.contains('open')) {
                setTimeout(() => {
                    window.scrollTo({
                        top: targetSection.offsetTop - 70, 
                        behavior: 'smooth'
                    });
                }, 50);
            }
        }
    }

    function updateNavLinkActiveState(targetId) {
        navLinks.forEach(link => {
            const linkHrefId = link.getAttribute('href').substring(1);
            if (linkHrefId === targetId) {
                link.classList.add('nav-active');
            } else {
                link.classList.remove('nav-active');
            }
        });
    }

    // --- وظائف إدارة عربة التسوق (Cart Management) ---

    function saveCart() {
        localStorage.setItem('restaurantCart', JSON.stringify(cart));
    }

    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        if (totalItems > 0) {
            cartCount.style.display = 'block';
        } else {
            cartCount.style.display = 'none';
        }
    }

    function renderCartItems() {
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart-message">عربتك فارغة.</p>';
        } else {
            cart.forEach(item => {
                const cartItemDiv = document.createElement('div');
                cartItemDiv.classList.add('cart-item');
                cartItemDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="item-details">
                        <h4>${item.name}</h4>
                        <span class="item-price">${(item.price * item.quantity).toFixed(2)} جنيها</span>
                        <div class="item-quantity-controls">
                            <button data-id="${item.id}" data-action="decrease">-</button>
                            <span>${item.quantity}</span>
                            <button data-id="${item.id}" data-action="increase">+</button>
                        </div>
                    </div>
                    <button class="remove-item-btn" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
                `;
                cartItemsContainer.appendChild(cartItemDiv);
            });
        }
        updateCartTotal();
    }

    function updateCartTotal() {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotalPrice.textContent = `${total.toFixed(2)} جنيها`;
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    ...product,
                    quantity: 1
                });
            }
            saveCart();
            updateCartCount();
            renderCartItems();
            showNotification(`تم إضافة ${product.name} إلى السلة!`);
        }
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        updateCartCount();
        renderCartItems();
        showNotification('تم إزالة المنتج من السلة.', 'info');
    }

    function changeQuantity(productId, action) {
        const item = cart.find(i => i.id === productId);
        if (item) {
            if (action === 'increase') {
                item.quantity++;
            } else if (action === 'decrease') {
                item.quantity--;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                    return;
                }
            }
            saveCart();
            renderCartItems();
        }
    }

    // --- وظائف عرض المنتجات وتصفيتها ---

    function getUniqueCategories() {
        const categories = new Set(products.map(p => p.category));
        return ['all', ...Array.from(categories)];
    }

    function getCategoryDisplayName(categoryKey) {
        const categoryMap = {
            'all': 'الكل',
            'watches': 'ساعات ذكية',
            'audio': 'صوتيات',
            'chargers': 'شواحن',
            'phone-accessories': 'إكسسوارات الهاتف',
            'gadgets': 'أدوات أخرى' 
        };
        return categoryMap[categoryKey] || categoryKey;
    }

    function renderCategoryButtons() {
        const categories = getUniqueCategories();
        menuCategoriesContainer.innerHTML = '';
        categories.forEach(category => {
            const button = document.createElement('button');
            button.classList.add('category-btn');
            button.textContent = getCategoryDisplayName(category);
            button.dataset.category = category;
            menuCategoriesContainer.appendChild(button);
        });
        const allButton = menuCategoriesContainer.querySelector('[data-category="all"]');
        if (allButton) {
            allButton.classList.add('active');
        }
    }

    function renderProducts(filterCategory = 'all') {
        menuItemsGrid.innerHTML = '';

        const filteredProducts = filterCategory === 'all' ?
            products :
            products.filter(p => p.category === filterCategory);

        if (filteredProducts.length === 0) {
            menuItemsGrid.innerHTML = '<p class="empty-cart-message" style="grid-column: 1 / -1;">لا توجد منتجات في هذه الفئة حالياً.</p>';
            return;
        }

        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <span class="product-price">${product.price.toFixed(2)} جنيها</span>
                    <button class="btn btn-primary add-to-cart-btn" data-id="${product.id}">أضف إلى السلة</button>
                </div>
            `;
            menuItemsGrid.appendChild(productCard);
        });
    }

    // --- وظائف نموذج إتمام الطلب والتحقق ---

    function renderOrderSummaryMini() {
        if (cart.length === 0) {
            orderSummaryMini.innerHTML = '<p>عربتك فارغة. لا يمكن إتمام الطلب.</p>';
            checkoutBtn.disabled = true;
            return;
        }

        let summaryHtml = '<h4>ملخص طلبك</h4><ul>';
        let total = 0;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            summaryHtml += `
                <li>
                    <span>${item.name} (x${item.quantity})</span>
                    <span>${itemTotal.toFixed(2)} جنيها</span>
                </li>
            `;
        });
        summaryHtml += `</ul><div class="total"><span>الإجمالي:</span> <span>${total.toFixed(2)} جنيها</span></div>`;
        orderSummaryMini.innerHTML = summaryHtml;
        checkoutBtn.disabled = false;

        cartDetailsInput.value = JSON.stringify(cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price
        })));
        totalPriceInput.value = total.toFixed(2);
    }

    function validateForm() {
        let isValid = true;

        const nameInput = document.getElementById('customer-name');
        const phoneInput = document.getElementById('customer-phone');
        const phoneAltInput = document.getElementById('customer-phone-alt');
        const addressTextarea = document.getElementById('customer-address');
        const emailInput = document.getElementById('customer-email');

        const nameError = document.getElementById('name-error');
        const phoneError = document.getElementById('phone-error');
        const phoneAltError = document.getElementById('phone-alt-error');
        const addressError = document.getElementById('address-error');
        const emailError = document.getElementById('email-error');

        [nameError, phoneError, phoneAltError, addressError, emailError].forEach(el => el.textContent = '');
        [nameInput, phoneInput, phoneAltInput, addressTextarea, emailInput].forEach(el => el.classList.remove('error'));

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'الاسم مطلوب.';
            nameInput.classList.add('error');
            isValid = false;
        }

        const phonePattern = /^0[0-9]{10}$/;

        if (phoneInput.value.trim() === '') {
            phoneError.textContent = 'رقم الهاتف مطلوب.';
            phoneInput.classList.add('error');
            isValid = false;
        } else if (!phonePattern.test(phoneInput.value.trim())) {
            phoneError.textContent = 'الرجاء إدخال رقم هاتف صحيح (11 رقم يبدأ بـ 0).';
            phoneInput.classList.add('error');
            isValid = false;
        }

        if (phoneAltInput.value.trim() !== '' && !phonePattern.test(phoneAltInput.value.trim())) {
            phoneAltError.textContent = 'الرجاء إدخال رقم هاتف صحيح (11 رقم يبدأ بـ 0).';
            phoneAltInput.classList.add('error');
            isValid = false;
        }

        if (addressTextarea.value.trim() === '') {
            addressError.textContent = 'العنوان كاملاً مطلوب.';
            addressTextarea.classList.add('error');
            isValid = false;
        }

        if (emailInput.value.trim() !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
            emailError.textContent = 'صيغة البريد الإلكتروني غير صحيحة.';
            emailInput.classList.add('error');
            isValid = false;
        }

        return isValid;
    }


    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.classList.add('notification', type);
        notification.textContent = message;
        notificationContainer.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        setTimeout(() => {
            notification.classList.remove('show');
            notification.addEventListener('transitionend', () => {
                notification.remove();
            });
        }, 3000);
    }

    function showOrderConfirmation() {
        orderConfirmationOverlay.classList.add('show');
    }

    function hideOrderConfirmation() {
        orderConfirmationOverlay.classList.remove('show');
    }
    
    // --- وظائف الوضع الليلي والنهاري (Theme Toggle) ---
    
    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // أيقونة الشمس
            themeToggle.setAttribute('aria-label', 'الوضع النهاري');
        }
    }

    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // أيقونة القمر
            themeToggle.setAttribute('aria-label', 'الوضع الليلي');
        }
    }

    function toggleTheme() {
        if (document.body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    }
    
    function initializeTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            enableDarkMode();
        } else if (savedTheme === 'light') {
            disableDarkMode();
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }
    
    // --- مستمعي الأحداث (Event Listeners) ---
    
    // مستمع الوضع الليلي
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }


    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const sectionName = targetId.replace('-section', '');
            showSection(sectionName);
            updateNavLinkActiveState(targetId);
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    cartIcon.addEventListener('click', () => {
        sections.cartSidebar.classList.add('open');
        renderCartItems();
    });

    closeCartBtn.addEventListener('click', () => {
        sections.cartSidebar.classList.remove('open');
    });

    cartItemsContainer.addEventListener('click', (e) => {
        const target = e.target;
        const button = target.closest('button');
        if (button) {
            const productId = button.dataset.id;
            const action = button.dataset.action;
            if (button.classList.contains('remove-item-btn')) {
                removeFromCart(productId);
            } else if (action === 'increase' || action === 'decrease') {
                changeQuantity(productId, action);
            }
        }
    });

    menuItemsGrid.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('add-to-cart-btn')) {
            const productId = target.dataset.id;
            addToCart(productId);
        }
    });

    menuCategoriesContainer.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('category-btn')) {
            menuCategoriesContainer.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            target.classList.add('active');
            const category = target.dataset.category;
            renderProducts(category);
        }
    });

    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('عربتك فارغة. لا يمكن إتمام الطلب.', 'error');
            return;
        }
        sections.cartSidebar.classList.remove('open');
        showSection('checkout');
        renderOrderSummaryMini();
        checkoutForm.reset();
        checkoutForm.querySelectorAll('.error-message').forEach(span => span.textContent = '');
        checkoutForm.querySelectorAll('input, textarea').forEach(input => input.classList.remove('error'));
    });

    if (backToMenuBtn) {
        backToMenuBtn.addEventListener('click', () => {
            showSection('menu');
            updateNavLinkActiveState('menu-section');
        });
    }

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (validateForm()) {
                const cartDetailsForSubmit = cart.map(item => `${item.name} (x${item.quantity}) - ${item.price.toFixed(2)} جنيها`).join('\n');
                cartDetailsInput.value = cartDetailsForSubmit;
                totalPriceInput.value = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
                try {
                    const formData = new FormData(checkoutForm);
                    formData.append('تفاصيل الطلب', cartDetailsForSubmit);
                    formData.append('السعر الإجمالي', totalPriceInput.value);
                    const response = await fetch(checkoutForm.action, {
                        method: checkoutForm.method,
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    if (response.ok) {
                        showOrderConfirmation();
                        cart = [];
                        saveCart();
                        updateCartCount();
                        renderCartItems();
                        checkoutForm.reset();
                        checkoutForm.querySelectorAll('.error-message').forEach(span => span.textContent = '');
                        checkoutForm.querySelectorAll('input, textarea').forEach(input => input.classList.remove('error'));
                    } else {
                        const errorData = await response.json();
                        console.error('FormSubmit error:', errorData);
                        showNotification('حدث خطأ أثناء إرسال طلبك. الرجاء المحاولة مرة أخرى.', 'error');
                    }
                } catch (error) {
                    console.error('Network or submission error:', error);
                    showNotification('حدث خطأ في الشبكة أو الإرسال. الرجاء التحقق من اتصالك والمحاولة مرة أخرى.', 'error');
                }
            } else {
                showNotification('الرجاء تصحيح الأخطاء في النموذج.', 'error');
            }
        });
    }

    if (closeConfirmationBtn) {
        closeConfirmationBtn.addEventListener('click', () => {
            hideOrderConfirmation();
            showSection('hero');
            updateNavLinkActiveState('hero-section');
        });
    }

    if (scrollToMenuBtn) {
        scrollToMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('menu');
            updateNavLinkActiveState('menu-section');
        });
    }

    // --- تهيئة الموقع عند التحميل ---
    initializeTheme(); 
    updateCartCount();
    renderCategoryButtons();
    renderProducts('all');
    showSection('hero');
    updateNavLinkActiveState('hero-section');

});

