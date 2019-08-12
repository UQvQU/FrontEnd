/**
 * 140 likes
 * []  "no one likes this"
 * ["Peter"] "Peter likes this"
 * ["Jacob", "Ales"] "Jacob and Ales like this"
 * ["Max", "John", "Mark"] "Max, John and Mark like this"
 * ["Alex", "Jacob", "Max", "John"] "Alex Jacob and 2 others like this"
 */ 
// 顺序逻辑思维
// const createArr = (arr) => {
//     let length = arr.length;
//     let result = '';
//     switch(length){
//         case 0:
//             result = "no one likes this";
//             break;
//         case 1:
//             result = arr[0] + " likes this";
//             break;
//         case 2:
//             result = arr[0] + " and " + arr[1] +" like this";
//             break;
//         case 3:
//             result = arr[0] + ", " + arr[1] + " and " + arr[2] + " like this";
//             break;
//         default:
//             result = arr[0] +" " + arr[1] +" and "+ (length - 2) + " others like this";
//             break;
//     }
//     return result;
// }
// console.log(createArr(["Alex", "Jacob", "Max", "John"]));

// 数学逻辑思维
const createArr = (names) => {
    // 模板数组
    let index = names.length;
    const templates = [
        "no one likes this",
        "{name} likes this",
        "{name} and {name} like this",
        "{name}, {name} and {name} like this",
        // "{name}, {name} and " + (index - 2) + " others like this" 可行
        "{name}, {name} and {n} others like this"
    ];
    // console.log(index);
    // 根据数组长度来判断适用哪个模板
    if(index == 0){
        return "no one likes this";
    }else if(index >= 5){
        index = 4;
    }

    // 匹配所有的{name}
    return templates[index].replace(/{name}|{n}/g, function(value){
        // console.log(value); 
        if(value == '{n}'){
            // 直接返回当前的数组长度
            return names.length;
        }
        // 每项匹配后删除当前项
        return names.shift();
    });
}
console.log(createArr(["Alex", "Jacob", "Max", "John", "John", "Max", "John"]));
