import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Pantheon = forwardRef(function Pantheon(
  { color = 'currentColor', size = 24, title = 'Pantheon', ...others },
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
      <path d="M7.604 0L9.75 5.171H7.018l.904 2.276h5.535zm4.202 7.973l.724 1.752h3.09c.066 0 .223-.086.223-.877 0-.79-.157-.875-.224-.875zm-4.367 0c-.306 0-.474 0-.612.456-.166.544-.185 1.571-.185 3.57 0 2 .02 3.028.185 3.572.138.456.306.456.612.456h3.486l-1.727-4.202v.014l-.816-2.116h1.912l.884 2.119 1.826-.016-1.591-3.853zm5.235 2.1l.724 1.753h2.562c.068 0 .223-.086.223-.876s-.156-.876-.223-.876zm-3.742.076l2.633 6.403H8.346L14.297 24l-2.146-5.172h2.731l-.913-2.276H12.7l-2.634-6.403zm2.374 2.026l.724 1.752h3.93c.067 0 .223-.086.223-.876s-.155-.876-.223-.876zm.868 2.1l.723 1.752h2.722c.067 0 .223-.085.223-.875s-.156-.876-.223-.876zm4.624 1.2v.511h.103v-.391l.129.391h.096l.125-.391v.391h.107v-.511h-.15l-.127.394-.127-.394zm-.466 0v.092h.144v.42h.117v-.42h.144v-.092z" />
    </svg>
  );
});

Pantheon.propTypes = {
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

export default Pantheon;
