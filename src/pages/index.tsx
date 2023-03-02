import { Link,BrowserRouter,Routes,Route } from "react-router-dom";

//BrowserRouter 声明当前要用一个非hash模式的路由
//Link 指定跳转的组建 to用来配置路由地址
//Routes 路由出口 路由对应的组件会在这里进行渲染
//route 路径和组件的对应关系 path对应路径 element 代表组件 成对出现

import Home from "./Home"
import About from "./About"

function Index (){
    return (
        <BrowserRouter>
            <Link to='/'></Link>
            <Link to='about'></Link>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/About" element={<About></About>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Index