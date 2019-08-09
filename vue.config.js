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
