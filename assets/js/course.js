// =================
// Course Application JavaScript
// =================

class CourseApp {
    constructor() {
        this.currentRole = null;
        this.currentLesson = null;
        this.completedLessons = new Set();
        this.courseData = this.initializeCourseData();
        
        this.init();
    }

    init() {
        this.loadUserData();
        this.setupEventListeners();
        this.setupResponsiveDesign();
        this.initializeInterface();
    }

    // =================
    // Data Management
    // =================

    initializeCourseData() {
        return {
            lessons: {
                'vscode': {
                    title: 'Installing VSCode',
                    module: 'Module 0',
                    duration: '15 minutes',
                    file: 'module0/vscode.md'
                },
                'ssh': {
                    title: 'Setting up SSH Keys',
                    module: 'Module 0', 
                    duration: '10 minutes',
                    file: 'module0/ssh.md'
                },
                'repository': {
                    title: 'Creating Repository',
                    module: 'Module 0',
                    duration: '8 minutes',
                    file: 'module0/creating_repository.md'
                },
                'cloning': {
                    title: 'Cloning Repository',
                    module: 'Module 0',
                    duration: '7 minutes',
                    file: 'module0/cloning_repository.md'
                },
                'commits': {
                    title: 'First Commits',
                    module: 'Module 0',
                    duration: '5 minutes',
                    file: 'module0/commits.md'
                },
                'team-setup': {
                    title: 'Team Formation',
                    module: 'Module 1',
                    duration: '20 minutes',
                    file: 'module1/setup.md'
                },
                'project-structure': {
                    title: 'Project Structure',
                    module: 'Module 1',
                    duration: '15 minutes',
                    file: 'module1/README.md'
                },
                'member-task': {
                    title: 'Your Team Role Task',
                    module: 'Module 2',
                    duration: '30 minutes',
                    file: 'instructions/hangman_member_{role}.md',
                    roleSpecific: true
                },
                'testing': {
                    title: 'Unit Testing',
                    module: 'Module 2',
                    duration: '25 minutes',
                    file: 'module1/parallel_tasks.md'
                },
                'merge-requests': {
                    title: 'Merge Requests',
                    module: 'Module 2',
                    duration: '20 minutes',
                    file: 'instructions/hangman_merging_pull_requests.md'
                },
                'conflict-resolution': {
                    title: 'Resolving Conflicts',
                    module: 'Module 3',
                    duration: '25 minutes',
                    file: 'conflicts/README.md'
                },
                'rebasing': {
                    title: 'Git Rebase',
                    module: 'Module 3',
                    duration: '20 minutes',
                    file: 'module1/merge_requests.md'
                }
            },
            roleDescriptions: {
                'A': {
                    title: 'Team Member A',
                    description: 'Focus on core game logic and word validation',
                    color: '#ef4444'
                },
                'B': {
                    title: 'Team Member B', 
                    description: 'Handle user interface and input validation',
                    color: '#f97316'
                },
                'C': {
                    title: 'Team Member C',
                    description: 'Implement game state management',
                    color: '#eab308'
                },
                'D': {
                    title: 'Team Member D',
                    description: 'Create scoring and statistics system',
                    color: '#22c55e'
                },
                'E': {
                    title: 'Team Member E',
                    description: 'Develop testing framework and utilities',
                    color: '#3b82f6'
                },
                'F': {
                    title: 'Team Member F',
                    description: 'Handle documentation and code quality',
                    color: '#8b5cf6'
                }
            }
        };
    }

    // =================
    // Storage Management
    // =================

