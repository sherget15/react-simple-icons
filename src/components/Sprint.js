import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Sprint = forwardRef(function Sprint({ color = 'currentColor', size = 24, title = 'Sprint', ...others }, ref) {
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
      <path d="M2.201 0c2.416 2.642 5.96 7.925 7.203 9.821C8.41 7.09 5.904 1.4 2.2 0zm5.464 2.461c1.264 3.635 2.37 8.828 2.687 11.356.429-2.845.203-6.276-.361-8.443C9.697 4.2 8.636 2.867 7.665 2.46zm4.177 2.348c.022 2.732-.948 9.099-1.987 11.876 2.303-2.98 4.132-6.458 4.132-8.964 0-1.31-.926-2.212-2.145-2.912zm4.064 2.8c-1.92 4.492-6.232 10.114-8.602 12.575 3.341-2.28 8.173-6.638 9.82-8.986.385-.542.678-.88.678-1.467 0-.948-1.106-1.648-1.896-2.123zm3.477 2.912C15.093 14.991 6.559 21.675 2.292 24c5.396-1.806 13.23-6.028 18.694-9.799.451-.316.813-.61.813-1.129 0-.88-1.626-2.077-2.416-2.551z" />
    </svg>
  );
});

Sprint.propTypes = {
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

export default Sprint;
