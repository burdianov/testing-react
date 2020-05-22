import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({title, desc}) => {
  return (
    !title
      ? null
      : <div data-test='listItemComponent'>
        <h2 data-test='componentTitle'>{title}</h2>
        <p data-test='componentDesc'>
          {desc}
        </p>
      </div>
  )
};

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
}

export default ListItem;