import React from 'react';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';

class Footer extends React.Component {

  render() {
    return(
      <div className="FPage">
      <footer className="text-center text-white" >
        <div className="container pt-2">
          <section className="mb-2">
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="/errorPage"
              role="button"
              data-mdb-ripple-color="dark">
              <i className="fa fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              role="button"
              href="/errorPage"
              data-mdb-ripple-color="dark">
              <i className="fa fa-twitter"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              role="button"
              href="/errorPage"
              data-mdb-ripple-color="dark">
              <i className="fa fa-google"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              role="button"
              href="/errorPage"
              data-mdb-ripple-color="dark">
              <i className="fa fa-instagram"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              role="button"
              href="/errorPage"
              data-mdb-ripple-color="dark">
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              role="button"
              href="/errorPage"
              data-mdb-ripple-color="dark">
              <i className="fa fa-github"></i>
            </a>
          </section>
        </div>
      </footer>
      <footer className=" text-center text-lg-start">
      © 2021 Copyright,All Rights Reserved  
      </footer>
    </div>
    )
  }
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
