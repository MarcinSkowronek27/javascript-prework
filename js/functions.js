function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

function printResult(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('result').appendChild(div);
}

function clearMessages() {
    document.getElementById('result').innerHTML = '';
}