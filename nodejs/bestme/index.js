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