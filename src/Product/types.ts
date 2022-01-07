// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import {
  Cart,
  CartCreateInput,
  CartListRelationFilter,
  CartOrderByRelationAggregateInput,
  CartUpdateInput,
} from "./../Cart/types";
import { DateTime, ID, Int } from "./../scalars";
import {
  DateTimeFilter,
  DateTimeWithAggregatesFilter,
  IntFieldUpdateOperationsInput,
  IntFilter,
  IntWithAggregatesFilter,
  StringFieldUpdateOperationsInput,
  StringFilter,
  StringWithAggregatesFilter,
} from "./../core/types";
import { SortOrder } from "./../enums";
import { Resolvers } from "../utils";

// types

export type Product = {
  /**
   * @readOnly
   */
  id?: ID;
  name?: String;
  price?: Int;

  /**
   * @mock faker.unsplash lights
   */
  image?: String;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
  carts?: Cart[];
};

export type AggregateProduct = {
  _count?: ProductCountAggregateOutputType;
  _avg?: ProductAvgAggregateOutputType;
  _sum?: ProductSumAggregateOutputType;
  _min?: ProductMinAggregateOutputType;
  _max?: ProductMaxAggregateOutputType;
};

export type ProductGroupByOutputType = {
  /**
   * @readOnly
   */
  id?: ID;
  name?: String;
  price?: Int;

  /**
   * @mock faker.unsplash lights
   */
  image?: String;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
  _count?: ProductCountAggregateOutputType;
  _avg?: ProductAvgAggregateOutputType;
  _sum?: ProductSumAggregateOutputType;
  _min?: ProductMinAggregateOutputType;
  _max?: ProductMaxAggregateOutputType;
};

export type ProductCountOutputType = {
  carts: Int;
};

export type ProductCountAggregateOutputType = {
  /**
   * @readOnly
   */
  id?: ID;
  name?: String;
  price?: Int;

  /**
   * @mock faker.unsplash lights
   */
  image?: String;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
  _all: Int;
};

export type ProductAvgAggregateOutputType = {
  price?: Int;
};

export type ProductSumAggregateOutputType = {
  price?: Int;
};

export type ProductMinAggregateOutputType = {
  /**
   * @readOnly
   */
  id?: ID;
  name?: String;
  price?: Int;

  /**
   * @mock faker.unsplash lights
   */
  image?: String;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
};

export type ProductMaxAggregateOutputType = {
  /**
   * @readOnly
   */
  id?: ID;
  name?: String;
  price?: Int;

  /**
   * @mock faker.unsplash lights
   */
  image?: String;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
};

// input types

export type ProductCreateInput = {
  name: String;
  price: Int;

  /**
   * @mock faker.unsplash lights
   */
  image: String;
  carts: CartCreateInput[];
};

export type ProductUpdateInput = {
  name: String;
  price: Int;

  /**
   * @mock faker.unsplash lights
   */
  image: String;
  carts: CartUpdateInput[];
};

export type ProductWhereInput = {
  AND?: ProductWhereInput[];
  OR?: ProductWhereInput[];
  NOT?: ProductWhereInput[];

  /**
   * @readOnly
   */
  id?: StringFilter;
  name?: StringFilter;
  price?: IntFilter;

  /**
   * @mock faker.unsplash lights
   */
  image?: StringFilter;

  /**
   * @readOnly
   */
  createdAt?: DateTimeFilter;

  /**
   * @readOnly
   */
  updatedAt?: DateTimeFilter;
  carts?: CartListRelationFilter;
};

export type ProductOrderByWithRelationInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;

  /**
   * @mock faker.unsplash lights
   */
  image?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
  carts?: CartOrderByRelationAggregateInput;
};

export type ProductWhereUniqueInput = {
  /**
   * @readOnly
   */
  id?: String;
};

export type ProductOrderByWithAggregationInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;

  /**
   * @mock faker.unsplash lights
   */
  image?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
  _count?: ProductCountOrderByAggregateInput;
  _avg?: ProductAvgOrderByAggregateInput;
  _max?: ProductMaxOrderByAggregateInput;
  _min?: ProductMinOrderByAggregateInput;
  _sum?: ProductSumOrderByAggregateInput;
};

