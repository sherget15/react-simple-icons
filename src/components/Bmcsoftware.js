import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bmcsoftware = forwardRef(function Bmcsoftware(
  { color = 'currentColor', size = 24, title = 'BMC Software', ...others },
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
      <path d="M6.375 23.999c-.95 0-1.95-.749-1.95-2.2v-3.4c0-1.349.85-2.899 2.05-3.548l4.75-2.8-4.75-2.8C5.325 8.5 4.425 7 4.425 5.65V2.2c0-1.45 1-2.2 2.002-2.2.4 0 .849.1 1.249.35l10.7 6.35c.75.45 1.15 1.149 1.15 1.849 0 .75-.452 1.45-1.15 1.85l-2.55 1.5 2.55 1.501c.75.45 1.2 1.15 1.2 1.85 0 .75-.452 1.45-1.2 1.85L7.674 23.65c-.45.25-.85.35-1.3.35zm7.15-10.599l-5.85 3.45c-.45.25-.9 1.05-.9 1.55v3.05l10.15-6zM6.775 2.6v3.05c0 .5.45 1.3.9 1.55l5.85 3.45 3.45-2.05z" />
    </svg>
  );
});

Bmcsoftware.propTypes = {
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

export default Bmcsoftware;
