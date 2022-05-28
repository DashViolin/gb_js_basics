'use strict';

let game = {
    run() {
        let wrongAnswers = 0;
        let rightAnswers = 0;
        let stageNum = 1;
        let isWinner = true;
        for (const stage of stages) {
            let message = getQuestionMessage(stage, stageNum)
            let answer = 0;
            while (true) {
                answer = prompt(message);
                if (answer === null) {
                    return;
                }
                answer = parseInt(answer.trim());
                if (answer > 0 && answer <= stage.answers.length){
                    break;
                } else {
                    alert("Некорректный номер ответа, внимательнее, пожалуйста!");
                }
            }
            if (answer === stage.rightAnswer) {
                alert("Это правлильный ответ!");
                rightAnswers++;
            } else {
                alert("Ответ неверный.");
                wrongAnswers++;
            }
            if (wrongAnswers === config.maxMistakes) {
                isWinner = false;
                break;
            }
            stageNum++;
        }
        let statsMessage = `Правильных ответов: ${rightAnswers}\nНеправильных ответов: ${wrongAnswers}`
        if (isWinner){
            alert(`Поздравляем, вы победили!\n\n${statsMessage}`);
        } else {
            alert(`К сожалению, вы проиграли!\n\n${statsMessage}`);
        }
    }
}

game.run();
