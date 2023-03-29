import { ModalBox, StyledModal } from "./styles";
import close from "../../assets/close.svg";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";
import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";
import { useOutClickDiv } from "../../hooks/hook";

const CartModal = () => {
  const { closeCartModal, cartProducts } = useContext(CartContext);
  const modalRef = useOutClickDiv(closeCartModal);

  return (
    <StyledModal>
      <ModalBox ref={modalRef}>
        <header>
          <h3>Carrinho de compras</h3>
          <button onClick={closeCartModal}>
            <img src={close} alt="fechar modal" />
          </button>
        </header>
        {cartProducts?.length ? <FilledCart /> : <EmptyCart />}
      </ModalBox>
    </StyledModal>
  );
};

export default CartModal;
