import '../aboutUs/aboutUs.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook,faTwitter,faInstagram,faLinkedin} from "@fortawesome/free-brands-svg-icons";


const AboutUs = () => {
    return (
        <div className='mainCard'>
            <div className="container">
                <div className="row text-center">

                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="bg-white rounded shadow-sm py-5 px-4"><img
                            src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" alt="" width="100"
                            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                            <h5 className="mb-0">Manuella Nevoresky</h5><span
                                className="small text-uppercase text-muted">Designer - Founder</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item"><a href="#" className="social-link">
                                    <i className="fa fa-facebook-f "><FontAwesomeIcon icon={faFacebook}/> </i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link">
                                    <i className="fa fa-twitter"><FontAwesomeIcon icon={faTwitter}/> < /i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link">
                                    <i className="fa fa-instagram" > <FontAwesomeIcon icon={faInstagram}/></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link">
                                    <i className="fa fa-linkedin"> <FontAwesomeIcon icon={faLinkedin}/></i></a></li>

                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-2.jpg" alt="" width="100"
                                                                                   className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                            <h5 className="mb-0">Samuel Hardy</h5><span className="small text-uppercase text-muted">Developer</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item"><a href="#" className="social-link">
                                    <i className="fa fa-facebook-f "><FontAwesomeIcon icon={faFacebook}/> </i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link">
                                    <i className="fa fa-twitter"><FontAwesomeIcon icon={faTwitter}/> < /i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link">
                                    <i className="fa fa-instagram" > <FontAwesomeIcon icon={faInstagram}/></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link">
                                    <i className="fa fa-linkedin"> <FontAwesomeIcon icon={faLinkedin}/></i></a></li>

                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="bg-white rounded shadow-sm py-5 px-4">
                            <img src="https://bootstrapious.com/i/snippets/sn-team/teacher-1.jpg" alt="" width="100"
                                 className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                            <h5 className="mb-0">Tom Sunderland</h5><span className="small text-uppercase text-muted">Developer - Founder</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item"><a href="#" className="social-link">
                                    <i className="fa fa-facebook-f "><FontAwesomeIcon icon={faFacebook}/> </i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link">
                                    <i className="fa fa-twitter"><FontAwesomeIcon icon={faTwitter}/> < /i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link">
                                    <i className="fa fa-instagram" > <FontAwesomeIcon icon={faInstagram}/></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link">
                                    <i className="fa fa-linkedin"> <FontAwesomeIcon icon={faLinkedin}/></i></a></li>

                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="bg-white rounded shadow-sm py-5 px-4"><img
                            src="https://bootstrapious.com/i/snippets/sn-team/teacher-7.jpg" alt="" width="100"
                            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                            <h5 className="mb-0">John Tarly</h5><span
                                className="small text-uppercase text-muted">CEO - Founder</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item"><a href="#" className="social-link">
                                    <i className="fa fa-facebook-f "><FontAwesomeIcon icon={faFacebook}/> </i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link">
                                    <i className="fa fa-twitter"><FontAwesomeIcon icon={faTwitter}/> < /i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link">
                                    <i className="fa fa-instagram" > <FontAwesomeIcon icon={faInstagram}/></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link">
                                    <i className="fa fa-linkedin"> <FontAwesomeIcon icon={faLinkedin}/></i></a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs