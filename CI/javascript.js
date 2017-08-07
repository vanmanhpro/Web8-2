// function aRose()
// {
//   console.log("Sweet!");
// }
// var anotherName = aRose;
//
// typeof(anotherName); //function
// anotherName();
//
// setTimeout(aRose, 2000)
//
// function multiplyBy3(num)
// {
//   return num*3;
// }
//
// function multiplyBy6(num)
// {
//   return num*6;
// }
//
// function transformNumberWith(num, transformer)
// {
//   return transformer(num);
// }
//
// console.log(transformNumberWith(3, multiplyBy3));
// console.log(transformNumberWith(3, multiplyBy6));
//
// jQuery.get({
//   url     :"http://www.google.com",
//   success : function(data)
//   {
//     //.. do something
//   },
//   error   :function(err){
//     console.error(err);
//   };
// })
//
// function countDown(time)
// {
//   var i;
//   for(i = time; i >= 0; i--)
//   {
//     setTimeout( function()
//     {
//       i++;
//       console.log(time - i);
//     }
//     , (time - i) * 1000 )
//   }
// }
//
// countDown(5);

function creatWebsiteCounter()
{
  var numberOfVisitor = 0;

  function getNumberOfVisitor()
  {
    return numberOfVisitor;
  }

  function setNumberOfVisitor()
  {
    if ( num > 0 ) numberOfVisitor = num;
  }

  return
  {
    getNumberOfVisitor : getNumberOfVisitor,
    setNumberOfVisiotr : setNumberOfVisitor
  }
}

var myWebsite = creatWebsiteCounter();
myWebsit.numberOfVisitor = undefine
