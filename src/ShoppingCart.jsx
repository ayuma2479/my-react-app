import { useState } from "react";

const ShoppingCart = () => {
    const [count, setCount] = useState(1);

    return (
    <div className="cart-page">
        <div className="cart-card">
            <h1 className="cart-title">ショッピングカート</h1>
        <div className="count-panel">
            <p className="count-label">選択した個数:</p>
        <div className="count-box">{count}</div>
    </div>

    <div className="button-row">
        <button className="plus-button" onClick={() => setCount(count + 1)}>
            個数を増やす
        </button>
        <button className="minus-button" onClick={() => setCount(Math.max(0, count - 1))}>
            個数を減らす
        </button>
    </div>
        <button 
        className="cart-button" 
        onClick={() => alert(`カートに${count}個の商品を追加しました`)}>カートに入れる
        </button>
    </div>
</div>
    )
}

export default ShoppingCart
