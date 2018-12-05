import React from 'react';

class MortgageForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      annualSalary: '',
      // partnerName: '',
      // partnerSalary: null,
      // combinedSalary: null,
      // maxPropValue: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameEntry = this.handleNameEntry.bind(this);
    this.handleSalaryEntry = this.handleSalaryEntry.bind(this);
  }

  handleNameEntry(event){
    this.setState({name: event.target.value});
  }

  handleSalaryEntry(event){
    this.setState({annualSalary: parseInt(event.target.value)});
  }

  handleSubmit(event){
    event.preventDefault();
    const name = this.state.name.trim();
    const salary = this.state.annualSalary;
    if(!name || !salary) return; // breaks out if field is empty
    this.props.onFormSubmit({name: name, annualSalary: salary});

    // clear the form for the next time:
    this.setState({name: '', annualSalary: ''});
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
        <input type='submit' value='Calculate My Mortgage Potential'/>
      </form>

    )
  }


}



export default MortgageForm;