    saveUserData() {
        const userData = {
            role: this.currentRole,
            completedLessons: Array.from(this.completedLessons),
            lastAccessed: Date.now()
        };
        
        try {
            localStorage.setItem('gitlabCourse', JSON.stringify(userData));
            
            // Also set a cookie as backup
            const expires = new Date();
            expires.setTime(expires.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 days
            document.cookie = `gitlabCourseRole=${this.currentRole}; expires=${expires.toUTCString()}; path=/`;
        } catch (error) {
            console.warn('Could not save user data:', error);
        }
    }

    loadUserData() {
        try {
            const stored = localStorage.getItem('gitlabCourse');
            if (stored) {
                const userData = JSON.parse(stored);
                this.currentRole = userData.role;
                this.completedLessons = new Set(userData.completedLessons || []);
                return true;
            }
        } catch (error) {
            console.warn('Could not load from localStorage:', error);
        }

        // Fallback to cookie
        const cookieMatch = document.cookie.match(/gitlabCourseRole=([^;]+)/);
        if (cookieMatch) {
            this.currentRole = cookieMatch[1];
            return true;
        }

        return false;
    }

    // =================
    // Interface Management
    // =================

    initializeInterface() {
        const hasUserData = this.loadUserData();
        
        if (hasUserData && this.currentRole) {
            this.showCourseInterface();
            this.updateRoleBanner();
            this.updateProgress();
        } else {
            this.showWelcomeScreen();
        }
    }

    showWelcomeScreen() {
        document.getElementById('welcomeScreen').classList.remove('hidden');
        document.getElementById('lessonContent').classList.add('hidden');
        document.getElementById('sidebar').classList.add('hidden');
        document.getElementById('roleBanner').classList.add('hidden');
        document.getElementById('mobileMenuBtn').classList.add('hidden');
        
        document.querySelector('.app-container').classList.add('no-banner');
    }

    showCourseInterface() {
        document.getElementById('welcomeScreen').classList.add('hidden');
        document.getElementById('sidebar').classList.remove('hidden');
        document.getElementById('roleBanner').classList.remove('hidden');
        document.getElementById('mobileMenuBtn').classList.remove('hidden');
        
        document.querySelector('.app-container').classList.remove('no-banner');
        
        // Load first lesson if none selected
        if (!this.currentLesson) {
            this.loadLesson('vscode');
        }
    }

    updateRoleBanner() {
        if (this.currentRole) {
            const roleData = this.courseData.roleDescriptions[this.currentRole];
            document.getElementById('currentRoleText').textContent = roleData.title;
            
            // Update role-specific styling
            document.documentElement.style.setProperty('--role-color', roleData.color);
        }
    }

    // =================
    // Event Listeners
    // =================

    setupEventListeners() {
        // Role selection
        document.addEventListener('click', (e) => {
            if (e.target.closest('.role-option')) {
                this.handleRoleSelection(e.target.closest('.role-option'));
            }
        });

        // Start course button
        document.getElementById('startCourseBtn').addEventListener('click', () => {
            if (this.currentRole) {
                this.saveUserData();
                this.showCourseInterface();
            }
        });

        // Change role button
        document.getElementById('changeRoleBtn').addEventListener('click', () => {
            this.showRoleModal();
        });

        // Sidebar toggle
        document.getElementById('sidebarToggle').addEventListener('click', () => {
            this.toggleSidebar();
        });

        // Mobile menu
        document.getElementById('mobileMenuBtn').addEventListener('click', () => {
            this.toggleSidebar();
        });

        // Module expansion
        document.addEventListener('click', (e) => {
            if (e.target.closest('.module-header')) {
                this.toggleModule(e.target.closest('.module-header'));
            }
        });

        // Lesson navigation
        document.addEventListener('click', (e) => {
            if (e.target.closest('.lesson-item')) {
                e.preventDefault();
                const lessonId = e.target.closest('.lesson-item').dataset.lesson;
                this.loadLesson(lessonId);
            }
        });

        // Modal controls
        document.getElementById('closeModal').addEventListener('click', () => {
            this.hideRoleModal();
        });

        document.addEventListener('click', (e) => {
            if (e.target.id === 'roleModal') {
                this.hideRoleModal();
            }
        });

        // Lesson navigation buttons
        document.getElementById('markComplete').addEventListener('click', () => {
            this.markLessonComplete(this.currentLesson);
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideRoleModal();
            }
        });
    }

    setupResponsiveDesign() {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        
        const handleResponsive = (e) => {
            if (e.matches) {
                // Mobile view
                document.getElementById('sidebar').classList.add('hidden');
                document.querySelector('.main-content').classList.add('sidebar-hidden');
            } else {
                // Desktop view
                if (this.currentRole) {
                    document.getElementById('sidebar').classList.remove('hidden');
                    document.querySelector('.main-content').classList.remove('sidebar-hidden');
                }
            }
        };

        mediaQuery.addEventListener('change', handleResponsive);
        handleResponsive(mediaQuery);
    }

    // =================
    // Role Management
    // =================

