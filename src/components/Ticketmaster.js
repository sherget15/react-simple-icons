import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Ticketmaster = forwardRef(function Ticketmaster(
  { color = 'currentColor', size = 24, title = 'ticketmaster', ...others },
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
      <path d="M14.5153 11.3333c-.2454 0-.4826.0464-.716.1304l-.0776.4499c.2168-.105.4499-.1681.6912-.1681.1924 0 .4214.063.4214.2817 0 .063 0 .126-.0163.185h-.1923c-.5153 0-1.2924.0546-1.2924.7697 0 .3994.2699.6181.6502.6181.3026 0 .4909-.1388.679-.3828h.0082l-.0574.3324h.4624c.0491-.408.2576-1.2576.2576-1.5477 0-.5088-.3966-.6686-.818-.6686zm-.3805 1.8546c-.139 0-.2781-.0758-.2781-.2272 0-.3658.4418-.412.7076-.412h.1922c-.0857.349-.2125.6392-.6217.6392zm-8.647-.7826l.656 1.1947h-.6391l-.563-1.1647h-.0084L4.688 13.6h-.5546l.6731-3.2h.567l-.3767 1.8007h.0085l.7915-.798h.7366L5.488 12.4053zm3.8071.746c.0947 0 .1894-.0216.2562-.0517l-.0907.4485c-.0905.0216-.193.052-.2837.052-.3587 0-.6111-.1554-.6111-.5825 0-.1725.0316-.3407.067-.5175l.1498-.7506H8.4l.0828-.4228h.3824l.0907-.4574.5677-.2026-.1301.66h.4732l-.0828.4226h-.4734l-.193.9707a.9992.9992 0 00-.0236.2156c0 .1339.0826.2157.201.2157zm-8.4 0c.0947 0 .1894-.0216.2564-.0517l-.0906.4485c-.0908.0216-.1934.052-.284.052-.3587 0-.6111-.1554-.6111-.5825 0-.1725.0316-.3407.067-.5175l.1498-.7506H0l.0827-.4228h.3826l.0907-.4574.5675-.2026-.1302.66h.4734l-.0828.4226H.9107l-.1931.9707a1.004 1.004 0 00-.0237.2156c0 .1339.0828.2157.201.2157zm2.1018-.5521c0 .2816.0937.5633.4858.5633.1406 0 .3154-.0378.4644-.1093l-.0638.4459c-.1747.084-.3623.101-.5498.101-.5668 0-.9333-.3742-.9333-.9337 0-.757.5072-1.333 1.2956-1.333.213 0 .4176.0378.571.084l-.1406.4626c-.111-.0715-.26-.1093-.4176-.1093-.456 0-.7117.4205-.7117.8285zm-.4574-1.6433h-.61l.1276-.556h.6098l-.1274.556zm-.0956.408L1.9432 13.6h-.6099l.5006-2.236h.6098zm18.3563.7937c0 .164-.0199.3236-.0515.4836h-1.2524c.001-.1027.0094-.2168.0564-.387h.7276a.9136.9136 0 00.012-.1471c0-.2314-.1152-.3616-.3373-.3616-.3133 0-.4579.1904-.56.466a1.2249 1.2249 0 00-.0864.4297h-.0004l.0001.0063-.0002.012c0 .0208.0017.04.0026.0598h.0004c.0258.3406.2243.4686.5646.4686.2182 0 .4285-.0588.627-.1558l-.0677.446c-.2061.0672-.4324.122-.6507.122-.5873 0-.9841-.3029-.9841-.9464 0-.6726.4921-1.3204 1.1627-1.3204.504 0 .8373.2732.8373.8243zm1.773-.8243c.0755 0 .156.0042.227.0215l-.1247.5635a.7823.7823 0 00-.2272-.0344c-.4233 0-.628.3656-.704.7226l-.2137.9935h-.597l.4098-1.9183c.0177-.0946.0356-.1936.0535-.2968h.5702l-.0802.4174h.0089c.107-.241.401-.469.6773-.469zm1.1433.2631c0-.1183-.0707-.1763-.2142-.1763h-.239v.6255h.1018v-.2765h.0852l.1746.2765h.1082l-.178-.2765c.098 0 .1614-.0724.1614-.1727zm-.3514.093v-.1892h.1208c.0654 0 .129.0206.129.0915 0 .0812-.0507.0976-.129.0976h-.1208zM13.2 11.9398c0 .1977-.0497.4216-.0955.602L12.8804 13.6h-.5564l.2243-1.0796c.029-.1333.0706-.3399.0706-.473 0-.1635-.1205-.2667-.2616-.2667-.3862 0-.4817.4644-.5522.7656l-.22 1.0537h-.5564l.2242-1.0796c.0291-.1333.0707-.3399.0707-.473 0-.1635-.1205-.2667-.2616-.2667-.3779 0-.4817.4688-.5523.7656l-.22 1.0537h-.5564l.3903-1.9699c.0167-.086.0332-.1764.0457-.2453h.519l-.0498.297h.0082c.1496-.228.3944-.3485.656-.3485.2533 0 .5148.1548.544.4215h.0082c.1411-.2881.4526-.4215.7514-.4215.3197 0 .5937.271.5937.6066zM23.4668 11.2h-.0001a.5343.5343 0 00-.5334.5337.534.534 0 00.5334.533.5341.5341 0 00.5333-.533.5343.5343 0 00-.5332-.5337zm.0017.9872c-.2481 0-.4333-.198-.4333-.4535 0-.2556.1852-.4537.4332-.4537.2448 0 .4297.1981.4297.4537 0 .2555-.1849.4534-.4296.4535zm-5.4177.5328a1 1 0 00-.0236.2156c0 .1339.0828.2157.201.2157.0947 0 .1894-.0216.2563-.0517l-.0906.4485c-.0907.0216-.1932.052-.284.052-.3587 0-.6111-.1554-.6111-.5825 0-.1725.0317-.3407.067-.5175l.15-.7506h-.3825l.0827-.4228h.3827l.0906-.4574.5676-.2026-.13.66H18.8l-.0828.4226h-.4733l-.1931.9707zm-1.4036-1.3867c.216 0 .4364.0379.5528.0667l-.128.4247c-.0635-.033-.2267-.0792-.3941-.0792-.1762 0-.3967.0462-.3967.2186 0 .2734.767.3744.767.9042 0 .5636-.5157.7317-1.0226.7317-.2381 0-.4763-.0336-.6923-.1303l.128-.45c.1675.0883.335.1682.5642.1682.1984 0 .4056-.0632.4056-.2396 0-.3491-.767-.383-.767-.9254 0-.5088.5156-.6896.9831-.6896zm-8.3805.8243c0 .164-.02.3236-.0516.4836H6.9628c.001-.1027.0092-.2168.0565-.387h.7275a.9136.9136 0 00.012-.1471c0-.2314-.1152-.3616-.3373-.3616-.3134 0-.4579.1904-.56.466a1.2276 1.2276 0 00-.0864.4297h-.0004l.0001.0063-.0003.012c0 .0208.0018.04.0027.0598h.0005c.0255.3406.2243.4686.5644.4686.2182 0 .4286-.0588.627-.1558l-.0676.446c-.2062.0672-.4324.122-.6507.122-.5873 0-.9841-.3028-.9841-.9464 0-.6726.492-1.3204 1.1626-1.3204.504 0 .8374.2732.8374.8243z" />
    </svg>
  );
});

Ticketmaster.propTypes = {
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

export default Ticketmaster;
