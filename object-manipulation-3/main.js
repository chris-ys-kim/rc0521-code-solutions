console.log('Lodash is loaded:', typeof _ !== 'undefined');

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

var cards = [];

var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
var ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

for (var i = 0; i < suits.length; ++i) {
  for (var j = 0; j < ranks.length; ++j) {
    var card = {
      rank: ranks[j],
      suit: suits[i]
    };
    cards.push(card);
  }
}

cards = _.shuffle(cards);
console.log(cards);

for (let i = 0; i < players.length; ++i) {
  let drawnCard = cards[0];
  players[i].hand.push(drawnCard);
  cards.shift();

  drawnCard = cards[0];
  players[i].hand.push(drawnCard);
  cards.shift();
}

console.log(players);

var score = 0;
for (var k = 0; k < players.length; k++) {
  for (var l = 0; l < 2; l++) {
    if (players[k].hand[l].rank === 'Jack' ||
    players[k].hand[l].rank === 'Queen' ||
    players[k].hand[l].rank === 'King') {
      score += 10;
    } else if (players[k].hand[l].rank === 'Ace') {
      score += 11;
    } else {
      score += players[k].hand[l].rank;
    }
  }
  players[k].score = score;
  score = 0;
}
console.log('players', players);

var winningScore = 0;
for (var scores = 0; scores < k.length; scores++) {
  if (k[scores].score > winningScore) {
    winningScore = k[scores].score;
  }
}
console.log('winner', winningScore);
