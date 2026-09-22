import { build } from 'thunderbird-theme-builder';
import theme from './themeConfig.js';

build(theme, {
    thunderbirdMinVersion: '128.0',
    thunderbirdMaxVersion: '153.3',
    stylesPath: 'styles',
    assetsDir: 'src/assets',
});
