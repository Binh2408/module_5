const { useState } = require("react");

function useIncrement(addAmount) {
    const [count, setCount] = useState(0);
    function increase () {
        //function callback để giải quyết bất đồng bộ
        //nếu dùng count+addAmount nếu bấm liên tục nhanh thì nó sẽ ko theo kịp
        setCount(prev => prev+addAmount);
    }
    return [count,increase];
}

export default useIncrement ;

