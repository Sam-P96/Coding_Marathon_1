import React from "react";

function Contact(props) {
  return (
    <li className="contact-item">
      <div className="contact-info">
        <span className="contact-name"><strong>Name:</strong> {props.contact.name}</span>
        <span className="contact-email"><strong>Email:</strong> {props.contact.email}</span>
        <span className="contact-phone"><strong>Phone:</strong> {props.contact.phone}</span>
        <span className="contact-job"><strong>Job title:</strong> {props.contact.job_title}</span>
        <span className="contact-birthday"><strong>Birthday:</strong> {props.contact.birthday}</span>
        <span className="contact-notes"><strong>Notes:</strong> {props.contact.notes}</span>
        <span className="contact-website"><strong>Website:</strong> {props.contact.website}</span>
        <span className="contact-favorite">
          <strong>Favorite:</strong> {props.contact.favorite ? "Yes" : "No"}
        </span>
      </div>
      <button onClick={props.onDelete} className="delete-button">
        Delete
      </button>
    </li>
  );
}

export default Contact;