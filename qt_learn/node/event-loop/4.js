function foo(a,b){
  console.log(b);
  return {
    foo:function(c){
      return foo(c,a);
    }
  }
}

// a变量  闭包

var func1=foo(0);  // undefined
// func1 = {             //a = 0
//   foo:function(c){
//     return foo(c,a);
//   }
// }
func1.foo(1); // foo(1,a)  0
func1.foo(2); // 0    c=2 a=0
func1.foo(3); // 0    c=3 a=0
var func2=foo(0).foo(1).foo(2).foo(3); // undefined 0 1 2
var func3=foo(0).foo(1); // undefined 0  a = 1
func3.foo(2);  // c = 2   1
func3.foo(3);  // c = 3   1
