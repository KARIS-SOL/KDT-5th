// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 입출력 예 #1
// [1, 2, 3, 4, 5]에는 짝수가 2, 4로 두 개, 홀수가 1, 3, 5로 세 개 있습니다.

// 입출력 예 #2
// [1, 3, 5, 7]에는 짝수가 없고 홀수가 네 개 있습니다.


function solution(num_list) {
  // map 함수를 통해, 배열 모든 원소 나누기 2
  const num_list2 = num_list.map(x => x % 2);
  
  // 홀수의 갯수 odd에 할당
  const odd = num_list2.filter(x => 1 === x).length;
  
  // 짝수의 갯수 even에 할당
  const even = num_list2.filter(x => 0 === x).length;
  
  // 배열 return
  return [even, odd];
}
