import React, { useRef, useEffect } from "react";

const GalaxyBG = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let stars = [];
        let nebula = [];
        let shootingStars = [];
        let animationFrame;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        // Stars
        const numStars = 500;
        stars = Array.from({ length: numStars }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5 + 0.5,
            alpha: Math.random() * 0.7 + 0.3, // slightly dimmer stars
            delta: Math.random() * 0.02 + 0.005,
        }));

        // Nebula clouds
        const numNebula = 80;
        nebula = Array.from({ length: numNebula }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 150 + 50,
            color: `hsla(${Math.random() * 360}, 50%, 40%, 0.03)`, // darker, more transparent
            dx: (Math.random() - 0.5) * 0.01,
            dy: (Math.random() - 0.5) * 0.01,
        }));

        // Shooting stars
        const createShootingStar = () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height / 2,
            length: Math.random() * 150 + 50,
            speed: Math.random() * 8 + 4,
            angle: Math.PI / 4,
        });
        for (let i = 0; i < 3; i++) shootingStars.push(createShootingStar());

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Darker background gradient
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, "#000010"); // very dark blue-black
            gradient.addColorStop(0.5, "#000000"); // deep black
            gradient.addColorStop(1, "#000000"); // pure black
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Nebula clouds
            nebula.forEach((n) => {
                ctx.beginPath();
                const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius);
                grad.addColorStop(0, n.color);
                grad.addColorStop(1, "transparent");
                ctx.fillStyle = grad;
                ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
                ctx.fill();

                n.x += n.dx;
                n.y += n.dy;
                if (n.x < 0 || n.x > canvas.width) n.dx *= -1;
                if (n.y < 0 || n.y > canvas.height) n.dy *= -1;
            });

            // Stars
            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
                ctx.shadowColor = "#fff";
                ctx.shadowBlur = 2;
                ctx.fill();

                star.alpha += star.delta;
                if (star.alpha <= 0 || star.alpha >= 1) star.delta *= -1;

                star.y += 0.1;
                if (star.y > canvas.height) star.y = 0;
            });

            // Shooting stars
            shootingStars.forEach((s) => {
                ctx.beginPath();
                ctx.moveTo(s.x, s.y);
                ctx.lineTo(
                    s.x + Math.cos(s.angle) * s.length,
                    s.y + Math.sin(s.angle) * s.length
                );
                ctx.strokeStyle = "rgba(255,255,255,0.5)"; // dimmer shooting stars
                ctx.lineWidth = 2;
                ctx.shadowColor = "#fff";
                ctx.shadowBlur = 3;
                ctx.stroke();

                s.x += Math.cos(s.angle) * s.speed;
                s.y += Math.sin(s.angle) * s.speed;

                if (s.x > canvas.width || s.y > canvas.height) {
                    Object.assign(s, createShootingStar());
                }
            });

            animationFrame = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none"
        />
    );
};

export default GalaxyBG;
