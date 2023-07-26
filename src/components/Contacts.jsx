import React from "react";

const Contacts = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form action="">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div>
            <label htmlFor="">Query</label>
            <input
              type="text"
              placeholder="Tell us about your query..."
              required
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contacts;
