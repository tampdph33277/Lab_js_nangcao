//1. Tạo ra 1 mảng cầu thủ cho mỗi đội (variables 'players1' and 'players2')
const players1 =['cauthu1','cauthu2','cauthu3','cauthu4','cauthu5','cauthu6','cauthu7','cauthu8','cauthu9','cauthu10','cauthu11'];
const gk1 = players1[0];
const players2 =['cauthu1','cauthu2','cauthu3','cauthu4','cauthu5','cauthu6','cauthu7','cauthu8','cauthu9','cauthu10','cauthu11'];
const gk2 = players2[0];

const fieldplayers = players1.slice(1);
//3. Tạo 1 mảng 'allPlayers' bao gồm toàn bộ 22 cầu thủ trên sân
const allPlayers = [...players1,...players2];
console.log(allPlayers);
// 4. Trong trận đấu, Bayern Munich (team 1) sử dụng 3 quyền thay người. Hãy tạo 1
// mảng mới ('players1Final') gôm các cầu thủ ban đầu của Bayern rồi thêm vào
// 'Thiago', 'Coutinho' và 'Perisic'
const players1Final = ['Thiago', 'Coutinho', 'Perisic',...players1];
console.log(players1Final);
// 5. Dựa vào object game.odds, tạo một biến thể hiện tỉ lệ kết quả trận đấu (gọi là
//     'team1', 'draw' và 'team2')

const game = {
    odds: {
      team1: 1.8,
      draw: 3.2,
      team2: 4.5
    },
    scored: [
     ' Goal 1: Messi',
     ' Goal 5: Neymar',
      'Goal 1: Suarez',
    ],
    scored: {
      Gnarby: 1,
      Hummels: 1,
      Lewandowski: 2
    },
  };
  const { team1, draw, team2 } = game.odds;
  console.log(team1);//  đội 1
  console.log(draw);//  hòa
  console.log(team2);//  đội 2
//   6. Viết 1 hàm ('printGoals') nhận vào 1 số tên cầu thủ đã ghi bàn (sử dụng toán tử
//     spread) và in ra console tên những cầu thủ đó cùng với số cầu thủ đã ghi bàn
function printGoals(...players1) {
    const numberOfGoals = players1.length;
    console.log("Các cầu thủ ghi bàn:");
    for (const player of players1) {
      console.log(`* ${player}`);
    }
    console.log(`Số cầu thủ ghi bàn: ${numberOfGoals}`);
  }

  printGoals("Messi", "Neymar", "Suarez");
  
  // 1. Lặp mảng game.scored array và in ra cầu thủ cùng với số bàn thắng đã ghi (Ví
  //   dụ: "Goal 1: Lewandowski")
  for (const goal in game.scored) {
  console.log(` ${game.scored[goal]}`);
  }
//tỉ lệ kết quả trận đấu
  const results = Object.entries(game.odds);
  console.log("Tỉ lệ kết quả trận đấu:");
  
  for (const [team, odd] of results) {
    let teamName = team === "draw" ? "hòa" : `đội ${team}`;
    console.log(`Tỉ lệ thắng của ${teamName}: ${odd}`);
  }
  console.log("Danh sách cầu thủ ghi bàn:");
const scorers = game.scored;
// cầu thủ đã ghi bàn và số bàn thắng
for (const player in scorers) {
  console.log(`${player}: ${scorers[player]}`);
}