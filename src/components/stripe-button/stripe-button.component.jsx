import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButtom = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_NJiF5Qj9l4Z2jk2UW5X5CoL9004lu0FUzH';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout 
      label='Pay Now'
      name='React Test Store'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButtom;