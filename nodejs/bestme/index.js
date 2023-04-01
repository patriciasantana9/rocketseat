// process.stdout.write("Something \n")

const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecida?",
    "O que poderia fazer para melhorar isso?",
    "O que me deixou feliz hoje?"
];

const ask = (index = 0) => {
    return process.stdout.write(questions[index] + "\n\n\n")
}

ask()

/*
/roda enquanto um dado for digitado e enviado
process.stdin.on("data", data => {      //on: event listener
    process.stdout.write(data.toString().trim() + '\n')
})        
*/

let answers = [];

process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    if (answers.length <= questions.length) {
        ask(answers.length);
    } else {
        console.log(answers);
        process.exit();
    }
    process.exit();
})

process.on('exit', () => {
    console.log(`
        Legal, Patrícia!

        O que você aprendeu hoje foi:
        ${answers[0]}

        O que te deixou aborrecida hoje foi:
        ${answers[1]}

        o que te deixou feliz hoje foi:
        ${answers[2]}`)
})