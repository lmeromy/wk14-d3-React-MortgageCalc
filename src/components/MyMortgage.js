import React from 'react';

const MyMortgage = (props) => {
  if(!props.name){
    return null;
  }


  // NOT YET WORKING!
  // assuming 30 year term and 3% interest rate
  // const monthlyPayment = parseFloat({props.mortgage}) * ((0.0025 * Math.pow(1.0025, 360))/(Math.pow(1.0025, 360) - parseFloat(1)));

  return(
    <>
      <h3>Congratulations, {props.name}! With your annual salary, you may afford a mortgage for a property up to £{props.mortgage}. </h3>
      <h4>For a 30-year term at 3% interest:</h4>
      {/* <p>Monthly payment: monthlyPayment </p> */}
    </>
  )

}

export default MyMortgage;
