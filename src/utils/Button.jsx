import PropTypes from "prop-types";

export default function Button({ name, css }) {
  return (
    <>
      <button className={css}>{name}</button>
    </>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  css: PropTypes.string.isRequired,
};
