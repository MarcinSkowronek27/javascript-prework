{
	let playerScore = 0;
	let computerScore = 0;

	const playGame = function(playerInput) {
		const randomNumber = Math.floor(Math.random() * 3 + 1);
		clearMessages();
		const getMoveName = function(randomNumber) {
			if (randomNumber == 1) {
				return 'kamień';
			} else if (randomNumber == 2) {
				return 'papier';
			} else if (randomNumber == 3) {
				return 'nożyce';
			}
			return 'nieznany ruch';
		}
		const argPlayerMove = getMoveName(playerInput);
		const argComputerMove = getMoveName(randomNumber);

		const displayResult = function(argComputerMove, argPlayerMove) {

			printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '.');

			if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
				printMessage('Ty wygrywasz!');
				playerScore++;
			} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
				printMessage('Wygrywa komputer!');
				computerScore++;
			} else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
				printMessage('Remis!');
			} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
				printMessage('Wygrywa komputer!');
				computerScore++;
			} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
				printMessage('Ty wygrywasz!');
				playerScore++;
			} else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
				printMessage('Remis!');
			} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
				printMessage('Ty wygrywasz!');
				playerScore++;
			} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
				printMessage('Wygrywa komputer!');
				computerScore++;
			} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
				printMessage('Remis!');
			} else if (argComputerMove == 'papier' || argComputerMove == 'kamień' || argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
				printMessage('Nie podałeś liczby 1,2 lub 3!');
			} return '';
		}
		console.log(computerScore);
		console.log(playerScore);

		console.log('Wylosowana liczba to: ' + randomNumber);

		printMessage('Mój ruch to: ' + argComputerMove);

		console.log('Gracz wpisał: ' + playerInput);

		printMessage('Twój ruch to: ' + argPlayerMove);

		displayResult(argComputerMove, argPlayerMove);
		//const result = playerScore - computerScore;
		//printResult('Wynik: ' + result);
		printResult(playerScore + '-' + computerScore);
		//console.log('Wynik rozgrywki: ' + result);
	}

	document.getElementById('play-rock').addEventListener('click', function () {
		playGame(1);
	});
	document.getElementById('play-paper').addEventListener('click', function () {
		playGame(2);
	});
	document.getElementById('play-scissors').addEventListener('click', function () {
		playGame(3);
	});
	/*dodać ostatni commit na gitHub*/
}