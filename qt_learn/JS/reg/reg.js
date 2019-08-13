// [] 一个字符的匹配范围 
// {} 匹配次数
/**
 * 手机正则
 */
// let phoneReg = /^1[3-9][0-9]{9}$/;
// console.log(phoneReg.test("13182102408"));
// let phoneReg = /(1[3-9][0-9])[0-9]{8}/;
// let str = 'my phoneNumber is 13845678910, (*^▽^*) 18845678910';
// // 获取手机号 判断服务商
// console.log(phoneReg.exec(str));
// let phoneNumber = phoneReg.exec(str)[0];
// let preNumber = phoneReg.exec(str)[1];
// console.log(preNumber, phoneNumber.slice(0,3));

/** 
 * 邮箱正则
 * 邮箱的基本格式为“名称@域名”，需要使用"^"匹配邮箱的开始部分，
 * 用"$"匹配邮箱结束部分以保证邮箱前后不能有其他字符
 * 名称是由若干个字母、数字、下划线和中划线组成，所以需要用到+表示多次出现
 */
let emailReg = /^[a-z0-9A-Z_-]+@[a-z0-9A-Z]+\.[a-z0-9A-Z]+$/;
let str = 'daoadof--_@a.com';
console.log(emailReg.test(str));
