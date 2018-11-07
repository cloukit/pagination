/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { CloukitBaseCssDefinitions, CloukitComponentTheme } from '@cloukit/theme';
import { Ui } from './pagination.model';

export class CloukitPaginationComponentThemeDefault extends CloukitComponentTheme {

  constructor() {
    super();
    //
    // WRAPPER
    //
    this.buildStyle(Ui.elements.wrapper, Ui.states.normal, Ui.modifier.base)
      .withStyles(<CloukitBaseCssDefinitions>{
        display: 'flex',
      });

    //
    // BUTTON
    //
    this.buildStyle(Ui.elements.button, Ui.states.normal, Ui.modifier.base)
      .withStyles(<CloukitBaseCssDefinitions>{
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
      });

    this.buildStyle(Ui.elements.button, Ui.states.active, Ui.modifier.base)
      .inheritFrom(Ui.elements.button, Ui.states.normal, Ui.modifier.base)
      .withStyles(<CloukitBaseCssDefinitions>{
        backgroundColor: '#0052cc',
        color: '#ffffff',
        cursor: 'default',
      });

    this.buildStyle(Ui.elements.button, Ui.states.normal, Ui.modifier.hover)
      .inheritFrom(Ui.elements.button, Ui.states.normal, Ui.modifier.base)
      .withStyles(<CloukitBaseCssDefinitions>{
        textDecoration: 'underline',
      });

    this.buildStyle(Ui.elements.button, Ui.states.disabled, Ui.modifier.base)
      .inheritFrom(Ui.elements.button, Ui.states.normal, Ui.modifier.base)
      .withStyles(<CloukitBaseCssDefinitions>{
        color: '#777',
        cursor: 'not-allowed',
      });

    //
    // FILLER
    //
    this.buildStyle(Ui.elements.filler, Ui.states.normal, Ui.modifier.base)
      .inheritFrom(Ui.elements.button, Ui.states.normal, Ui.modifier.base)
      .withStyles(<CloukitBaseCssDefinitions>{
        color: '#555',
        cursor: 'default',
      });

    this.buildStyle(Ui.elements.filler, Ui.states.disabled, Ui.modifier.base)
      .inheritFrom(Ui.elements.filler, Ui.states.normal, Ui.modifier.base)
      .withStyles(<CloukitBaseCssDefinitions>{
        color: '#efefef',
        cursor: 'not-allowed',
      });
  }

}

