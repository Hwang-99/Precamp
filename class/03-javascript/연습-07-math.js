Math.floor ( Math.random() * 1000000 )
// 743531

//String 사용으로 문자열로 변환
String ( Math.floor ( Math.random() * 1000000 ) )
// '353364'

//padStart 사용으로 빈 숫자 자리를 0으로 전환

String ( Math.floor ( Math.random() * 1000000 ) ).padStart(6,"0")
// '038757'

//result 사용하여 결과값을 'result'로 출력할 수 있게 함.
let result = String ( Math.floor ( Math.random() * 1000000 ) ).padStart(6,"0")
// undefined
result
// '358816'
result
// '358816'