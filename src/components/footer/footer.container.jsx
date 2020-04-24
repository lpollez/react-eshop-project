import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurentUser } from '../../redux/user/user.selectors';

import Footer from './footer.component';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurentUser,
});

const FooterContainer = connect(mapStateToProps)(Footer);

export default FooterContainer;
