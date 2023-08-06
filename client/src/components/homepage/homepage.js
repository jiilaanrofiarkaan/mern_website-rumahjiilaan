import "./homepage.css"
import vector1 from "./img/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.avif"
import vector2 from "./img/online-learning-isometric-concept_1284-17947.avif"
import user1 from "./img/2020_cb.jpg"
import user2 from "./img/https___cdn-images-1.medium.com_max_2000_1_Y6l_FDhxOI1AhjL56dHh8g.jpeg"
import user3 from "./img/3021752-inline-i-1-why-square-designed-its-new-offices-to-work-like-a-city.webp"
import user4 from "./img/Jack-Kelly_avatar_1559658819-400x400.jpg"
import partner1 from "./img/black-wheat-and-mortarboard.webp"
import partner2 from "./img/campus-collage-university-education-logo-design-template_7492-63.avif"
import partner3 from "./img/campus-collage-university-education-logo-design-template_7492-62.avif"
import partner4 from "./img/encircled-branches-and-book.webp"
import partner5 from "./img/campus-collage-university-education-logo-design-template_7492-64.avif"

const Homepage = ({setLoginUser}) => {

    return (
        <div className="homepage">
            <div className='body'>
                <div>
                    <nav>
                        <div className="wrapper">
                        <div className="logo"><a href>RumahJiilaan.</a></div>
                        <div className="menu">
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#courses">Courses</a></li>
                                <li><a href="#tutors">Tutors</a></li>
                                <li><a href="#partners">Partners</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li><a href="#logout" className="tbl-biru" onClick={() => setLoginUser({})}>Log Out</a></li>
                            </ul>
                        </div>
                        </div>
                    </nav>
                    <div className="wrapper">
                        {/* untuk home */}
                        <section id="home">
                        <img src={vector1} />
                        <div className="kolom">
                            <p className="deskripsi">Belajar Programming #dirumahaja</p>
                            <h2>Tetap Sehat, Tetap Semangat</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, nobis.</p>
                            <p><a href className="tbl-pink">Pelajari Lebih Lanjut</a></p>
                        </div>
                        </section>
                        {/* untuk courses */}
                        <section id="courses">
                        <div className="kolom">
                            <p className="deskripsi">You Will Need This</p>
                            <h2>Online Courses</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deserunt voluptatibus possimus blanditiis reiciendis. Qui, facilis! Delectus exercitationem dolores sapiente?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deserunt voluptatibus possimus blanditiis reiciendis. Qui, facilis! Delectus exercitationem dolores sapiente?</p>
                            <p><a href className="tbl-biru">Pelajari Lebih Lanjut</a></p>
                        </div>
                        <img src={vector2} />
                        </section>
                        {/* untuk tutors */}
                        <section id="tutors">
                        <div className="tengah">
                            <div className="kolom">
                            <p className="deskripsi">Our Top Tutors</p>
                            <h2>Tutors</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, optio!</p>
                            </div>
                            <div className="tutor-list">
                            <div className="kartu-tutor">
                                <img src={user1} />
                                <p>Jason Lee Scott</p>
                            </div>
                            <div className="kartu-tutor">
                                <img src={user2} />
                                <p>John Doe</p>
                            </div>
                            <div className="kartu-tutor">
                                <img src={user3} />
                                <p>Michael Dell</p>
                            </div>
                            <div className="kartu-tutor">
                                <img src={user4} />
                                <p>Bruce Wills</p>
                            </div>
                            </div>
                        </div>
                        </section>
                        {/* untuk partners */}
                        <section id="partners">
                        <div className="tengah">
                            <div className="kolom">
                            <p className="deskripsi">Our Top Partners</p>
                            <h2>Partners</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi magni tempore expedita sequi. Similique rerum doloremque impedit saepe atque maxime.</p>
                            </div>
                            <div className="partner-list">
                            <div className="kartu-partner">
                                <img src={partner1} />
                            </div>
                            <div className="kartu-partner">
                                <img src={partner2} />
                            </div>
                            <div className="kartu-partner">
                                <img src={partner3} />
                            </div>
                            <div className="kartu-partner">
                                <img src={partner4} />
                            </div>
                            <div className="kartu-partner">
                                <img src={partner5} />
                            </div>
                            </div>
                        </div>
                        </section>
                    </div>
                    <div id="contact">
                        <div className="wrapper">
                        <div className="footer">
                            <div className="footer-section">
                            <h3>RumahJiilaan.</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, culpa!</p>
                            </div>
                            <div className="footer-section">
                            <h3>About</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, culpa!</p>
                            </div>
                            <div className="footer-section">
                            <h3>Contact</h3>
                            <p>Politeknik Negeri Jakarta</p>
                            <p>Kota Depok, Indonesia</p>
                            </div>
                            <div className="footer-section">
                            <h3>Social</h3>
                            <p><b>YouTube: </b>Programming di RumahJiilaan</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div id="copyright">
                        <div className="wrapper">
                        © 2023. <b>RumahJiilaan.</b> All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage