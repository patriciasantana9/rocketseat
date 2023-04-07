/*
const fname = process.argv[2];
const lname = process.argv[3];

console.log(`Seu nome é ${fname} ${lname}.`);
*/

function getFlag(flag) {
    const index = process.argv.indexOf(flag) + 1;
    return process.argv[index];
}

module.exports = getFlag;