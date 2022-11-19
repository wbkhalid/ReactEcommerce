import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const CartAmountToggle = ({ amount, setIncrease, setDecrease }) => {
  
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={()=>setDecrease()}>
          <AiOutlineMinus />
        </button>
        <div className="amount-style">{amount}</div>
        
        <button onClick={()=>setIncrease()}>
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
