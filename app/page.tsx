<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cheese Joke Generator 🧀</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            text-align: center;
            background-color: #fff8e1;
            padding: 50px;
            transition: background-color 0.5s;
        }

        h1 {
            color: #ff6f61;
            font-size: 2.5rem;
        }

        #joke {
            margin-top: 30px;
            font-size: 1.5rem;
            color: #333;
            min-height: 80px;
        }

        #cheeseEmoji {
            font-size: 3rem;
            margin-top: 20px;
            display: block;
            transition: transform 0.3s;
        }

        button {
            background-color: red;
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 1.2rem;
            cursor: pointer;
            border-radius: 10px;
            transition: background-color 0.3s, transform 0.2s;
        }

        button:hover {
            background-color: darkred;
            transform: scale(1.05);
        }
    </style>
</head>
<body>
    <h1>Cheese Joke Generator 🧀</h1>
    <button id="jokeButton">Get a Cheese Joke!</button>
    <div id="joke"></div>
    <span id="cheeseEmoji">🧀</span>

    <script>
        const button = document.getElementById("jokeButton");
        const jokeDiv = document.getElementById("joke");
        const cheeseEmoji = document.getElementById("cheeseEmoji");

        // Array of fun background colors
        const bgColors = [
            "#fff8e1", "#ffe0b2", "#ffd54f", "#ffcc80", "#ffab91",
            "#ffe57f", "#f8bbd0", "#e1bee7", "#b3e5fc", "#c8e6c9"
        ];

        button.addEventListener("click", async () => {
            // Fetch joke from API
            const response = await fetch('/api/joke');
            const data = await response.json();
            jokeDiv.textContent = data.joke;

            // Animate cheese emoji randomly
            cheeseEmoji.style.transform = `rotate(${Math.random() * 360}deg) scale(${1 + Math.random()})`;

            // Random background color
            const color = bgColors[Math.floor(Math.random() * bgColors.length)];
            document.body.style.backgroundColor = color;
        });
    </script>
</body>
</html>
