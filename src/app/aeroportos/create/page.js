'use client';

import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";

export default function CreateAeroporto() {
    const router = useRouter();

    function salvar(dados) {
        const aeroportos = JSON.parse(localStorage.getItem('aeroportos')) || [];
        aeroportos.push(dados);
        localStorage.setItem('aeroportos', JSON.stringify(aeroportos));
        router.push('/aeroportos');
    }

    return (
        <Pagina titulo="Novo Aeroporto">
            <Formik
                initialValues={{ nome: '', localizacao: '' }}
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
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="localizacao">
                            <Form.Label>Localização</Form.Label>
                            <Form.Control
                                type="text"
                                name="localizacao"
                                value={values.localizacao}
                                onChange={handleChange('localizacao')}
                                required
                            />
                        </Form.Group>
                        <div className="text-center">
                            <Button onClick={handleSubmit} variant="success">
                                <FaCheck /> Salvar
                            </Button>
                            <Link
                                href="/aeroportos"
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
