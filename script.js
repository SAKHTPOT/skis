// اضافه به script.js
class ContactForm {
    constructor() {
        this.form = document.getElementById('art-form');
        this.init();
    }

    init() {
        this.addHoverEffects();
        this.addFormValidation();
        this.addIntersectionObserver();
    }

    addHoverEffects() {
        document.querySelectorAll('.input-group').forEach(group => {
            group.addEventListener('mousemove', (e) => {
                const rect = group.getBoundingClientRect();
                const x = e.clientX - rect.left;
                group.style.setProperty('--mouse-x', `${x}px`);
            });
        });
    }

    addFormValidation() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            // افزودن منطق ارسال فرم
            this.showConfetti();
        });
    }

    addIntersectionObserver() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });

        observer.observe(document.querySelector('.glass-form'));
    }

    showConfetti() {
        // افزودن افکت کانفتی
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1'];
        for(let i = 0; i < 50; i++) {
            const dot = document.createElement('div');
            dot.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                background: ${colors[Math.floor(Math.random()*colors.length)]};
                width: 8px;
                height: 8px;
                border-radius: 50%;
                pointer-events: none;
                animation: confetti 1s ease-out;
            `;
            
            document.body.appendChild(dot);
            
            setTimeout(() => {
                dot.remove();
            }, 1000);
        }
    }
}

// مقداردهی هنگام لود صفحه
document.addEventListener('DOMContentLoaded', () => {
    new ContactForm();
});
