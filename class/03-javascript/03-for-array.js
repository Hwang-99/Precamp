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
// undefined

// 내가 작성한 답안
for(let count = 0; count < fruits.length; count++) {
    if(fruits[count].title.length<=11){
        console.log(fruits[count].number + " " + fruits[count].title)
    }
}
// VM9629:3 1 레드향
// VM9629:3 2 샤인머스켓
// VM9629:3 3 산청딸기
// VM9629:3 4 한라봉
// VM9629:3 5 사과
// VM9629:3 6 애플망고
// VM9629:3 7 딸기
// VM9629:3 8 천혜향
// VM9629:3 9 과일선물세트
// VM9629:3 10 귤
// undefined

// 예시 모범 답안
for (let k = 0; k < fruits.length; k++) {
    console.log(fruits[k].number + " " + fruits[k].title)
}
     
// VM10186:2 1 레드향
// VM10186:2 2 샤인머스켓
// VM10186:2 3 산청딸기
// VM10186:2 4 한라봉
// VM10186:2 5 사과
// VM10186:2 6 애플망고
// VM10186:2 7 딸기
// VM10186:2 8 천혜향
// VM10186:2 9 과일선물세트
// VM10186:2 10 귤
// undefined

// `(백틱) 사용, ※`${}를 순서대로 사용하여 묶어야함.
for (let k = 0; k < fruits.length; k++) {
    console.log(`${fruits[k].number} ${fruits[k].title}`)
}
     
// VM10458:2 1 레드향
// VM10458:2 2 샤인머스켓
// VM10458:2 3 산청딸기
// VM10458:2 4 한라봉
// VM10458:2 5 사과
// VM10458:2 6 애플망고
// VM10458:2 7 딸기
// VM10458:2 8 천혜향
// VM10458:2 9 과일선물세트
// VM10458:2 10 귤
// undefined

//`(백틱) 활용 예시
// 문자열과 혼용할 때 주로 활용
for (let k = 0; k < fruits.length; k++) {
    console.log(`과일 차트${fruits[k].number}위는 ${fruits[k].title}입니다`)
}
     
// VM10599:2 과일 차트1위는 레드향입니다
// VM10599:2 과일 차트2위는 샤인머스켓입니다
// VM10599:2 과일 차트3위는 산청딸기입니다
// VM10599:2 과일 차트4위는 한라봉입니다
// VM10599:2 과일 차트5위는 사과입니다
// VM10599:2 과일 차트6위는 애플망고입니다
// VM10599:2 과일 차트7위는 딸기입니다
// VM10599:2 과일 차트8위는 천혜향입니다
// VM10599:2 과일 차트9위는 과일선물세트입니다
// VM10599:2 과일 차트10위는 귤입니다
// undefined