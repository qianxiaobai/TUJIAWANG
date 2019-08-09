const Mock  = require("mockjs")

const  data =Mock.mock({
  "list|1000":[{
      "id|+1":0,
      "cityName":'@city()',
      "title":'@cword(8, 18)',
      "price|500-1000": 1000,
      "info":'@cword(8, 15)',
      "spantext":'@cword(2, 4)',
      "spaninfo":'@cword(2, 4)',
  }],
  'city|100':[{
    
  }]
})

  console.log(data)

Mock.mock(/\asd/,"post",function(){
    return data
  })


