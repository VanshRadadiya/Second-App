import './App.css';
import { FaGavel, FaRegThumbsUp, FaRegSmile, FaTrophy, FaFacebookF, FaTwitter, FaBasketballBall, FaInstagram, FaSignal, FaMotorcycle, FaGraduationCap, FaUsers, FaBuilding, FaBriefcase, FaHourglassHalf, FaBriefcaseMedical, FaStar, FaQuoteRight, FaUserSecret, FaCalendarAlt, FaComment, FaRegEnvelope,FaGooglePlusG} from "react-icons/fa";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import img1 from './images/slider.jpeg';
import img2 from './images/service1.jpeg';
import img3 from './images/service2.jpeg';
import img4 from './images/service3.jpeg';
import img5 from './images/service4.jpeg';
import img6 from './images/success1.jpeg';
import img7 from './images/success2.jpeg';
import img8 from './images/success3.jpeg';
import img9 from './images/success4.jpeg';
import img10 from './images/success5.jpeg';
import img11 from './images/success6.jpeg';
import img12 from './images/client1.jpeg';
import img13 from './images/latest1.jpeg';
import img14 from './images/latest2.jpeg';
import img15 from './images/latest3.jpeg';

function App() {
  return (
    <div>
      {/* HEADER START */}
      <div className='header1'>
        <div className='container'>
          <div className='d-flex justify-content'>
            <div className='logo'>
              <a>Tribunal</a>
            </div>
            <nav>
              <div className='main-menu'>
                <ul className='d-flex'>
                  <li><a href=''>Home</a></li>
                  <li><a href=''>About</a></li>
                  <li><a href=''>Service</a></li>
                  <li><a href=''>Success Story</a></li>
                  <li><a href=''>Pricing</a></li>
                  <li><a href=''>Blog</a></li>
                  <li><a href=''>Contact</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* HEADER END */}

      {/* Slider Start */}
      <div className='slider'>
        <img src={img1}></img>
      </div>
      {/* Slider End */}

      {/* ICON PART START */}
      <div className='container spacery icon'>
        <div className='d-flex'>
          <div className='w-25 icon-p'>
            <FaGavel className='icon-1'></FaGavel>
            <h4>17</h4>
            <p>Total Lawyers</p>
          </div>
          <div className='w-25 icon-p'>
            <FaRegThumbsUp className='icon-1'></FaRegThumbsUp>
            <h4>5</h4>
            <p>Project Completed</p>
          </div>
          <div className='w-25 icon-p'>
            <FaRegSmile className='icon-1'></FaRegSmile>
            <h4>6</h4>
            <p>Happy Clients</p>
          </div>
          <div className='w-25 icon-p'>
            <FaTrophy className='icon-1'></FaTrophy>
            <h4>0</h4>
            <p>Award Won</p>
          </div>
        </div>
      </div>
      {/* ICON PART END */}

      {/* OUR SERVIVE START */}
      <div className='container spacery service'>
        <div className='head'>
          <h1>Our Services</h1>
          <span className='icon-line'>
            <FaGavel className='icon'></FaGavel>
          </span>
        </div>

        <h2>WELCOME TO TRIBUNAL</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        <div className='d-flex service-img'>
          <div className='w-25'>
            <img src={img2}></img>
            <div className='service-content'>
              <h5>David Warner</h5>
              <h6>CEO/Founder</h6>
              <div className='social'>
                <FaFacebookF className='social-icon'></FaFacebookF>
                <FaTwitter className='social-icon'></FaTwitter>
                <FaBasketballBall className='social-icon'></FaBasketballBall>
                <FaInstagram className='social-icon'></FaInstagram>
              </div>
            </div>
          </div>
          <div className='w-25'>
            <img src={img3}></img>
            <div className='service-content'>
              <h5>Rabaka Jackson</h5>
              <h6>Lawyer</h6>
              <div className='social'>
                <FaFacebookF className='social-icon'></FaFacebookF>
                <FaTwitter className='social-icon'></FaTwitter>
                <FaBasketballBall className='social-icon'></FaBasketballBall>
                <FaInstagram className='social-icon'></FaInstagram>
              </div>
            </div>
          </div>
          <div className='w-25'>
            <img src={img4}></img>
            <div className='service-content'>
              <h5>Sania Anderson</h5>
              <h6>Lawyer</h6>
              <div className='social'>
                <FaFacebookF className='social-icon'></FaFacebookF>
                <FaTwitter className='social-icon'></FaTwitter>
                <FaBasketballBall className='social-icon'></FaBasketballBall>
                <FaInstagram className='social-icon'></FaInstagram>
              </div>
            </div>
          </div>
          <div className='w-25'>
            <img src={img5}></img>
            <div className='service-content'>
              <h5>Steve Anderson</h5>
              <h6>Lawyer</h6>
              <div className='social'>
                <FaFacebookF className='social-icon'></FaFacebookF>
                <FaTwitter className='social-icon'></FaTwitter>
                <FaBasketballBall className='social-icon'></FaBasketballBall>
                <FaInstagram className='social-icon'></FaInstagram>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* OUR SERVIVE END */}

      {/* OUR SERVIVE-2 START */}
      <div className='container spacery service2'>
        <div className='head'>
          <h1>Our Services</h1>
          <span className='icon-line'>
            <FaGavel className='icon'></FaGavel>
          </span>
        </div>

        <div className='d-flex flex-wrap service2-content'>

          <div className='w-25'>
            <FaSignal className='service2-icon'></FaSignal>
            <h4>Capital Market</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
          </div>
          <div className='w-25'>
            <FaMotorcycle className='service2-icon'></FaMotorcycle>
            <h4>Personal Injury</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
          </div>
          <div className='w-25'>
            <FaGraduationCap className='service2-icon'></FaGraduationCap>
            <h4>Education Law</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
          </div>
          <div className='w-25'>
            <FaUsers className='service2-icon'></FaUsers>
            <h4>Family Law</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
          </div>
          <div className='w-25'>
            <FaBuilding className='service2-icon'></FaBuilding>
            <h4>Bank & Financial</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
          </div>
          <div className='w-25'>
            <FaBriefcase className='service2-icon'></FaBriefcase>
            <h4>Corporate Law</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
          </div>
          <div className='w-25'>
            <FaHourglassHalf className='service2-icon'></FaHourglassHalf>
            <h4>Industrial Law</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
          </div>
          <div className='w-25'>
            <FaBriefcaseMedical className='service2-icon'></FaBriefcaseMedical>
            <h4>Health Law</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
          </div>
        </div>

        <div className='template'>
          <h1>Do you want to purchase our template?</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
          <button>Purchase Now</button>
        </div>
      </div>
      {/* OUR SERVIVE-2 END */}

      {/* SUCCESS STORY START */}
      <div className='container spacery success'>
        <div className='head'>
          <h1>Our Success Story</h1>
          <span className='icon-line'>
            <FaGavel className='icon'></FaGavel>
          </span>
        </div>

        <div className='btn-all'>
          <button className='btn'><a href=''>All</a></button>
          <button className='btn'><a href=''>Family Law</a></button>
          <button className='btn'><a href=''>Criminal Law</a></button>
          <button className='btn'><a href=''>Business Law</a></button>
        </div>

        <div className='d-flex flex-wrap success-img'>
          <div className='success-1'><img src={img6}></img></div>
          <div className='success-1'><img src={img7}></img></div>
          <div className='success-1'><img src={img8}></img></div>
          <div className='success-1'><img src={img9}></img></div>
          <div className='success-1'><img src={img10}></img></div>
          <div className='success-1'><img src={img11}></img></div>
        </div>
      </div>
      {/* SUCCESS STORY END */}

      {/* CLIENTS START */}
      <div className='spacery client'>
        <div className='head'>
          <h1>Our Clients</h1>
          <span className='icon-line'>
            <FaGavel className='icon'></FaGavel>
          </span>
        </div>

        <img src={img12}></img>
        <h5>Devid Herry</h5>
        <h4>ceo, facebook inc.</h4>
        <div>
          <FaStar className='client-star'></FaStar>
          <FaStar className='client-star'></FaStar>
          <FaStar className='client-star'></FaStar>
          <FaStar className='client-star'></FaStar>
          <FaStar className='client-star'></FaStar>
        </div>

        <FaQuoteRight className='client-quote'></FaQuoteRight>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis architecto soluta quos reprehenderit unde quidem, recusandae quo vitae laudantium!</p>

        <FaQuoteRight className='client-quote'></FaQuoteRight>
      </div>
      {/* CLIENTS END */}

      {/* OUR PRICING START */}
      <div className='container spacery'>
        <div className='head'>
          <h1>Our Pricing</h1>
          <span className='icon-line'>
            <FaGavel className='icon'></FaGavel>
          </span>
        </div>

        <div className='d-flex pricing-p'>
          <div className='w-33 content-white'>
            <div className='content'>
              <h2>Basic</h2>
              <hr></hr>
              <h1><span>$</span>29</h1>
              <ul>
                <li>Basic Updates</li>
                <li>Basic Features</li>
                <li>Basic Law Support</li>
                <li>Basic Monitoring</li>
                <li>Basic Reports</li>
              </ul>
              <button><a href=''>Buy Now</a></button>
            </div>
          </div>
          <div className='w-33 content-black'>
            <div className='content'>
              <h2>Standard</h2>
              <hr></hr>
              <h1><span>$</span>49</h1>
              <ul>
                <li>Basic Updates</li>
                <li>Basic Features</li>
                <li>Basic Law Support</li>
                <li>Basic Monitoring</li>
                <li>Basic Reports</li>
              </ul>
              <button><a href=''>Buy Now</a></button>
            </div>
          </div>
          <div className='w-33  content-white'>
            <div className='content'>
              <h2>Premium</h2>
              <hr></hr>
              <h1><span>$</span>99</h1>
              <ul>
                <li>Basic Updates</li>
                <li>Basic Features</li>
                <li>Basic Law Support</li>
                <li>Basic Monitoring</li>
                <li>Basic Reports</li>
              </ul>
              <button><a href=''>Buy Now</a></button>
            </div>
          </div>
        </div>
      </div>
      {/* OUR PRICING END */}

      {/* SUBSCRIBE START */}
      <div className='subscribe spacery'>
        <div className='container'>
          <h2>SUSCRIBE OUR NEWS LETTER TO GET LATEST NEWS Enter Your Email</h2>
          <input placeholder='Enter Your Email' className='email'></input><br></br>
          <button><a href=''>Submit</a></button>
        </div>
      </div>
      {/* SUBSCRIBE END */}

      {/* LATEST START */}
      <div className="latest container spacery">
        <div className='head'>
          <h1>Our Latest News</h1>
          <span className='icon-line'>
            <FaGavel className='icon'></FaGavel>
          </span>
        </div>

        <div className='d-flex latest-p'>
          <div className='w-33'>
            <img src={img13}></img>
            <h2>This is an image post</h2>
            <ul className='d-flex'>
              <li><FaUserSecret className='icon'></FaUserSecret>Admin</li>
              <li><FaCalendarAlt className='icon'></FaCalendarAlt>23 june 2023</li>
              <li><FaComment className='icon'></FaComment>2</li>
            </ul>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
            <button><a href=''>Read More</a></button>
          </div>
          <div className='w-33'>
            <img src={img14}></img>
            <h2>This is an image post</h2>
            <ul className='d-flex'>
              <li><FaUserSecret className='icon'></FaUserSecret>Admin</li>
              <li><FaCalendarAlt className='icon'></FaCalendarAlt>23 june 2023</li>
              <li><FaComment className='icon'></FaComment>2</li>
            </ul>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
            <button><a href=''>Read More</a></button>

          </div>
          <div className='w-33'>
            <img src={img15}></img>
            <h2>This is an image post</h2>
            <ul className='d-flex'>
              <li><FaUserSecret className='icon'></FaUserSecret>Admin</li>
              <li><FaCalendarAlt className='icon'></FaCalendarAlt>23 june 2023</li>
              <li><FaComment className='icon'></FaComment>2</li>
            </ul>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
            <button><a href=''>Read More</a></button>

          </div>
        </div>
      </div>
      {/* LATEST END */}

      {/* FORM START */}
      <div className='form spacery container'>

        <div className='head'>
          <h1>Our Latest News</h1>
          <span className='icon-line'>
            <FaGavel className='icon'></FaGavel>
          </span>
        </div>

        <div className='form-1'>
          <div className='d-flex'>
            <div className='part-1'>
              <p>Name</p>
              <input type='text'></input>
            </div>
            <div className='part-1'>
              <p>Email</p>
              <input type='text'></input>
            </div>
          </div>

          <div className='part-2'>
            <p>Subject</p>
            <input type='text'></input>
          </div>

          <div className='d-flex'>
            <div className='part-3'>
              <p>Select Your Service</p>
              <input type='text' placeholder='-Select Your Choice-'></input>
            </div>
            <div className='part-3'>
              <p>Booking Date (MM/DD/YY)</p>
              <input type='text'></input>
            </div>
          </div>

          <div className='part-4'>
            <p>Message</p>
            <input type='text'></input>
          </div>
        </div>

        <div className='btn'>
          <button><a href=''>Send Message</a></button>
        </div>

        <div className='d-flex form-social'>
          <div className='w-33'>
            <IoCallOutline className='icon'></IoCallOutline>
            <p>Phone</p>
            <h5>+1 111 222 3333</h5>
          </div>
          <div className='w-33'>
            <FaRegEnvelope className='icon'></FaRegEnvelope>
            <p>E-Mail</p>
            <h5>support@dueza.com</h5>
          </div>
          <div className='w-33'>
            <IoLocationOutline className='icon'></IoLocationOutline>
            <p>Address</p>
            <h5>New York, United States</h5>
          </div>
        </div>
      </div>
      {/* FORM END */}

      {/* FOOTER START */}
      <footer className='spacery footer'>
        <div className='container'>
          <div className='head'>
            <div className='social-footer'>
                  <FaFacebookF className='icon'></FaFacebookF>
                  <FaTwitter className='icon'></FaTwitter>
                  <FaGooglePlusG className='icon'></FaGooglePlusG>
                  <FaInstagram className='icon'></FaInstagram>
                  <FaBasketballBall className='icon'></FaBasketballBall>
            </div>
            <span className='icon-line'>
              <FaGavel className='icon'></FaGavel>
            </span>
          </div>
          <p>©COPYRIGHT | TRIBUNAL 2017.DEVELOPED BY DUEZATHEMES</p>
        </div>
      </footer>
      {/* FOOTER END */}






    </div>
  );
}

export default App;
