import { NeuralNetwork } from './neuralNetwork.js'; // Hypothetical module

class FuturisticHeader {
    constructor() {
        this.initCanvas();
        this.initVoiceSearch();
        this.initAIRecommendations();
        this.initNeuroToggle();
        this.init3DLogo();
    }

    initCanvas() {
        const canvas = document.getElementById('headerCanvas');
        const ctx = canvas.getContext('2d');
        
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = document.querySelector('.header').offsetHeight;
        }
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        // Draw cyberpunk grid
        function drawGrid() {
            ctx.strokeStyle = 'rgba(0, 240, 255, 0.1)';
            ctx.lineWidth = 0.5;
            
            // Vertical lines
            for (let x = 0; x < canvas.width; x += 30) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }
            
            // Horizontal lines
            for (let y = 0; y < canvas.height; y += 30) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
            
            // Animate diagonal scan line
            let scanY = 0;
            function animateScan() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawGrid();
                
                // Draw scan line
                ctx.strokeStyle = 'rgba(0, 240, 255, 0.5)';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(0, scanY);
                ctx.lineTo(canvas.width, scanY);
                ctx.stroke();
                
                scanY = (scanY + 1) % canvas.height;
                requestAnimationFrame(animateScan);
            }
            
            animateScan();
        }
        
        drawGrid();
    }

    initVoiceSearch() {
        const voiceBtn = document.getElementById('voiceSearchBtn');
        const voiceWave = voiceBtn.querySelector('.voice-wave');
        
        voiceBtn.addEventListener('click', async () => {
            try {
                voiceBtn.classList.add('active');
                const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
                recognition.lang = 'en-US';
                
                recognition.onresult = (event) => {
                    const transcript = event.results[0][0].transcript;
                    // Process voice command
                    console.log('Voice command:', transcript);
                };
                
                recognition.onend = () => {
                    voiceBtn.classList.remove('active');
                };
                
                recognition.start();
            } catch (error) {
                console.error('Voice recognition failed:', error);
                voiceBtn.classList.remove('active');
            }
        });
    }

    async initAIRecommendations() {
        const aiPanel = document.querySelector('.ai-recommendation .mega-menu-grid');
        const loadingAnim = document.querySelector('.ai-loading lottie-player');
        
        // Simulate AI processing
        setTimeout(() => {
            loadingAnim.style.display = 'none';
            
            // Generate recommended courses (in real app, this would come from ML model)
            const recommendedCourses = [
                { name: "Quantum ML", icon: "https://assets5.lottiefiles.com/packages/lf20_5mpls05l.json" },
                { name: "Neuro UX", icon: "https://assets1.lottiefiles.com/packages/lf20_5tkzkblw.json" },
                { name: "Blockchain AI", icon: "https://assets1.lottiefiles.com/packages/lf20_1pxqjq0d.json" }
            ];
            
            aiPanel.innerHTML = recommendedCourses.map(course => `
                <div class="course-card">
                    <div class="course-icon">
                        <lottie-player src="${course.icon}" background="transparent" speed="1" style="width: 80px; height: 80px" hover></lottie-player>
                    </div>
                    <div class="course-name">${course.name}</div>
                    <div class="ai-badge">AI Pick</div>
                </div>
            `).join('');
            
            // Initialize Lottie interactivity
            LottieInteractivity.create({
                player: document.querySelectorAll('lottie-player'),
                mode: "cursor",
                actions: [
                    {
                        position: { x: [0, 1], y: [0, 1] },
                        type: "seek",
                        frames: [0, 60]
                    }
                ]
            });
        }, 2000);
    }

    initNeuroToggle() {
        const toggle = document.getElementById('neuroToggle');
        let isActive = false;
        
        toggle.addEventListener('click', () => {
            isActive = !isActive;
            document.body.classList.toggle('neuro-mode');
            
            // Animate dots
            const dots = toggle.querySelectorAll('.neuro-dot');
            dots.forEach((dot, i) => {
                dot.style.transform = isActive 
                    ? `translateY(${(i % 2 === 0 ? -5 : 5) * (i + 1)}px) scale(1.5)` 
                    : '';
                dot.style.background = isActive 
                    ? (i % 2 === 0 ? 'var(--accent)' : 'var(--accent-secondary)') 
                    : 'var(--accent)';
            });
        });
    }

    init3DLogo() {
        const logo = document.getElementById('logo3d');
        
        logo.addEventListener('mousemove', (e) => {
            const rect = logo.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleY = (x - centerX) / 20;
            const angleX = (centerY - y) / 20;
            
            logo.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        });
        
        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new FuturisticHeader();
});