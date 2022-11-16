import FormatPrice from '../helper/FormatPrice';
import CartAmountToggle from './CartAmountToggle';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/cartContext';

const CartItem = ({ id, name, image, color, price, amount }) => {
  const {removeItem} = useCartContext()
  const setIncrease = () => {};
  const setDecrease = () => {};
  return (
    <div className="cart-heading grid grid-five--column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={name} />
          </figure>
        </div>

        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>Color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>

      {/* Cart Price */}

      <div className="cart-hide price">
        <FormatPrice price={price} />
      </div>

      {/* Qantity */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      {/* total Price */}

      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>

      {/* delete button */}
      <div>
        <FaTrash className="remove_icon" onClick={()=>removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
