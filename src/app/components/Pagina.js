import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function Pagina(props) {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Fundamentos</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavDropdown title="Empresas" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/empresas">Listar</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/empresas/create">Nova Empresa</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Aeroportos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/aeroportos">Listar</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/aeroportos/create">Novo Aeroporto</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Voos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/voos">Listar</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/voos/create">Novo Voo</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Passageiros" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/passageiros">Listar</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/passageiros/create">Novo Passageiro</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Passagens" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/passagens">Listar</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/passagens/create">Nova Passagem</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>

            <div className="bg-secondary text-white text-center p-3">
                <h1>{props.titulo}</h1>
            </div>

            <Container className="my-3">
                {props.children}
            </Container>
        </>
    );
}
