'use client';

import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import Pagina from "../components/Pagina";

export default function Voos() {
    const voos = JSON.parse(localStorage.getItem('voos')) || [];

    return (
        <Pagina titulo="Voos">
            <Link href="/voos/create" className="btn btn-primary mb-3">
                <FaPlusCircle /> Novo
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Número</th>
                        <th>Aeroporto de Origem</th>
                        <th>Aeroporto de Destino</th>
                    </tr>
                </thead>
                <tbody>
                    {voos.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.numero}</td>
                            <td>{item.origem}</td>
                            <td>{item.destino}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    );
}
