import { size } from './size';
import { css } from 'styled-components';

const mobileSize = `(min-width: ${size.mobile})`;
const tabletSize = `(min-width: ${size.tablet})`;
const desktopSize = `(min-width: ${size.desktop})`;

export const mobile = (...args) => css` @media ${mobileSize} {
 ${css(...args)};
    } 
}`;

export const tablet = (...args) => css` @media ${tabletSize} {
  ${css(...args)};
     } 
 }`;

export const desktop = (...args) => css` @media ${desktopSize} {
  ${css(...args)};
     } 
 }`;