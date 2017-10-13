/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */

export class PaginationButtonClickEvent {
  constructor(public type: PaginationButtonType, public page: number) {}
}

export enum PaginationButtonType {
  normal = 1,
  previous = 2,
  next = 3,
}

export class PaginationItem {
  constructor(
    public page: number,
    public isActive: boolean,
    public isFiller: boolean,
    public label: string) {}
}
