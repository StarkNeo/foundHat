const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const fields = [
    [
        [pathCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
        [fieldCharacter, hole, hole, fieldCharacter],
        [fieldCharacter, hat, hole, fieldCharacter],
        [fieldCharacter, fieldCharacter, hole, fieldCharacter],
    ],

    [
        [pathCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
        [hole, hole, fieldCharacter, fieldCharacter],
        [hole, hat, fieldCharacter, hole],
        [hole, fieldCharacter, fieldCharacter, hole],
    ],
    [
        [pathCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
        [fieldCharacter, hole, fieldCharacter, fieldCharacter],
        [hole, hole, fieldCharacter, fieldCharacter],
        [hole, hole, hat, fieldCharacter],
    ],
    [
        [pathCharacter, fieldCharacter, hole, fieldCharacter],
        [hole, fieldCharacter, fieldCharacter, fieldCharacter],
        [fieldCharacter, hat, fieldCharacter, hole],
        [fieldCharacter, hole, fieldCharacter, hole],
    ],
    [
        [pathCharacter, fieldCharacter, hole, fieldCharacter],
        [fieldCharacter, hole, fieldCharacter, fieldCharacter],
        [fieldCharacter, fieldCharacter, fieldCharacter, hat],
        [fieldCharacter, fieldCharacter, fieldCharacter, hole],
    ],
]
const createFields = () => {
    return fields[Math.floor(Math.random()*4)]
}
module.exports={createFields}
