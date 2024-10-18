import * as Yup from 'yup';

const PassagensValidator = Yup.object().shape({
    passageiro: Yup.string().required('Passageiro é obrigatório'),
    voo: Yup.string().required('Voo é obrigatório'),
    assento: Yup.string()
        .required('Assento é obrigatório')
        .matches(/^[A-Z]\d{1,2}$/, 'Assento deve estar no formato A1, B12, etc.'),
    preco: Yup.string()
        .required('Preço é obrigatório')
});

export default PassagensValidator;
