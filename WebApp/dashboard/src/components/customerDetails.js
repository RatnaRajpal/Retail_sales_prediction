import React from "react"
import { Button , Form} from 'semantic-ui-react';
class CustomerDetails extends React.Component{
  constructor()
  {
    super()
    this.state={
      ch:0,
      step:0,
      fname:"",
      lname:"",
      mobileno:"",
      date:"",
      timefrom:"",
      timeto:"",
    

    }
    this.nextstep= this.nextstep.bind(this);
    this.prevstep=this.prevstep.bind(this);
    this.handlechange=this.handlechange.bind(this);
    this.handleonclick=this.handleonclick.bind(this);
   
  }
  saveAndContinue = (e) => {
    e.preventDefault();
    this.nextstep();
}

back  = (e) => {
    e.preventDefault();
    if (e.target.value==0)  {
      this.setState(
        {
          step:0,
        ch:0});
          
    }
    
    else{
    this.prevstep();
}
}

/*WILL GET DATA FROM THE DATASET
componentDidMount() {
  fetch("REFERENCE TO DATASET")
      .then(response => response.json())
      .then(response => {
          const {memes} = response.data
          this.setState({ allMemeImgs: memes })
      })
}
*/


  nextstep(){
    if (this.state.ch==1 ){
      if (this.state.step==-1) {
        this.setState({
          step:1
        });
      }
      else{
      this.setState({
        step:this.state.step+1
      });
    }
  }
    else if(this.state.ch==2){
    this.setState({
      step:this.state.step+4
    });
  }
  else if(this.state.ch==3 ){
  
    this.setState({
      step:this.state.step+5
    });
     

  }
  else if(this.state.ch==0) {
    this.setState({
      step:-1
    });
  }
 
  else {
    this.setState({
      step:0
    });
   
  }
  }
  prevstep(){
    this.setState({
      step:this.state.step-1,
    });
  }
  
