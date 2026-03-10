import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Particle Configuration
    const particleCount = Math.min(width / 15, 80); // Responsive count
    const particles = [];
    const connectionDistance = 150;
    
    // Mouse Interaction
    let mouse = { x: -1000, y: -1000 };
    const maxMouseDistance = 200;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.5 + 0.5;
        // Theme colors: Red, Yellow, White
        const colors = ['rgba(220, 38, 38, 0.4)', 'rgba(234, 179, 8, 0.4)', 'rgba(255, 255, 255, 0.2)'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.originalVx = this.vx;
        this.originalVy = this.vy;
      }

      update() {
        // Core movement
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Mouse interaction (Repel)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxMouseDistance) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (maxMouseDistance - distance) / maxMouseDistance;
          
          this.vx -= forceDirectionX * force * 0.5;
          this.vy -= forceDirectionY * force * 0.5;
        } else {
          // Return to original speed gradually
          this.vx += (this.originalVx - this.vx) * 0.05;
          this.vy += (this.originalVy - this.vy) * 0.05;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation Loop
    let animationFrameId;

    const animate = () => {
      // Clear with slight trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 1)'; // Solid black background
      ctx.fillRect(0, 0, width, height);

      // Draw subtle grid overlay
      drawGrid();

      // Update and draw particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Draw connections
      drawConnections();

      animationFrameId = requestAnimationFrame(animate);
    };

    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 50;

      // Vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - (distance / connectionDistance);
            
            // Connection color based on particle colors or a faint yellow/red
            let strokeColor = 'rgba(255, 255, 255, 0.05)';
            if (particles[i].color.includes('220') || particles[j].color.includes('220')) {
                strokeColor = `rgba(220, 38, 38, ${opacity * 0.15})`; // Red-ish tint
            } else if (particles[i].color.includes('234') || particles[j].color.includes('234')) {
                strokeColor = `rgba(234, 179, 8, ${opacity * 0.15})`; // Yellow-ish tint
            }

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    // Event Listeners
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
       mouse.x = -1000;
       mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Initial entrance animation building up from black
    gsap.fromTo(canvas, 
      { opacity: 0 }, 
      { opacity: 1, duration: 2, ease: "power2.inOut" }
    );

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[-2] pointer-events-none bg-black">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block" 
        style={{ pointerEvents: 'auto' }} // Ensure canvas can track mouse outside of container if needed, though strictly we track on window
      />
    </div>
  );
};

export default ParticleBackground;
