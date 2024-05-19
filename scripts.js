const canvas = document.createElement('canvas');
document.querySelector('.background').appendChild(canvas);

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const lines = [];

function createLine() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 100 + 10,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 2 + 1
    };
}

for (let i = 0; i < 100; i++) {
    lines.push(createLine());
}

function updateLines() {
    lines.forEach(line => {
        line.x += Math.cos(line.angle) * line.speed;
        line.y += Math.sin(line.angle) * line.speed;

        if (line.x > canvas.width || line.x < 0 || line.y > canvas.height || line.y < 0) {
            line.x = Math.random() * canvas.width;
            line.y = Math.random() * canvas.height;
            line.angle = Math.random() * Math.PI * 2;
            line.speed = Math.random() * 2 + 1;
        }
    });
}

function drawLines() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 2;

    lines.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(
            line.x + Math.cos(line.angle) * line.length,
            line.y + Math.sin(line.angle) * line.length
        );
        ctx.stroke();
    });
}

function animate() {
    updateLines();
    drawLines();
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
