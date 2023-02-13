//객체의 불변성

const tetz = {
  name: "이효석",
  email: "xenosign@naver.com",
}

const 이효석 = {
  name: "이효석",
  email: "xenosign@naver.com",
}

const tetzCopy = tetz;
tetzCopy.name = "Tetz";

// tetzCopy = 이효석;

console.log(tetz);
console.log(tetzCopy);
console.log(tetz === tetzCopy); //이게 같으니깐 원시적인건가