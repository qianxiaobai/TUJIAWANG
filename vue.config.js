const path = require("path")
module.exports = {
    devServer:{
        proxy:{
            "/bingo":{
                target:"https://m.tujia.com",
                changeOrigin:true
            },
            "/note":{
                target:"https://travel.tujia.com",
                changeOrigin:true
            },
            "/recommend":{
                target:"https://travel.tujia.com",
                changeOrigin:true
            },
        },

    },
    //https://travel.tujia.com/recommend/nearby/houses?cityId=7&unitIds=&longitude=0.0&latitude=0.0

   // https://travel.tujia.com/note/cmt/4392?page_number=0
   // https://travel.tujia.com/note
//https://pwa.tujia.com/feapi/bingo/h5/promotion/search/searchhousebyhouseidlist?_apitsp=1565157575933
    //https://api.growingio.com/v2/1fa38dc3b3e047ffa08b14193945e261/web/action?stm=1565080559744

    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "api":path.join(__dirname,"./src/api"),
                "components":path.join(__dirname,"./src/components"),
                "views":path.join(__dirname,"./src/views"),
                "common":path.join(__dirname,"./src/common"),
                "utils":path.join(__dirname,"./src/utils"),
                "router":path.join(__dirname,"./src/router"),
                "store":path.join(__dirname,"./src/store"),
                "assets":path.join(__dirname,"./src/assets")
            }
        }
    }
}
//https://m.tujia.com/bingo/h5/portal/getPortalUnitModule
//https://m.tujia.com/bingo/h5/portal/getPortalUnitModule
//https://m.tujia.com/bingo/h5/config/getDownTujiaAppUrl?_apitsp=1564826231427
