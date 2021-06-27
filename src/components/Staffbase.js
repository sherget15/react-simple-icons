import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Staffbase = forwardRef(function Staffbase(
  { color = 'currentColor', size = 24, title = 'staffbase', ...others },
  ref
) {
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
      <path d="M11.847 20.095a7.805 7.805 0 01-6.286-3.238l1.714-1.238C8.323 17.048 10.037 18 11.847 18s3.523-.857 4.571-2.381l1.714 1.238a7.805 7.805 0 01-6.285 3.238zm.19-18c1.62 0 3.238.476 4.762 1.334l1.048.476 2.857-.572-.477 2.857c2.381 3.715 2.191 9.239-1.047 12.667a9.748 9.748 0 01-7.048 3.048 9.98 9.98 0 01-6.857-2.762c-3.905-3.81-4-10-.286-13.905 1.905-2.095 4.477-3.143 7.048-3.143m0-2.095C8.799 0 5.751 1.333 3.466 3.714c-4.572 4.762-4.477 12.381.285 16.953A11.91 11.91 0 0012.037 24c3.238 0 6.381-1.333 8.571-3.619 3.62-3.714 4.286-9.81 1.81-14.571l.38-2.096.477-2.952-2.952.571-2.19.381-.382-.19C15.941.476 14.037 0 12.037 0Z" />
    </svg>
  );
});

Staffbase.propTypes = {
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

export default Staffbase;
