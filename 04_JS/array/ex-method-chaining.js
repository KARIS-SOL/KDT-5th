const kdtCurriculum = ["HTML", "CSS", "JS", "BACKEND", "REACT"];

// [내가한것]
// const result1 = kdtCurriculum[0].split("").reverse().join("");
// const result2 = kdtCurriculum[kdtCurriculum.length -1].split("").reverse().join("");
// console.log(result1);
// console.log(result2);

// [강사님]

const result1 = kdtCurriculum.shift().split("").reverse().join("");
const result2 = kdtCurriculum.pop().split("").reverse().join("");

console.log(result1, result2);