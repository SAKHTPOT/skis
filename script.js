class ArtGallery {
    constructor() {
        this.items = [
            {title: 'کاوشگر برف', tags: ['مینیمال', 'مدرن']},
            {title: 'باله سفید', tags: ['کلاسیک', 'هنری']},
            {title: 'خطوط ناب', tags: ['گرافیک', 'مفهومی']}
        ];
        
        this.init();
    }

    init() {
        this.renderGallery();
        this.addObservers();
        this.addPoetry();
    }

    renderGallery() {
        const grid = document.querySelector('.grid-portfolio');
        grid.innerHTML = this.items.map(item => `
            <article class="art-card">
                <h3>${item.title}</h3>
                <div class="tags">${item.tags.map(t => `<span>#${t}</span>`).join('')}</div>
            </article>
        `).join('');
    }

    addObservers() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('emerge');
                }
            });
        });

        document.querySelectorAll('.art-card').forEach(card => {
            card.style.setProperty('--delay', `${Math.random() * 0.5}s`);
            observer.observe(card);
        });
    }

    addPoetry() {
        const poems = [
            'برف می‌بارد روی اسکی های خاموش',
            'خطوط برف را با حرکت می‌نوازم',
            'هر شیار حکایتی از سرعت است'
        ];
        
        const subtitle = document.querySelector('.subtitle');
        let index = 0;
        
        setInterval(() => {
            subtitle.style.animation = 'fade 1s';
            setTimeout(() => {
                subtitle.textContent = poems[index];
                index = (index + 1) % poems.length;
                subtitle.style.animation = '';
            }, 1000);
        }, 5000);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new ArtGallery();
});
