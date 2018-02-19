const utils=require('./utils');
const expect=require('expect');


// it('should be add two number',()=>{
//   var res=utils.add(2,3);
//   expect(res).toBe(5).toBeA('number');
//
//
//   // console.log(res);
//   // if(res !== 5)
//   // throw new Error('value is inncorect');
//
// });

it('should be add two number async ',(done1)=>{
 var res=utils.Asyncadd(2,3,(sum)=>{
expect(sum).toBe(5).toBeA('number');
        done1();
  });



  // console.log(res);
  // if(res !== 5)
  // throw new Error('value is inncorect');

});