    handleRoleSelection(roleElement) {
        const role = roleElement.dataset.role;
        
        // Update UI
        document.querySelectorAll('.role-option').forEach(el => {
            el.classList.remove('selected');
        });
        roleElement.classList.add('selected');
        
        // Update state
        this.currentRole = role;
        
        // Enable start button
        document.getElementById('startCourseBtn').disabled = false;
    }

    showRoleModal() {
        document.getElementById('roleModal').classList.remove('hidden');
        
        // Setup modal role selection
        document.querySelectorAll('.modal-role').forEach(el => {
            el.addEventListener('click', () => {
                this.currentRole = el.dataset.role;
                this.saveUserData();
                this.updateRoleBanner();
                this.hideRoleModal();
                
                // Reload current lesson if it's role-specific
                if (this.currentLesson && this.courseData.lessons[this.currentLesson].roleSpecific) {
                    this.loadLesson(this.currentLesson);
                }
            });
        });
    }

    hideRoleModal() {
        document.getElementById('roleModal').classList.add('hidden');
    }

    // =================
    // Sidebar Management
    // =================

    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const mainContent = document.querySelector('.main-content');
        
        sidebar.classList.toggle('hidden');
        mainContent.classList.toggle('sidebar-hidden');
    }

    toggleModule(moduleHeader) {
        const lessonList = moduleHeader.nextElementSibling;
        const isExpanded = moduleHeader.classList.contains('expanded');
        
        if (isExpanded) {
            moduleHeader.classList.remove('expanded');
            lessonList.style.maxHeight = '0';
            lessonList.style.opacity = '0';
        } else {
            moduleHeader.classList.add('expanded');
            lessonList.style.maxHeight = lessonList.scrollHeight + 'px';
            lessonList.style.opacity = '1';
        }
    }

    // =================
    // Lesson Management
    // =================

    async loadLesson(lessonId) {
        const lessonData = this.courseData.lessons[lessonId];
        if (!lessonData) {
            console.error('Lesson not found:', lessonId);
            return;
        }

        this.currentLesson = lessonId;
        
        // Update UI state
        this.updateLessonUI(lessonData);
        this.updateActiveLesson(lessonId);
        
        // Load content
        await this.loadLessonContent(lessonData);
        
        // Show lesson content
        document.getElementById('lessonContent').classList.remove('hidden');
        
        // Hide sidebar on mobile
        if (window.innerWidth <= 768) {
            document.getElementById('sidebar').classList.add('hidden');
            document.querySelector('.main-content').classList.add('sidebar-hidden');
        }
    }

    updateLessonUI(lessonData) {
        document.getElementById('lessonTitle').textContent = lessonData.title;
        document.getElementById('lessonModule').textContent = lessonData.module;
        document.getElementById('lessonDuration').textContent = lessonData.duration;
    }

    updateActiveLesson(lessonId) {
        document.querySelectorAll('.lesson-item').forEach(el => {
            el.classList.remove('active');
        });
        
        const activeLesson = document.querySelector(`[data-lesson="${lessonId}"]`);
        if (activeLesson) {
            activeLesson.classList.add('active');
        }
    }

    async loadLessonContent(lessonData) {
        try {
            let filePath = lessonData.file;
            
            // Handle role-specific content
            if (lessonData.roleSpecific && this.currentRole) {
                filePath = filePath.replace('{role}', this.currentRole.toLowerCase());
            }
            
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`Failed to load lesson: ${response.status}`);
            }
            
            const content = await response.text();
            const htmlContent = this.parseMarkdown(content);
            
            document.getElementById('lessonBody').innerHTML = htmlContent;
            
            // Highlight code blocks if Prism is available
            if (window.Prism) {
                window.Prism.highlightAll();
            }
            
        } catch (error) {
            console.error('Error loading lesson content:', error);
            document.getElementById('lessonBody').innerHTML = `
                <div class="error-message">
                    <h3>Content Not Available</h3>
                    <p>Sorry, this lesson content is not yet available. Please check back later or contact your instructor.</p>
                    <p><strong>Lesson:</strong> ${lessonData.title}</p>
                    <p><strong>Expected file:</strong> ${lessonData.file}</p>
                </div>
            `;
        }
    }

    parseMarkdown(markdown) {
        // Simple markdown parser for basic formatting
        let html = markdown;
        
        // Remove front matter if present
        html = html.replace(/^---[\s\S]*?---\n/, '');
        
        // Headers
        html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
        
        // Bold and italic
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
        
        // Code blocks
        html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>');
        html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
        
        // Links
        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
        
        // Lists
        html = html.replace(/^\* (.+)$/gim, '<li>$1</li>');
        html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
        html = html.replace(/^\d+\. (.+)$/gim, '<li>$1</li>');
        
        // Paragraphs
        html = html.replace(/\n\n/g, '</p><p>');
        html = '<p>' + html + '</p>';
        
        // Clean up empty paragraphs
        html = html.replace(/<p><\/p>/g, '');
        html = html.replace(/<p>(<h[1-6]>)/g, '$1');
        html = html.replace(/(<\/h[1-6]>)<\/p>/g, '$1');
        html = html.replace(/<p>(<ul>)/g, '$1');
        html = html.replace(/(<\/ul>)<\/p>/g, '$1');
        html = html.replace(/<p>(<pre>)/g, '$1');
        html = html.replace(/(<\/pre>)<\/p>/g, '$1');
        
        return html;
    }

    markLessonComplete(lessonId) {
        if (lessonId && !this.completedLessons.has(lessonId)) {
            this.completedLessons.add(lessonId);
            this.saveUserData();
            this.updateProgress();
            this.updateLessonStatus(lessonId);
            
            // Show completion feedback
            this.showCompletionFeedback();
        }
    }

    updateLessonStatus(lessonId) {
        const lessonElement = document.querySelector(`[data-lesson="${lessonId}"]`);
        if (lessonElement) {
            lessonElement.classList.add('completed');
        }
    }

    showCompletionFeedback() {
        const button = document.getElementById('markComplete');
        const originalText = button.innerHTML;
        
        button.innerHTML = '<i class="fas fa-check"></i> Completed!';
        button.style.background = 'var(--success-color)';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
        }, 2000);
    }

    // =================
    // Progress Management
    // =================

    updateProgress() {
        const totalLessons = Object.keys(this.courseData.lessons).length;
        const completedCount = this.completedLessons.size;
        const percentage = Math.round((completedCount / totalLessons) * 100);
        
        document.querySelector('.progress-fill').style.width = `${percentage}%`;
        document.querySelector('.progress-percentage').textContent = `${percentage}%`;
        
        // Update completed lesson indicators
        this.completedLessons.forEach(lessonId => {
            this.updateLessonStatus(lessonId);
        });
    }

    // =================
    // Utility Methods
    // =================

    getCurrentRole() {
        return this.currentRole;
    }

    getCompletedLessons() {
        return Array.from(this.completedLessons);
    }

    resetProgress() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            this.completedLessons.clear();
            this.currentRole = null;
            localStorage.removeItem('gitlabCourse');
            document.cookie = 'gitlabCourseRole=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            location.reload();
        }
    }
}

