'use client';

import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";

export default function CreatePassageiro() {
    const router = useRouter();

    function salvar(dados) {
        const passageiros = JSON.parse(localStorage.getItem('passageiros')) || [];
        passageiros.push(dados);
        localStorage.setItem('passageiros', JSON.stringify(passageiros));
        router.push('/passageiros');
    }

    return (
        <Pagina titulo="Novo Passageiro">
            <Formik
                initialValues={{ nome: '', documento: '' }}
                onSubmit={values => salvar(values)}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <Form>
                        <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                name="nome"
                                value={values.nome}
                                onChange={handleChange('nome')}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="documento">
                            <Form.Label>Documento</Form.Label>
                            <Form.Control
                                type="text"
                                name="documento"
                                value={values.documento}
                                onChange={handleChange('documento')}
                                required
                            />
                        </Form.Group>
                        <div className="text-center">
                            <Button onClick={handleSubmit} variant="success">
                                <FaCheck /> Salvar
                            </Button>
                            <Link href="/passageiros" className="btn btn-danger ms-2">
                                <MdOutlineArrowBack /> Voltar
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </Pagina>
    );
}
