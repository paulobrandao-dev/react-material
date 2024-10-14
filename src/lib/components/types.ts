export type SpacingSizes = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AttributeQueries<T> {
  compact?: T;
  medium?: T;
  expanded?: T;
  large?: T;
  xlarge?: T;
}

export type GapProps = {
  gap?: SpacingSizes | AttributeQueries<SpacingSizes>;
  gapColumn?: SpacingSizes | AttributeQueries<SpacingSizes>;
  gapRow?: SpacingSizes | AttributeQueries<SpacingSizes>;
};

export type SpacingProps = {
  padding?: SpacingSizes | AttributeQueries<SpacingSizes>;
  paddingInline?: SpacingSizes | AttributeQueries<SpacingSizes>;
  paddingBlock?: SpacingSizes | AttributeQueries<SpacingSizes>;
  margin?: SpacingSizes | AttributeQueries<SpacingSizes> | 'auto';
  marginInline?: SpacingSizes | AttributeQueries<SpacingSizes> | 'auto';
  marginBlock?: SpacingSizes | AttributeQueries<SpacingSizes> | 'auto';
};

export type FlexDirections =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse';

export type FlexAlignItems =
  | 'baseline'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'stretch';

export type FlexJustifyContent =
  | FlexAlignItems
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

export type FlexAlignProps = {
  flexDirection?: FlexDirections | AttributeQueries<FlexDirections>;
  alignItems?: FlexAlignItems | AttributeQueries<FlexAlignItems>;
  justifyContent?: FlexJustifyContent | AttributeQueries<FlexJustifyContent>;
};

export type GridColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ShapeSize =
  | 'xs'
  | 'xs-top'
  | 'sm'
  | 'md'
  | 'lg'
  | 'lg-start'
  | 'lg-end'
  | 'lg-top'
  | 'xl'
  | 'xl-top'
  | 'circle';
