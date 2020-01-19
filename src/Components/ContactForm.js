import React from "react";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xgeappnw"
        method="POST"
      >
         <fieldset>
            <div>
               <label htmlFor="contactName">Name <span className="required">*</span></label>
               <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
            </div>
            <div>
               <label htmlFor="contactEmail">Email <span className="required">*</span></label>
               <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
            </div>
            <div>
               <label htmlFor="contactSubject">Subject</label>
               <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
            </div>
            <div>
               <label htmlFor="contactMessage">Message <span className="required">*</span></label>
               <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
            </div>
            <div>
               {status === "SUCCESS" ? <p>Thanks!</p> : <button className="submit">Submit</button>}
               {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </div>
         </fieldset>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}