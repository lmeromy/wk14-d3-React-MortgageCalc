import React from 'react';
import './MortgageForm.css';


class MortgageForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      annualSalary: '',
      deposit: '',
      rate: '',
      term: ''
      // NOT YET ADDED OPTION FOR 2 PEOPLE
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameEntry = this.handleNameEntry.bind(this);
    this.handleSalaryEntry = this.handleSalaryEntry.bind(this);
    this.handleDepositEntry = this.handleDepositEntry.bind(this);
    this.handleRateEntry = this.handleRateEntry.bind(this);
    this.handleTermEntry = this.handleTermEntry.bind(this);
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

  handleRateEntry(event){
    this.setState({rate: parseInt(event.target.value)});
  }

  handleTermEntry(event){
    this.setState({term: parseInt(event.target.value)});
  }

  handleSubmit(event){
    event.preventDefault();
    const name = this.state.name.trim();
    const salary = this.state.annualSalary;
    const deposit = this.state.deposit;
    const rate = this.state.rate;
    const term = this.state.term;

    if(!name || !salary || !deposit || !rate || !term) return; // breaks out if field is empty
    this.props.onFormSubmit({name: name, annualSalary: salary, deposit: deposit, rate: rate, term: term});

    // clear the form for the next time:
    this.setState({name: '', annualSalary: '', deposit: '', rate: '', term: ''});
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
        <label>
          Mortgage Interest Rate (Annual %):
        <input type='number'
               placeholder='Interest rate'
               value={this.state.rate}
               onChange={this.handleRateEntry}/>
        </label>
        <label>
          Mortgage Term (Years):
        <input type='number'
               placeholder='Length of mortgage'
               value={this.state.term}
               onChange={this.handleTermEntry}/>
        </label>
        <input type='submit' className = 'submitButton' value='Calculate My Mortgage Potential'/>
      </form>
    )
  }

}



export default MortgageForm;
