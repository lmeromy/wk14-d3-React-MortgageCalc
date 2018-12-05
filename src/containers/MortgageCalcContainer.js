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
      maxPropValue: '',
      rate: '',
      term: ''
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount(){
    console.log('hi!');
  }

  handleFormSubmit(submittedData){
    const calculatedMortgage = submittedData.deposit + submittedData.annualSalary * 3;
    this.setState({name: submittedData.name, maxPropValue: calculatedMortgage, rate: submittedData.rate, term: submittedData.term});

  }

  render(){
    return (
      <>
      <div className="mortgage-container">
        <Header/>
        {/* <NumberOfPeople/> */}
        <div className="mortgage-content">
          <MortgageForm onFormSubmit={this.handleFormSubmit}/>
          <MyMortgage  mortgage={this.state.maxPropValue}
                       name={this.state.name}
                       rate={this.state.rate}
                       term={this.state.term}/>
        </div>
      </div>

      </>
    )
  }

}


export default MortgageCalcContainer;
