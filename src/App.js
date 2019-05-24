import React from 'react';
import './App.css';
import JsxTest from './JsxTest'
import CompType from './CompType'
import StateTest from './StateTest'
import CartSample from './CartSample'

function App() {
    return (
        <div className="App">
            {/* 自定义组件开头大写 */}
            {/* <JsxTest /> */}
            <JsxTest/>
            {/*组件类型*/}
            <CompType/>
            {/*状态*/}
            <StateTest/>
            {/*购物车*/}
            <CartSample/>
        </div>
    );
}

export default App;
