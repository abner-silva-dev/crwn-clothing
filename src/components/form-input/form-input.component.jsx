import './form-input.styles.scss';

const FormInput = ({ textLabel, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {textLabel && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {textLabel}
        </label>
      )}
    </div>
  );
};

export default FormInput;