export type ProductScalarWhereWithAggregatesInput = {
  AND?: ProductScalarWhereWithAggregatesInput[];
  OR?: ProductScalarWhereWithAggregatesInput[];
  NOT?: ProductScalarWhereWithAggregatesInput[];

  /**
   * @readOnly
   */
  id?: StringWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
  price?: IntWithAggregatesFilter;

  /**
   * @mock faker.unsplash lights
   */
  image?: StringWithAggregatesFilter;

  /**
   * @readOnly
   */
  createdAt?: DateTimeWithAggregatesFilter;

  /**
   * @readOnly
   */
  updatedAt?: DateTimeWithAggregatesFilter;
};

export type ProductUpdateManyMutationInput = {
  name?: StringFieldUpdateOperationsInput;
  price?: IntFieldUpdateOperationsInput;

  /**
   * @mock faker.unsplash lights
   */
  image?: StringFieldUpdateOperationsInput;
};

export type ProductListRelationFilter = {
  every?: ProductWhereInput;
  some?: ProductWhereInput;
  none?: ProductWhereInput;
};

export type ProductOrderByRelationAggregateInput = {
  _count?: SortOrder;
};

export type ProductCountOrderByAggregateInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;

  /**
   * @mock faker.unsplash lights
   */
  image?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
};

export type ProductAvgOrderByAggregateInput = {
  price?: SortOrder;
};

export type ProductMaxOrderByAggregateInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;

  /**
   * @mock faker.unsplash lights
   */
  image?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
};

export type ProductMinOrderByAggregateInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;

  /**
   * @mock faker.unsplash lights
   */
  image?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
};

export type ProductSumOrderByAggregateInput = {
  price?: SortOrder;
};

export type ProductCreateNestedManyWithoutCartsInput = {
  create?: ProductCreateWithoutCartsInput[];
  connectOrCreate?: ProductCreateOrConnectWithoutCartsInput[];
  connect?: ProductWhereUniqueInput[];
};

export type ProductUpdateManyWithoutCartsInput = {
  create?: ProductCreateWithoutCartsInput[];
  connectOrCreate?: ProductCreateOrConnectWithoutCartsInput[];
  upsert?: ProductUpsertWithWhereUniqueWithoutCartsInput[];
  set?: ProductWhereUniqueInput[];
  disconnect?: ProductWhereUniqueInput[];
  delete?: ProductWhereUniqueInput[];
  connect?: ProductWhereUniqueInput[];
  update?: ProductUpdateWithWhereUniqueWithoutCartsInput[];
  updateMany?: ProductUpdateManyWithWhereWithoutCartsInput[];
  deleteMany?: ProductScalarWhereInput[];
};

export type ProductCreateWithoutCartsInput = {
  name: String;
  price: Int;

  /**
   * @mock faker.unsplash lights
   */
  image: String;
};

export type ProductCreateOrConnectWithoutCartsInput = {
  where: ProductWhereUniqueInput;
  create: ProductCreateWithoutCartsInput;
};

export type ProductUpsertWithWhereUniqueWithoutCartsInput = {
  where: ProductWhereUniqueInput;
  update: ProductUpdateWithoutCartsInput;
  create: ProductCreateWithoutCartsInput;
};

export type ProductUpdateWithWhereUniqueWithoutCartsInput = {
  where: ProductWhereUniqueInput;
  data: ProductUpdateWithoutCartsInput;
};

export type ProductUpdateManyWithWhereWithoutCartsInput = {
  where: ProductScalarWhereInput;
  data: ProductUpdateManyMutationInput;
};

export type ProductScalarWhereInput = {
  AND?: ProductScalarWhereInput[];
  OR?: ProductScalarWhereInput[];
  NOT?: ProductScalarWhereInput[];

  /**
   * @readOnly
   */
  id?: StringFilter;
  name?: StringFilter;
  price?: IntFilter;

  /**
   * @mock faker.unsplash lights
   */
  image?: StringFilter;

  /**
   * @readOnly
   */
  createdAt?: DateTimeFilter;

  /**
   * @readOnly
   */
  updatedAt?: DateTimeFilter;
};

export type ProductUpdateWithoutCartsInput = {
  name?: StringFieldUpdateOperationsInput;
  price?: IntFieldUpdateOperationsInput;

  /**
   * @mock faker.unsplash lights
   */
  image?: StringFieldUpdateOperationsInput;
};

// resolver type exports

export const resolvers: Resolvers = {};
