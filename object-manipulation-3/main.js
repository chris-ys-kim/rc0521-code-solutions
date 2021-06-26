console.log('Lodash is loaded:', typeof _ !== 'undefined');

function Cards(rank, suit) {
  this.name = name;
  this.hand = [];
}

const players = [
  {
    name: 'Player1',
    hand: []
  },
  {
    name: 'Player2',
    hand: []
  },
  {
    name: 'Player3',
    hand: []
  },
  {
    name: 'Player4',
    hand: []
  }
];
var cardsArrange = [];
var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
var ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

for (let j = 0; j < suits.length; j++) {
  for (let k = 0; k < ranks.length; k++) {
    cardsArrange.push(new Cards(ranks[k], suits[j]));
  }
}

cardsArrange = _.shuffle(cardsArrange);
console.log(cardsArrange);

for (var i = 0; i < 2; i++) {
  players[0].hand.push(cardsArrange[i]);
}

for (var a = 2; a < 4; a++) {
  players[1].hand.push(cardsArrange[a]);
}

for (var b = 4; b < 6; b++) {
  players[2].hand.push(cardsArrange[b]);
}

for (var c = 6; c < 8; c++) {
  players[3].hand.push(cardsArrange[c]);
}

var score = 0;

for (var player = 0; player < players.length; player++) {
  for (var card = 0; card < 2; card++) {
    if (players[player].hand[card].rank === 'Jack' || players[player].hand[card].rank === 'Queen' || players[player].hand[card].rank === 'King') {
      score += 10;
    } else if (players[player].hand[card].rank === 'Ace') {
      score += 11;
    } else {
      score += players[player].hand[card].rank;
    }
  }
  players[player].score = score;
  score = 0;
}
console.log('players', players);

var winningScore = 0;
for (var scores = 0; scores < player.length; scores++) {
  if (player[scores].score > winningScore) {
    winningScore = player[scores].score;
  }
}
console.log('winner', winningScore);
