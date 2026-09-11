import React, { useState } from "react";
import Contact from "./Contact";
import "./ContactListManager.css";

function ContactListManager() {
  const [contacts, setContacts] = useState([]);

  //  useState for all the 8 required fields


  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const [jobTitle, setJobTitle] = useState("");

  const [birthday, setBirthday] = useState("");

  const [notes, setNotes] = useState("");

  const [website, setWebsite] = useState("");

  const [favorite, setFavorite] = useState(false);


  // input handlers

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }

  function handleJobTitleChange(event) {
    setJobTitle(event.target.value);
  }

  function handleBirthdayChange(event) {
    setBirthday(event.target.value);
  }

  function handleNotesChange(event) {
    setNotes(event.target.value);
  }

  function handleWebsiteChange(event) {
    setWebsite(event.target.value);
  }

  function handleFavoriteChange(event) {
    setFavorite(event.target.checked);
  }

  // contact function

  function addContact() {
    if (name.trim() !== "" && email.trim() !== "") {
      const newContact = {
        name: name,
        email: email,
        phone: phone,
        job_title: jobTitle,
        birthday: birthday,
        notes: notes,
        website: website,
        favorite: favorite
      };

      setContacts([...contacts, newContact]);

    
      setName("");
      setEmail("");
      setPhone("");
      setJobTitle("");
      setBirthday("");
      setNotes("");
      setWebsite("");
      setFavorite(false);

    }
  }

  // Delete contact function
  
  function deleteContact(index) {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  }

  return (
    <div className="app-container">
      <h1>Contact List Manager</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter name..."
          value={name}
          onChange={handleNameChange}
          className="input-field"
        />

        <input
          type="email"
          placeholder="Enter email..."
          value={email}
          onChange={handleEmailChange}
          className="input-field"
        />

        <input
          type="tel"
          placeholder="Enter phone (+358...)..."
          value={phone}
          onChange={handlePhoneChange}
          className="input-field"
        />

        <input
          type="text"
          placeholder="Enter job title..."
          value={jobTitle}
          onChange={handleJobTitleChange}
          className="input-field"
        />

        <input
          type="date"
          value={birthday}
          onChange={handleBirthdayChange}
          className="input-field"
        />

        <input
          type="url"
          placeholder="Enter website (https://...)..."
          value={website}
          onChange={handleWebsiteChange}
          className="input-field"
        />

        <textarea
          placeholder="Enter notes..."
          value={notes}
          onChange={handleNotesChange}
          className="input-field"
        />

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={favorite}
            onChange={handleFavoriteChange}
          />
          Favorite
        </label>

        <button onClick={addContact} className="add-button">
          Add Contact
        </button>
      </div>

      <div className="contacts-section">
        <h2>Your Contacts ({contacts.length})</h2>
        {contacts.length === 0 ? (
          <p className="empty-message">No contacts yet. Add one to get started!</p>
        ) : (
          <ol className="contacts-list">
            {contacts.map((contact, index) => (
              <Contact
                key={index}
                contact={contact}
                onDelete={() => deleteContact(index)}
              />
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default ContactListManager;