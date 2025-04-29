import React from 'react'

const ContactSection = () => {
  return (
    <section className="contact-section container text-dark py-5 d-flex flex-column flex-md-row align-items-start">
      {/* left column */}
      <div className="d-flex flex-column w-75 w-md-50 me-md-4 mb-4 mb-md-0 contact-left">
        <h2 className="mb-4 contact-heading">Contact Details</h2>
        <p className="mb-2 ms-4 contact-info">
          <i className="fas fa-envelope me-2" />
          FFPathway@gmail.com
        </p>
        <p className="mb-3 ms-4 contact-info">
          <i className="fas fa-phone me-2" />
          Phone: 714-414-2300
        </p>
        <ul className="ms-5 d-flex list-unstyled gap-3">
          <li>
            <a href="#" aria-label="facebook">
              <img
                src="/src/assets/dark-icons/facebook.avif"
                alt="facebook"
                width={30}
              />
            </a>
          </li>
          <li>
            <a href="#" aria-label="instagram">
              <img
                src="/src/assets/dark-icons/instagram.avif"
                alt="instagram"
                width={30}
              />
            </a>
          </li>
          <li>
            <a href="#" aria-label="youtube">
              <img
                src="/src/assets/dark-icons/youtube.avif"
                alt="youtube"
                width={30}
              />
            </a>
          </li>
          <li>
            <a href="#" aria-label="linkedin">
              <img
                src="/src/assets/dark-icons/linkedin.avif"
                alt="linkedin"
                width={30}
              />
            </a>
          </li>
        </ul>
      </div>

      {/* right column */}
      <div className="d-flex flex-column w-100 w-md-50 contact-right">
        <form aria-label="Contact Form">
          <div className="row g-3">
            <div className="col-md-4">
              <label htmlFor="firstName" className="form-label">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="form-control border border-danger rounded-0"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="lastName" className="form-label">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="form-control border border-danger rounded-0"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="email" className="form-label">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-control border border-dark rounded-0"
              />
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="form-control border border-dark rounded-0"
              />
            </div>
            <div className="col-12">
              <button type="submit" className="send-btn w-100 py-2">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection
