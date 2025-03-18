ctx.fillStyle = "white";
ctx.font = "20px Arial";
const textWidth = ctx.measureText("Graj strzałkami góra, dół i w, s").width;
const x = (canvas.width - textWidth) / 2;
function pongstart() {
    document.body.style.overflow = "none";
    canvas.style.display = "block"; // Pokaż canvas

    // Ustawienie rozmiaru canvas
    canvas.width = 600;
    canvas.height = 400;

    // Wartości początkowe
    let leftPaddle = { x: 10, y: canvas.height / 2 - 30, width: 10, height: 60, dy: 0 };
    let rightPaddle = { x: canvas.width - 20, y: canvas.height / 2 - 30, width: 10, height: 60, dy: 0 };
    let ball = { x: canvas.width / 2, y: canvas.height / 2, radius: 10, dx: 2, dy: 2 };
    let scoreLeft = 0;
    let scoreRight = 0;

    // Kontrola ruchu paletek
    window.addEventListener("keydown", (event) => {
        if (event.key === "ArrowUp") {
            event.preventDefault();
            rightPaddle.dy = -2;
        } else if (event.key === "ArrowDown") {
            event.preventDefault();
            rightPaddle.dy = 2;
        }

        if (event.key === "w") {
            event.preventDefault();
            leftPaddle.dy = -2;
        } else if (event.key === "s") {
            event.preventDefault();
            leftPaddle.dy = 2;
        }
    });

    window.addEventListener("keyup", (event) => {
        if (event.key === "ArrowUp" || event.key === "ArrowDown") {
            event.preventDefault();
            rightPaddle.dy = 0;
        }
        if (event.key === "w" || event.key === "s") {
            event.preventDefault();
            leftPaddle.dy = 0;
        }
    });

    // Funkcja rysująca całą grę
    function drawGame() {
        // Tło
        ctx.fillStyle = "rgba(21, 0, 26, 0.1)"; // Tło z przezroczystością
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Rysowanie paletek
        ctx.fillStyle = "green";
        ctx.fillRect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height);
        ctx.fillRect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height);

        // Rysowanie piłki
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fill();

        // Rysowanie wyniku
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.fillText("Left: " + scoreLeft, 10, 30);
        ctx.fillText("Right: " + scoreRight, canvas.width - 90, 30);
        ctx.fillText("Graj strzałkami góra, dół i w, s",x, 30)

        // Ruch piłki
        ball.x += ball.dx;
        ball.y += ball.dy;

        // Kolizja z górą i dołem
        if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= canvas.height) {
            ball.dy = -ball.dy;
        }

        // Kolizja z paletkami
        if (ball.x - ball.radius <= leftPaddle.x + leftPaddle.width && ball.y >= leftPaddle.y && ball.y <= leftPaddle.y + leftPaddle.height) {
            ball.dx = -ball.dx;
        }

        if (ball.x + ball.radius >= rightPaddle.x && ball.y >= rightPaddle.y && ball.y <= rightPaddle.y + rightPaddle.height) {
            ball.dx = -ball.dx;
        }

        // Jeżeli piłka opuści ekran (punkty)
        if (ball.x - ball.radius <= 0) {
            scoreRight++;
            resetBall();
        }

        if (ball.x + ball.radius >= canvas.width) {
            scoreLeft++;
            resetBall();
        }

        // Ruch paletek
        leftPaddle.y += leftPaddle.dy;
        rightPaddle.y += rightPaddle.dy;

        // Ograniczenie ruchu paletek
        if (leftPaddle.y < 0) leftPaddle.y = 0;
        if (leftPaddle.y + leftPaddle.height > canvas.height) leftPaddle.y = canvas.height - leftPaddle.height;

        if (rightPaddle.y < 0) rightPaddle.y = 0;
        if (rightPaddle.y + rightPaddle.height > canvas.height) rightPaddle.y = canvas.height - rightPaddle.height;
    }

    // Resetowanie piłki po zdobyciu punktu
    function resetBall() {
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.dx = -ball.dx; // Zmieniamy kierunek piłki
        ball.dy = 2 * (Math.random() < 0.5 ? 1 : -1); // Losowy kierunek pionowy
    }

    // Główna pętla gry
    const game = setInterval(() => {
        drawGame();
    }, 1000 / 100); // 60 FPS
    function stopGame() {
        clearInterval(game); 
        canvas.style.display = "none"; 
    }
    stopPongButton.addEventListener("click", stopGame);
}
