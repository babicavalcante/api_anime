'use client'

import Pagina from "@/app/components/Pagina";
import VooValidator from "@/app/validators/VooValidator";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { v4 } from "uuid";

export default function Page({ params }) {
    const route = useRouter();
    const voos = JSON.parse(localStorage.getItem('voos')) || [];
    const dados = voos.find(item => item.id == params.id);
    const voo = dados || { identificador: '', empresa: '', origem: '', destino: '', preco: '', data_checkin: '', data_embarque: '' };

    const [empresas, setEmpresas] = useState([]);
    const [aeroportos, setAeroportos] = useState([]);

    useEffect(() => {
        setEmpresas(JSON.parse(localStorage.getItem('empresas')) || []);
        setAeroportos(JSON.parse(localStorage.getItem('aeroportos')) || []);
    }, []);

    function salvar(dados) {
        if (voo.id) {
            Object.assign(voo, dados);
        } else {
            dados.id = v4();
            voos.push(dados);
        }

        localStorage.setItem('voos', JSON.stringify(voos));
        return route.push('/voos');
    }

    return (
        <Pagina titulo="Voos">
            <Formik
                initialValues={voo}
                validationSchema={VooValidator} // Usando o validador
                onSubmit={(values, { setSubmitting }) => {
                    salvar(values);
                    setSubmitting(false);
                }}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="identificador">
                            <Form.Label>Identificador</Form.Label>
                            <Form.Control
                                type="text"
                                name="identificador"
                                value={values.identificador}
                                onChange={handleChange}
                                isInvalid={errors.identificador}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.identificador}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="empresa">
                            <Form.Label>Empresa</Form.Label>
                            <Form.Select
                                name="empresa"
                                value={values.empresa}
                                onChange={handleChange}
                                isInvalid={errors.empresa}
                            >
                                <option value=''>Selecione</option>
                                {empresas.map(item => (
                                    <option key={item.nome} value={item.nome}>
                                        {item.nome}
                                    </option>
                                ))}
                            </Form.Select>
                            <div className="text-danger">{errors.empresa}</div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="origem">
                            <Form.Label>Origem</Form.Label>
                            <Form.Select
                                name="origem"
                                value={values.origem}
                                onChange={handleChange}
                                isInvalid={errors.origem}
                            >
                                <option value=''>Selecione</option>
                                {aeroportos.map(item => (
                                    <option key={item.sigla} value={item.sigla}>
                                        {item.sigla} - {item.nome}
                                    </option>
                                ))}
                            </Form.Select>
                            <div className="text-danger">{errors.origem}</div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="destino">
                            <Form.Label>Destino</Form.Label>
                            <Form.Select
                                name="destino"
                                value={values.destino}
                                onChange={handleChange}
                                isInvalid={errors.destino}
                            >
                                <option value=''>Selecione</option>
                                {aeroportos.map(item => (
                                    <option key={item.sigla} value={item.sigla}>
                                        {item.sigla} - {item.nome}
                                    </option>
                                ))}
                            </Form.Select>
                            <div className="text-danger">{errors.destino}</div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="preco">
                            <Form.Label>Preço</Form.Label>
                            <Form.Control
                                type="text"
                                name="preco"
                                value={values.preco}
                                onChange={handleChange}
                                isInvalid={errors.preco}
                            />
                            <div className="text-danger">{errors.preco}</div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="data_checkin">
                            <Form.Label>dt. Checkin</Form.Label>
                            <Form.Control
                                type="date"
                                name="data_checkin"
                                value={values.data_checkin}
                                onChange={handleChange}
                                isInvalid={errors.data_checkin}
                            />
                            <div className="text-danger">{errors.data_checkin}</div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="data_embarque">
                            <Form.Label>Dt. embarque</Form.Label>
                            <Form.Control
                                type="date"
                                name="data_embarque"
                                value={values.data_embarque}
                                onChange={handleChange}
                                isInvalid={errors.data_embarque}
                            />
                            <div className="text-danger">{errors.data_embarque}</div>
                        </Form.Group>
                        <div className="text-center">
                            <Button type="submit" variant="success">
                                <FaCheck /> Salvar
                            </Button>
                            <Link
                                href="/voos"
                                className="btn btn-danger ms-2"
                            >
                                <MdOutlineArrowBack /> Voltar
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </Pagina>
    )
}
