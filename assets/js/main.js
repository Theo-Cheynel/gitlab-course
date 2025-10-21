// =================
// Main JavaScript for GitLab Course Website
// =================

class CourseProgressManager {
    constructor() {
        this.storageKey = 'gitlab-course-progress';
        this.progress = this.loadProgress();
        this.init();
    }

    init() {
        this.setupSmoothScrolling();
        this.setupModuleProgress();
        this.setupProgressTracking();
        this.setupMobileMenu();
        this.setupAnimations();
        this.updateModuleStates();
    }

    // =================
    // Progress Management
    // =================

    loadProgress() {
        try {
            const saved = localStorage.getItem(this.storageKey);
            return saved ? JSON.parse(saved) : {
                completedModules: [],
                currentModule: 0,
                lastAccessed: Date.now()
            };
        } catch (error) {
            console.warn('Could not load progress from localStorage:', error);
            return {
                completedModules: [],
                currentModule: 0,
                lastAccessed: Date.now()
            };
        }
    }

    saveProgress() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.progress));
        } catch (error) {
            console.warn('Could not save progress to localStorage:', error);
        }
    }

    markModuleComplete(moduleNumber) {
        if (!this.progress.completedModules.includes(moduleNumber)) {
            this.progress.completedModules.push(moduleNumber);
            this.progress.currentModule = Math.max(this.progress.currentModule, moduleNumber + 1);
            this.progress.lastAccessed = Date.now();
            this.saveProgress();
            this.updateModuleStates();
            this.showCompletionAnimation(moduleNumber);
        }
    }

    isModuleUnlocked(moduleNumber) {
        // Module 0 is always unlocked
        if (moduleNumber === 0) return true;
        
        // Subsequent modules require previous module completion
        return this.progress.completedModules.includes(moduleNumber - 1);
    }

    isModuleCompleted(moduleNumber) {
        return this.progress.completedModules.includes(moduleNumber);
    }

    // =================
    // UI Updates
    // =================

    updateModuleStates() {
        const moduleCards = document.querySelectorAll('.module-card');
        
        moduleCards.forEach(card => {
            const moduleNumber = parseInt(card.dataset.module);
            const statusIndicator = card.querySelector('.status-indicator');
            const statusText = card.querySelector('.status-text');
            const moduleLink = card.querySelector('.module-link');
            
            if (this.isModuleCompleted(moduleNumber)) {
                // Module completed
                statusIndicator.className = 'status-indicator completed';
                statusText.textContent = 'Completed';
                moduleLink.classList.remove('disabled');
                moduleLink.textContent = 'Review Module →';
                card.classList.add('completed');
            } else if (this.isModuleUnlocked(moduleNumber)) {
                // Module available
                statusIndicator.className = 'status-indicator pending';
                statusText.textContent = moduleNumber === this.progress.currentModule ? 'Current' : 'Available';
                moduleLink.classList.remove('disabled');
                moduleLink.textContent = 'Start Module →';
                if (moduleNumber === this.progress.currentModule) {
                    card.classList.add('current');
                }
            } else {
                // Module locked
                statusIndicator.className = 'status-indicator locked';
                statusText.textContent = 'Locked';
                moduleLink.classList.add('disabled');
                moduleLink.textContent = `Complete Module ${moduleNumber - 1} First`;
            }
        });
    }

    showCompletionAnimation(moduleNumber) {
        const card = document.querySelector(`[data-module="${moduleNumber}"]`);
        if (card) {
            card.classList.add('completion-animation');
            setTimeout(() => {
                card.classList.remove('completion-animation');
            }, 1000);
        }
    }

    // =================
    // Smooth Scrolling
    // =================

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // =================
    // Module Progress Tracking
    // =================

    setupModuleProgress() {
        // Listen for module completion messages from module pages
        window.addEventListener('message', (event) => {
            if (event.origin !== window.location.origin) return;
            
            if (event.data.type === 'moduleCompleted') {
                this.markModuleComplete(event.data.moduleNumber);
            }
        });

        // Check if returning from a module page
        const urlParams = new URLSearchParams(window.location.search);
        const completedModule = urlParams.get('completed');
        if (completedModule !== null) {
            this.markModuleComplete(parseInt(completedModule));
            // Clean URL without reloading
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }

    setupProgressTracking() {
        // Track time spent on page
        let startTime = Date.now();
        
        window.addEventListener('beforeunload', () => {
            const timeSpent = Date.now() - startTime;
            // Could send analytics data here
            console.log(`Time spent on homepage: ${Math.round(timeSpent / 1000)}s`);
        });
    }

    // =================
    // Mobile Menu
    // =================

    setupMobileMenu() {
        // Add mobile menu toggle if needed
        const nav = document.querySelector('.nav');
        const navLinks = document.querySelector('.nav-links');
        
        if (window.innerWidth <= 768) {
            const menuToggle = document.createElement('button');
            menuToggle.className = 'menu-toggle';
            menuToggle.innerHTML = '☰';
            menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
            
            nav.appendChild(menuToggle);
            
            menuToggle.addEventListener('click', () => {
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
                menuToggle.innerHTML = navLinks.style.display === 'flex' ? '✕' : '☰';
            });
        }
    }

    // =================
    // Animations
    // =================

    setupAnimations() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.info-card, .module-card, .resource-card').forEach(el => {
            observer.observe(el);
        });

        // Parallax effect for hero section
        this.setupParallaxEffect();
    }

    setupParallaxEffect() {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${rate}px)`;
            }
        });
    }

    // =================
    // Utility Methods
    // =================

    getProgressStats() {
        const totalModules = 6; // 0-5
        const completed = this.progress.completedModules.length;
        const percentage = Math.round((completed / totalModules) * 100);
        
        return {
            completed,
            total: totalModules,
            percentage,
            currentModule: this.progress.currentModule,
            lastAccessed: new Date(this.progress.lastAccessed)
        };
    }

    resetProgress() {
        if (confirm('Are you sure you want to reset your progress? This cannot be undone.')) {
            localStorage.removeItem(this.storageKey);
            this.progress = {
                completedModules: [],
                currentModule: 0,
                lastAccessed: Date.now()
            };
            this.updateModuleStates();
        }
    }

    exportProgress() {
        const stats = this.getProgressStats();
        const data = {
            progress: this.progress,
            stats,
            exportDate: new Date().toISOString()
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'gitlab-course-progress.json';
        a.click();
        URL.revokeObjectURL(url);
    }
}

// =================
// Additional Features
// =================

class FeatureManager {
    constructor() {
        this.setupKeyboardShortcuts();
        this.setupProgressIndicator();
        this.setupThemeToggle();
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K to focus search (if implemented)
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                // Could implement search functionality
            }
            
            // Arrow keys for module navigation
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                const currentModule = document.querySelector('.module-card.current');
                if (currentModule) {
                    const direction = e.key === 'ArrowRight' ? 1 : -1;
                    const nextModule = currentModule.nextElementSibling || currentModule.previousElementSibling;
                    if (nextModule && nextModule.classList.contains('module-card')) {
                        nextModule.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }
            }
        });
    }

    setupProgressIndicator() {
        // Create a floating progress indicator
        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-indicator';
        progressContainer.innerHTML = `
            <div class="progress-circle">
                <svg viewBox="0 0 36 36">
                    <path class="progress-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path class="progress-bar" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <div class="progress-text">0%</div>
            </div>
        `;
        
        document.body.appendChild(progressContainer);
        
        // Update progress on scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const percentage = Math.round((scrolled / maxScroll) * 100);
            
            const progressBar = progressContainer.querySelector('.progress-bar');
            const progressText = progressContainer.querySelector('.progress-text');
            
            progressBar.style.strokeDasharray = `${percentage}, 100`;
            progressText.textContent = `${percentage}%`;
        });
    }

    setupThemeToggle() {
        // Could implement dark mode toggle here
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.innerHTML = '🌙';
        themeToggle.setAttribute('aria-label', 'Toggle dark mode');
        
        // Position it in the nav
        const nav = document.querySelector('.nav');
        nav.appendChild(themeToggle);
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            themeToggle.innerHTML = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
            
            // Save preference
            localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
        });
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.innerHTML = '☀️';
        }
    }
}

// =================
// Initialize Application
// =================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize main course manager
    window.courseManager = new CourseProgressManager();
    
    // Initialize additional features
    const featureManager = new FeatureManager();
    
    // Add some fun easter eggs
    console.log(`
    🚀 Welcome to the Git & GitLab Course!
    
    Keyboard shortcuts:
    - Ctrl/Cmd + K: Search (coming soon)
    - Arrow keys: Navigate between modules
    
    Debug commands:
    - courseManager.getProgressStats(): View progress
    - courseManager.resetProgress(): Reset all progress
    - courseManager.exportProgress(): Export progress data
    `);
    
    // Add development helpers
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        // Development mode - add helpful tools
        const devTools = document.createElement('div');
        devTools.className = 'dev-tools';
        devTools.innerHTML = `
            <div style="position: fixed; bottom: 20px; right: 20px; background: #000; color: #fff; padding: 10px; border-radius: 5px; font-size: 12px; z-index: 9999;">
                <div>Dev Mode</div>
                <button onclick="courseManager.markModuleComplete(0)" style="margin: 2px; padding: 2px 5px; font-size: 10px;">Complete Module 0</button>
                <button onclick="courseManager.markModuleComplete(1)" style="margin: 2px; padding: 2px 5px; font-size: 10px;">Complete Module 1</button>
                <button onclick="courseManager.resetProgress()" style="margin: 2px; padding: 2px 5px; font-size: 10px;">Reset Progress</button>
            </div>
        `;
        document.body.appendChild(devTools);
    }
});

// =================
// CSS for JavaScript-driven features
// =================

const additionalStyles = `
<style>
.progress-indicator {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    z-index: 1000;
    opacity: 0.8;
    transition: opacity 0.3s ease;
}

