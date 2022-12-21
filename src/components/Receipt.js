const Receipt = (props) => {
    return (
        <div className = "orders">
            <h2>{props.person}</h2>
            <h3>ordered a {props.order.main.toLowerCase()} with:</h3>

            <h4>{props.order.protein}, {props.order.rice}, and {props.order.sauce}.</h4>
            
            <h4>They're drinking {props.order.drink}.</h4>
            <h4>Cost: ${props.order.cost}</h4>
        </div>
    )
    }
    
    export default Receipt 