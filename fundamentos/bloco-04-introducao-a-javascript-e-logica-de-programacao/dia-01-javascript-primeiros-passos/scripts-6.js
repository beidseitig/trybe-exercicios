let chessPiece = 'PEAO';

switch (chessPiece.toLowerCase()) {
    case 'rei':
        console.log('Rei: Pode andar uma casa em qualquer direção');
    break;

    case 'rainha':
        console.log('Rainha: Pode andar quantas casas quiser em qualquer direção');
    break;

    case 'bispo':
        console.log('Bispo: Pode andar quantas casas quiser na diagonal');
    break;

    case 'torre':
        console.log('Torre: Pode andar quantas casas quiser em linha reta');
    break;

    case 'cavalo':
        console.log('Cavalo: Anda em "L" e pode passar por cima de outras peças');
    break;

    case 'peao':
        console.log('Peão: Anda uma casa para frente, sendo que na primeira rodada ele pode andar duas casas');
    break;
}