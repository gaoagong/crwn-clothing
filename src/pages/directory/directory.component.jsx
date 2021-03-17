import React from 'react';
import MenuItem from '../../components/menu-item/menu-item.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selectors'

import './directory.styles.scss';

const Directory = ({sections}) => (
  <div className="directory-menu">
      {
          sections.map(({id, ...otherSectionprops}) => (
              <MenuItem key={id} {...otherSectionprops} />
          ))
      }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
