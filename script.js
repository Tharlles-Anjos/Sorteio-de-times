// scripts.js

const players = [];

function addPlayer() {
    const playerName = document.getElementById('playerName').value;
    if (playerName) {
        players.push(playerName);
        document.getElementById('playerName').value = '';
        alert(`Jogador ${playerName} adicionado!`);

        // Verifica se o número de jogadores atingiu o limite para exibir mensagem
        const numPlayersPerTeam = parseInt(document.getElementById('numPlayersPerTeam').value);
        const numTeams = parseInt(document.getElementById('numTeams').value);
        const totalPlayersNeeded = numPlayersPerTeam * numTeams;

        if (players.length >= totalPlayersNeeded) {
            alert(`Número de jogadores atingido (${players.length}). Faça o sorteio!`);
        }
    } else {
        alert('Por favor, insira o nome do jogador.');
    }
}

function drawTeams() {
    const numPlayersPerTeam = parseInt(document.getElementById('numPlayersPerTeam').value);
    const numTeams = parseInt(document.getElementById('numTeams').value);

    if (players.length < numPlayersPerTeam * numTeams) {
        alert('Número insuficiente de jogadores para formar os times.');
        return;
    }

    // Embaralha os jogadores
    const shuffledPlayers = players.sort(() => 0.5 - Math.random());

    // Divide os jogadores em times
    const teams = Array.from({ length: numTeams }, () => []);
    for (let i = 0; i < shuffledPlayers.length; i++) {
        teams[i % numTeams].push(shuffledPlayers[i]);
    }

    // Exibe os times
    const teamsContainer = document.getElementById('teams');
    teamsContainer.innerHTML = '';
    for (let i = 0; i < numTeams; i++) {
        const teamDiv = document.createElement('div');
        teamDiv.innerHTML = `<strong>Time ${i + 1}:</strong> ${teams[i].join(', ')}`;
        teamsContainer.appendChild(teamDiv);
    }
}
