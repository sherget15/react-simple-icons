import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Greensock = forwardRef(function Greensock(
  { color = 'currentColor', size = 24, title = 'GreenSock', ...others },
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
      <path d="M13.473 23.948c-.311-.053-.639-.2-.82-.365a.702.702 0 0 1-.198-.487c0-.18.09-.44.242-.696a2.2 2.2 0 0 0 .209-.465c.03-.113.096-.3.147-.417l.091-.212.024-1.436c.013-.79.037-1.526.053-1.638a4.94 4.94 0 0 1 .253-.962l.084-.209-.123-.073c-.115-.069-.21-.168-.58-.608-.457-.54-1.057-.836-1.908-.94a16 16 0 0 0-.84-.057c-1.252-.058-1.966-.319-2.61-.952-.48-.474-.731-1.025-.833-1.836-.138-1.098-.29-1.663-.57-2.12a2.035 2.035 0 0 0-.237-.315l-.114-.113-.25.16c-.139.088-.329.203-.423.255a8.301 8.301 0 0 0-.896.571c-.696.507-1.459 1.142-1.877 1.562-.188.188-.287.267-.327.262-.288-.043-.066-1.28.396-2.21.595-1.197 1.593-2.303 2.752-3.051.95-.613 2.485-1.456 3.196-1.753 1.26-.527 2.892-1.098 4.01-1.403.236-.064.381-.122.477-.19.22-.153.434-.225.681-.23.206-.003.226-.01.425-.14.235-.152.302-.162.538-.08l.154.055.187-.127.188-.127.27.006c.205.004.299-.007.387-.046.114-.05.118-.056.15-.245.072-.406.08-.61.037-.854-.058-.324-.063-1.584-.008-1.829.059-.266.097-.319.295-.417.297-.147.519-.188 1.032-.188.624 0 .94.084 1.174.31.212.206.248.68.137 1.8-.064.642-.072.823-.055 1.244.01.271.027.524.037.561.017.065.032.069.259.074.221.004.26.014.471.125.204.106.356.234.386.325.006.02.04.021.104.003.118-.035.225.003.309.109.051.065.083.078.203.078.16 0 .216.038.349.234a.598.598 0 0 0 .246.2c.22.11.515.414.63.654.175.362.212.777.101 1.154-.04.14-.04.145.042.282.174.29.237.65.167.954l-.041.18.118.117c.583.583.497 1.531-.215 2.38-.076.09-.165.232-.198.318-.14.363-.294.618-.499.828l-.204.21h-.214c-.21 0-.505-.07-.685-.165-.075-.039-.08-.038-.065.01.05.172.164.87.205 1.255.063.594.044 1.458-.04 1.829a2.85 2.85 0 0 1-.297.785c-.076.126-.083.155-.066.304.024.217-.027.576-.115.813-.104.277-.143.407-.166.546-.02.122-.02.123.066.123.115 0 .175.068.175.199 0 .06-.05.374-.112.7-.171.908-.182 1.013-.184 1.895-.003.909-.004.902.204 1.037l.464.302a6.37 6.37 0 0 0 1.276.656c.653.258.743.324.743.544 0 .095-.019.133-.1.211-.252.243-.744.297-1.737.192a16.668 16.668 0 0 0-1.55-.075c-1.365-.02-1.567-.067-1.745-.408-.102-.195-.084-.45.059-.868a5.86 5.86 0 0 0 .163-.56c.093-.455.03-.993-.188-1.604l-.185-.518c-.186-.528-.286-1.494-.176-1.712.02-.04.054-.05.146-.044l.119.01.096-.204c.075-.158.158-.264.38-.488l.285-.286-.014-.182c-.014-.174-.243-1.027-.276-1.025-.009 0-.073.088-.144.195-.17.258-.552.658-.766.802-.094.064-.172.137-.172.162-.002.103-.094.31-.201.455-.106.143-.113.163-.097.29.024.183-.033.773-.104 1.08a3.482 3.482 0 0 1-.257.665c-.27.56-.472 1.058-.525 1.29a5.534 5.534 0 0 0-.068.673c-.013.264-.04.524-.06.577-.026.075-.027.132-.002.246.018.082.03.266.027.41-.004.2.012.33.07.564.1.397.122.647.073.796-.03.092-.064.129-.166.18-.237.12-.899.185-1.259.123zm.95-.318c.137-.039.252-.159.252-.263 0-.045-.04-.183-.087-.306-.09-.23-.254-.837-.254-.938 0-.054.004-.055.085-.012l.085.045-.002-.11a1.326 1.326 0 0 0-.064-.295c-.074-.223-.084-.228-.554-.254l-.322-.017-.115.113a1.03 1.03 0 0 0-.169.22c-.052.103-.072.255-.038.29.008.009.085 0 .17-.02a.755.755 0 0 1 .155-.029c0 .005-.086.073-.192.151-.47.348-.633.564-.633.837 0 .286.266.508.688.574.29.046.854.054.995.014zm6.354-.465c.117-.142.103-.285-.046-.45a1.223 1.223 0 0 0-.292-.22 3.668 3.668 0 0 1-.328-.195c-.086-.06-.362-.22-.612-.36a8.634 8.634 0 0 1-.527-.306l-.07-.055v-1.075c0-1.06-.002-1.073-.058-1.058-.273.075-.726.109-1.302.098l-.619-.01.088.218c.167.416.254.97.253 1.606 0 .238-.014.326-.073.492a8.78 8.78 0 0 0-.087.249c-.011.035.032.06.194.108.115.035.289.071.387.082l.178.018-.018.181c-.02.205.003.418.054.486.029.038.149.052.69.078.412.02.858.062 1.209.114.305.045.633.084.73.085.162.003.18-.003.249-.086zm-6.252-1.831c.015-.01.037-.222.047-.471.031-.7.057-.8.41-1.589.287-.644.441-1.245.427-1.673l-.008-.254-.107.106c-.227.225-.071-.13.197-.447.203-.24.273-.375.307-.587.014-.086.047-.13.18-.23.502-.385.867-.87 1.103-1.463.056-.141.198-.62.315-1.066.218-.826.335-1.179.44-1.333.04-.059.055-.068.045-.029-.06.235-.08.33-.13.637-.032.191-.09.564-.128.828-.078.532-.156.876-.261 1.144l-.07.178.189.485c.193.497.283.855.302 1.205l.01.192-.154.032a.784.784 0 0 0-.497.314c-.136.19-.208.348-.173.384.015.015.207.05.425.075.342.04.47.042.919.013a5.73 5.73 0 0 0 .579-.056c.042-.015.083-.101.154-.323.162-.51.193-.693.174-1.05l-.016-.317.082-.105c.192-.244.34-.682.4-1.19.075-.626-.06-1.936-.315-3.062-.12-.533-.17-.854-.17-1.09v-.207l-.193.02c-.687.076-1.518.055-2.028-.05-.276-.056-.976-.26-1.13-.329l-.119-.053-.017.135a2.093 2.093 0 0 1-.04.226c-.023.085-.014.102.131.246.18.18.236.276.236.402 0 .075-.045.138-.263.367-.16.168-.364.345-.52.449l-.256.172-.106.376c-.394 1.39-.468 2.649-.21 3.554l.064.226-.125.155c-.47.592-.746 1.041-.788 1.29-.008.05-.048.215-.088.367-.1.386-.178.953-.212 1.566a43.822 43.822 0 0 1-.104 1.539l-.017.152.195.06c.108.033.273.073.367.087.174.028.499.023.548-.008zm3.793-2.148c.303-.018.581-.066.635-.11.023-.018.05-.1.06-.18l.017-.148-.24.053a5.127 5.127 0 0 1-.577.078 9.474 9.474 0 0 1-1.382-.04c-.152-.023-.153-.022-.103.177.037.15.045.154.445.185.266.02.634.016 1.145-.015zm-.255-.68c.396-.033.894-.118.99-.17.031-.017.061-.074.072-.139l.036-.208.018-.099-.096.02c-.433.091-.762.118-1.42.118-.639 0-.712-.006-.88-.063a.603.603 0 0 0-.206-.048c-.028.017-.03.24-.005.395.015.095.03.111.125.138.297.08.796.101 1.366.055zm-7.249-3.523c1-.286 2.308-1.137 3.377-2.197.35-.348.39-.397.437-.55l.064-.199c.007-.016-.056-.045-.138-.065-.216-.052-.377-.174-.379-.288 0-.066-.04-.132-.15-.255-.187-.208-.233-.298-.253-.497l-.016-.158-.216-.158c-.124-.09-.564-.332-1.028-.565a14.706 14.706 0 0 1-1.039-.561c-.39-.264-.653-.576-.8-.947-.029-.076-.063-.138-.075-.138-.033 0-.91.85-1.286 1.247-.924.977-1.563 1.825-1.964 2.61-.1.195-.21.425-.242.511l-.06.157.073.26c.04.143.13.373.2.51.246.484.541.777 1.024 1.015.52.257.98.346 1.75.337.416-.005.535-.016.721-.07zM2.921 11.56c.657-.582 1.563-1.22 2.674-1.882.727-.433 3.533-1.837 4.826-2.414.234-.105.446-.201.47-.215.023-.013.091-.18.151-.369.276-.869.412-1.041.908-1.153.063-.014.078-.034.078-.099 0-.11.078-.374.145-.491.05-.09.051-.095.005-.082-.027.009-.19.056-.363.106-2.38.687-4.462 1.6-6.26 2.742-1.92 1.22-3.022 2.68-3.343 4.429l-.024.13.232-.231c.127-.127.353-.339.501-.47zm17.677.33c.19-.098.487-.548.597-.902a.812.812 0 0 1 .182-.338c.292-.32.531-.905.532-1.304 0-.62-.349-.859-.863-.592-.064.033-.121.055-.127.048-.029-.029.117-.17.29-.28.233-.15.277-.24.277-.566 0-.271-.069-.493-.225-.733-.07-.105-.098-.177-.087-.218l.072-.264c.096-.347.061-.744-.088-.997-.227-.385-.506-.573-.894-.602l-.225-.017.134.147c.392.429.583.963.508 1.42-.039.232-.077.28-.303.372l-.13.053.015.179c.026.295-.024.508-.212.905-.093.198-.164.376-.157.395.025.067.28.195.483.244l.2.048-.125.04c-.161.053-.198.126-.199.397 0 .245.035.346.217.616.08.118.135.237.144.308.015.111.01.118-.08.151a1.52 1.52 0 0 1-.31.05c-.367.023-.395.033-.558.19-.15.143-.153.151-.153.307 0 .215.08.645.132.704.064.073.436.255.58.283a.544.544 0 0 0 .373-.044zm-5.41-.294c.239-.187.425-.374.532-.535.065-.098.069-.117.036-.197-.052-.127-.411-.45-.611-.547a1.463 1.463 0 0 0-.418-.12l-.246-.034-.154-.192c-.314-.39-.49-.693-.742-1.282-.216-.502-.409-.795-.713-1.082-.125-.118-.217-.215-.206-.215.012 0 .161.073.333.163.288.151.321.162.451.146.465-.056.873-.591 1.024-1.34.043-.214.127-.429.218-.557.004-.005.182.115.395.267.534.38.652.436.955.448.202.008.314-.008.672-.094.765-.186 1.594-.262 2.1-.193.285.039.692.163 1 .306.301.14.359.148.457.062.08-.07.081-.08.08-.342-.002-.386-.144-.804-.36-1.053-.11-.129-.415-.34-.72-.501a12.227 12.227 0 0 1-.327-.178c-.142-.083-.309-.073-.752.044-.515.135-.652.133-1.243-.018-.499-.128-.532-.13-1.022-.053-.261.041-.918.017-1.138-.041a4.228 4.228 0 0 1-.325-.104c-.19-.071-.522-.083-.822-.03-.6.107-1.054.43-1.218.87-.084.224-.073.329.042.401.177.112.416.421.416.54 0 .01-.056-.041-.125-.113-.166-.174-.32-.251-.5-.251a.62.62 0 0 0-.55.362 3.846 3.846 0 0 0-.133.42c-.11.402-.206.612-.412.892-.186.253-.211.366-.146.651.164.719.448 1.011 1.639 1.686.625.354.948.553 1.182.729.179.133.184.14.168.243-.037.233.112.49.406.695.075.052.122.107.122.143 0 .072.196.17.343.17.08 0 .145-.034.313-.166zm4.815-1.314c.454.013.479-.019.235-.301-.254-.295-.323-.532-.23-.794l.037-.102-.159-.078a1.167 1.167 0 0 0-.163-.072 7.965 7.965 0 0 0-.079.31c-.058.24-.13.856-.131 1.12 0 .023.038.013.105-.028.092-.055.14-.062.385-.055zm-1.518-.025c.273-.015.556-.036.63-.046l.134-.018.017-.452c.023-.64.115-1.018.393-1.622.198-.43.281-.807.24-1.086-.018-.122-.025-.13-.188-.201a4.295 4.295 0 0 0-.934-.253c-.31-.045-1.214-.019-1.555.045-.14.026-.397.08-.57.121-.426.1-.652.087-.976-.055-.32-.141-.524-.268-.717-.448-.151-.141-.165-.148-.206-.101-.03.035-.047.14-.057.368-.014.347-.066.53-.22.777a.832.832 0 0 0-.086.16c0 .012.119.146.264.296.499.52.744.654 1.138.624.13-.01.22-.006.22.01 0 .029-.254.23-.361.286-.048.025-.06.053-.052.113l.06.408c.036.236.064.343.1.375.093.08.577.33.88.452.401.163.617.221.924.247.373.031.381.031.922 0zm-3.23-.427c.008-.015-.022-.24-.07-.502-.063-.356-.098-.485-.137-.518-.03-.024-.173-.128-.319-.231a5.503 5.503 0 0 1-.537-.452l-.271-.264-.142.075-.154.083a.7.7 0 0 0 .064.176c.04.093.126.323.19.51.165.489.291.723.616 1.148l.124.161.23.036c.126.02.257.046.291.059.056.021.063.012.08-.115a.755.755 0 0 1 .034-.166zm4.948-4.86c.2-.019.234-.05.147-.138-.052-.053-.179-.059-.28-.012-.068.031-.082.024-.187-.09-.11-.122-.116-.125-.254-.108-.125.015-.144.01-.16-.041a1.078 1.078 0 0 0-.18-.226.842.842 0 0 0-.325-.23c-.243-.092-.378-.082-.609.045-.667.365-.64.361-1.283.197-.603-.154-1.054-.307-1.197-.407-.12-.083-.379-.17-.593-.2-.16-.022-.264.013-.416.14l-.08.066.072.128c.102.181.092.191-.062.06-.163-.14-.357-.234-.485-.235-.089 0-.355.115-.387.168-.009.014.073.033.181.043.115.01.271.048.376.093.272.116.414.154.664.18.273.026.771-.005.828-.053.029-.025.115-.029.296-.015.238.018.337.04.903.193.328.09.558.083.949-.026.18-.05.406-.1.501-.11.16-.017.192-.01.44.103.4.18.61.296.728.4.117.1.13.103.413.076zm-2.228-.684l.238-.124-.005-.245a11.964 11.964 0 0 0-.022-.495l-.017-.251-.238.184c-.141.11-.278.192-.339.203-.171.033-1.016 0-1.096-.042a2.31 2.31 0 0 1-.291-.259l-.22-.22-.003.13c0 .07-.011.192-.024.268-.022.138-.02.142.13.333.084.107.152.202.152.212 0 .076 1.128.426 1.382.43.081 0 .184-.036.353-.124zm-.452-.889c.282-.054.42-.258.523-.773.11-.554.166-1.425.113-1.797-.047-.334-.419-.485-1.136-.461-.444.015-.628.059-.779.187-.094.08-.096.087-.137.457-.08.711.036 1.724.24 2.105.097.183.184.25.365.28.203.035.635.036.811.002z" />
    </svg>
  );
});

Greensock.propTypes = {
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

export default Greensock;