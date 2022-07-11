const myModule = require('./firebase')

function add(data,num){
    myModule.database.ref(`people/${num}`).push().set(data)
}

const um ={
dica01:"Sou Cantor", 
dica02:"Faleci no final de 2019, com apenas 21 anos",
dica03:"Minha primeira faixa foi chamada de Forever",
dica04:"Meu gênero Musical era rap/hip-hop",
dica05:"Minha música mais famosa é Lucid Dreams",
dica06:"Meu nome real era Jarad Anthony Higgins",
nome:"Juice WRLD"
} 

const dois ={
dica01:"Sou jogador de futebol", 
dica02:"Terminei a minha carreira em 2018",
dica03:"Atuei como Meia-Atacante",
dica04:"Começei a minha carreira no Grêmio",
dica05:"Fui uma vez campeão do mundo, ganhei uma Champions League",
dica06:"Já fui preso",
nome:"Ronaldinho Gaúcho"
} 

const tres ={
dica01:"Sou Treinador de Futebol", 
dica02:"Nasci em 29 de agosto de 1973, na Alemanha",
dica03:"Começei a atuar no meu atual clube em 2021",
dica04:"Joguei como zagueiro",
dica05:"Na temporada 19-20 cheguei nas finais da Champions League",
dica06:"Atuo Clube Atual Chelsea",
nome:"Thomas Tuchel"
} 

const quatro ={
dica01:"Sou jogador de futebol", 
dica02:"Possuo 1,87 de altura",
dica03:"Fui 1 vez campeão da Europa",
dica04:"Possuo a maior quantia de gols em jogos oficiais",
dica05:"Sou um jogador Português",
dica06:"Joguei em vários clubes, mas atualmente estou no 'Manchester United'",
nome:"Cristiano Ronaldo"
} 

const cinco ={
dica01:"Sou cantora", 
dica02:"Nasci em 22 de agosto de 1995, em Londres",
dica03:"Cantei em uma final de champions league",
dica04:"Meu gênero musical é pop",
dica05:"Meu último albúm foi Future Nostalgic",
dica06:"Minha música de mais sucesso no spotify é 'Don't start now'",
nome:"Dua Lipa"
} 

const seis ={
dica01:"Sou Cantor", 
dica02:"Nasci 4 de julho de 1995, em Nova York ",
dica03:"Sofri um acidente de avião",
dica04:"Ganhei em uma noite 9 troféus do Billboard Music Award",
dica05:"Minha música mais famosa atualmente é Rockstar",
dica06:"Meu nome real é Austin Richard Post",
nome:"Post Malone"
} 

const sete ={
dica01:"Sou streamer de jogos online", 
dica02:"Nasci em 2 de janeiro de 1998, na Florida",
dica03:"Fui jogador profissional de Fortnite Battle Royale",
dica04:"Possuo quase 12 milhões de seguidores no youtube",
dica05:"Joguei pela FazeClan",
dica06:"Meu nome real é Turner Tenney",
nome:"Tfue"
}

const oito ={
dica01:"Sou uma Atriz", 
dica02:"Nasci 19 de fevereiro de 2004 na Espanha",
dica03:"Eu apareci em 1 episódio da série Grey's Anatomy",
dica04:"Sou a atriz principal do filme Enola Holmes",
dica05:"Possuo uma marca chamada Florence by Mills",
dica06:"Atuo em Stranger Things",
nome:"Millie Bobby Brown"
}

add(um, '1')
add(dois, '2')
add(tres, '3')
add(quatro, '4')
add(cinco, '5')
add(seis, '6')
add(sete, '7')
add(oito, '8')