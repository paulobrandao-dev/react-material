export type SpacingSizes = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AttributeQueries<T> {
  compact?: T;
  medium?: T;
  expanded?: T;
  large?: T;
  xlarge?: T;
}

export type SpacingProps = {
  gap?: SpacingSizes | AttributeQueries<SpacingSizes>;
  gapColumn?: SpacingSizes | AttributeQueries<SpacingSizes>;
  gapRow?: SpacingSizes | AttributeQueries<SpacingSizes>;
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
