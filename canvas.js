const canvas = document.getElementById('drawingCanvas');

const ctx = canvas.getContext('2d');

let drawing = false;

//* Star drawing
canvas.addEventListener('mousedown', () => {
    drawing = true;
    ctx.beginPath();
});

//!Stop drawing
canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.closePath();
});

//^Draw on canvas
canvas,addEventListener('mousemove', (event) => {
    if (!drawing) return;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'red';
    ctx.lineTo(x, y);
    ctx.stroke();
});

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}



