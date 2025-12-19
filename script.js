/* 3D CARD EFFECT */
document.querySelectorAll(".parallax-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    const rx = ((y - r.height / 2) / 18) * -1;
    const ry = (x - r.width / 2) / 18;

    card.style.transform =
      `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
  });
});

/* PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

const dots = Array.from({ length: 100 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2 + 1,
  dx: (Math.random() - 0.5) * 0.4,
  dy: (Math.random() - 0.5) * 0.4
}));

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  dots.forEach(d => {
    d.x += d.dx;
    d.y += d.dy;
    if (d.x < 0 || d.x > canvas.width) d.dx *= -1;
    if (d.y < 0 || d.y > canvas.height) d.dy *= -1;

    ctx.beginPath();
    ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(77,184,255,0.8)";
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
