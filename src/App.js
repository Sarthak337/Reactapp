import React, { Component } from 'react'
import './App.css'
import arrowmark from './back.png'
import contact from './contact(1).png'
import add from './add.png'
import fileimg from './fileimg.png'
import axios from 'axios'





class App extends Component {
  constructor(props){
    super(props)
        this.state={
           contacts:[],
           COMPANY_NAME:'',
           SALUTATION: 'NA' ,
           name:'',
           referred_by:'NA',
           designation:'NA',
           department:'',
           email:'',
           mob_no:'',
           remarks:'',
           COLLEGE_CHOICES:'',
           y_of_p:'',
           degree:'',
           LinkedIn:'',
           Facebook:'',
           Twitter:'',
           Working_Since:'',
           OFFICE_DETAILS:'NA',
           Board_Line_Number:'',
           Address:'',
           Country:'',
           City:'',
           RECRUITMENT_CHOICES:'',
        }
        
    }
    handleCOMPANY_NAMEChange = (event) => {
        this.setState ({
            co_name: event.target.value
        })
      }
    handleSALUTATIONChange = (event) => {
      this.setState({
          SALUTATION: event.target.value
      })
   }
   handleNameChange = (event) => {
       this.setState ({
           name: event.target.value
       })
   }
   handleReferred_byChange = (event) => {
       this.setState({
           referred_by: event.target.value
       })
   }
   handleDesignationChange = (event) => {
       this.setState({
           designation: event.target.value
       })
   }
   handleDepartmentChange = (event) => {
       this.setState({
           department: event.target.value
       })
    }
    handleEmailChange = (event) => {
       this.setState({
           email: event.target.value
       })
   }
   handleMob_NoChange = (event) => {
       this.setState({
           mob_no: event.target.value
       })
   }
   handleRemarksChange = (event) => {
       this.setState({
           remarks: event.target.value
       })
   }
   handleCOLLEGE_CHOICESChange = (event) => {
    this.setState({
        COLLEGE_CHOICES: event.target.value
    })
  }
 handleYearofpassingChange = (event) => {
     this.setState ({
         y_of_p: event.target.value
     })
 }
 handleDegreeChange = (event) => {
     this.setState({
         degree: event.target.value
     })
 }

 handleSchoolChange =(event) => {
     this.setState({
         selectschool: event.target.value
     })
 }
 handleStreamChange =(event) => {
     this.setState({
         stream: event.target.value
     })
 }
 handleLinkedInChange =(event) => {
     this.setState({
        LinkedIn: event.target.value
     })
 }
 handleFacebookChange =(event) => {
     this.setState({
        Facebook: event.target.value
     })
 }
 handleTwitterChange =(event) => {
     this.setState({
         Twitter: event.target.value
     })
 }
 handleMonthChange =(event) => {
     this.setState({
        Working_Since: event.target.value
     })
 }
 handleYearChange =(event) => {
     this.setState({
        Working_Since: event.target.value
     })
 }
 handleOFFICE_DETAILChange = (event) => {
  this.setState({
      OFFICE_DETAILS: event.target.value
  })
}
handleBoard_line_Change = (event) => {
   this.setState ({
       Board_Line_Number: event.target.value
   })
}
handleAddressChange = (event) => {
   this.setState({
       Address: event.target.value
   })
}
handleCountryChange = (event) => {
   this.setState ({
       country: event.target.value
   })
}
handleCityChange = (event) => {
   this.setState ({
       city: event.target.value
   })
}
handleRECRUITMENT_CHOICESChange = (event) => {
    this.setState ({
        RECRUITMENT_CHOICES: event.target.value
    })
  }

handleSubmit = (event) => {
   alert(`${this.state.co_name} ${this.state.SALUTATION} ${this.state.name} ${this.state.referred_by} ${this.state.designation}
   ${this.state.department} ${this.state.email} ${this.state.mob_no} ${this.state.remarks}
   ${this.state.COLLEGE_CHOICES} ${this.state.y_of_p} ${this.state.degree} 
   ${this.state.LinkedIn} ${this.state.Facebook} ${this.state.Twitter}
   ${this.state.Working_Since} ${this.state.OFFICE_DETAILS} ${this.state.Board_Line_Number} 
   ${this.state.Address} ${this.state.Country} ${this.state.City} 
   ${this.state.Institution} ${this.state.RECRUITMENT_CHOICES} `)
   
   
  
axios.post('https://127.0.0.1:8000',this.state)
.then(response => {
 console.log(response)
})
.catch(error =>{
    console.log(error)
})
axios.post('https://127.0.0.1:8000/Personal_Information',this.state)
.then(response => {
 console.log(response)
})
.catch(error =>{
    console.log(error)
})
axios.post('https://127.0.0.1:8000/Pedigree',this.state)
.then(response => {
 console.log(response)
})
.catch(error =>{
    console.log(error)
})
axios.post('https://127.0.0.1:8000/Social_media_link',this.state)
.then(response => {
 console.log(response)
})
.catch(error =>{
    console.log(error)
})
axios.post('https://127.0.0.1:8000/Office_Detail',this.state)
.then(response => {
 console.log(response)
})
.catch(error =>{
    console.log(error)
})

   console.log(this.state)


  event.preventDefault()

}