  handleonclick(event){
    this.setState({
      ch:event.target.value
    });
  }
  handlechange(event) {
    const {name, value} = event.target
    this.setState({
        [name]: value
    });
    
}


render(){
  const {step} = this.state;
  const {fname,lname,mobileno,date ,timefrom,timeto} = this.state;
  
  switch(step) {
    case -1:
     return(
     <div className="Final">
      
     <hr className="hrfinal"/>
     
     <h1>Customer Details:</h1>
     <input className="infinal" type="radio" id="choice"  name="ch"  value="1" onClick={this.handleonclick} />
     <label>Add a new customer</label><br/>
     <input className="infinal" type="radio" id="choice" name="ch"  value="2" onClick={this.handleonclick} />
     <label>View details of All Customers</label><br/>
     <input className="infinal" type="radio" id="choice" name="ch" value="3" onClick={this.handleonclick} />
     <label>View Customers who visited during a particular time span</label><br/>
     <Button className="infinal" onClick={this.saveAndContinue} className="bttn">Save And Continue </Button>
     <footer> * Please enter a valid choice</footer>
     
     <hr className="hrbottom"/>
    
  
   </div>
     )
   case 0:
     return(
     <div className="Final">
      
     <hr className="hrfinal"/>
     
     <h1>Customer Details:</h1>
     <input className="infinal" type="radio" id="choice"  name="ch"  value="1" onClick={this.handleonclick} />
     <label>Add a new customer.</label><br/>
     <input className="infinal" type="radio" id="choice" name="ch"  value="2" onClick={this.handleonclick} />
     <label>View details of All Customers.</label><br/>
     <input className="infinal" type="radio" id="choice" name="ch" value="3" onClick={this.handleonclick} />
     <label>View Customers on the basis of timestamp.</label><br/>
     <Button className="infinal" onClick={this.saveAndContinue} className="bttn">Save And Continue </Button>
     <hr className="hrbottom"/>
     
  
   </div>
   )

  case 1:
    
      return(
        
        <div className="Final">
        <Form>
        
          <hr className="hrfinal"/>
        <h1 >Enter customer Details:</h1>
        <Form.Field>
            <label>First Name: </label>
            <input className="bttnfinal"
            name="fname"
            value={this.state.fname}
            placeholder='First Name'
            type="text"
            onChange={this.handlechange}
        
            />
        </Form.Field>
        
        
        <Form.Field>
            <label>Last Name: </label>
            <input className="bttnfinal"
            name="lname"
            value={this.state.lname}
            placeholder='Last Name'
            type="text"
            onChange={this.handlechange}
           
            />
        </Form.Field>
        
        <Form.Field>
          
            <label>Mobile Number: </label>
            <input className="bttnfinal"
            name="mobileno"
            value={this.state.mobileno}
            placeholder='Mobile Number'
            type="tel"
            onChange={this.handlechange}
            
            />
        </Form.Field>
        <Form.Field>
            <label>Date: </label>
            <input className="bttnfinal"
            name="date"
            type="date"
            value={this.state.date}
            placeholder='Date'
            onChange={this.handlechange}
           
            />
        </Form.Field>
        
        <Button value={this.state.step} onClick={this.back} className="bttn">Back</Button>
        <Button onClick={this.saveAndContinue} className="bttn">Save And Continue </Button>
        
         <hr className="hrbottom"/>
    </Form>
   
    </div>
      );
    

  case 2:
    
             return (
              <div className="Final">
                 
              <hr className="hrfinal"/>
              <h1>Customer Details:</h1>
              <p>Customer name: {this.state.fname} {this.state.lname}<br /><br/>
              Mobile Number: {this.state.mobileno}</p>
            <Button value={this.state.step} onClick={this.back} className="bttn">Back</Button>
            <Button onClick={this.saveAndContinue} className="bttn" type="submit">Confirm and Submit</Button>
            <hr className="hrbottom"/>
            </div>
             );
  case 3:
      return (  <div className="Final"> 
      <hr className="hrfinal"/>
      
        <h1 >Details Saved Successfully</h1>
     
      <Button value="0" onClick={this.back} className="bttn">Back to main page</Button>
      <hr className="hrbottom"/>
    
    </div>);

   case 4:
     if(this.state.fname  == "")
     {
       return(
       //Added for the time being
       <div className="Final">
         <hr className="hrfinal"/>
         <h1>There is no content to display</h1>  
         <Button value="0" onClick={this.back} className="bttn">Back to main page</Button>
         <hr className="hrbottom"/>
         </div>)}
       
       
      else {
      return(
        //Will return the most recent entry
             <div className="Final"> <hr className="hrfinal"/>
            <h1>Customer Details:</h1>
            <p>Customer name: {this.state.fname} {this.state.lname}<br /><br/>
            Mobile Number: {this.state.mobileno}</p>
            
            <Button value="0" onClick={this.back} className="bttn">Back to main page</Button>
        
         <hr className="hrbottom"/>
          </div>
          )}
      

    case 5:
      return(
      
        <Form className="Final">
      
          <hr className="hrfinal"/>
        <h1>Enter the time Period: </h1>
        <br/>
        <Form.Field>
        <label>From: </label>
            <input className="bttnfinal"
            name="timefrom"
            value={this.state.timefrom}
            placeholder='From'
            type="date"
            onChange={this.handlechange}/>
           
           
            </Form.Field>
            <Form.Field>
            <label>To: </label>
            <input className="bttnfinal"
            name="timeto"
            value={this.state.timeto}
            placeholder='To'
            type="date"
            onChange={this.handlechange}/>
           
            </Form.Field>
            
            
            <Button onClick={this.saveAndContinue} className="bttn">Next </Button>
            <hr className="hrbottom"/>
       </Form>
      
      );
      default:
        return(
          
          <div className="Final">
            <hr className="hrfinal"/>
            
            <h1 >No Content to display</h1>
            <Button value="0" onClick={this.back} className="bttn">back to main page</Button>
            <hr className="hrbottom"/></div>
        )
             } //Switch
        
   }//render
}
export default CustomerDetails;
