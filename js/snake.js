const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const gameSection = document.getElementById("games"); // Sekcja z grami
var highsnake = parseInt(getCookie("snakehighscore"));

// Funkcja do włączenia pełnego ekranu i ukrycia treści strony
function startsnake() {
    document.body.style.overflow = "none"
    canvas.style.display = "block"
    const box = 20;

    let snake = [{ x: 10 * box, y: 10 * box }];
    let direction = "RIGHT";
    let food = {
        x: Math.floor(Math.random() * (canvas.width / box)) * box,
        y: Math.floor(Math.random() * (canvas.height / box)) * box
    };
    let score = 0;

    window.addEventListener("keydown", (event) => {
        const key = event.key;
        if (key === "ArrowUp" && direction !== "DOWN"){
            event.preventDefault();
            direction = "UP";
        } 
        else if (key === "ArrowDown" && direction !== "UP"){
            event.preventDefault();
            direction = "DOWN";
        }
        else if (key === "ArrowLeft" && direction !== "RIGHT"){
            event.preventDefault();
            direction = "LEFT";
        }
        else if (key === "ArrowRight" && direction !== "LEFT"){
            event.preventDefault();
            direction = "RIGHT";
        }
    });

    function drawGame() {
        ctx.fillStyle = "rgba(21, 0, 26, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "red";
        ctx.fillRect(food.x, food.y, box, box);

        for (let i = 0; i < snake.length; i++) {
            ctx.fillStyle = i === 0 ? "lime" : "green";
            ctx.fillRect(snake[i].x, snake[i].y, box, box);
        }

        let headX = snake[0].x;
        let headY = snake[0].y;
        if (direction === "UP") headY -= box;
        if (direction === "DOWN") headY += box;
        if (direction === "LEFT") headX -= box;
        if (direction === "RIGHT") headX += box;

        if (headX === food.x && headY === food.y) {
            score++;
            food = {
                x: Math.floor(Math.random() * (canvas.width / box)) * box,
                y: Math.floor(Math.random() * (canvas.height / box)) * box
            };
        } else {
            snake.pop();
        }

        const newHead = { x: headX, y: headY };
        if (
            headX <= -30 || headY <= -30 ||
            headX >= canvas.width+20 || headY >= canvas.height+20 ||
            collision(newHead, snake)
        ) {
            clearInterval(game);
            ctx.fillText("Score: " + score, 10, 20);
            ctx.fillText("High Score: " + highsnake, 10, 40);
            if (score > highsnake) {
                highsnake = score;
                setCookie("snakehighscore", score);
            }
            return;
        }

        snake.unshift(newHead);

        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.fillText("Score: " + score, 10, 20);
        ctx.fillText("High Score: " + highsnake, 10, 40);
        ctx.fillText("Graj przy użyciu strzałek!",10,60)
    }

    function collision(head, array) {
        return array.some(segment => segment.x === head.x && segment.y === head.y);
    }

    const game = setInterval(drawGame, 100);
    function stopGame() {
        clearInterval(game); 
        canvas.style.display = "none"; 
    }
    stopSnakeButton.addEventListener("click", stopGame);

}

