import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IYiRIKwGu38mtt2gUShiIjydV0sZEHMytIKrq42wx0KKFAQnTJ7huHrheBNXACXbU0ni2vRVHljawGxXf2TzIyp00HeTE1dwu';

    const onToken = token => {
        console.log(token);

        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Bryce CRWN Clothing Ltd.'
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

export default StripeCheckoutButton;
