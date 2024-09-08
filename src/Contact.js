import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({
    fname: '',
    lname: '',
    mobile: '',
    email: '',
    message: ''
  });

  const Change = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
   // console.log(e.target.value);
   e.target.setCustomValidity('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const Message = `
      We will get back to you Soon!
      
      First Name: ${form.fname}
      Last Name: ${form.lname}
      Mobile: ${form.mobile}
      Email: ${form.email}
      Message: ${form.message}
    `;
    
    alert(Message);
    
   
    setForm({
      fname: '',
      lname: '',
      mobile: '',
      email: '',
      message: ''
    });
  };


  const handleInvalid = (e) => {
    switch (e.target.id) {
      case 'fname':
        e.target.setCustomValidity('First Name is Mandatory');
        break;
      case 'lname':
        e.target.setCustomValidity('Last Name is Mandatory');
        break;
      case 'mobile':
        e.target.setCustomValidity('Mobile number is Mandatory');
        break;
      case 'email':
        e.target.setCustomValidity('Email is Mandatory');
        break;
      case 'message':
        e.target.setCustomValidity('Message is Mandatory');
        break;
      default:
        break;
    }
  };



  return (
    <div id="contact">
      <form onSubmit={handleSubmit}>
        <fieldset id="field">
          <legend><h5>Contact Us</h5></legend>
          <table>
            <tbody>
              <tr>
                <th>First Name:</th>
                <td><input id="fname" type="text" value={form.fname} onChange={Change} required  onInvalid={handleInvalid}/></td>
              </tr>
              <tr>
                <th>Last Name:</th>
                <td><input id="lname" type="text" value={form.lname} onChange={Change} required  onInvalid={handleInvalid}/></td>
              </tr>
              <tr>
                <th>Mobile:</th>
                <td><input id="mobile" type="tel" pattern="[0-9]{10}" maxLength={10} value={form.mobile} onChange={Change} required  onInvalid={handleInvalid}/></td>
              </tr>
              <tr>
                <th>Email:</th>
                <td><input id="email" type="email" value={form.email} onChange={Change} required  onInvalid={handleInvalid}/></td>
              </tr>
              <tr>
                <th>Message:</th>
                <td><textarea id="message" value={form.message} onChange={Change} required  onInvalid={handleInvalid}></textarea></td>
              </tr>
              <tr>
                <td colSpan="2"><input type="submit" value="Submit" /></td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </form>
    </div>
  );
}

export default Contact;
