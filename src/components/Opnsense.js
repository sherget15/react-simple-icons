import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Opnsense = forwardRef(function Opnsense(
  { color = 'currentColor', size = 24, title = 'OPNSense', ...others },
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
      <path d="M18.419 11.08h5.259v1.847h-5.254l1.66.885v1.847l-5.111-2.732h-.005V11.08l5.111-2.737v1.847l-1.66.89zm.005 5.54l5.255 2.808v1.841c.01 1.453-1.176 2.744-2.655 2.731H.322v-4.573l5.252-2.808H2.119v-1.847h1.297v1.719l3.216-1.719h2.395v1.846l-3.453 1.847h12.85l-3.455-1.847v-1.846h2.4l3.216 1.719v-1.719h1.297v1.847h-3.458zM3.949 20.307v-.972l-1.83.979v1.84h18.905c.481-.004.848-.393.857-.879v-.96l-1.764-.943v.936H3.949zm-.033-6.496v1.847l5.111-2.732V11.08L3.916 8.343v1.847l1.665.89H.322v1.847h5.254l-1.66.884zM23.679 0v4.572L18.42 7.386h3.462v1.847h-1.303V7.508l-3.222 1.725h-2.39V7.386l3.451-1.847H5.578l3.449 1.847v1.847H6.638L3.416 7.508v1.725H2.119V7.386h3.459L.322 4.572V2.731C.3 1.291 1.495-.012 2.976 0h20.703zm-1.798 1.846H2.976c-.488.009-.847.394-.857.88v.962l1.797.962v-.957h16.168v.956l1.797-.962V1.846z" />
    </svg>
  );
});

Opnsense.propTypes = {
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

export default Opnsense;