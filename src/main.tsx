import React from 'react'
import ReactDOM from 'react-dom/client'
//初始化一般放最前面
import "reset-css"
//然后是UI框架

//然后是全局样式
import "./assets/style/global.scss"
//最后是组建样式

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
