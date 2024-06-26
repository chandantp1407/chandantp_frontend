import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest ,faFacebook,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

function About() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top" style={{ height: '90px' }}>
    <Container>
      <Navbar.Brand href="about" style={{ fontSize: '35px', fontFamily:'Quicksand' }} >J.ALISSA</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="me-auto" style={{ marginLeft: '7%' }}>
          <Nav.Link href="/" style={{ marginLeft: '7%' }}>Home</Nav.Link>
          <Nav.Link href="about"style={{ marginLeft: '7%' }}>About</Nav.Link>
          <Nav.Link href="portfolio"style={{ marginLeft: '7%' }}>Portfolio</Nav.Link>
          <Nav.Link href="books"style={{ marginLeft: '7%' }}>Books</Nav.Link>
          <Nav.Link href="blogs"style={{ marginLeft: '7%' }}>Blogs</Nav.Link>
          <Nav.Link href="albums"style={{ marginLeft: '7%' }}>ClientAlbums</Nav.Link>
          <Nav.Link href="contact"style={{ marginLeft: '7%' }}>Contact</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>



      <br></br>
    <div className='d-flex' style={{flexDirection:'row',backgroundColor:'lightgrey',width:'100%', height:'50%',marginLeft:'5%'}}>
   
        <Image src="https://static.wixstatic.com/media/f61af8_97627769e7bd41538ecbf417234e55d9~mv2_d_4912_7360_s_4_2.jpg/v1/fill/w_552,h_884,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_97627769e7bd41538ecbf417234e55d9~mv2_d_4912_7360_s_4_2.jpg" 
        alt="" style={{ width: '60%', height:'100%',filter: 'brightness(60%)'}}/>
          <div style={{ position: 'absolute',fontFamily:'initial',fontStretch:'extra-expanded', 
          fontStyle:'normal',fontWeight:'lighter', top: '50%', left: '75%',width:'60%',height:'100%', 
          transform: 'translate(-50%, -50%)',
           color: 'white', textAlign: 'center' }}>  
            </div>

            <br></br>
            <div class="text" style={{margin:'5%',marginTop:'15%',width:'60%'}}>
      <h2>ABOUT JADE</h2>
      <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. 
        Just click “Edit Text” or double click me to add your own content and make changes to the font. 
        Feel free to drag and drop me anywhere you like on your page. </p><br></br>
        <p>This is a great space to write long text about your company and your services.<br></br>
           You can use this space to go into a little more detail about your company.</p>
        <br></br>
        <p><h4>Education:</h4></p>
        <p>I'm a paragraph. Click here to add your own text and edit me.<br/>
         It’s easy. Just click “Edit Text” or double click me to <br/>add 
         your own content and make changes to the font.</p>
         <br></br>
         <p><h4>Awards & Nominations:</h4></p>
         <p>I'm a paragraph. Click here to add your own text and edit me.<br/>
             Let your users get to know you.</p>
    </div> 
</div>
    
      

      <div className='IconContainer' style={{marginLeft:'600px'}} >
      <FontAwesomeIcon icon={faPinterest} className='Icon' style={{ marginRight: '10px' }} />
      <FontAwesomeIcon icon={faFacebook} className='Icon'style={{ marginRight: '10px' }} />
      <FontAwesomeIcon icon={faTwitter} className='Icon' style={{ marginRight: '10px' }}/>
      <FontAwesomeIcon icon={faInstagram} className='Icon' />
    </div>
    <div>
      <span className='Text' style={{ display: 'block', textAlign: 'center' }}>© 2035 by The Art of Food. Powered and secured by Wix</span>
    </div>
    </>
  );
}

export default About;
