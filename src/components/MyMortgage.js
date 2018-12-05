import React from 'react';
import './MyMortgage.css'

const MyMortgage = (props) => {
  if(!props.name){
    return null;
  }

  // assuming 30 year term and 3% interest rate
  const mortgage = props.mortgage;
  const monthlyPayment = parseFloat(mortgage) * ((0.0025 * Math.pow(1.0025, 360))/(Math.pow(1.0025, 360) - parseFloat(1)));

  return(
    <>
      <div className='results'>
        <h3>Congratulations, {props.name}! With your annual salary, you may afford a mortgage for a property up to £{mortgage}. </h3>
        <p>For a 30-year mortgage term at 3% interest:</p>
        <h5>Example monthly payment: £{Math.round(monthlyPayment)} </h5>
      </div>
    </>
  )

}

export default MyMortgage;
