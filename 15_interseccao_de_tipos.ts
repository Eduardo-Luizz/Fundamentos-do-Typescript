type User = {
  id: number,
  name: string
}

type Character = {
  nickname: string,
  level: number
}

type PlayerInfo = User & Character; // Juntou fez interseccao dos dois tipos
let info: PlayerInfo = {
  id: 1,
  name: "Player",
  level: 100,
  nickname: "Player"
}

console.log(info);