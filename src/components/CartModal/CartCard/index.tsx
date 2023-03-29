import { StyledCartCard } from "./styles";
import trash from "../../../assets/trash.svg";
import { StyledButton } from "../../../styles/Buttons";
import { iProductCartProps } from "../FilledCart/@types";
import { useContext } from "react";
import { CartContext } from "../../../providers/CartContext";

const CartCard = ({ productInCart }: iProductCartProps) => {
  const { addFromCart, deductFromCart, removeFromCart } =
    useContext(CartContext);

  return (
    <StyledCartCard>
      <div>
        <div>
          <img src={productInCart.img} alt={productInCart.name} />
        </div>
        <div>
          <h4>{productInCart.name}</h4>
          <div>
            <StyledButton
              onClick={() => deductFromCart(productInCart)}
              buttonSize="small"
              buttonStyle="greyLight"
            >
              -
            </StyledButton>
            <p>{productInCart.quantity}</p>
            <StyledButton
              onClick={() => addFromCart(productInCart)}
              buttonSize="small"
              buttonStyle="greyLight"
            >
              +
            </StyledButton>
          </div>
        </div>
      </div>
      <button onClick={() => removeFromCart(productInCart)}>
        <img src={trash} alt="Remove item from cart" />
      </button>
    </StyledCartCard>
  );
};

export default CartCard;
