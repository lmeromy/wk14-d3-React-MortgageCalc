import React from 'react';
import './MortgageForm.css';


class MortgageForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      annualSalary: '',
      deposit: ''
      // NOT YET ADDED OPTION FOR 2 PEOPLE
      // partnerName: '',
      // partnerSalary: null,
      // combinedSalary: null,
      // maxPropValue: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameEntry = this.handleNameEntry.bind(this);
    this.handleSalaryEntry = this.handleSalaryEntry.bind(this);
    this.handleDepositEntry = this.handleDepositEntry.bind(this);
  }

  handleNameEntry(event){
    this.setState({name: event.target.value});
  }

  handleSalaryEntry(event){
    this.setState({annualSalary: parseInt(event.target.value)});
  }

  handleDepositEntry(event){
    this.setState({deposit: parseInt(event.target.value)});
  }

  handleSubmit(event){
    event.preventDefault();
    const name = this.state.name.trim();
    const salary = this.state.annualSalary;
    const deposit = this.state.deposit;
    if(!name || !salary || !deposit) return; // breaks out if field is empty
    this.props.onFormSubmit({name: name, annualSalary: salary, deposit: deposit});

    // clear the form for the next time:
    this.setState({name: '', annualSalary: '', deposit: ''});
  }

  render(){
    return(
      <form className="mortgage-form" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type='text'
               placeholder='Enter your name'
               value={this.state.name}
               onChange={this.handleNameEntry}/>
        </label>
        <label>
          Average Annual Salary:
        <input type='number'
               placeholder='Enter your annual salary'
               value={this.state.annualSalary}
               onChange={this.handleSalaryEntry}/>
        </label>
        <label>
          Deposit Available:
        <input type='number'
               placeholder='Enter your deposit'
               value={this.state.deposit}
               onChange={this.handleDepositEntry}/>
        </label>
        <input type='submit' className = 'submitButton' value='Calculate My Mortgage Potential'/>
      </form>
    )
  }

}



export default MortgageForm;
