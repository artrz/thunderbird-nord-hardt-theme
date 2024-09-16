import { build } from 'thunderbird-theme-builder';
import theme from './themeConfig.js';

build(theme, {
    thunderbirdMinVersion: '128.0',
    stylesheet: 'nord-hardt.scss',
    assetsDir: 'src/assets',
});
