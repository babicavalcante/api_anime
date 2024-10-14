'use client';

import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

export default function Page({ params }) {
    const route = useRouter();

    const passageiros = JSON.parse(localStorage.getItem('passageiros')) || [];
    const dados = params.id ? passageiros.find(item => item.id == params.id) : null;
    const passageiro = dados || { nome: '', telefone: '', passagem: '', aeroporto: '' };

    const passagens = JSON.parse(localStorage.getItem('passagens')) || []; // Carregar passagens
    const aeroportos = JSON.parse(localStorage.getItem('aeroportos')) || []; // Carregar aeroportos

    function salvar(dados) {
        if (passageiro.id) {
            Object.assign(passageiro, dados);
        } else {
            dados.id = uuidv4();
            passageiros.push(dados);
        }

        localStorage.setItem('passageiros', JSON.stringify(passageiros));
        return route.push('/passageiros');
    }

    return (
        <Pagina titulo="Passageiros">

            <Formik
                initialValues={passageiro}
                onSubmit={values => salvar(values)}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                }) => (
                    <Form>
                        <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                name="nome"
                                value={values.nome}
                                onChange={handleChange('nome')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="telefone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control
                                type="text"
                                name="telefone"
                                value={values.telefone}
                                onChange={handleChange('telefone')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="passagem">
                            <Form.Label>Passagem</Form.Label>
                            <Form.Select
                                name="passagem"
                                value={values.passagem}
                                onChange={handleChange('passagem')}
                            >
                                <option value=''>Selecione</option>
                                {passagens.map(item => (
                                    <option key={item.id} value={item.id}>
                                        {item.identificador} - {item.voo} {/* Ajuste os campos conforme necessário */}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="aeroporto">
                            <Form.Label>Aeroporto</Form.Label>
                            <Form.Select
                                name="aeroporto"
                                value={values.aeroporto}
                                onChange={handleChange('aeroporto')}
                            >
                                <option value=''>Selecione</option>
                                {aeroportos.map(item => (
                                    <option key={item.sigla} value={item.sigla}>
                                        {item.sigla} - {item.nome}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <div className="text-center">
                            <Button onClick={handleSubmit} variant="success">
                                <FaCheck /> Salvar
                            </Button>
                            <Link
                                href="/passageiros"
                                className="btn btn-danger ms-2"
                            >
                                <MdOutlineArrowBack /> Voltar
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </Pagina>
    );
}
