// =================
// Course Application JavaScript
// =================

class CourseApp {
    constructor() {
        this.currentRole = null;
        this.currentLesson = null;
        this.completedLessons = new Set();
        this.courseData = this.initializeCourseData();
        this.currentTheme = this.loadTheme() || 'light';
        
        this.init();
    }

    init() {
        this.loadUserData();
        this.applyTheme(this.currentTheme);
        this.setupEventListeners();
        this.setupResponsiveDesign();
        this.initializeInterface();
    }

    // =================
    // Data Management
    // =================

    initializeCourseData() {
        return {
            lessonOrder: [
                'vscode', 'gitbash', 'ssh', 'repository', 'cloning', 'venv-setup', 'commits',
                'team-setup', 'project-structure',
                'member-task', 'testing', 'merge-requests',
                'conflict-resolution', 'rebasing',
                'gitignore', 'pre-commit', 'python-package',
                'gitlab-ci', 'pipeline'
            ],
            lessons: {
                'vscode': {
                    title: 'Installing VSCode',
                    module: 'Module 0',
                    duration: '15 minutes',
                    file: 'module0/vscode.md'
                },
                'gitbash': {
                    title: 'Installing Git Bash (Windows)',
                    module: 'Module 0',
                    duration: '10 minutes',
                    file: 'module0/gitbash.md'
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
                'venv-setup': {
                    title: 'Python Virtual Environment',
                    module: 'Module 0',
                    duration: '15 minutes',
                    file: 'module0/venv_setup.md'
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
        document.getElementById('sidebarToggleShow').classList.add('hidden');
        
        document.querySelector('.app-container').classList.add('no-banner');
    }

    showCourseInterface() {
        document.getElementById('welcomeScreen').classList.add('hidden');
        document.getElementById('sidebar').classList.remove('hidden');
        document.getElementById('roleBanner').classList.remove('hidden');
        document.getElementById('sidebarToggleShow').classList.remove('hidden');
        
        document.querySelector('.app-container').classList.remove('no-banner');
        
        // Always load first lesson when showing interface
        this.loadLesson('vscode');
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

        // Sidebar toggle (hide)
        document.getElementById('sidebarToggle').addEventListener('click', () => {
            this.toggleSidebar();
        });

        // Sidebar toggle (show)
        document.getElementById('sidebarToggleShow').addEventListener('click', () => {
            this.toggleSidebar();
        });

        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => {
            this.toggleTheme();
        });

        // Help button
        document.getElementById('helpBtn').addEventListener('click', () => {
            this.showHelpModal();
        });

        // Help modal controls
        document.getElementById('closeHelpModal').addEventListener('click', () => {
            this.hideHelpModal();
        });

        document.getElementById('copyContextBtn').addEventListener('click', () => {
            this.copyContextToClipboard();
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
            if (e.target.id === 'helpModal') {
                this.hideHelpModal();
            }
        });

        // Lesson navigation buttons
        document.getElementById('markComplete').addEventListener('click', () => {
            this.markLessonComplete(this.currentLesson);
        });

        document.getElementById('prevLesson').addEventListener('click', () => {
            this.navigateToPreviousLesson();
        });

        document.getElementById('nextLesson').addEventListener('click', () => {
            this.navigateToNextLesson();
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideRoleModal();
                this.hideHelpModal();
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
                const newRole = el.dataset.role;
                const oldRole = this.currentRole;
                
                this.currentRole = newRole;
                this.saveUserData();
                this.updateRoleBanner();
                this.hideRoleModal();
                
                // Always reload current lesson to update role-based content
                if (this.currentLesson) {
                    console.log(`Role changed from ${oldRole} to ${newRole}, reloading lesson: ${this.currentLesson}`);
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
            // Collapse
            moduleHeader.classList.remove('expanded');
            lessonList.style.maxHeight = '0';
            lessonList.style.opacity = '0';
        } else {
            // Expand
            moduleHeader.classList.add('expanded');
            // Calculate the actual height needed
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
        document.getElementById('welcomeScreen').classList.add('hidden');
        document.getElementById('lessonContent').classList.remove('hidden');
        
        // Scroll to top of content
        window.scrollTo(0, 0);
        
        // Hide sidebar on mobile
        if (window.innerWidth <= 768) {
            document.getElementById('sidebar').classList.add('hidden');
        }
        
        // Update navigation buttons
        this.updateNavigationButtons();
    }

    updateLessonUI(lessonData) {
        document.getElementById('lessonTitle').textContent = lessonData.title;
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
                // Map role letters to numbers for file names
                const roleMap = {
                    'A': '1',
                    'B': '2', 
                    'C': '3',
                    'D': '4',
                    'E': '5',
                    'F': '6'
                };
                const roleNumber = roleMap[this.currentRole];
                filePath = filePath.replace('{role}', roleNumber);
            }
            
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`Failed to load lesson: ${response.status}`);
            }
            
            const content = await response.text();
            const htmlContent = this.parseMarkdown(content);
            
            document.getElementById('lessonBody').innerHTML = htmlContent;
            
            // Add OS-specific collapsible sections
            this.addOSCollapsibleSections();
            
            // Handle role-based content
            this.handleRoleBasedContent();
            
            // Add copy buttons to code blocks
            this.addCopyButtons();
            
            // Highlight code blocks if Prism is available
            if (window.Prism) {
                window.Prism.highlightAll();
            }
            
        } catch (error) {
            console.error('Error loading lesson content:', error);
            console.error('Attempted file path:', filePath);
            
            // Create a styled error message
            document.getElementById('lessonBody').innerHTML = `
                <div style="background: #fee; padding: 20px; border-radius: 8px; border: 1px solid #fcc;">
                    <h3 style="color: #d00; margin-bottom: 10px;">⚠️ Content Loading Error</h3>
                    <p style="margin-bottom: 10px;">Sorry, we couldn't load this lesson content.</p>
                    <details style="margin-top: 10px;">
                        <summary style="cursor: pointer; color: #666;">Technical Details</summary>
                        <p style="margin-top: 10px; font-family: monospace; font-size: 0.9em;">
                            <strong>Lesson:</strong> ${lessonData.title}<br>
                            <strong>Expected file:</strong> ${filePath}<br>
                            <strong>Error:</strong> ${error.message}
                        </p>
                    </details>
                    <p style="margin-top: 15px; color: #666;">
                        <strong>Try:</strong> Refreshing the page or selecting a different lesson from the sidebar.
                    </p>
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
        
        // Code blocks with language detection
        html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
            const language = lang || '';
            const className = language ? `language-${language}` : '';
            return `<pre class="${className}"><code class="${className}">${code.trim()}</code></pre>`;
        });
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
    // Navigation Management
    // =================

    navigateToNextLesson() {
        const currentIndex = this.courseData.lessonOrder.indexOf(this.currentLesson);
        if (currentIndex < this.courseData.lessonOrder.length - 1) {
            const nextLesson = this.courseData.lessonOrder[currentIndex + 1];
            this.loadLesson(nextLesson);
        }
    }

    navigateToPreviousLesson() {
        const currentIndex = this.courseData.lessonOrder.indexOf(this.currentLesson);
        if (currentIndex > 0) {
            const prevLesson = this.courseData.lessonOrder[currentIndex - 1];
            this.loadLesson(prevLesson);
        }
    }

    updateNavigationButtons() {
        const currentIndex = this.courseData.lessonOrder.indexOf(this.currentLesson);
        const prevBtn = document.getElementById('prevLesson');
        const nextBtn = document.getElementById('nextLesson');
        
        // Update previous button
        if (currentIndex <= 0) {
            prevBtn.disabled = true;
            prevBtn.style.opacity = '0.5';
        } else {
            prevBtn.disabled = false;
            prevBtn.style.opacity = '1';
        }
        
        // Update next button
        if (currentIndex >= this.courseData.lessonOrder.length - 1) {
            nextBtn.disabled = true;
            nextBtn.style.opacity = '0.5';
        } else {
            nextBtn.disabled = false;
            nextBtn.style.opacity = '1';
        }
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
    // Code Block Enhancement
    // =================

    addCopyButtons() {
        // Find all code blocks
        const codeBlocks = document.querySelectorAll('pre code');
        
        codeBlocks.forEach((codeBlock, index) => {
            const pre = codeBlock.parentElement;
            
            // Only add copy button if it doesn't already exist
            if (pre.querySelector('.code-copy-btn')) {
                return;
            }
            
            // Create copy button
            const copyBtn = document.createElement('button');
            copyBtn.className = 'code-copy-btn';
            copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
            copyBtn.setAttribute('data-code-index', index);
            
            // Add click handler
            copyBtn.addEventListener('click', () => {
                this.copyCodeToClipboard(codeBlock, copyBtn);
            });
            
            // Add button to pre element
            pre.appendChild(copyBtn);
        });
    }

    async copyCodeToClipboard(codeBlock, button) {
        const code = codeBlock.textContent.trim();
        
        try {
            // Try using the modern Clipboard API
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(code);
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = code;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.top = '-999999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
            }
            
            // Show success feedback
            const originalContent = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i> Copied!';
            button.classList.add('copied');
            
            // Reset button after 2 seconds
            setTimeout(() => {
                button.innerHTML = originalContent;
                button.classList.remove('copied');
            }, 2000);
            
        } catch (error) {
            console.error('Failed to copy code:', error);
            
            // Show error feedback
            const originalContent = button.innerHTML;
            button.innerHTML = '<i class="fas fa-exclamation"></i> Failed';
            button.style.background = 'rgba(239, 68, 68, 0.2)';
            
            setTimeout(() => {
                button.innerHTML = originalContent;
                button.style.background = '';
            }, 2000);
        }
    }

    // =================
    // OS-Specific Content
    // =================

    addOSCollapsibleSections() {
        const lessonBody = document.getElementById('lessonBody');
        if (!lessonBody) return;
        
        // Find OS-specific headers (h3 elements with OS names)
        const osHeaders = lessonBody.querySelectorAll('h3');
        const detectedOS = this.detectOperatingSystem().toLowerCase();
        
        osHeaders.forEach(header => {
            const headerText = header.textContent.toLowerCase();
            
            // Check if this is an OS-specific section
            const isWindows = headerText.includes('windows');
            const isMacOS = headerText.includes('macos') || headerText.includes('mac os');
            const isLinux = headerText.includes('linux') || headerText.includes('ubuntu') || headerText.includes('debian');
            
            if (isWindows || isMacOS || isLinux) {
                // Determine if this section should be expanded by default
                let shouldExpand = false;
                if (isWindows && detectedOS.includes('windows')) shouldExpand = true;
                if (isMacOS && detectedOS.includes('macos')) shouldExpand = true;
                if (isLinux && detectedOS.includes('linux')) shouldExpand = true;
                
                // Create collapsible section
                this.makeOSSectionCollapsible(header, shouldExpand);
            }
        });
    }

    makeOSSectionCollapsible(header, expanded = false) {
        // Create wrapper for the collapsible content
        const wrapper = document.createElement('div');
        wrapper.className = 'os-section';
        
        // Create clickable header
        const clickableHeader = document.createElement('div');
        clickableHeader.className = `os-header ${expanded ? 'expanded auto-expanded' : ''}`;
        clickableHeader.innerHTML = `
            <h3>${header.textContent}</h3>
            <i class="fas fa-chevron-down"></i>
        `;
        
        // Create content container
        const content = document.createElement('div');
        content.className = 'os-content';
        content.style.maxHeight = expanded ? 'none' : '0';
        content.style.opacity = expanded ? '1' : '0';
        
        // Move all content until the next h3 or h2 into the collapsible section
        let nextElement = header.nextElementSibling;
        const elementsToMove = [];
        
        while (nextElement && !this.isHeaderElement(nextElement)) {
            elementsToMove.push(nextElement);
            nextElement = nextElement.nextElementSibling;
        }
        
        // Move elements to content container
        elementsToMove.forEach(element => {
            content.appendChild(element);
        });
        
        // Add click handler
        clickableHeader.addEventListener('click', () => {
            this.toggleOSSection(clickableHeader, content);
        });
        
        // Replace original header with collapsible section
        wrapper.appendChild(clickableHeader);
        wrapper.appendChild(content);
        header.parentNode.replaceChild(wrapper, header);
    }

    isHeaderElement(element) {
        return element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3' || element.tagName === 'H4';
    }

    toggleOSSection(header, content) {
        const isExpanded = header.classList.contains('expanded');
        
        if (isExpanded) {
            // Collapse
            header.classList.remove('expanded');
            content.style.maxHeight = '0';
            content.style.opacity = '0';
        } else {
            // Expand
            header.classList.add('expanded');
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.opacity = '1';
        }
    }

    // =================
    // Role-Based Content
    // =================

    handleRoleBasedContent() {
        const lessonBody = document.getElementById('lessonBody');
        if (!lessonBody || !this.currentRole) {
            console.log('Role-based content: No lesson body or role');
            return;
        }
        
        const content = lessonBody.innerHTML;
        
        // Parse role-based sections
        const sections = this.parseRoleBasedSections(content);
        console.log(`Found ${sections.length} role-based sections`);
        
        if (sections.length > 0) {
            // Find the section that matches current role
            const currentSection = this.findMatchingRoleSection(sections);
            console.log(`Current role: ${this.currentRole}, Found matching section:`, currentSection ? 'Yes' : 'No');
            
            if (currentSection) {
                // Replace content with role-specific section
                let processedContent = currentSection.content;
                
                // Replace {role} placeholder with actual role
                const roleData = this.courseData.roleDescriptions[this.currentRole];
                if (roleData) {
                    processedContent = processedContent.replace(/{role}/g, this.currentRole);
                }
                
                console.log('Updating lesson body with role-specific content');
                lessonBody.innerHTML = processedContent;
            }
        }
    }

    parseRoleBasedSections(content) {
        const sections = [];
        const roleRegex = /<!-- ROLE: ([^>]+) -->(.*?)<!-- \/ROLE: [^>]+ -->/gs;
        let match;
        
        while ((match = roleRegex.exec(content)) !== null) {
            const roleSpec = match[1].trim();
            const sectionContent = match[2].trim();
            
            sections.push({
                roles: roleSpec.split(',').map(r => r.trim()),
                content: sectionContent
            });
        }
        
        return sections;
    }

    findMatchingRoleSection(sections) {
        for (const section of sections) {
            // Check if current role matches any role in this section
            if (section.roles.includes(this.currentRole)) {
                return section;
            }
            
            // Check if this section is for multiple roles (like B,C,D,E,F)
            if (section.roles.length > 1 && section.roles.includes(this.currentRole)) {
                return section;
            }
        }
        
        return null;
    }

    // =================
    // Help System
    // =================

    detectOperatingSystem() {
        const userAgent = navigator.userAgent.toLowerCase();
        
        if (userAgent.includes('windows nt')) {
            return 'Windows';
        } else if (userAgent.includes('mac os') || userAgent.includes('macos')) {
            return 'macOS';
        } else if (userAgent.includes('linux')) {
            return 'Linux';
        } else if (userAgent.includes('android')) {
            return 'Android';
        } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
            return 'iOS';
        } else {
            return 'Unknown';
        }
    }

    showHelpModal() {
        document.getElementById('helpModal').classList.remove('hidden');
        
        // Update detected OS
        const detectedOS = this.detectOperatingSystem();
        document.getElementById('detectedOS').textContent = detectedOS;
        
        // Load context for current lesson
        this.loadCurrentContext();
    }

    hideHelpModal() {
        document.getElementById('helpModal').classList.add('hidden');
    }

    async loadCurrentContext() {
        if (!this.currentLesson) {
            document.getElementById('contextText').value = 'No lesson selected yet. Please start the course first.';
            return;
        }

        try {
            const lessonData = this.courseData.lessons[this.currentLesson];
            const contextFile = lessonData.file.replace('.md', '.context');
            
            const response = await fetch(contextFile);
            if (!response.ok) {
                throw new Error(`Context file not found: ${response.status}`);
            }
            
            let context = await response.text();
            
            // Replace placeholders
            const roleData = this.courseData.roleDescriptions[this.currentRole];
            const roleName = roleData ? roleData.title : 'Unknown';
            const detectedOS = this.detectOperatingSystem();
            
            context = context.replace(/{role}/g, roleName);
            context = context.replace(/{os}/g, detectedOS);
            
            document.getElementById('contextText').value = context;
            
        } catch (error) {
            console.error('Error loading context:', error);
            
            // Fallback context
            const fallbackContext = this.generateFallbackContext();
            document.getElementById('contextText').value = fallbackContext;
        }
    }

    generateFallbackContext() {
        const lessonData = this.courseData.lessons[this.currentLesson] || {};
        const roleData = this.courseData.roleDescriptions[this.currentRole] || {};
        const detectedOS = this.detectOperatingSystem();
        
        return `Course: Git & GitLab Team Project Course for Engineering Students
Current Lesson: ${lessonData.title || 'Unknown'} (${lessonData.module || 'Unknown Module'})
Team Role: ${roleData.title || 'Unknown'}
Operating System: ${detectedOS}

CONTEXT:
You are learning Git and GitLab collaboration as part of a team project where you'll build a Python hangman game.

CURRENT TASK:
${lessonData.title || 'Unknown lesson'}

If you're stuck, describe what operating system you're using, what step you're on, and any error messages you see.`;
    }

    async copyContextToClipboard() {
        const contextText = document.getElementById('contextText').value;
        const copyBtn = document.getElementById('copyContextBtn');
        
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(contextText);
            } else {
                // Fallback
                const textArea = document.createElement('textarea');
                textArea.value = contextText;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
            }
            
            // Show success feedback
            const originalContent = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            copyBtn.classList.add('copied');
            
            setTimeout(() => {
                copyBtn.innerHTML = originalContent;
                copyBtn.classList.remove('copied');
            }, 2000);
            
        } catch (error) {
            console.error('Failed to copy context:', error);
            
            const originalContent = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-exclamation"></i> Failed';
            
            setTimeout(() => {
                copyBtn.innerHTML = originalContent;
            }, 2000);
        }
    }

    // =================
    // Theme Management
    // =================

    loadTheme() {
        try {
            // Try localStorage first
            const stored = localStorage.getItem('gitlabCourseTheme');
            if (stored) {
                return stored;
            }
        } catch (error) {
            console.warn('Could not load theme from localStorage:', error);
        }

        // Fallback to cookie
        const cookieMatch = document.cookie.match(/gitlabCourseTheme=([^;]+)/);
        if (cookieMatch) {
            return cookieMatch[1];
        }

        // Default to light theme
        return 'light';
    }

    saveTheme(theme) {
        try {
            localStorage.setItem('gitlabCourseTheme', theme);
            
            // Also set a cookie as backup
            const expires = new Date();
            expires.setTime(expires.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 days
            document.cookie = `gitlabCourseTheme=${theme}; expires=${expires.toUTCString()}; path=/`;
        } catch (error) {
            console.warn('Could not save theme:', error);
        }
    }

    applyTheme(theme) {
        const body = document.body;
        const themeToggleBtn = document.getElementById('themeToggle');
        
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            if (themeToggleBtn) {
                themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            }
        } else {
            body.classList.remove('dark-theme');
            if (themeToggleBtn) {
                themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            }
        }
        
        this.currentTheme = theme;
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
        this.saveTheme(newTheme);
        
        // Show feedback
        const themeToggleBtn = document.getElementById('themeToggle');
        if (themeToggleBtn) {
            themeToggleBtn.style.transform = 'scale(1.1)';
            setTimeout(() => {
                themeToggleBtn.style.transform = '';
            }, 200);
        }
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