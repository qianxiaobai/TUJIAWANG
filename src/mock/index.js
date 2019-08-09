const Mock  = require("mockjs")
// seachdetail
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


  // autopalydetail
const auto=Mock.mock({
  "list|8":[{
    "id|+1":0+"jpg",
    "info":'@cparagraph(1, 9)',
    "img":"https://staticfile.tujia.com/upload/TravelArticleContent/day_180807/thumb/201808071151493277_600_400.jpg"
  }]
})
Mock.mock(/\autop/,"post",function(){
  return auto
})