import { AttributeQueries, GridColumnSize } from '../components/types';

export function gridColumnProps({
  compact,
  medium,
  expanded,
  large,
  xlarge,
}: AttributeQueries<GridColumnSize>) {
  return {
    'data-grid-compact': compact,
    'data-grid-medium': medium,
    'data-grid-expanded': expanded,
    'data-grid-large': large,
    'data-grid-xlarge': xlarge,
  };
}
