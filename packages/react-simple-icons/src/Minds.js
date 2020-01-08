import React from 'react';
import PropTypes from 'prop-types';

const Minds = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M15.495 18.38a.052.052 0 00.03-.033l.693-2.217 3.192-4.79a.052.052 0 00.003-.004.052.052 0 00.001-.002.052.052 0 00.001-.002.052.052 0 00.002-.005.052.052 0 000-.003.052.052 0 00.002-.003.052.052 0 000-.004.052.052 0 000-.005.052.052 0 000-.003.052.052 0 000-.003l-.416-6.946a.052.052 0 000-.001.052.052 0 00-.001-.005.052.052 0 000-.002.052.052 0 00-.003-.008.052.052 0 00-.002-.005.052.052 0 00-.002-.004.052.052 0 00-.003-.005.052.052 0 00-.003-.003.052.052 0 000-.001L14.818.018l-.001-.002a.052.052 0 00-.004-.003.052.052 0 00-.003-.002.052.052 0 00-.003-.002.052.052 0 00-.002-.001.052.052 0 00-.002-.001.052.052 0 00-.002-.001.052.052 0 00-.001 0 .052.052 0 000-.001.052.052 0 00-.002 0 .052.052 0 00-.002-.001.052.052 0 00-.001 0 .052.052 0 00-.005-.002.052.052 0 00-.004 0 .052.052 0 00-.002 0 .052.052 0 00-.001 0 .052.052 0 00-.001 0 .052.052 0 00-.003 0 .052.052 0 00-.001 0 .052.052 0 00-.001 0H9.22a.052.052 0 00-.003 0 .052.052 0 00-.004 0 .052.052 0 00-.004 0 .052.052 0 00-.003.001.052.052 0 00-.003.001.052.052 0 00-.005.002.052.052 0 00-.004.003.052.052 0 00-.004.002.052.052 0 00-.001 0 .052.052 0 00-.003.004.052.052 0 00-.001 0 .052.052 0 00-.003.003l-4.17 4.31a.052.052 0 00-.003.004.052.052 0 00-.006.009.052.052 0 00-.002.005.052.052 0 00-.002.008.052.052 0 000 .002.052.052 0 00-.001.003.052.052 0 000 .003l-.417 6.95a.052.052 0 000 .001.052.052 0 000 .001.052.052 0 000 .004.052.052 0 000 .004.052.052 0 000 .002.052.052 0 000 .005.052.052 0 00.001 0 .052.052 0 000 .003.052.052 0 00.001.002.052.052 0 00.001.002.052.052 0 00.001.002.052.052 0 00.001.001.052.052 0 00.002.003.052.052 0 00.001.003l3.194 4.79.692 2.214v.002a.052.052 0 000 .001.052.052 0 00.001.002.052.052 0 00.002.003.052.052 0 000 .001.052.052 0 00.001.002.052.052 0 000 .001.052.052 0 00.002.001.052.052 0 00.001.003.052.052 0 00.001.001.052.052 0 00.001.001.052.052 0 00.002.002.052.052 0 00.003.004.052.052 0 00.002.001.052.052 0 00.002.002.052.052 0 00.001 0 .052.052 0 00.003.003.052.052 0 00.001 0 .052.052 0 00.002.001.052.052 0 00.002.002.052.052 0 00.001 0 .052.052 0 00.001 0 .052.052 0 00.001.001.052.052 0 00.002 0 .052.052 0 00.001.001.052.052 0 00.001 0 .052.052 0 00.003.001.052.052 0 00.002 0 .052.052 0 000 .001.052.052 0 00.003 0 .052.052 0 00.002 0 .052.052 0 00.003.001.052.052 0 00.001 0 .052.052 0 00.002 0h6.952a.052.052 0 00.02-.004zm-.058-.1H8.89l7.201-2.095zm.618-2.193L8.62 18.249l2.703-5.677zm.068-.08l-4.733-3.516 5.139-4.124zm.11-.087l.4-7.54 2.668 2.936zm-7.699 2.27l-.646-2.069 3.231-3.36zm-.697-2.166l-3.094-4.64 6.456 1.143zm11.47-4.857l-2.655-2.92 2.256-3.717zm-7.974 1.236L9.3 5.284l7.187 2.983zm-.102.024l-6.507-1.152L9.198 5.31zm5.284-4.26l-7.2-2.99L14.748.152zm.095-.052L14.87.219l4.015 4.149zM4.694 11.14l.403-6.718 4.03.806zm4.473-6.01l-4.014-.803L9.167.18zm.104-.056V.103h5.376zm-.747 13.357v4.143l1.671-1.403zm.057 4.232l1.53.612 1.808.723-1.67-2.737zm3.5 1.335l3.338-1.335-1.67-1.402zm3.394-1.424v-4.143l-1.67 2.74zm-6.858-4.191L12 23.93l3.382-5.547z" />
    </svg>
  );
};

Minds.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Minds.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Minds;
