let classmates = ["철수","영희","훈이"]
// undefined
classmates
// (3) ['철수', '영희', '훈이']
classmates[0]
// '철수'
classmates[1]
// '영희'
classmates[2]
// '훈이'
classmates.includes("훈이")
// true
classmates.includes("맹구")
// false
classmates.length
// 3
classmates.push("맹구")
// 4
classmates.includes("맹구")
// true
classmates
// (4) ['철수', '영희', '훈이', '맹구']
classmates.length
// 4
classmates.pop()
// '맹구'
classmates.length
// 3
classmates
// (3) ['철수', '영희', '훈이']

let developer = ["잠재력","안정적","돈","성장","발전가능성"]
// undefined
developer[3]
// '성장'
let dream = ["커리어점프","성공","할수있다"]
// undefined
developer
// (5) ['잠재력', '안정적', '돈', '성장', '발전가능성']
dream
// (3) ['커리어점프', '성공', '할수있다']
developer.concat(dream)
// (8) ['잠재력', '안정적', '돈', '성장', '발전가능성', '커리어점프', '성공', '할수있다']
let result = developer.concat(dream)
// undefined
result
// (8) ['잠재력', '안정적', '돈', '성장', '발전가능성', '커리어점프', '성공', '할수있다']
const fruits = [
    {number: 1, title: "레드향" },
    {number: 2, title: "샤인머스켓" },
    {number: 3, title: "산청딸기" },
    {number: 4, title: "한라봉" },
    {number: 5, title: "사과" },
    {number: 6, title: "애플망고" },
    {number: 7, title: "딸기" },
    {number: 8, title: "천혜향" },
    {number: 9, title: "과일선물세트" },
    {number: 10, title: "귤" },
]