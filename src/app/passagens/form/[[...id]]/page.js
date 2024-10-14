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

    const passagens = JSON.parse(localStorage.getItem('passagens')) || [];
    const dados = passagens.find(item => item.id == params.id)
    const passagem = dados || { id: '', passageiro: '', voo: '', assento: '', preco: '' };

    const [voos, setVoos] = useState([]);
    const [passageiros, setPassageiros] = useState([]);

    useEffect(() => {
        setVoos(JSON.parse(localStorage.getItem('voos')) || []);
        setPassageiros(JSON.parse(localStorage.getItem('passageiros')) || []);
    }, []);

    function salvar(dados) {
        if (passagem.id) {
            Object.assign(passagem, dados);
        } else {
            dados.id = uuidv4();
            passagens.push(dados);
        }

        localStorage.setItem('passagens', JSON.stringify(passagens));
        return route.push('/passagens');
    }

    return (
        <Pagina titulo="Passagens">
            <Formik
                initialValues={passagem}
                onSubmit={values => salvar(values)}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                }) => (
                    <Form>
                        <Form.Group className="mb-3" controlId="passageiro">
                            <Form.Label>Passageiro</Form.Label>
                            <Form.Select
                                name="passageiro"
                                value={values.passageiro}
                                onChange={handleChange('passageiro')}
                            >
                                <option value=''>Selecione</option>
                                {passageiros.map(item => (
                                    <option key={item.nome} value={item.nome}>
                                        {item.nome}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="voo">
                            <Form.Label>Voo</Form.Label>
                            <Form.Select
                                name="voo"
                                value={values.voo}
                                onChange={handleChange('voo')}
                            >
                                <option value=''>Selecione</option>
                                {voos.map(item => (
                                    <option key={item.identificador} value={item.identificador}>
                                        {item.identificador}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="assento">
                            <Form.Label>Assento</Form.Label>
                            <Form.Control
                                type="text"
                                name="assento"
                                value={values.assento}
                                onChange={handleChange('assento')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="preco">
                            <Form.Label>Preço</Form.Label>
                            <Form.Control
                                type="text"
                                name="preco"
                                value={values.preco}
                                onChange={handleChange('preco')}
                            />
                        </Form.Group>
                        <div className="text-center">
                            <Button onClick={handleSubmit} variant="success">
                                <FaCheck /> Salvar
                            </Button>
                            <Link
                                href="/passagens"
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
