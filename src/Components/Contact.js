import React, { useState } from 'react';
const Contact = () =>{
    const [data,setdata]=useState({
       
        fname:"",
        add:"",
        no:"",
        email:"",
        msg:"",
    })
    const InputEvent=(event)=>{
        const {name,value}=event.target;
        setdata((prevvalue)=>{
            return{
                ...prevvalue,
                [name]: value,
            }
        })
    }
    const FormSubmit=(e)=>{
        e.preventDefault();
        alert(`Name: ${data.fname}, Address: ${data.add}, Phone: ${data.no}, Email: ${data.email}, Message:${data.msg}`)
    }
    return (
        <>
           <div className='my-5'>
            <h1 className="text-center text-light"> Contact US</h1>
           </div>
           <div className='container contact_div'>
            <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
                <form onSubmit={FormSubmit}>
                    <div class="mb-3 text-light">
                        <label for="exampleFormControlInput1" className="form-label">
                            Full Name
                        </label>
                        <input 
                            type="text"
                            name="fname"
                            value={data.fname}
                            onChange={InputEvent} 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="Enter Your Name" 
                        />
                    </div>
                    <div className="mb-3 text-light">
                        <label for="exampleFormControlInput1" className="form-label">
                            Address
                        </label>
                        <input 
                            type="text"  
                            name="add" 
                            value={data.add}
                            onChange={InputEvent} 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="Enter Your Address" 
                        />
                    </div>
                    <div className="mb-3 text-light">
                        <label for="exampleFormControlInput1" className="form-label">
                            Phone Number
                        </label>
                        <input 
                            type="number" 
                            name="no" 
                            value={data.no}
                            onChange={InputEvent} 
                            class="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="Enter your Number" 
                        />
                    </div>
                    <div className="mb-3 text-light">
                        <label for="exampleFormControlInput1" className="form-label">
                            Email address
                        </label>
                        <input 
                            type="email"   
                            name="email" 
                            value={data.email}
                            onChange={InputEvent} 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="name@example.com" 
                        />
                    </div>
                    <div className="mb-3 text-light">
                        <label for="exampleFormControlTextarea1" className="form-label">
                            Message
                        </label>
                        <textarea 
                            className="form-control"  
                            name="msg" 
                            value={data.msg}
                            onChange={InputEvent} 
                            id="exampleFormControlTextarea1" 
                            rows="3"  
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
           
             </div>
             
           </div>
        </>
    );
}

export default Contact;