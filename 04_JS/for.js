//기본 반복문

for (let index = 0; index < 10; index += 1/*index++*/) {
  console.log(`인사를 ${index + 1} 번째 드립니다!💖`);
}

//2중 반복문 (잘 쓰지않음 )

for (let i = 0; i < 3; i += 1) {
  console.log(`상위 for 문 입니다. ${i + 1} 번째 작동중`);
  for (let j = 0; j < 5; j +=1 ) {
    console.log(`  하위 for 문 입니다. i는 ${i}, j는 ${j} 입니다! `);
  }
}

//구구단 만들기 
for(let i = 2; i < 10; i++) {
  console.log(`-------- ${i}단`);
  for(let j = 1; j < 10; j++) {
    console.log(`${i} * ${j} = ${ i * j }`);
  }
}

