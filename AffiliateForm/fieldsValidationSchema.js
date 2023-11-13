import * as Yup from 'yup';

const fieldsValidationSchema = Yup.object({
  electionYear: Yup.string().required('O campo de eleição é obrigatório em casos de pesquisas eleitorais'),
});

export default fieldsValidationSchema;
