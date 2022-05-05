import PropTypes from 'prop-types';
import form from '../../styles/form.module.css'

export default function FormTextInput({
  text,
  type = 'text',
  extraProps = {},
  getFieldProps,
  errorMsg,
  touched
}) {
  return (
    <div className={`${"form-group"} ${form.inputItem}`}>
      <span className={form.inputLabel}>{text}</span>
      <input type={type} {...extraProps} {...getFieldProps} className="form-control" />
      {touched && <small className="error">{errorMsg}</small>}
    </div>
  );
}

FormTextInput.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  extraProps: PropTypes.object,
  errorMsg: PropTypes.string,
  touched: PropTypes.bool,
  getFieldProps: PropTypes.any
};
