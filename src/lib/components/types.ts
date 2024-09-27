export type SpacingSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AttributeQueries<T> {
  compact?: T;
  medium?: T;
  expanded?: T;
  large?: T;
  xlarge?: T;
}
