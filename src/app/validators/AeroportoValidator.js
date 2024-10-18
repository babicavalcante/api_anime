import * as Yup from 'yup';

const AeroportoValidator = Yup.object().shape({
  nome: Yup.string()
    .min(3, 'O mínimo de caracteres é 3')
    .max(50, 'O máximo de caracteres é 50')
    .required('Campo obrigatório'),
  sigla: Yup.string()
    .length(3, 'A sigla deve ter exatamente 3 caracteres')
    .required('Campo obrigatório'),
  pais: Yup.string()
    .required('Campo obrigatório'),
});

export default AeroportoValidator;

