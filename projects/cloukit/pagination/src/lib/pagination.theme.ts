/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import {
  CloukitComponentTheme,
  CloukitStatefulAndModifierAwareElementThemeStyleDefinition,
} from '@cloukit/theme';
import { Ui } from './pagination.model';

export class CloukitPaginationComponentThemeDefault extends CloukitComponentTheme {

  constructor() {
    super();
    //
    // WRAPPER
    //
    this.createStyle(Ui.elements.wrapper, Ui.states.normal, Ui.modifier.base, {
      style: {
        display: 'flex',
      },
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);

    //
    // BUTTON
    //
    this.createStyle(Ui.elements.button, Ui.states.normal, Ui.modifier.base, {
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
      },
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);

    this.createStyle(Ui.elements.button, Ui.states.active, Ui.modifier.base,
      this.merge(this.getStyle(Ui.elements.button, Ui.states.normal, Ui.modifier.base), {
        style: {
          backgroundColor: '#0052cc',
          color: '#ffffff',
          cursor: 'default',
        },
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle(Ui.elements.button, Ui.states.normal, Ui.modifier.hover,
      this.merge(this.getStyle(Ui.elements.button, Ui.states.normal, Ui.modifier.base), {
        style: {
          textDecoration: 'underline',
        },
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle(Ui.elements.button, Ui.states.disabled, Ui.modifier.base,
      this.merge(this.getStyle(Ui.elements.button, Ui.states.normal, Ui.modifier.base), {
        style: {
          color: '#777',
          cursor: 'not-allowed',
        },
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    //
    // FILLER
    //
    this.createStyle(Ui.elements.filler, Ui.states.normal, Ui.modifier.base,
      this.merge(this.getStyle(Ui.elements.button, Ui.states.normal, Ui.modifier.base), {
        style: {
          color: '#555',
          cursor: 'default',
        },
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle(Ui.elements.filler, Ui.states.disabled, Ui.modifier.base,
      this.merge(this.getStyle(Ui.elements.filler, Ui.states.normal, Ui.modifier.base), {
        style: {
          color: '#efefef',
          cursor: 'not-allowed',
        },
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
  }

}

