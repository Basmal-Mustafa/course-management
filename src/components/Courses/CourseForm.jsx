import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box } from '@mui/material';

const CourseForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    startDate: Yup.date().required('Start date is required'),
    endDate: Yup.date()
      .required('End date is required')
      .min(Yup.ref('startDate'), 'End date must be after start date'),
    price: Yup.number()
      .required('Price is required')
      .min(0, 'Price must be positive'),
    image: Yup.mixed()
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ setFieldValue, values }) => (
        <Form>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Field name="title">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  label="Course Title"
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error}
                  fullWidth
                />
              )}
            </Field>

            <Field name="description">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  label="Description"
                  multiline
                  rows={4}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error}
                  fullWidth
                />
              )}
            </Field>

            <Field name="startDate">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  label="Start Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error}
                  fullWidth
                />
              )}
            </Field>

            <Field name="endDate">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  label="End Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error}
                  fullWidth
                />
              )}
            </Field>

            <Field name="price">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  label="Price"
                  type="number"
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error}
                  fullWidth
                />
              )}
            </Field>

            <input
              id="image"
              name="image"
              type="file"
              onChange={(event) => {
                setFieldValue("image", event.currentTarget.files[0]);
              }}
            />

            {values.image && (
              <div>
                {typeof values.image === 'string' ? (
                  <img src={values.image} alt="Course" width="200" />
                ) : (
                  <img src={URL.createObjectURL(values.image)} alt="Course" width="200" />
                )}
              </div>
            )}

            <Button type="submit" variant="contained" color="primary">
              Save Course
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};