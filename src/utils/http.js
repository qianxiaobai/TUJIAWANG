// import axios from "axios";
// import qs from "qs";  
// //下载插件 npm i qs -S   
// //对数据序列化做兼容
// //qs.stringify() 对数据进行序列化
// const server = axios.create({  //自定义配置一个axios实例
//     //baseURL:'',
//     timeout:5000,   //如果请求超过了5000ms，就会被中断
//     withCredentials:true  //跨域请求是否需要凭证
// })


// // 思路
// // 在响应体内会有很多数据，我们只需要的data。
// // get方法内不能写data参数，post内有data参数，但是综合写法内没有params
// //所以要做一次拦截，判断一下是什么方法，如果是get就将data放入params中

// // axios({
// //     method:"get",
// //     data:{//get方式发送，服务器无法收到data，只有post可以
// //         name,
// //         password
// //     }
// // })
// // 在数据进入服务器之前拦截get方式的信息，将信息放入params中

// //添加请求的拦截器
// server.interceptors.request.use(config=>{  //config是为请求提供的配置信息，就是axios的配置项（综合写法）
//    if(config.method == "get"){
//        //将数据传递给params
//     //    config.params = {...config.data};
//    }else if(config.method == "post"){ //axios请求方式不止get、post，所以要用else if
//         //实际开发过程中不一定都是json数据格式，据后端而定
//        config.headers["content-type"] = "application/x-www-form-urlencoded" //数据序列化    将post提交的值转换为 这种形式key=val&key=val 
//       //config.data = qs.stringify(config.data); //对数据进行序列化
//    }

//    //将处理好的处理给了服务器
//    return config;
// },(err)=>{//第二个参数
//     Promise.reject(err);  //抛出错误，返回一个新的promise实例
// })


// //添加响应的拦截
// server.interceptors.response.use(res=>{ //res就是跨域获取的所有信息，我们只需要里面的data
    
//     if(res.statusText =="OK"){ //res方法
//         return res.data; //返回res中的data，得到需要的data
//     }
// },(err)=>{
//     Promise.reject(err);
// })

// //进一步整体封装
// //// 封装该步后config.method判断可以删除
// export default (method,url,data)=>{
//     //判断请求方式
//     if(method.toUpperCase() == "GET"){
//         //如果请求方式为get，将data传递进params中
//        return server.get(url,{ //返回值为promise，只需return出去即可
//             params:data
//         })
//     }else if(method.toUpperCase() == "POST"){
//         return server.post(url,data)
//     }
// }
import axios from "axios";
import qs from "qs"
// import loading from "../lib/loading/index.js"

// let vm = loading()
const server = axios.create({
   // baseURL:"",
    timeout:5000,
    withCredentials:true
})


server.interceptors.request.use((config)=>{
    console.log(222);
    if(config.method.toUpperCase() == "GET"){
        console.log(333);
       // config.params = {...config.data}
    }else if(config.method.toUpperCase() == "POST"){
        config.headers["content-type"] = "appliaction/x-www-form-urlencoded";
        //config.data = qs.stringify(config.data)
    }
    
    // vm.handlemount();
    console.log(config);
    return config;
},(err)=>{
    alert(1)
    Promise.reject(err);
})


server.interceptors.response.use((res)=>{
    if(res.statusText == "OK"){
    //    vm.handleDestory();
       
        return res.data
    }

},(err)=>{
    Promise.reject(err);
})



export default (method,url,data={})=>{
    console.log(method,url,data);
    if(method.toUpperCase() == "GET"){
       console.log(11);
        return server.get(url,{
            params:data
        })
    }else if(method.toUpperCase() == "POST"){
        return server.post(url,data);
    }
}