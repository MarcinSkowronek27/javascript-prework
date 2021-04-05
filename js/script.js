function playGame(playerInput) {
	clearMessages();
	function getMoveName(randomNumber) {
		if (randomNumber == 1) {
			return 'kamień';
		} else if (randomNumber == 2) {
			return 'papier';
		} else if (randomNumber == 3) {
			return 'nożyce';
		}
		return 'nieznany ruch';
	}
	/*początek zmienianego kodu*/
	function displayResult(argComputerMove, argPlayerMove) {
		printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '.');

		if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
			printMessage('Ty wygrywasz!');
		} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
			printMessage('Wygrywa komputer!');
		} else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
			printMessage('Remis!');
		} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
			printMessage('Wygrywa komputer!');
		} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
			printMessage('Ty wygrywasz!');
		} else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
			printMessage('Remis!');
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
			printMessage('Ty wygrywasz!');
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
			printMessage('Wygrywa komputer!');
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
			printMessage('Remis!');
		} else if (argComputerMove == 'papier' || argComputerMove == 'kamień' || argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
			printMessage('Nie podałeś liczby 1,2 lub 3!');
		} return '';
	}
	/*koniec zmienianego kodu*/

	let randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowana liczba to: ' + randomNumber);

	let argComputerMove = getMoveName(randomNumber);

	/*
	if(randomNumber == 1){
	  computerMove = 'kamień';
	} else if(randomNumber == 2){
		computerMove = 'papier';
	} else {
		computerMove = 'nożyce';
	}
	*/
	printMessage('Mój ruch to: ' + argComputerMove);

	/*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

	console.log('Gracz wpisał: ' + playerInput);

	let argPlayerMove = getMoveName(playerInput);
	/*
	if (playerInput == '1') {
		playerMove = 'kamień';
	} else if (playerInput == '2') {
		playerMove = 'papier';
	} else if (playerInput == '3') {
		playerMove = 'nożyce';
	} else {
		playerMove = 'nieznany ruch';
	}
	*/
	printMessage('Twój ruch to: ' + argPlayerMove);
	/*
	if (computerMove == 'kamień' && playerMove == 'papier') {
		printMessage('Ty wygrywasz!');
	} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
		printMessage('Wygrywa komputer!');
	} else if (computerMove == 'kamień' && playerMove == 'kamień') {
		printMessage('Remis!');
	} else if (computerMove == 'papier' && playerMove == 'kamień') {
		printMessage('Wygrywa komputer!');
	} else if (computerMove == 'papier' && playerMove == 'nożyce') {
		printMessage('Ty wygrywasz!');
	} else if (computerMove == 'papier' && playerMove == 'papier') {
		printMessage('Remis!');
	} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
		printMessage('Ty wygrywasz!');
	} else if (computerMove == 'nożyce' && playerMove == 'papier') {
		printMessage('Wygrywa komputer!');
	} else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
		printMessage('Remis!');
	} else if (computerMove == 'papier' || computerMove == 'kamień' || computerMove == 'nożyce' && playerMove == 'nieznany ruch') {
		printMessage('Nie podałeś liczby 1,2 lub 3!');
	}*/

	displayResult(argComputerMove, argPlayerMove);
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