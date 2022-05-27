import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="title max-width ">Contact</div>
      <p className="max-width margin-auto">
        Lets get in touch and talk about your next project.
      </p>
      <form action="" target="" className="max-width margin-auto">
        <input
          className="input-style"
          type="text"
          placeholder="Name"
          required=""
          name="Name"
        />
        <input
          className="input-style"
          type="text"
          placeholder="Email"
          required=""
          name="Email"
        />
        <input
          className="input-style"
          type="text"
          placeholder="Subject"
          required=""
          name="Subject"
        />
        <input
          className="input-style"
          type="text"
          placeholder="Comment"
          required=""
          name="Comment"
        />
        <button className="send-btn-style" type="submit">
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
};

export default Contact;
