import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

function CartDropdown({ cartItems, history, toggleCartHidden }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty!</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          toggleCartHidden();
          history.push('/checkout');
        }}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDipatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default withRouter(
  connect(mapStateToProps, mapDipatchToProps)(CartDropdown)
);
