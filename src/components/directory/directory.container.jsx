import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import Directory from './directory.component';

const mapstatetoProps = createStructuredSelector({
  sections: selectDirectorySections,
});

const DirectoryContainer = connect(mapstatetoProps)(Directory);

export default DirectoryContainer;
