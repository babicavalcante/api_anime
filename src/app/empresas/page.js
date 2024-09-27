'use client'

import Link from "next/link";
import Pagina from "../components/Pagina";
import { FaPlusCircle } from "react-icons/fa";
import { Table } from "react-bootstrap";

export default function Page() {

    const empresas = JSON.parse(localStorage.getItem('empresas')) || []

    return (
        <Pagina titulo="Empresas">

            <Link
                href="/empresas/create"
                className="btn btn-primary mb-3"
            >
                <FaPlusCircle /> Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Logo</th>
                    </tr>
                </thead>
                <tbody>
                    {empresas.map(item => (
                        <tr>
                            <td>1</td>
                            <td>{item.nome}</td>
                            <td>
                                <a href={item.site} target="_blank">
                                    <img src={item.logo} width={100} />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}