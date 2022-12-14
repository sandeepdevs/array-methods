// array.form() method
const arrayForm = "amazing";
result = Array.from(arrayForm);
console.log(result);
// Output: ['a','m','a','z','i','n','g']

//array.length method
const arrayLength = ["amazing", "awsome", "fighting"];
console.log(arrayLength.length);
// Output: 3

//array.at()
const arrayAt = ["amazing", "awsome", "fighting"];
console.log(arrayAt.at(2));
// Output: fighting

//array.concat()
const arrayConcat1 = ["amazing", "awsome", "fighting"];
const arrayConcat2 = ["analayze", "attack", "advance"];
concatResult = arrayConcat1.concat(arrayConcat2);
console.log(concatResult);
// Output: ["amazing", "awsome", "fighting", "analayze", "attack", "advance"]

//array.copyWithin()
const arrayCopy = ["amazing", "awsome", "fighting", "analayze", "attack", "advance"];
console.log(arrayCopy.copyWithin(0,2,5));
// Output: ['fighting', 'analayze', 'attack', 'analayze', 'attack', 'advance']

//array.entries()
const arrayEntries = ["amazing", "awsome", "fighting"];
for(const[index, element] of arrayEntries.entries()){
    console.log(index,element)
}
// Output: 0 'amazing' 1 'awsome' 2 'fighting'

//array.every()
const arrayEvery = [31,21,34,22,29,37];
console.log(arrayEvery.every(greaterThan));
function greaterThan(num){
    return num > 20;
}
// Output: true

//array.fill()
const arrayFill = [31,21,34,22,29,37];
console.log(arrayFill.fill(0,1,3));
// Output [31, 0, 0, 22, 29, 37]

//array.filter()
const arrayFilter = [31,21,34,22,29,37];
console.log(arrayFilter.filter(moreThan));
function moreThan(num){
    return num > 26;
}
// Output: [31, 34, 29, 37]

//array.find()
const arrayFind = [6,8,16,31,21,34,22,29,37];
console.log(arrayFind.find(maxNum));
function maxNum(num){
    return num > 20;
}
// Output: 31

//array.findIndex()
const arrayIndex = [6,8,16,32,21,34,22,29,37];
console.log(arrayIndex.findIndex(isGreater));
function isGreater(num){
    return num > 20;
}
// Output: 3

//arry.findLast()
const arrayLast = [6,8,16,32,21,34,22,29,37];
console.log(arrayLast.findLast(isMore));
function isMore(num){
    return num > 30;
}
// Output: 37

//array.findLastIndex()
const arrayLastindex = [6,8,4,22,29,37];
console.log(arrayLastindex.findLastIndex(isMax));
function isMax(num){
    return num > 20;
}
// Output: 5

//array.flat()
const arrayFlat = [1,2,3,[[4,5,6]]];
console.log(arrayFlat.flat(2));
// Output: [1,2,3,4,5,6]

//array.flatMap()
const arrayFlatmap = [1,2,[3,4],5,[6,7], [8]];
console.log(arrayFlatmap.flatMap(num => num
));
// Output: [1, 2, 3, 4, 5, 6, 7, 8]

// array.foreach()
const arrayForeach = [1,2,3,4,5,6];
arrayForeach.forEach(element => console.log(element));
// Output: 1 2 3 4 5 6

// array.includes()
const arrayIncludes = [1,2,3];
console.log(arrayIncludes.includes(2));
// Output: true

// array.indexOf()
const arrayIndexof = ["animal", "plant", "dog"];
console.log(arrayIndexof.indexOf("plant"));
console.log(arrayIndexof.indexOf("fruit"));
// Output: 1 -1

// array.join()
const arrayJoin = ["animal", "plant", "dog"];
console.log(arrayJoin.join());
console.log(arrayJoin.join(":"));
// Output: animal,plant,dog animal:plant:dog

// array.keys()
const arrayKeys = ["animal", "plant", "dog"];
for(key of arrayKeys){
    console.log(key);
}
// Output: animal plant dog

// array.lastIndexOf()
const arrayLastindexof = ["amazing", "awsome", "fighting", "analayze" , "amazing", "attack", "advance"];
console.log(arrayLastindexof.lastIndexOf("amazing"));
// Output: 4

//array.map
const arrayMap = [1,2,3,4];
console.log(arrayMap.map(x => x * 2));
// Output: [2,4,6,8]

// array.reduce
const arrayReduce = [2,4,8,16];
console.log(arrayReduce.reduce((total,current) => total + current));
// Output: 30

// array.reduceRight()
const arrayReduceright = [[1,2],[3,4],[5,6]];
console.log(arrayReduceright.reduceRight((total, current) => total.concat(current)));
// Output: [5, 6, 3, 4, 1, 2]

// array.reverse()
const arrayReverse = ["amazing", "awsome", "fighting", "analayze"];
console.log("Reverse Method: " + arrayReverse.reverse());
// Output: ['analayze', 'fighting', 'awsome', 'amazing']

// array.slice
const arraySlice = ["amazing", "awsome", "fighting", "analayze"];
console.log("Slice Method: " + arraySlice.slice(2));
// Output: fighting,analayze