import { Formik, Field, Form } from 'formik';
import css from './SearchForm.module.css';

export default function SearchForm({ onSearch, notify, search }) {
  return (
    <Formik
      initialValues={{ query: search }}
      onSubmit={(values, actions) => {
        if (values.query === '') {
          notify();
        } else {
          onSearch(values.query);
          actions.resetForm();
        }
      }}
    >
      <Form className={css.searchForm}>
        <Field className={css.searchInput} type="text" name="query"></Field>
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
}
