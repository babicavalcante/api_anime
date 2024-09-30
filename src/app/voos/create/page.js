'use client';

import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";

export default function CreateVoo() {
    const router = useRouter();

    function salvar(dados) {
        const voos = JSON.parse(localStorage.getItem('voos')) || [];
        voos.push(dados);
        localStorage.setItem('voos', JSON.stringify(voos));
        router.push('/voos');
    }

    return (
        <Pagina titulo="Novo Voo">
            <Formik
                initialValues={{ numero: '', origem: '', destino: '' }}
                onSubmit={values => salvar(values)}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <Form>
                        <Form.Group className="mb-3" controlId="numero">
                            <Form.Label>Número do Voo</Form.Label>
                            <Form.Control
                                type="text"
                                name="numero"
                                value={values.numero}
                                onChange={handleChange('numero')}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="origem">
                            <Form.Label>Aeroporto de Origem</Form.Label>
                            <Form.Control
                                type="text"
                                name="origem"
                                value={values.origem}
                                onChange={handleChange('origem')}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="destino">
                            <Form.Label>Aeroporto de Destino</Form.Label>
                            <Form.Control
                                type="text"
                                name="destino"
                                value={values.destino}
                                onChange={handleChange('destino')}
                                required
                            />
                        </Form.Group>
                        <div className="text-center">
                            <Button onClick={handleSubmit} variant="success">
                                <FaCheck /> Salvar
                            </Button>
                            <Link href="/voos" className="btn btn-danger ms-2">
                                <MdOutlineArrowBack /> Voltar
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </Pagina>
    );
}
