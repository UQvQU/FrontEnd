// 石头剪刀布
// 接收参数
// input IO
// process 程序总管

var playerAction = process.argv[2];
// console.log(playerAction, process.argv[1], process.argv[0]);
if (playerAction != 'rock' && playerAction != 'paper' && playerAction != 'scissor') {
  console.log('请输入rock或paper或scissor');
} else {
  var computerAction;
  var random = Math.random() * 3;
  if (random < 1) {
    computerAction = 'rock';
    console.log('石头');
  } else if (random > 2) {
    computerAction = 'paper';
    console.log('布');
  } else {
    computerAction = 'scissor';
    console.log('剪刀');
  }

  if (computerAction == playerAction) {
    console.log('平局')
  } else if ( (computerAction == 'rock' && playerAction == 'scissor') ||
  (computerAction == 'scissor' && playerAction == 'paper') ||
  (computerAction == 'paper' && playerAction == 'rock')) {
    console.log('你输了')
  } else {
    console.log('你赢了')
  }

}