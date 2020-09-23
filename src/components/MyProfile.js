import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {

  state = {
    name:'',
    gender:'',
    discription:'',
    check:''
  }

  handleChange = (event) => {   
    this.setState({      
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(this.state));
  }


  render() {
    return (
      <form className='myForm' onSubmit={this.handleSubmit}>     
        <h3>My Profile</h3>       
        <label className="baseicLabe">Name</label>           
        <input type='text' name='name' className="imputName"
               onChange={this.handleChange}
               value={this.state.name} placeholder="Your name"/>       
        <label className="baseicLabe">Gender</label>             
        <select name='gender'   className="selectGender"
                onChange={this.handleChange} 
                value={this.state.gender} >
          <option value='Male'>Male</option>
          <option value='Femal'>Female</option>
        </select>        
        <label className="baseicLabe">Description</label>        
        <textarea name='discription'  className="discription"
                  onChange={this.handleChange}
                  value={this.state.discription} placeholder="Description about yourself"></textarea>
        <br></br>
        <input type="checkbox" name='check' className="checkBox" 
               value="true" onChange={this.handleChange} /> 
        <span className="checkInfo">I have read the term of conduct</span>        
        <input className='submit' type='submit' value='Submit' 
                  disabled={!this.state.name || !this.state.gender 
                  || !this.state.discription || !this.state.check}/> 
      </form>
    );
  }
}

export default MyProfile;


