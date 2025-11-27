  // --- Navigation Logic ---
        function showPage(pageId) {
            // 1. Hide all pages
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => {
                page.classList.add('hidden');
            });

            // 2. Show the selected page
            const selectedPage = document.getElementById(pageId);
            if (selectedPage) {
                selectedPage.classList.remove('hidden');
            }

            // 3. Close mobile menu if open
            const menu = document.getElementById('mobile-menu');
            if (menu.style.display === 'block') {
                menu.style.display = 'none';
            }
            
            // 4. Scroll to top
            window.scrollTo(0, 0);
        }

        // --- Mobile Menu Logic ---
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.style.display === 'block') {
                menu.style.display = 'none';
            } else {
                menu.style.display = 'block';
            }
        }

        // --- Initialize ---
        document.addEventListener('DOMContentLoaded', () => {
            showPage('home');
        });