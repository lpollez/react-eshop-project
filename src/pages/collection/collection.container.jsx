import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  selectIsCollectionLoaded,
  selectCollection,
} from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const mapStateToProps = (state, ownProps) => ({
  isLoading: !selectIsCollectionLoaded(state),
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
