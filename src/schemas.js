import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string()
    .min(2, 'Muito curto!')
    .matches(
      "^[A-Za-záàâãäéèêëíìïóòôõöúùüçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$",
      "Nome inválido"
    )
    .required(`O campo 'Nome' é obrigatório`),
  email: Yup.string()
    .email()
    .required(`O campo 'Email' é obrigatório`),
})