<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>rock paper scissor</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>ROCK PAPER SCISSOR</h1>
    <div class="Choices">
    <div class="choice" id="rock">
        <img src="rock.png" alt="Rock">
    </div>
    <div class="choice" id="paper">
        <img src="paper.png" alt="Paper">
   </div>
    <div class="choice" id="scissor">
        <img src="scissors.png" alt="Scissor">
    </div>
    </div>

    <div class="score-board">
        <div class="score">
            <p id="your-score">0</p>
            <p> Player Score </p>
        </div>
        <div class="score">
            <p id="comp-score">0</p>
            <p> Computer Score</p>
        </div>
    </div>
    <div class="message">
        <p id="msg">Play Your Move</p>
    </div>
    <script src="script.js"></script>

</body>
</html>
