import React, { Component } from 'react';

//Home Page
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: '',
    };
  }

    render() {
      const {
        token,
      } = this.state;

        return (
          <div className="Home">
            <header className="masthead">
              <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                  <div className="col-lg-10 align-self-end">
                    <h1 className="text-uppercase text-white font-weight-bold">This page is a placeholder</h1>
                    <hr className="divider my-4"/>
                  </div>

                  <div className="col-lg-8 align-self-baseline">
                    <p className="text-white-75 font-weight-light mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
                    <a className="btn btn-info btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                  </div>
                </div>
              </div>
            </header>

            <section className="page-section" id="about">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8 text-center">
                    <h2 className="text-white mt-0">We've got what you need!</h2>
                    <hr className="divider light my-4"/>
                    <p className="text-white-50 mb-4">Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!</p>
                    <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
                  </div>
                </div>
              </div>
            </section>

            <section className="page-section" id="services">
              <div className="container">
                <h2 className="text-center mt-0">At Your Service</h2>
                <hr className="divider my-4"/>
                <div className="row">
                  <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                      <i className="fas fa-4x fa-gem text-primary mb-4"></i>
                      <h3 className="h4 mb-2">Sturdy Themes</h3>
                      <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                      <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                      <h3 className="h4 mb-2">Up to Date</h3>
                      <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                      <i className="fas fa-4x fa-globe text-primary mb-4"></i>
                      <h3 className="h4 mb-2">Ready to Publish</h3>
                      <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                      <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                      <h3 className="h4 mb-2">Made with Love</h3>
                      <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="portfolio">
              <div className="container-fluid p-0 d-flex justify-content-around">
                <div className="row no-gutters">
                  <div className="col-lg-4 col-sm-6">
                      <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">
                          Category
                        </div>
                        <div className="project-name">
                          Project Name
                        </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                      <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">
                          Category
                        </div>
                        <div className="project-name">
                          Project Name
                        </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                      <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">
                          Category
                        </div>
                        <div className="project-name">
                          Project Name
                        </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                      <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">
                          Category
                        </div>
                        <div className="project-name">
                          Project Name
                        </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                      <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">
                          Category
                        </div>
                        <div className="project-name">
                          Project Name
                        </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                      <div className="portfolio-box-caption p-3">
                        <div className="project-category text-white-50">
                          Category
                        </div>
                        <div className="project-name">
                          Project Name
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="page-section" id="contact">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8 text-center">
                    <h2 className="mt-0">Let's Get In Touch!</h2>
                    <hr className="divider my-4"/>
                    <p className="text-muted mb-5">Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 ml-auto text-center">
                    <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                    <div>+1 (202) 555-0149</div>
                  </div>
                  <div className="col-lg-4 mr-auto text-center">
                    <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                    <a className="d-block" href="mailto:contact@yourwebsite.com">contact@yourwebsite.com</a>
                  </div>
                </div>
              </div>
            </section>

            <section className="page-section text-white">
              <div className="container text-center">
                <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
                <a className="btn btn-light btn-xl" href="https://startbootstrap.com/themes/creative/">Download Now!</a>
              </div>
            </section>
          </div>
        )
    }
}

export default Home;
