import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Googletagmanager = forwardRef(function Googletagmanager(
  { color = 'currentColor', size = 24, title = 'Google Tag Manager', ...others },
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
      <path d="M11.93 18.136c1.62 0 2.933 1.313 2.933 2.932 0 1.62-1.312 2.932-2.932 2.932C10.31 24 9 22.688 9 21.069c0-1.62 1.312-2.932 2.93-2.932zm11.19-8.258l-9-9c-1.17-1.17-3.07-1.17-4.24 0-1.172 1.17-1.172 3.07 0 4.242l6.865 6.866-4.493 4.588 2.12 2.21c.58.622.9 1.433.9 2.283 0 .313-.044.615-.125.903l7.974-7.85c1.173-1.17 1.173-3.07 0-4.242zM11.67 7.49L9.59 5.41c-.644-.644-1-1.5-1-2.41 0-.333.05-.66.14-.97L.878 9.81c-1.17 1.17-1.17 3.066 0 4.237l7.825 7.875a3.349 3.349 0 0 1-.11-.854c0-1.842 1.498-3.34 3.34-3.34.35 0 .69.054 1.008.155l-5.706-5.955z" />
    </svg>
  );
});

Googletagmanager.propTypes = {
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

export default Googletagmanager;
