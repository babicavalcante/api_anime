'use client';

import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import Pagina from "../components/Pagina";

export default function Passagens() {
    const passagens = JSON.parse(localStorage.getItem('passagens')) || [];

    return (
        <Pagina titulo="Passagens">
            <Link href="/passagens/create" className="btn btn-primary mb-3">
                <FaPlusCircle /> Novo
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Passageiro</th>
                        <th>Voo</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {passagens.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.passageiro}</td>
                            <td>{item.voo}</td>
                            <td>{item.data}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    );
}
