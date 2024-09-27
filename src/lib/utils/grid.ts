export interface GridColumnQueries {
  compact?: 1 | 2 | 3 | 4;
  medium?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  expanded?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  large?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  xlarge?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export function gridColumnProps({
  compact,
  medium,
  expanded,
  large,
  xlarge,
}: GridColumnQueries) {
  return {
    'data-grid-compact': compact,
    'data-grid-medium': medium,
    'data-grid-expanded': expanded,
    'data-grid-large': large,
    'data-grid-xlarge': xlarge,
  };
}
