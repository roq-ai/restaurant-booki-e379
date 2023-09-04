import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  job_title: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().nullable(),
  salary: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
