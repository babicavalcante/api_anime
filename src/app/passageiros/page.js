'use client';

import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import Pagina from "../components/Pagina";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Passageiros() {
    const passageiros = JSON.parse(localStorage.getItem('passageiros')) || [];

    return (
        <Pagina titulo="Passageiros">
            <Link href="/passageiros/create" className="btn btn-primary mb-3">
                <FaPlusCircle /> Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Documento</th>
                    </tr>
                </thead>
                <tbody>
                    {passageiros.map((item, i) => (
                        <tr key={i}>
                            <td>
                                {i} - 
                                <FaRegEdit className="text-primary" />
                                <MdDelete className="text-danger" />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.documento}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    );
}
