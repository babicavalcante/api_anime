'use client'; 

import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { v4 } from "uuid";

export default function Page({ params }) {

    const route = useRouter()

    const aeroportos = JSON.parse(localStorage.getItem('aeroportos')) || []
    const dados = aeroportos.find(item => item.id == params.id)
    const aeroporto = dados || { nome: '', localizacao: '' }
    
    function salvar(dados) {

        if(aeroporto.id){
            Object.assign(aeroporto, dados)
        } else {
            dados.id = v4()
            aeroportos.push(dados)
        }

        localStorage.setItem('aeroportos', JSON.stringify(aeroportos))
        return route.push('/aeroportos')
    }

    return (
        <Pagina titulo="Aeroportos">

            <Formik
                initialValues={aeroporto}
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
                        <Form.Group className="mb-3" controlId="localizacao">
                            <Form.Label>Localização</Form.Label>
                            <Form.Control
                                type="text"
                                name="localizacao"
                                value={values.localizacao}
                                onChange={handleChange('localizacao')}
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