// src/validators/VooValidator.js
import * as Yup from 'yup';

const VooValidator = Yup.object().shape({
    identificador: Yup.string()
        .required('Identificador é obrigatório'),
    empresa: Yup.string()
        .required('Empresa é obrigatória'),
    origem: Yup.string()
        .required('Origem é obrigatória'),
    destino: Yup.string()
        .required('Destino é obrigatório'),
    preco: Yup.number()
        .required('Preço é obrigatório')
        .positive('O preço deve ser um número positivo'),
    data_checkin: Yup.date()
        .required('Data de Check-in é obrigatória'),
    data_embarque: Yup.date()
        .required('Data de Embarque é obrigatória')
        .min(Yup.ref('data_checkin'), 'Data de embarque deve ser após a data de check-in'),
});

export default VooValidator;
