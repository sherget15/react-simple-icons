import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Nuxtdotjs = forwardRef(function Nuxtdotjs(
  { color = 'currentColor', size = 24, title = 'nuxtdotjs', ...others },
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
      <path d="M19.7237 20.273l.023-.045a.74.74 0 00.053-.117l.002-.005a1.1601 1.1601 0 00.054-.607l.001.007a1.7952 1.7952 0 00-.235-.6232l.005.008-5.3177-9.3541-.812-1.4202-.8072 1.4202-5.3146 9.3541a1.8502 1.8502 0 00-.204.6041l-.001.011a1.2572 1.2572 0 00.08.7131l-.003-.008a.8091.8091 0 00.05.102l-.002-.004c.16.275.5.602 1.2501.602h9.8993c.157 0 .925-.032 1.2801-.637zM13.496 10.956l4.8595 8.549H8.6384zm10.2502 7.935L16.7293 6.5292c-.072-.13-.477-.787-1.1821-.787-.317 0-.772.135-1.1421.785l-.9071 1.5902.807 1.4202 1.2502-2.2123 6.9419 12.1815h-2.6404a1.1871 1.1871 0 01-.058.6081l.003-.008a.7721.7721 0 01-.057.126l.002-.004-.023.045c-.355.6051-1.1221.6371-1.2721.6371h4.1295c.152 0 .917-.032 1.2721-.637.157-.2751.27-.7372-.107-1.3822zM7.3022 20.308a.9891.9891 0 01-.045-.092l-.002-.006a1.2282 1.2282 0 01-.084-.712l-.001.007H1.4985l8.43-14.834 2.7674 4.8647.802-1.4202-2.4122-4.2495c-.067-.122-.4751-.7771-1.1772-.7771-.317 0-.772.137-1.1421.7871L.2274 18.8898c-.0721.13-.4251.8121-.0751 1.4172.16.275.5.6021 1.2502.6021h7.1518c-.745 0-1.09-.322-1.2501-.602z" />
    </svg>
  );
});

Nuxtdotjs.propTypes = {
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

export default Nuxtdotjs;
