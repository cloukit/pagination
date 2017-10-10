/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import {
  CloukitComponentTheme, CloukitStatefulAndModifierAwareElementThemeStyleDefinition
} from '@cloukit/theme';

/**
 * The default theme
 */
export class CloukitPaginationComponentThemeDefault extends CloukitComponentTheme {

  constructor() {
    super();
    //
    // NORMAL
    //
    this.createStyle('wrapper', 'normal', 'base', {
      style: {
        display: 'flex',
        width: '100%',
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);

    this.createStyle('button', 'inactive', 'base', {
      style: {
        alignSelf: 'center',
        display: 'inline-flex',
        flexWrap: 'nowrap',
        maxWidth: '100%',
        color: '#0052cc',
        textDecoration: 'none',
        fontStyle: 'normal',
        fontSize: 'inherit',
        margin: 0,
        outline: 'none',
        textAlign: 'center',
        userSelect: 'none',
        verticalAlign: 'middle',
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        padding: '2px 6px 3px',
        border: 0,
        backgroundColor: 'transparent',
        cursor: 'pointer',
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);

    this.createStyle('button', 'active', 'base', this.merge(this.getStyle('button', 'inactive', 'base'), {
      style: {
        backgroundColor: 'red',
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('button', 'filler', 'base', this.merge(this.getStyle('button', 'inactive', 'base'), {
      style: {
        backgroundColor: '#ccc',
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
  }

}

