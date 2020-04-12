import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import ShopPage from './shop.component';

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStart()),
});

const ShopContainer = connect(null, mapDispatchToProps)(ShopPage);

export default ShopContainer;
