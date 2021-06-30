import axios from 'axios'

let http = axios.create({
    baseURL:'/api',
    timeout:1000,
    headers:{
        'content-type':'application-type/json',
        // 'token':'xxx'    
    }
})

http.interceptors.request.use(req=>{//拦截前端的请求
    let token = sessionStorage.getItem('token');
    token && (req.headers['token']=token);
})

http.interceptors.response.use(res=>{//拦截后台给前端的响应，token有过期时间
    //如果后台token时间快过期，想要设置新的返回到前端的token，要设置
    res.data.token && sessionStorage.setItem('token',res.data.token);
    return res;
},err=>{
    //如果ajax出现错误:token失效，401是token的问题：后台没有授权，需要跳转到登录页
    switch(res.states){
        case 401:{
            sessionStorage.removeItem('token');
            //返回登录页
            //window.location.href='/login'
        }
    }
})

export default http;
//配置ajax的参数
//使用是用：http({
    //xxx
///})