import Loader from 'components/Loader';
// import PropTypes from 'prop-types';
const Button = ({ handleClickLoadMoreBtn }) => {
  return (
    <>
      {showBtn && (
        <button type="submit" onClick={this.handleClickLoadMoreBtn}>
          Load more
        </button>
      )}
    </>
  );
};
export default Button;