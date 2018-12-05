import React from 'react';
import MortgageForm from '../components/MortgageForm';
import MyMortgage from '../components/MyMortgage';
import Header from '../components/Header';

class MortgageCalcContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      maxPropValue: ''
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.calculateMyMortgage = this.calculateMyMortgage.bind(this);
  }

  componentDidMount(){
    console.log('hi!');
  }

  handleFormSubmit(submittedData){
    // submittedData.id = Date.now();
    // this.setState({data: submittedData});
    const calculatedMortgage = submittedData.annualSalary * 3;
    this.setState({name: submittedData.name, maxPropValue: calculatedMortgage});

  }

  render(){
    return (
      <>
      <div className="mortgage-container">
        <Header/>
        <MortgageForm onFormSubmit={this.handleFormSubmit}/>
        <MyMortgage name={this.state.name} mortgage={this.state.maxPropValue}/>
      </div>

      </>
    )
  }

}


export default MortgageCalcContainer;
