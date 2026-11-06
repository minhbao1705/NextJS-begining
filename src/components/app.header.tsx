'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link href={"/"} className='navbar-brand'>
            Hỏi Dân IT
          </Link>  

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href={"/facebook"} className='nav-link'>
                Facebook
            </Nav.Link>
            <Nav.Link href={"/tiktok"}  className='nav-link'>
                Tiktok
            </Nav.Link>
            <Nav.Link href={"/youtube"}  className='nav-link'>
                Youtube
            </Nav.Link>
            <Nav.Link href={"/link"}  className='nav-link'>
                Link
            </Nav.Link> */}
            <Link href="/facebook" className="nav-link">
              Facebook
            </Link>
            <Link href="/tiktok" className="nav-link">
              Tiktok
            </Link>
            <Link href="/youtube" className="nav-link">
              Youtube
            </Link>
            <Link href="/link" className="nav-link">
              Link
            </Link>
            <Link href="/blogs" className="nav-link">
              Blogs
            </Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;