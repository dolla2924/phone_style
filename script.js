document.addEventListener( 'DOMContentLoaded', () => {
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
            name: 'oraimo',
            description: 'صوت محيطي نقي، عمر بطارية طويل، وخاصية عزل الضوضاء.',
            price: 520.00,
            image: 'imges2/image1.jpg',
            category: 'audio'
        },
        {
            id: 'audio-2',
            name: 'soundcore',
            description: 'تصميم مريح ومقاومة للعرق، مثالية للرياضة.',
            price: 350.00,
            image: 'imges2/image2.jpg',
            category: 'audio'
        },
        {
            id: 'audio-3',
            name: 'fome pro_4',
            description: 'جودة صوت ممتازة وميكروفون مدمج لإجراء المكالمات.',
            price: 520.00,
            image: 'imges2/image3.jpg',
            category: 'audio'
        },
        {
            id: 'audio-4',
            name: 'soundcore',
            description: 'صوت جهوري قوي وتوصيل مستقر عبر البلوتوث.',
            price: 420.00,
            image: 'imges2/image4.jpg',
            category: 'audio'
        },
        {
            id: 'audio-5',
            name: 'soundcore',
            description: 'صوت محيطي نقي، عمر بطارية طويل، وخاصية عزل الضوضاء.',
            price: 420.00,
            image: 'imges2/image5.jpg',
            category: 'audio'
        },
        {
            id: 'audio-6',
            name: 'une flex',
            description: 'سماعات صغيرة الحجم ومناسبة للاستخدام اليومي.',
            price: 300.00,
            image: 'imges2/image6.jpg',
            category: 'audio'
        },
        {
            id: 'audio-7',
            name: 'wireless 5.1',
            description: 'سعر اقتصادي وأداء صوتي جيد.',
            price: 200.00,
            image: 'imges2/image7.jpg',
            category: 'audio'
        },
        {
            id: 'audio-8',
            name: 'stereo',
            description: 'جودة صوت ممتازة ومريحة للاستخدام لفترات طويلة.',
            price: 70.00,
            image: 'imges2/1.avif',
            category: 'audio'
        },
        {
            id: 'audio-9',
            name: 'hm',
            description: 'صوت محيطي نقي، عمر بطارية طويل، وخاصية عزل الضوضاء.',
            price: 50.00,
            image: 'imges2/22.jpg',
            category: 'audio'
        },
        {
            id: 'audio-10', // تم تغيير الـ ID لتجنب التكرار
            name: 'blue',
            description: 'صوت محيطي نقي، عمر بطارية طويل، وخاصية عزل الضوضاء.',
            price: 80.00,
            image: 'imges2/33.png',
            category: 'audio'
        },
        {
            id: 'audio-11', // تم تغيير الـ ID لتجنب التكرار
            name: 'earphone',
            description: 'صوت محيطي نقي، عمر بطارية طويل، وخاصية عزل الضوضاء.',
            price: 80.00,
            image: 'imges2/44.jpg',
            category: 'audio'
        },
        {
            id: 'audio-12', // تم تغيير الـ ID لتجنب التكرار
            name: ' strong',
            description: 'صوت محيطي نقي، عمر بطارية طويل، وخاصية عزل الضوضاء.',
            price: 500.00,
            image: 'imges2/55.png',
            category: 'audio'
        },
        {
            id: 'audio-13', // تم تغيير الـ ID لتجنب التكرار
            name: 'سماعات أذن بلوتوث (I)',
            description: 'صوت محيطي نقي، عمر بطارية طويل، وخاصية عزل الضوضاء.',
            price: 500.00,
            image: 'imges2/image9.jpg',
            category: 'audio'
        },
        {
            id: 'audio-14', // تم تغيير الـ ID لتجنب التكرار
            name: 'سماعات أذن بلوتوث (II)', // تغيير الاسم لتجنب التكرار
            description: 'صوت محيطي نقي، عمر بطارية طويل، وخاصية عزل الضوضاء.',
            price: 500.00,
            image: 'imges2/image9.jpg',
            category: 'audio'
        },
        {
            id: 'gadget-1', // تم تغيير الـ ID لتجنب التكرار
            name: 'Bot Music 1',
            description: 'الحجم ومناسبة للاستخدام اليومي',
            price: 250.00,
            image: 'img3/2.jpg', 
            category: 'gadgets'
        }, 
        {
            id: 'gadget-2',
            name: 'Bot Music 2',
            description: 'الحجم ومناسبة للاستخدام اليومي',
            price: 250.00,
            image: 'img3/3.webp', 
            category: 'gadgets'
        }, 
        {
            id: 'gadget-3',
            name: 'Bot Music 3',
            description: 'الحجم ومناسبة للاستخدام اليومي',
            price: 250.00,
            image: 'img3/4.jpg', 
            category: 'gadgets'
        }, 
        {
            id: 'gadget-4',
            name: 'Bot Music 4',
            description: '',
            price: 195.00,
            image: 'img3/5.jpg', 
            category: 'gadgets'
        }, 
        {
            id: 'gadget-5',
            name: 'Bot Music 5',
            description: '',
            price: 180.00,
            image: 'img3/1.webp', 
            category: 'gadgets'
        }, 
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
                    // التمرير إلى القسم المستهدف مع ترك مساحة لرأس الصفحة الثابت
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
            checkoutBtn.disabled = true;
        } else {
            checkoutBtn.disabled = false;
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
        // استخدام Set لضمان عدم تكرار الفئات
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
            return;
        }

        let summaryHtml = '<h4>ملخص طلبك</h4><ul>';
        let total = 0;
        let cartDetailsForForm = []; 

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            summaryHtml += `
                <li>
                    <span>${item.name} (x${item.quantity})</span>
                    <span>${itemTotal.toFixed(2)} جنيها</span>
                </li>
            `;
            cartDetailsForForm.push({
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                total: itemTotal.toFixed(2)
            });
        });
        summaryHtml += `</ul><div class="total"><span>الإجمالي:</span> <span>${total.toFixed(2)} جنيها</span></div>`;
        orderSummaryMini.innerHTML = summaryHtml;
        
        // تحديث الحقول المخفية لنموذج FormSubmit
        cartDetailsInput.value = JSON.stringify(cartDetailsForForm);
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

        // مسح رسائل الأخطاء السابقة وإزالة فئة الخطأ
        [nameError, phoneError, phoneAltError, addressError, emailError].forEach(el => el.textContent = '');
        [nameInput, phoneInput, phoneAltInput, addressTextarea, emailInput].forEach(el => el.classList.remove('error'));

        // التحقق من الاسم
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'الاسم مطلوب.';
            nameInput.classList.add('error');
            isValid = false;
        }

        // نمط للتحقق من رقم الهاتف المصري (11 رقم يبدأ بـ 0)
        const phonePattern = /^0[0-9]{10}$/;

        // التحقق من رقم الهاتف الأساسي
        if (phoneInput.value.trim() === '') {
            phoneError.textContent = 'رقم الهاتف مطلوب.';
            phoneInput.classList.add('error');
            isValid = false;
        } else if (!phonePattern.test(phoneInput.value.trim())) {
            phoneError.textContent = 'الرجاء إدخال رقم هاتف صحيح (11 رقم يبدأ بـ 0).';
            phoneInput.classList.add('error');
            isValid = false;
        }

        // التحقق من رقم هاتف آخر (إذا تم إدخاله)
        if (phoneAltInput.value.trim() !== '' && !phonePattern.test(phoneAltInput.value.trim())) {
            phoneAltError.textContent = 'الرجاء إدخال رقم هاتف صحيح (11 رقم يبدأ بـ 0).';
            phoneAltInput.classList.add('error');
            isValid = false;
        }

        // التحقق من العنوان
        if (addressTextarea.value.trim() === '') {
            addressError.textContent = 'العنوان كاملاً مطلوب.';
            addressTextarea.classList.add('error');
            isValid = false;
        }

        // التحقق من البريد الإلكتروني (إذا تم إدخاله)
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
            // تحقق من تفضيلات النظام
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

    // معالجة النقر على روابط التنقل
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            // تحويل #hero-section إلى 'hero' ليناسب أسماء الأقسام في المتغير sections
            const sectionName = targetId.replace('-section', ''); 

            // معالجة خاصة لصفحة الدفع لضمان ظهورها فقط بالزر الخاص بها
            if (sectionName !== 'checkout') {
                showSection(sectionName);
                updateNavLinkActiveState(targetId);
            }
            
            // إخفاء قائمة التنقل في وضع الهاتف المحمول
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // زر "تصفح المنتجات الآن" في قسم البطل (Hero)
    if (scrollToMenuBtn) {
        scrollToMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('menu');
            updateNavLinkActiveState('menu-section');
        });
    }

    // فتح وإغلاق سلة التسوق الجانبية
    cartIcon.addEventListener('click', () => {
        sections.cartSidebar.classList.add('open');
        renderCartItems();
    });

    closeCartBtn.addEventListener('click', () => {
        sections.cartSidebar.classList.remove('open');
    });

    // التحكم في الكمية وإزالة المنتجات داخل سلة التسوق
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

    // زر "أضف إلى السلة" في بطاقات المنتجات
    menuItemsGrid.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('add-to-cart-btn')) {
            const productId = target.dataset.id;
            addToCart(productId);
        }
    });

    // أزرار تصفية الفئات
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

    // زر "إتمام الطلب" من السلة الجانبية
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('عربتك فارغة. لا يمكن إتمام الطلب.', 'error');
            return;
        }
        sections.cartSidebar.classList.remove('open');
        showSection('checkout');
        renderOrderSummaryMini();
        // إعادة تعيين النموذج ومسح الأخطاء عند الانتقال إلى صفحة الدفع
        checkoutForm.reset();
        checkoutForm.querySelectorAll('.error-message').forEach(span => span.textContent = '');
        checkoutForm.querySelectorAll('input, textarea').forEach(input => input.classList.remove('error'));
        // تحديث حالة شريط التنقل
        updateNavLinkActiveState('checkout-section');
    });

    // زر "العودة لتصفح المنتجات" من صفحة الدفع (الإصلاح هنا)
    if (backToMenuBtn) {
        backToMenuBtn.addEventListener('click', () => {
            showSection('menu');
            updateNavLinkActiveState('menu-section');
        });
    }


    // *** معالجة نموذج إتمام الطلب (Form Submission) - (تم استكمال هذا الجزء) ***
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        if (!validateForm()) {
            showNotification('الرجاء مراجعة البيانات المدخلة.', 'error');
            return;
        }

        if (cart.length === 0) {
             showNotification('عربتك فارغة. لا يمكن إرسال الطلب.', 'error');
             return;
        }

        // إرسال النموذج فعلياً (باستخدام FormSubmit في هذه الحالة)
        const form = e.target;
        const formData = new FormData(form);
        const url = form.action;

        // تعطيل الزر لمنع الإرسال المتعدد
        const submitBtn = form.querySelector('.checkout-submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'جاري الإرسال...';
        
        fetch(url, {
            method: form.method,
            body: formData,
            // Header is necessary for FormSubmit to work without redirecting
            headers: {
                'Accept': 'application/json' 
            }
        })
        .then(response => {
            // FormSubmit returns 200 OK on success, even for asynchronous calls
            if (response.ok) { 
                // مسح السلة بعد الإرسال الناجح
                cart = [];
                saveCart();
                updateCartCount();
                renderCartItems(); 
                
                form.reset(); // مسح حقول النموذج
                showOrderConfirmation();
                showSection('hero'); // العودة للصفحة الرئيسية
                updateNavLinkActiveState('hero-section');
                
            } else {
                // معالجة الأخطاء من FormSubmit (أو فشل الإرسال)
                showNotification('حدث خطأ أثناء إرسال الطلب. تأكد من إعداد FormSubmit بشكل صحيح.', 'error');
            }
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            showNotification('فشل في الاتصال بالخادم. حاول مرة أخرى.', 'error');
        })
        .finally(() => {
            // إعادة تفعيل الزر
            submitBtn.disabled = false;
            submitBtn.textContent = 'تأكيد الطلب والدفع عند الاستلام';
        });
    });


    // *** زر إغلاق شاشة التأكيد ***
    closeConfirmationBtn.addEventListener('click', () => {
        hideOrderConfirmation();
    });
    

    // --- التهيئة عند التحميل ---
    initializeTheme();
    renderCategoryButtons();
    renderProducts(); // عرض جميع المنتجات افتراضياً
    updateCartCount();
    renderCartItems(); // لضمان عرض عناصر السلة المخزنة إذا تم فتحها مباشرة

});
