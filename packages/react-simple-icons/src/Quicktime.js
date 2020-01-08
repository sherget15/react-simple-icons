import React from 'react';
import PropTypes from 'prop-types';

const Quicktime = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M12 0A12 12 0 1 0 18.63 22L20.61 23.97H23.75L24 23.72V20.57L22 18.59A11.94 11.94 0 0 0 24 12A12 12 0 0 0 12 0M12 4.2A7.8 7.8 0 0 1 18.95 15.53L13.7 10.27A2.4 2.4 0 1 0 10.3 13.67L15.57 18.93A7.76 7.76 0 0 1 12 19.8A7.8 7.8 0 0 1 12 4.2Z" />
    </svg>
  );
};

Quicktime.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Quicktime.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Quicktime;
