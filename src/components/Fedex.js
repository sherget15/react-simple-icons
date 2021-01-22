import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Fedex = forwardRef(function Fedex({ color = 'currentColor', size = 24, title = 'FedEx', ...others }, ref) {
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
      <path d="M22.498 14.298l.016-.19.065-.164.089-.138.124-.115.138-.083.156-.041.163-.024.163.024.156.041.146.083.124.115.089.138.049.164.024.19-.024.172-.049.164-.089.138-.124.115-.146.083-.156.057-.163.016-.163-.016-.156-.057-.138-.083-.124-.115-.089-.138-.065-.164-.016-.172zm.759-.083l.073-.024.057-.024.024-.042.008-.041-.008-.057-.024-.033-.057-.033-.073-.01h-.163v.263h.163zm-.163.107v.418h-.14v-.911h.327l.13.008.083.049.057.083.016.114-.024.091-.057.065-.075.033.059.034.033.073.033.099.008.073.008.073.016.067.016.049h-.156l-.024-.106-.016-.099-.024-.099-.024-.065-.049-.041-.073-.008h-.124zm.76-.024l-.016-.182-.059-.146-.089-.132-.13-.091-.148-.065-.163-.016-.163.016-.148.065-.122.091-.089.132-.067.146-.016.182.016.164.067.154.089.124.122.099.148.057.163.024.163-.024.148-.057.13-.099.089-.124.059-.154.016-.164zm-5.052-.579l-.878 1.008h-1.306l1.559-1.745-1.559-1.751h1.354l.902.998.878-.998h1.306l-1.543 1.743 1.559 1.753h-1.371l-.901-1.008zm-4.703-.352v-.827h1.904v-1.506l1.724 1.948-1.724 1.941v-1.556h-1.904zm1.56 1.36h-3.2V9.044h3.224v1.024h-1.912v1.163h1.888v.958h-1.904v1.522h1.904v1.016zm-5.705-.655l-.197-.016-.164-.066-.156-.107-.122-.13-.099-.156-.073-.172-.05-.197-.016-.197.008-.179.041-.189.05-.164.073-.156.107-.138.106-.115.148-.09.156-.057.189-.016.189.016.163.057.14.089.115.115.089.138.067.156.041.164.041.189v.179l-.008.18-.033.172-.041.156-.075.154-.098.124-.107.106-.14.083-.164.049-.18.018zM4.743 12.41l.067-.197.089-.156.132-.13.148-.099.164-.065.18-.016.205.016.172.065.156.091.124.13.089.164.057.197H4.743zm15.182.564l1.815-2.047h-2.125l-.74.844-.763-.844h-4.037v-.548h1.912V8.741h-5.146v2.579h-.016l-.164-.18-.189-.13-.189-.091-.205-.065-.221-.033-.231-.008-.311.016-.295.073-.272.108-.237.146-.237.189-.19.213-.164.237-.14.262-.099.286-.115-.302-.146-.278-.172-.254-.215-.213-.246-.172-.272-.146-.302-.108-.328-.057-.361-.024-.369.033-.345.064-.32.115-.296.154-.254.205-.222.23-.181.27v-.818H1.666v-.901h2.043v-1.4H0v6.288h1.666v-2.644h1.666l-.049.302-.033.32.033.353.074.319.107.312.156.262.189.254.213.213.263.179.27.148.304.107.328.065.337.024.353-.016.312-.057.294-.091.255-.13.237-.156.213-.197.197-.229.156-.262.14-.294H6.254l-.091.13-.098.091-.099.065-.122.049-.14.016-.18.008-.18-.016-.18-.065-.156-.106-.125-.133-.107-.156-.057-.189-.024-.195h2.914l.049.319.099.294.13.278.172.247.197.228.223.197.262.156.28.132.296.073.335.024.231-.024.229-.057.205-.091.197-.122.164-.156.148-.189h.016v.41h7.215l.754-.86.754.86h2.192l-1.832-2.055z" />
    </svg>
  );
});

Fedex.propTypes = {
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

export default Fedex;
