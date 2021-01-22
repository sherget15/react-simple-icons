import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Superuser = forwardRef(function Superuser(
  { color = 'currentColor', size = 24, title = 'Super User', ...others },
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
      <path d="M11.41 0c-.26 0-.39.065-.39.26v1.425c0 .195.13.26.325.26h.454c2.14 0 3.747 1.75 3.747 3.436v4.473c0 1.426.973 2.528 2.529 3.241.065.065.129.13.129.195s0 .13-.13.13c-1.685.648-2.528 2.269-2.528 3.5v3.89c0 1.686-1.621 1.232-3.76 1.232h-.454c-.194 0-.324.065-.324.26v1.426c0 .194.194.26.389.26h.583c3.566 0 6.178.324 6.178-2.723V17.18h.007c0-1.426.791-2.268 2.283-2.722.713-.195.972-.325.972-.584v-1.167c0-.454-.26-.454-.843-.649-1.491-.518-2.405-1.296-2.405-2.722V5.64c0-3.047-2.548-5.64-6.179-5.64zM2.903.019c-.194 0-.324.065-.324.26v23.455c0 .195.13.26.324.26V24H8.68c.259 0 .324-.13.388-.324v-1.374c0-.194-.194-.26-.388-.26H5.568c-.26 0-.388-.065-.388-.26V2.289c0-.194.064-.324.388-.324h3.177c.195 0 .324-.064.324-.258V.279c0-.195-.194-.26-.388-.26zm8.759 8.409c-.325 0-.649.26-.649.584v1.425c0 .325.26.584.649.584h1.296c.324 0 .648-.26.648-.584V9.012c0-.324-.259-.584-.648-.584z" />
    </svg>
  );
});

Superuser.propTypes = {
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

export default Superuser;
