const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['fire'],
    attack: function () {
        console.log(player1['name'] + 'Fight...');
    }
}

const player2 = {
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['fists'],
    attack: function () {
        console.log(player2['name'] + 'Fight...');
    }
}

function createPlayer(ClassName, player) {
    let img = document.createElement('img');
    img.src = player.img;

    let name = document.createElement('div');
    name.classList.add('name');
    name.innerText = player.name;

    let life = document.createElement('div');
    life.classList.add('life');
    life.style.width = '100%';
    life.style.width = player.hp + '%';

    let progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');
    progressbar.appendChild(life);
    progressbar.appendChild(name);

    let character = document.createElement('div');
    character.classList.add('character');
    character.appendChild(img);

    let player1 = document.createElement('div');
    player1.classList.add(ClassName);
    player1.appendChild(progressbar);
    player1.appendChild(character);

    let arenas = document.querySelector('.arenas');
    arenas.classList.add('arenas');
    arenas.appendChild(player1);
}

createPlayer('player1', player1);
createPlayer('player2', player2);