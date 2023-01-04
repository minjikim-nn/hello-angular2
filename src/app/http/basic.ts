// typescript 타입지정
// string으로 된 array 타입 지정
let title: string[] = ['kim', 'park'];
// string으로 된 object 타입 지정
// ? 사용시 값이 없어도 오류 x
let object: {name?: string } = {name: 'kim'}
// string, number 중 어떤 것
let string_num: string | number = 'kim';

// 타입을 변수로 지정 타입을 설정할 땐 맨 앞자리 대문자로
type MyType = string | number | boolean;
// test 변수인데 타입은 위에 변수 사용
let test: MyType = 100;

                        // 어떤 type이 return 될지 설정
function 함수(x: number) :number{
    return x * 2
}
함수(10); // number가 아니면 무조건 오류남

// array type
type Member = [number, boolean]; // 첫번째 값은 number, 두번째 값은 boolean 고정
let john: Member = [123, true] // 123자리에 string 값이 오게 되면 오류

type ObjectString = {
    // 모든 object의 속성들이 string 값을 가져야 함
    // 속성이 많을 때 사용하기 좋음
    [key: string] : string,
}
let park: ObjectString = {
    name: 'park',
    age: '30',
    plus: '기타 등등'
}

let dustName: string = 'dust'
let dustAge: number = 30
let dust

// 클래스 문법의 타입지정
class User{
    userName: string; // 변수를 만들어놔야
    constructor(userName: string){ // 여기서 사용할 수 있음
        this.userName = userName
    }
}
