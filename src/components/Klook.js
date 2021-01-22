import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Klook = forwardRef(function Klook({ color = 'currentColor', size = 24, title = 'Klook', ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <title>{title}</title>
      <path d="M8.162 15.135H4.975v-6.27c.545 0 .987.442.987.987v4.3h1.216a.983.983 0 0 1 .984.983zm10.874-3.155a3.133 3.133 0 0 1-3.112 3.154h-.022a3.13 3.13 0 0 1-2.639-1.445 3.13 3.13 0 0 1-2.618 1.445h-.022a3.133 3.133 0 0 1-.02-6.266h.022a3.13 3.13 0 0 1 2.639 1.445 3.13 3.13 0 0 1 2.618-1.445h.022a3.134 3.134 0 0 1 3.132 3.112zm-6.266.007a2.131 2.131 0 0 0-.634-1.508 2.13 2.13 0 0 0-1.511-.623h-.015a2.134 2.134 0 0 0-1.513.639 2.132 2.132 0 0 0-.618 1.521c.004.571.229 1.106.634 1.508a2.13 2.13 0 0 0 1.511.623h.015a2.148 2.148 0 0 0 2.131-2.16zm5.279 0a2.131 2.131 0 0 0-.634-1.508 2.13 2.13 0 0 0-1.511-.623h-.015a2.134 2.134 0 0 0-1.513.639 2.132 2.132 0 0 0-.6 1.79c.061.468.275.901.615 1.239a2.13 2.13 0 0 0 1.511.623h.015a2.148 2.148 0 0 0 2.132-2.16zM0 8.865v6.27a.987.987 0 0 0 .987-.987V9.852A.987.987 0 0 0 0 8.865zm19.441 0v6.27a.987.987 0 0 0 .987-.987V9.852a.987.987 0 0 0-.987-.987zm4.27 4.872L21.974 12l1.737-1.737a.987.987 0 0 0 0-1.395L20.579 12l3.132 3.132a.987.987 0 0 0 0-1.395zM2.533 12l1.737-1.737a.987.987 0 0 0 0-1.395L1.137 12l3.132 3.132a.987.987 0 0 0 0-1.395L2.533 12z" />
    </svg>
  );
});

Klook.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The title provides an accessible short text description to the SVG
   */
  title: PropTypes.string,
};

export default Klook;
