import React from 'react';
import './MyMortgage.css'

const MyMortgage = (props) => {
  if(!props.name){
    return null;
  }

  // calculations based on the assumption of max property value = annual salary * 3 and information from here: https://www.wikihow.com/Calculate-Mortgage-Payments
  const mortgage = props.mortgage;
  const rate = (props.rate)/100/12;  // annual interest rate divided by 100 to get fraction divided by 12 to get monthly rate
  const term = (props.term)*12; // number of months of payments in the full term of the mortgage
  const monthlyPayment = parseFloat(mortgage) * ((rate * Math.pow((1 + rate), term))/(Math.pow((1 + rate), term) - parseFloat(1)));

  return(
    <>
      <div className='results'>
        <h3>Congratulations, {props.name}! With your annual salary, you may afford a mortgage for a property up to £{mortgage}. </h3>
        <p>For a {props.term} mortgage term at {props.rate}% interest:</p>
        <h4>Example monthly payment: £{Math.round(monthlyPayment)} </h4>
      </div>
    </>
  )

}

export default MyMortgage;
