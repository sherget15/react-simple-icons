import React from 'react';
import PropTypes from 'prop-types';

const Xmpp = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M24,3.276l-3.401,1.318l-1.025,0.366l-3.08,0.911l0,0c0.01,0.18,0.016,0.361,0.016,0.543 c0,3.353-1.693,7.444-4.51,10.386C9.183,13.859,7.49,9.768,7.49,6.415c0-0.182,0.006-0.363,0.016-0.543l0,0L4.426,4.96L3.401,4.594 L0,3.276C0.146,8.978,4.854,14.9,10.498,18.17c-1.303,1.028-2.778,1.81-4.388,2.216l-0.004,0.339 c1.716-0.146,3.333-0.599,4.822-1.279c0.359-0.148,0.717-0.308,1.072-0.479c0.355,0.171,0.712,0.33,1.071,0.478 c1.489,0.68,3.107,1.133,4.822,1.279l-0.004-0.339c-1.61-0.405-3.085-1.188-4.388-2.216C19.146,14.9,23.854,8.978,24,3.276z" />
    </svg>
  );
};

Xmpp.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Xmpp.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Xmpp;
