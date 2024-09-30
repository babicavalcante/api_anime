'use client';

import Link from "next/link";
import { FaPlusCircle } from "react-icons/fa";
import { Table } from "react-bootstrap";
import Pagina from "../components/Pagina";

export default function Aeroportos() {
    const aeroportos = JSON.parse(localStorage.getItem('aeroportos')) || [];

    return (
        <Pagina titulo="Aeroportos">
            <Link href="/aeroportos/create" className="btn btn-primary mb-3">
                <FaPlusCircle /> Novo
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Localização</th>
                    </tr>
                </thead>
                <tbody>
                    {aeroportos.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.nome}</td>
                            <td>{item.localizacao}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    );
}
