import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/web_logo.png'

function Main() {

    const [headerScroll, setheaderScroll] = useState(false)
    const [mobile, setmobile] = useState()
    const [Page, setPage] = useState()

    useEffect(() => {

        const fixedHeader = () => {
            if (window.pageYOffset > 150) {
                setheaderScroll(true)
            } else {
                setheaderScroll(false)
            }
        }
        window.addEventListener('scroll', fixedHeader)
    }, [])
    const [openDropdown, setOpenDropdown] = useState(null);
      const toggleDropdown = (index) => {
          setOpenDropdown(openDropdown === index ? null : index);
      };

    return (
        <>
            <header className={headerScroll ? "fixed fix_style" : "fixed"} >
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="Logo" className="logo_web"/>
                        </Link>
                        <button className={`navbar-toggler ${mobile && "collapsed"}`} onClick={() => setmobile(mobile === true ? false : true)} type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <div className={`toggle-wrap ${mobile && "active"}`} onClick={() => setmobile(mobile === true ? false : true)}>
                                <span className="toggle-bar"></span>
                            </div>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                {/*<li className="nav-item">*/}
                                {/*    <Link className="nav-link" to="/about">*/}
                                {/*        About us*/}
                                {/*    </Link>*/}
                                {/*</li>*/}
                                {/*<li className="nav-item has_dropdown">*/}
                                {/*    <Link className="nav-link" to="#"  onClick={() => toggleDropdown(1)}>*/}
                                {/*        Pages*/}
                                {/*    </Link>*/}
                                {/*    <span className="drp_btn ">*/}
                                {/*        <i className="icofont-rounded-down" onClick={() => toggleDropdown(1)}/>*/}
                                {/*    </span>*/}
                                {/*    {openDropdown === 1 && (*/}
                                {/*    <div className="sub_menu show">*/}
                                {/*        <ul>*/}
                                {/*            <li>*/}
                                {/*                <Link to="/blog-list">Blog List</Link>*/}
                                {/*            </li>*/}
                                {/*            <li>*/}
                                {/*                <Link to="/blog-detail">Single Blog</Link>*/}
                                {/*            </li>*/}
                                {/*            <li>*/}
                                {/*                <Link to="/sign-in">Sign In</Link>*/}
                                {/*            </li>*/}
                                {/*            <li>*/}
                                {/*                <Link to="/sign-up">Sign Up</Link>*/}
                                {/*            </li>*/}
                                {/*        </ul>*/}
                                {/*    </div>*/}
                                {/*    )}*/}
                                {/*</li>*/}
                                {/*<li className="nav-item">*/}
                                {/*    <Link className="nav-link" to="/pricing">*/}
                                {/*        Pricing*/}
                                {/*    </Link>*/}
                                {/*</li>*/}
                                {/*<li className="nav-item">*/}
                                {/*    <Link className="nav-link" to="/reviews">*/}
                                {/*        Reviews*/}
                                {/*    </Link>*/}
                                {/*</li>*/}
                                {/*<li className="nav-item">*/}
                                {/*    <Link className="nav-link" to="/blog-list">*/}
                                {/*        Blog*/}
                                {/*    </Link>*/}
                                {/*</li>*/}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/delete-me">
                                        My Data
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">
                                        Contact
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <div className="btn_block">
                                        <Link className="nav-link dark_btn" to="/contact">
                                            Download
                                        </Link>
                                        <div className="btn_bottom" />
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {mobile &&
                            <>
                                <div className={`navbar-collapse collapse ${mobile && "show"}`} id="navbarSupportedContent" style={{}} >
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/about">
                                                About us
                                            </Link>
                                        </li>
                                        <li className="nav-item has_dropdown">
                                    <Link className="nav-link" to="#"  onClick={() => toggleDropdown(1)}>
                                        Pages
                                    </Link>
                                    <span className="drp_btn ">
                                        <i className="icofont-rounded-down" onClick={() => toggleDropdown(1)}/>
                                    </span>
                                    {openDropdown === 1 && (
                                    <div className="sub_menu show">
                                        <ul>
                                            <li>
                                                <Link to="/blog-list">Blog List</Link>
                                            </li>
                                            <li>
                                                <Link to="/blog-detail">Single Blog</Link>
                                            </li>
                                            <li>
                                                <Link to="/sign-in">Sign In</Link>
                                            </li>
                                            <li>
                                                <Link to="/sign-up">Sign Up</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    )}
                                </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/pricing">
                                                Pricing
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/reviews">
                                                Reviews
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/blog-list">
                                                Blog
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contact">
                                                Contact
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <div className="btn_block">
                                                <Link className="nav-link dark_btn" to="/contact">
                                                    Download
                                                </Link>
                                                <div className="btn_bottom" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        }
                    </nav>
                </div >
            </header>
        </>
    )
}

export default Main