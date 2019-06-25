import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import StockItem from './StockItem';
import StockForm from './StockForm';
import { getStocks } from '../../actions/stock';

const Stocks = ({ getStocks, stock: { stocks, loading } }) => {
  useEffect(() => {
    getStocks();
  }, [getStocks]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'> Stock List </h1>
      <p className='lead'>
        <i className='fas fa-user' /> You can monitor your stock prices in realtime from here
      </p>
      <StockForm />
      <div className='posts'>
        {stocks.map(stock => (
          <StockItem key={stock._id} stock={stock} />
        ))}
      </div>
    </Fragment>
  );
};

Stocks.propTypes = {
  getStocks: PropTypes.func.isRequired,
  stock: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  stock: state.stock
});

export default connect(
  mapStateToProps,
  { getStocks }
)(Stocks);