.progress-indicator:hover {
    opacity: 1;
}

.progress-circle {
    position: relative;
    width: 100%;
    height: 100%;
}

.progress-circle svg {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
}

.progress-bg {
    fill: none;
    stroke: #e2e8f0;
    stroke-width: 3;
}

.progress-bar {
    fill: none;
    stroke: #6366f1;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-dasharray: 0, 100;
    transition: stroke-dasharray 0.3s ease;
}

.progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    font-weight: 600;
    color: #6366f1;
}

.theme-toggle {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: background-color 0.2s ease;
}

.theme-toggle:hover {
    background-color: var(--bg-tertiary);
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--text-primary);
}

@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }
    
    .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--bg-card);
        box-shadow: var(--shadow-lg);
        flex-direction: column;
        padding: var(--space-lg);
        gap: var(--space-lg);
    }
}

.completion-animation {
    animation: completionPulse 1s ease;
}

@keyframes completionPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(16, 185, 129, 0.5); }
    100% { transform: scale(1); }
}

.animate-in {
    animation: fadeInUp 0.6s ease forwards;
}

.dark-theme {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --bg-tertiary: #334155;
    --bg-card: #1e293b;
    --text-primary: #f8fafc;
    --text-secondary: #cbd5e1;
    --text-muted: #94a3b8;
    --border-color: #334155;
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', additionalStyles);