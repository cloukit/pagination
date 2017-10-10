import { isNullOrUndefined } from 'util';

//
// MODELS
//
export class PaginationItem {
  constructor(
    public page: number,
    public isActive: boolean,
    public isFiller: boolean,
    public label: string) {}
}

//
// HELPER FUNCTIONS
//
const createFiller = () => new PaginationItem(-1, false, true, '...');
const createAnItem = (page: number, active: boolean) => new PaginationItem(page, active, false, `${page}`);

/**
 * Provides the pages with a total of seven. See Unit Test.
 * Examples:
 *   CASE 1:  1   2   3   *4*   5   6   7
 *            1   2   3   *4*   5
 *   CASE 2:  1   2   3   *4*   5   ..  50
 *   CASE 3:  1   ..  46  *47*  48  49  50
 *   CASE 4:  1   ..  49  *50*  51  ..  90
 */
const calculatePaginationItems = (total: number, current: number) => {
  const paginationItems: PaginationItem[] = [];
  if (isNullOrUndefined(total) || isNullOrUndefined(current)) {
    return paginationItems;
  }
  //
  // CASE 1: Total is smaller or equal seven
  //
  if (total <= 7) {
    for (let i=1; i<=total; i++) {
      paginationItems.push(new PaginationItem(i, current === i, false, `${i}`));
    }
  } else
  //
  // CASE 2: Total is greater than seven AND page is in range of [1-4]
  //
  if (total > 7 && current <= 4) {
    for (let i=1; i<=5; i++) {
      paginationItems.push(createAnItem(i, current === i));
    }
    paginationItems.push(createFiller());
    paginationItems.push(createAnItem(total, false));
  } else
  //
  // CASE 3: Total is greater than seven AND page is greater than four AND page is near total
  //
  if (total > 7 && current > 4 && current + 3 >= total) {
    paginationItems.push(createAnItem(1, false));
    paginationItems.push(createFiller());
    for (let i=total-4; i<=total; i++) {
      paginationItems.push(createAnItem(i, current === i));
    }
  } else
  //
  // CASE 4: Total is greater than seven AND page is greater than four
  //
  if (total > 7 && current > 4) {
    paginationItems.push(createAnItem(1, false));
    paginationItems.push(createFiller());
    paginationItems.push(createAnItem(current - 1, false));
    paginationItems.push(createAnItem(current, true));
    paginationItems.push(createAnItem(current + 1, false));
    paginationItems.push(createFiller());
    paginationItems.push(createAnItem(total, false));
  }
  //
  // END
  //
  return paginationItems;
};

export { calculatePaginationItems, createFiller };