 render(){
  return (
    
    <div>  
      <form onSubmit={this.handleSubmit}>
      <div className="navi"><img src={contact} alt="l" className="contact" ></img>&nbsp;&nbsp;Contact Info <div className="rgt"> <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-grid-3x3-gap-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"/>
      </svg>&nbsp;&nbsp;&nbsp;<svg width="1.3em" height="1.3em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
      <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
      </svg></div>
      </div> 

    <div className="singlel"> &nbsp;&nbsp;&nbsp;
        <img src={arrowmark} alt="l" className="contact" ></img>
   
        <select className="company1" value={this.state.co_name} onChange={this.handleCOMPANY_NAMEChange}>
        <option>NA</option>
        <option>TCS</option>
        <option>INFOSYS</option>
        <option>ACCENTURE</option>
        <option>AMAZON</option>
        <option>HIGHRADIUS</option>
        </select>

      <div className="rgt"><button className="butn"  type="submit" onSubmit={this.handleSave}>Save</button></div>

    </div>



















      <div className="allform">
      <div className="App">
            <div className="formone">
                
                <div className="formtitle">Personal Information</div>
                
                <label>Salutation<span className="redv">*</span></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select className="company" value={this.state.SALUTATION} onChange={this.handleSALUTATIONChange}>
                <option value="NA">NA</option>
                <option value="Colonel">Colonel</option>
                <option value="Dr.">Dr.</option>
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
                </select>
                <br></br>

                <label>Name<span className="redv">*</span></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="company" type="text" value={this.state.name}
                onChange={this.handleNameChange}/><br></br>

                <label> Referred By</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select className="company" value={this.state.referredby} onChange={this.handleReferredbyChange}>
                <option value="NA">NA</option>
                <option value="Mr.A">Mr.A</option>
                <option value="Mr.B">Mr.B</option>
                <option value="Mr.C">Mr.C</option> 
                </select><br></br>

                <label> Designation</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select className="company" value={this.state.designation} onChange={this.handleDesignationChange}>
                <option value="NA">NA</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="Administration">Administration</option>
                <option value="Accounts">Accounts</option>
                <option value="IT">IT</option>
                <option value="Management">Management</option>
                <option value="Marketing">Marketing</option>
                <option value="Technical">Technical</option>
                <option value="Purchase">Purchase</option>
                <option value="Others">Others</option>
                </select><br></br>
  
                <label>Department</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="company" type="text" value={this.state.department}
                onChange={this.handleDepartmentChange}/><br></br>

                <label>Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="company" type="text" value={this.state.email}
                onChange={this.handleEmailChange}/><br></br>

                <label>Mobile Number</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="company3" type="text" value={this.state.pin}
                onChange={this.handlePinChange}></input>
                <input className="company2" type="text" value={this.state.number}
                onChange={this.handleMob_NoChange}/>&nbsp;
                 <img src={add} alt="addfield" height="15" width="15" ></img><br></br>  


                <label>Remarks</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <textarea className="broadinput" value={this.state.remarks} onChange={this.handleRemarksChange}></textarea>  
             </div>   
        </div>  










        <div className="App">
            <div className="formone">
                <div className="formtitle">Pedigree</div>
                
                <label> Institution</label>&nbsp; &nbsp;
                <input type="radio" value="KIIT" name="Institution" onChange={this.handleCOLLEGE_CHOICESChange} ></input>KIIT &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <input type="radio" value="Others" name="Institution" onChange={this.handleCOLLEGE_CHOICESChange} ></input>others

                <br></br>


                <label>Year of passout</label>
                <input className="company" type="text" value={this.state.yearofpassing}
                onChange={this.handleYearofPassingChange}/><br></br>

                <label> Degree&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input className="company" type="text" value={this.state.degree}
                onChange={this.handleDegreeChange}/>
                <br></br>

                <label>Working since&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <select className="workingsince" value={this.state.Working_Since} onChange={this.handleMonthChange}>
                <option value="month">month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
                
                </select>
                <select className="workingsince" value={this.state.Working_Since} onChange={this.handleYearChange}>
                <option value="Year">Year</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                </select>  <br></br><br></br>

                
                <div className="formtitle">Social media Links</div>  
                <label> LinkedIn&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                 <input className="company" type="text" value={this.state.LinkedIn}
                onChange={this.handleLinkedInChange}/><br></br>
                
                <label> Facebook&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                 <input className="company" type="text" value={this.state.Facebook}
                onChange={this.handleFacebookChange}/><br></br>

                <label>Twitter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                 <input className="company" type="text" value={this.state.Twitter}
                onChange={this.handleTwitterChange}/><br></br>

            </div> 
          
        </div>  
















        
          
        <div className="App">
            <div className="formone">
                <div className="formtitle">Office Details</div>
               
                <label>Office Type</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select className="company" value={this.state.OFFICE_DETAILS} onChange={this.handleOFFICE_DETAILChange}>
                <option value="NA">NA</option>
                <option value="Head Office">Head Office</option>
                <option value="Factory / Plant">Factory / Plant</option>
                <option value="Branch Office">Branch Office</option>
                <option value="Project Site">Project Site</option>
                <option value="Regional Office">Regional Office</option>
                <option value="Registered Office">Registered Office</option>
                <option value="Zonal Office">Zonal Office</option>
                </select>&nbsp;&nbsp;&nbsp;
                <img src={fileimg} alt="addfield" height="15" width="15" ></img>
                <br></br>

                

                
                <label>Board Line<br/> Number</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input  type="text"  className="company2" value={this.state.Board_Line_Number}
                onChange={this.handleBoard_line_Change}/>&nbsp;
                <img src={add} alt="addfield" height="15" width="15" ></img><br></br> 
                
                <label>Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <textarea className="broadinput" value={this.state.address} onChange={this.handleAddressChange}></textarea> <br></br>

                <label>Country</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="company" type="text" value={this.state.country}
                onChange={this.handleCountryChange}/><br></br> 
               
                <label>City</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="company" type="text" value={this.state.city}
                onChange={this.handleCityChange}/><br></br> <br></br>
               
                <label></label>
           
                <input type="radio" value="Recruitments are taken from the office" name="rec" className="rbtn" onChange={this.handleRECRUITMENT_CHOICESChange}></input><div className="last">Recruitments are taken from the office</div><br></br>
                <input type="radio" value="Yet to be confirmed" name="rec" className="rbtn" onChange={this.handleRECRUITMENT_CHOICESChange}></input><div className="last">Yet to be confirmed</div>
            
                <br></br>
                </div>   
        </div>    


    </div>
     
    </form>
   
    <div className="g"></div>
    </div>
    
     
  );
}
}


export default App;
