import React from 'react';
import MortgageForm from '../components/MortgageForm';
import MyMortgage from '../components/MyMortgage';
import Header from '../components/Header';
// import NumberOfPeople from '../components/NumberOfPeople';

class MortgageCalcContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      maxPropValue: ''
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount(){
    console.log('hi!');
  }

  handleFormSubmit(submittedData){
    const calculatedMortgage = submittedData.deposit + submittedData.annualSalary * 3;
    this.setState({name: submittedData.name, maxPropValue: calculatedMortgage});

  }

  render(){
    return (
      <>
      <div className="mortgage-container">
        <Header/>
        {/* <NumberOfPeople/> */}
        <MortgageForm onFormSubmit={this.handleFormSubmit}/>
        <MyMortgage name={this.state.name} mortgage={this.state.maxPropValue}/>
      </div>

      </>
    )
  }

}


export default MortgageCalcContainer;
