import React from 'react'

const LayoutsFooter = () => (
  <footer className="bg-dark text-center text-white">
    {/* <!-- Grid container --> */}
    <div className="container p-4 pb-0">
      {/* <!-- Section: Social media --> */}
      <section className="mb-4">
        {/* <!-- Facebook --> */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        ><i className="fab fa-facebook-f" /></a>

        {/* <!-- Twitter --> */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        ><i className="fab fa-twitter" /></a>

        {/* <!-- Google --> */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        ><i className="fab fa-google" /></a>

        {/* <!-- Instagram --> */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        ><i className="fab fa-instagram" /></a>

        {/* <!-- Linkedin --> */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        ><i className="fab fa-linkedin-in" /></a>

        {/* <!-- Github --> */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        ><i className="fab fa-github" /></a>
      </section>
      {/* <!-- Section: Social media --> */}
    </div>
    {/* <!-- Grid container --> */}

    {/* <!-- Copyright --> */}
    <div className="text-center p-3">
      © 2021 Copyright:
      <a id="footer-company-url" className="text-white" href="https://www.iz.io">     iz.io</a>
    </div>
    {/* <!-- Copyright --> */}
  </footer>
)

export default LayoutsFooter
