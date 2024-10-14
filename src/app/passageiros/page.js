'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa"; 
import { FaRegEdit } from "react-icons/fa"; 
import { MdDelete } from "react-icons/md"; 
import Pagina from "../components/Pagina";

export default function Page() {
    const [passageiros, setPassageiros] = useState([]);

    useEffect(() => {
        setPassageiros(JSON.parse(localStorage.getItem('passageiros')) || []);
    }, []);

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const dados = passageiros.filter(item => item.id !== id);
            localStorage.setItem('passageiros', JSON.stringify(dados));
            setPassageiros(dados);
        }
    }

    return (
        <Pagina titulo="Passageiros">
            <Link
                href="/passageiros/form"
                className="btn btn-primary mb-3"
            >
                <FaPlusCircle /> Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Passagem</th>
                        <th>Aeroporto</th>
                    </tr>
                </thead>
                <tbody>
                    {passageiros.map((item, i) => (
                        <tr key={item.id}>
                            <td>
                                <Link href={`/passageiros/form/${item.id}`}>
                                    <FaRegEdit title="Editar" className="text-primary" />
                                </Link>
                                <MdDelete
                                    title="Excluir"
                                    className="text-danger"
                                    onClick={() => excluir(item.id)}
                                />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.telefone}</td>
                            <td>{item.passagem}</td>
                            <td>{item.aeroporto}</td>
                            <td>{item.aeroporto}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    );
}
