import React, { useState } from "react";
import "./Feedback.css";

export default function Feedback() {
  
  const [form2Data, setForm2Data] = useState(null);
  const [form2Errors, setForm2Errors] = useState({});

  const handleForm1Submit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) return;

    const data = {
      name: form.name1.value,
      email: form.email.value,
      message: form.message.value,
    };
    alert(
      `The form has been submitted\nName: ${data.name}\nEmail: ${data.email}\nAnswer: ${data.message}`
    );
   
    form.reset();
  };

  const handleForm2Submit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newErrors = {};
    const phonePattern = /^\d{3}-\d{3}-\d{2}$/;

    const name2 = form.name2.value.trim();
    const surname = form.surname.value.trim();
    const phone = form.phone.value.trim();
    const datetime = form.datetime.value;
    const payment = form.payment.value;

    if (!name2) newErrors.name2 = "Please enter the First name";
    if (!surname) newErrors.surname = "Please enter the Last name";
    if (!phonePattern.test(phone)) newErrors.phone = "Please enter the Phone (000-000-00)";
    if (!datetime) newErrors.datetime = "Please select the data and time";
    if (!payment) newErrors.payment = "Please select the payment method";

    if (Object.keys(newErrors).length > 0) {
      setForm2Errors(newErrors);
      setForm2Data(null);
      return;
    }

    setForm2Errors({});
    const result = {
      name2,
      surname,
      phone,
      datetime,
      payment,
    };
    setForm2Data(result);
    form.reset();
  };

  return (
    <div className="feedback-container">
      
      <form id="form1" onSubmit={handleForm1Submit} className="feedback-form">
        <h2>Form feedback</h2>
        <label htmlFor="name1" className="feedback-label">Name:</label>
        <input type="text" id="name1" name="name1" required className="feedback-input" />

        <label htmlFor="email" className="feedback-label">Email:</label>
        <input type="email" id="email" name="email" required className="feedback-input" />

        <label htmlFor="message" className="feedback-label">Your feedback/question/suggestion:</label>
        <textarea id="message" name="message" rows="4" required className="feedback-textarea"></textarea>

        <button type="submit" className="feedback-button">Send</button>
      </form>

      <form id="form2" noValidate onSubmit={handleForm2Submit} className="feedback-form">
        <h2>Order form</h2>
        <label htmlFor="name2" className="feedback-label">First name:</label>
        <input type="text" id="name2" name="name2" className="feedback-input" />
        {form2Errors.name2 && <div className="feedback-error">{form2Errors.name2}</div>}

        <label htmlFor="surname" className="feedback-label">Last name:</label>
        <input type="text" id="surname" name="surname" className="feedback-input" />
        {form2Errors.surname && <div className="feedback-error">{form2Errors.surname}</div>}

        <label htmlFor="phone" className="feedback-label">Phone:</label>
        <input type="tel" id="phone" name="phone" placeholder="000-000-00" className="feedback-input" />
        {form2Errors.phone && <div className="feedback-error">{form2Errors.phone}</div>}

        <label htmlFor="datetime" className="feedback-label">Date and time:</label>
        <input type="datetime-local" id="datetime" name="datetime" className="feedback-input" />
        {form2Errors.datetime && <div className="feedback-error">{form2Errors.datetime}</div>}

        <label htmlFor="payment" className="feedback-label">Payment method:</label>
        <select id="payment" name="payment" defaultValue="" className="feedback-select">
          <option value="" disabled>
            Choose a payment method
          </option>
          <option value="cash">Cash</option>
          <option value="card">Card</option>
        </select>
        {form2Errors.payment && <div className="feedback-error">{form2Errors.payment}</div>}

        <button type="submit" className="feedback-button">Send</button>
      </form>

      {form2Data && (
        <div className="feedback-result">
          The form has been submitted
          {"\n"}First name: {form2Data.name2}
          {"\n"}Last name: {form2Data.surname}
          {"\n"}Phone: {form2Data.phone}
          {"\n"}Date and time: {form2Data.datetime}
          {"\n"}Payment method: {form2Data.payment}
        </div>
      )}
    </div>
  );
}
