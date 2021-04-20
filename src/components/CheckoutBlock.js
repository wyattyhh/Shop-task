import React from 'react';
import {subTotal} from '../methods/calculate';
import './CheckoutBlock.css';
import {Divider} from 'antd';
import GooglePayButton from '@google-pay/button-react';


function CheckoutBlock(props) {
  const {cartItems} = props


  return (
    <div className="checkout-bar">
      <div className="price-tag">
        <div>Subtotal</div>
        <div>${subTotal(cartItems)}</div>
      </div>
      <Divider/>
      <GooglePayButton environment="TEST" paymentRequest={
        {
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '12345678901234567890',
            merchantName: 'Demo Merchant',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: subTotal(cartItems),
            currencyCode: 'USD',
            countryCode: 'US'
          },
          shippingAddressRequired: true,
          callbackIntents: ['PAYMENT_AUTHORIZATION'],
        }
      }
                       onLoadPaymentData={(paymentRequest) => {
                         console.log('success', paymentRequest);}}
                       onPaymentAuthorized={(paymentData) => {
                         console.log('Payment Authorised Success', paymentData);
                         return { transactionState: "SUCCESS"}
                       }}
                       existingPaymentMethodRequired="false"
                       buttonColor="white"
                       buttonType="buy"
      />
    </div>
  );
}

export default CheckoutBlock;