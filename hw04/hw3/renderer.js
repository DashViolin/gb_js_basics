'use strict';

let getQuestionMessage = function(stageObj, stageNumber) {
    let message = []
    message.push(`Раунд № ${stageNumber}.`)
    message.push(`Вопрос: ${stageObj.question}`)
    message.push("Варианты ответов:")
    
    let answerNumber = 1;
    for (const answer of stageObj.answers) {
        message.push(`${answerNumber}. ${answer}`)
        answerNumber++;
    }
    message.push("")
    message.push("Введите номер выбранного ответа:")
    return message.join('\n')
}
