// 변수 타입 array
let member: string[] = ['kim', 'park']
// string 타입
let member_num: number[] = [10, 50];
// number 타입


// 변수 타입 object
let object_member: {name: string, age: number, address: string} = {name: 'kim', age: 30, address: '상암동'}
let object_member2 = {name: 'kim', age: 30, address: '상암동'}
// 이렇게만 적어도 알아서 type 지정해줌


let user: number | string;
// number, string 값이 들어올 수 있음(유니온타입) --> 할당을 하면 하나의 타입으로 설정됨, 값이 변경되면 타입도 변경됨(가변)

let user_num: ( number | string )[] = [1,'2',3];
let user_object: { a: string | number } = { a: 123 }

// type 사용x => any

// unknown => any랑 비슷함 하지만 any 보다 안전함


let user2: string = 'kim';
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[]  = [user2, age, married];

let 학교: {score: (number|boolean)[], teacher: string, friend: string|string[]} = {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

function 함수1(x? :number): void{
  // x뒤에 ?붙는건 number | undefined 가 됨(유니온타입이라는 것)
}

// type 키워드는 재정의 불가능
type AnimalType = string | number | undefined;
let animal: AnimalType; // 변수사용 => type alias

type ObjectAniType = {
  readonly name: string, // readonly 속성을 주면 속성값을 수정할 수 없음 => 읽기 전용 속성이므로 name에 할당할 수 없음
  age: number
}
let animalObj: ObjectAniType = {name: '사자', age: 2}


type Font = {
  color?: string,
  size: number,
  readonly position: number[]
}

type UserValue = {
  readonly name: string,
  phone: number,
  email: string,
}

type InfoPlus = {
  여부: boolean,
}
// 위의 type 값을 합친 type
type UserInfo = UserValue & InfoPlus


function hi(name?: string){
  if(name){
    console.log(`${name} 들어옴`);
  }else{
    console.log("...")
  }
}
hi("ㅎㅇ")

function inputText(text: string){
  // return text.length
  return text.toString().length
          // 문자변환
}
inputText('adfsdf')


function 함수2(x :number | string){
  // x가 number 타입이 아닌 유니온(number, string)타입이라 덧셈이 안됨
  // 덧셈하려면 number 타입이어야함

  let array: number[] = [];
  array[0] = x as number;
  // assertion문법(근데 if문이 더 좋은)
  // 문법의 용도 -> narrowing할 때 씀,
  // x as number => x의 type을 number로 덮어씌워달라는 것
  // 무슨 타입이 들어올지 확실할 때 씀 => 버그 추적을 못함(비상용)
  // 위에 정의한 타입중에서 확정할 때 쓰는 것이고 다른 타입으로 변경할 때 쓰는 문법은 아님

  // type narrowing
  if(typeof x === 'string'){
    return x + '3'
  }else{
    return x + 3
  }
}
함수2(30)
