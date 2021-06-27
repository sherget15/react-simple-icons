import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Pjsip = forwardRef(function Pjsip({ color = 'currentColor', size = 24, title = 'pjsip', ...others }, ref) {
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
      <path d="M5.272 20.562H10.2l2.657 2.657c.873.874 2.114 1.039 2.782.371l7.951-7.951c.668-.668.503-1.909-.37-2.782L11.142.781C10.27-.093 9.029-.258 8.36.41L.41 8.36c-.668.668-.503 1.909.37 2.782l4.492 4.492zm2.142-2.142v-3.768l-.88-.88h.016l-2.507-2.507c-.873-.873-1.039-2.114-.371-2.782l4.811-4.811c.668-.668 1.909-.502 2.782.371l8.692 8.692c.873.873 1.039 2.114.371 2.782l-4.811 4.811c-.438.438-1.12.511-1.786.269a1.218 3.063 25.325 00.557-2.845 1.218 3.063 25.325 00-1.557.033 1.218 3.063 25.325 00-.931 1.252l-.618-.617zM5.172 11.24a1.628 1.628 0 002.302 0 1.628 1.628 0 000-2.302 1.628 1.628 0 00-2.303 0 1.628 1.628 0 000 2.302z" />
    </svg>
  );
});

Pjsip.propTypes = {
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

export default Pjsip;