// =================
// Application Initialization
// =================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the course application
    window.courseApp = new CourseApp();
    
    // Add global keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K to open search (future feature)
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            console.log('Search functionality coming soon!');
        }
        
        // Arrow keys for lesson navigation
        if (e.key === 'ArrowLeft' && e.altKey) {
            // Previous lesson
            console.log('Previous lesson navigation coming soon!');
        }
        
        if (e.key === 'ArrowRight' && e.altKey) {
            // Next lesson
            console.log('Next lesson navigation coming soon!');
        }
    });
    
    // Expand first module by default
    setTimeout(() => {
        const firstModule = document.querySelector('.module-header');
        if (firstModule && window.courseApp.currentRole) {
            window.courseApp.toggleModule(firstModule);
        }
    }, 500);
    
    // Add development helpers in dev mode
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log(`
🚀 GitLab Course Development Mode

Available commands:
- courseApp.getCurrentRole(): Get current user role
- courseApp.getCompletedLessons(): Get completed lessons
- courseApp.resetProgress(): Reset all progress
- courseApp.loadLesson(id): Load specific lesson

Keyboard shortcuts:
- Ctrl/Cmd + K: Search (coming soon)
- Alt + ← / →: Navigate lessons (coming soon)
- Escape: Close modals
        `);
    }
});

// =================
// Service Worker Registration (Future Feature)
// =================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Register service worker for offline functionality
        // navigator.serviceWorker.register('/sw.js');
    });
}