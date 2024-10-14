'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagina from "../components/Pagina";

export default function Passagens() {
    const [passagens, setPassagens] = useState([]);

    useEffect(() => {
        setPassagens(JSON.parse(localStorage.getItem('passagens')) || []);
    }, []);

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const dados = passagens.filter(item => item.id !== id);
            localStorage.setItem('passagens', JSON.stringify(dados));
            setPassagens(dados);
        }
    }

    return (
        <Pagina titulo="Passagens">

            <Link
                href="/passagens/form"
                className="btn btn-primary mb-3"
            >
                <FaPlusCircle /> Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Identificador</th>
                        <th>Passageiro</th>
                        <th>Voo</th>
                        <th>Data</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {passagens.map((item, index) => (
                        <tr key={item.id}>
                            <td>
                                <Link href={`/passagens/form/${item.id}`}>
                                    <FaRegEdit title="Editar" className="text-primary" />
                                </Link>
                                <MdDelete
                                    title="Excluir"
                                    className="text-danger"
                                    onClick={() => excluir(item.id)}
                                />
                            </td>
                            <td>{item.identificador}</td>
                            <td>{item.passageiro}</td>
                            <td>{item.voo}</td>
                            <td>{item.data}</td>
                            <td>{item.preco}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    );
}
