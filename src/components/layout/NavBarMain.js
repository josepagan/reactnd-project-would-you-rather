export default function NavBarMain() {
    const dispatch = useDispatch();
  
    return (
  
      <Navbar bg="light" expand="lg">
        <Container>
          {/* <LinkContainer to={"/"}>
              <Navbar.Brand>Would You Rather...</Navbar.Brand>
            </LinkContainer> */}
          <Nav variant="tabs">
  
            <LinkContainer to={"/"}>
              {/* <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/new-question"}> */}
              <Nav.Link>New Question</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/link-container"}>
              <Nav.Link>Leaderboard</Nav.Link>
            </LinkContainer>
  
          </Nav>
  
  
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
  
            {/* div required so {' '} works for spacing user and logout button */}
            {/* //TODO make this div a proper component */}
            <div>
              <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
              </Navbar.Text>
              {' '}
              <Button variant="dark" size="sm" onClick={() => { dispatch({ type: 'auth/logoutClicked' }) }}>Logout</Button>
            </div>
  
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  
  }