import {FC} from "react";
import logo from "../../assets/logo.svg";

interface testProps {
    content: string
}

const Footer: FC<testProps> = ({content}) => {
    return (
        <footer className="footer">
            <div className="footer__wrapper flex container my-5 mx-auto px-5 pt-32">
                <div className="footer-top">
                    <div className="footer-social">
                        <div className="footer-social__wrapper">
                            <img src={logo} alt="Logo" className="nav-logo-img w-11"/>
                            <span className="footer-social-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus dolor exercitationem impedit libero nostrum numquam soluta sunt tempora veniam!
                            </span>
                            <div className="footer-social__links-container">
                                <ul>
                                    <li><a href=""> <i className="icon-facebook"></i></a></li>
                                    <li><a href=""> <i className="icon-instagram"></i></a></li>
                                    <li><a href=""> <i className="icon-linkedin"></i></a></li>
                                    <li><a href=""> <i className="icon-github"></i></a></li>
                                    <li><a href=""> <i className="icon-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-links-grid">
                        <div className="footer-links-grid__wrapper">
                            <div className="footer-links-grid__column">
                                <span className="footer__column-title">
                                    Title
                                </span>
                                <ul>
                                    <li><a href="#">item1</a></li>
                                    <li><a href="#">item2</a></li>
                                    <li><a href="#">item3</a></li>
                                    <li><a href="#">item4</a></li>
                                    <li><a href="#">item5</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-links-grid__wrapper">
                            <div className="footer-links-grid__column">
                                <span className="footer__column-title">
                                    Title
                                </span>
                                <ul>
                                    <li><a href="#">item1</a></li>
                                    <li><a href="#">item2</a></li>
                                    <li><a href="#">item3</a></li>
                                    <li><a href="#">item4</a></li>
                                    <li><a href="#">item5</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-links-grid__wrapper">
                            <div className="footer-links-grid__column">
                                <span className="footer__column-title">
                                    Title
                                </span>
                                <ul>
                                    <li><a href="#">item1</a></li>
                                    <li><a href="#">item2</a></li>
                                    <li><a href="#">item3</a></li>
                                    <li><a href="#">item4</a></li>
                                    <li><a href="#">item5</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-links-grid__wrapper">
                            <div className="footer-links-grid__column">
                                <span className="footer__column-title">
                                    Title
                                </span>
                                <ul>
                                    <li><a href="#">item1</a></li>
                                    <li><a href="#">item2</a></li>
                                    <li><a href="#">item3</a></li>
                                    <li><a href="#">item4</a></li>
                                    <li><a href="#">item5</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bott">
                    <span>
                        {content}
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer