// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { DateTime, ID, Int } from "./../scalars";
import {
  DateTimeFilter,
  DateTimeWithAggregatesFilter,
  NullableStringFieldUpdateOperationsInput,
  StringFilter,
  StringNullableFilter,
  StringNullableWithAggregatesFilter,
  StringWithAggregatesFilter,
} from "./../core/types";
import {
  Product,
  ProductCreateInput,
  ProductCreateNestedManyWithoutCartsInput,
  ProductListRelationFilter,
  ProductOrderByRelationAggregateInput,
  ProductUpdateInput,
  ProductUpdateManyWithoutCartsInput,
} from "./../Product/types";
import { SortOrder } from "./../enums";
import {
  User,
  UserCreateInput,
  UserCreateNestedOneWithoutCartInput,
  UserOrderByWithRelationInput,
  UserUpdateInput,
  UserUpdateOneRequiredWithoutCartInput,
  UserWhereInput,
} from "./../User/types";
import { Resolvers } from "../utils";

// types

export type Cart = {
  /**
   * @readOnly
   */
  id?: ID;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
  user?: User;
  userId?: String;
  items?: Product[];
  coupon?: String;
};

export type AggregateCart = {
  _count?: CartCountAggregateOutputType;
  _min?: CartMinAggregateOutputType;
  _max?: CartMaxAggregateOutputType;
};

export type CartGroupByOutputType = {
  /**
   * @readOnly
   */
  id?: ID;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
  userId?: String;
  coupon?: String;
  _count?: CartCountAggregateOutputType;
  _min?: CartMinAggregateOutputType;
  _max?: CartMaxAggregateOutputType;
};

export type CartCountOutputType = {
  items: Int;
};

export type CartCountAggregateOutputType = {
  /**
   * @readOnly
   */
  id?: ID;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
  userId?: String;
  coupon?: String;
  _all: Int;
};

export type CartMinAggregateOutputType = {
  /**
   * @readOnly
   */
  id?: ID;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
  userId?: String;
  coupon?: String;
};

export type CartMaxAggregateOutputType = {
  /**
   * @readOnly
   */
  id?: ID;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
  userId?: String;
  coupon?: String;
};

// input types

export type CartCreateInput = {
  user: UserCreateInput;
  userId: String;
  items: ProductCreateInput[];
  coupon?: String;
};

export type CartUpdateInput = {
  user: UserUpdateInput;
  userId: String;
  items: ProductUpdateInput[];
  coupon?: String;
};

export type CartWhereInput = {
  AND?: CartWhereInput[];
  OR?: CartWhereInput[];
  NOT?: CartWhereInput[];

  /**
   * @readOnly
   */
  id?: StringFilter;

  /**
   * @readOnly
   */
  createdAt?: DateTimeFilter;

  /**
   * @readOnly
   */
  updatedAt?: DateTimeFilter;
  user?: UserWhereInput;
  userId?: StringFilter;
  items?: ProductListRelationFilter;
  coupon?: StringNullableFilter;
};

export type CartOrderByWithRelationInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
  user?: UserOrderByWithRelationInput;
  userId?: SortOrder;
  items?: ProductOrderByRelationAggregateInput;
  coupon?: SortOrder;
};

export type CartWhereUniqueInput = {
  /**
   * @readOnly
   */
  id?: String;
  userId?: String;
};

export type CartOrderByWithAggregationInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
  userId?: SortOrder;
  coupon?: SortOrder;
  _count?: CartCountOrderByAggregateInput;
  _max?: CartMaxOrderByAggregateInput;
  _min?: CartMinOrderByAggregateInput;
};

export type CartScalarWhereWithAggregatesInput = {
  AND?: CartScalarWhereWithAggregatesInput[];
  OR?: CartScalarWhereWithAggregatesInput[];
  NOT?: CartScalarWhereWithAggregatesInput[];

  /**
   * @readOnly
   */
  id?: StringWithAggregatesFilter;

  /**
   * @readOnly
   */
  createdAt?: DateTimeWithAggregatesFilter;

  /**
   * @readOnly
   */
  updatedAt?: DateTimeWithAggregatesFilter;
  userId?: StringWithAggregatesFilter;
  coupon?: StringNullableWithAggregatesFilter;
};

export type CartUpdateManyMutationInput = {
  coupon?: NullableStringFieldUpdateOperationsInput;
};

export type CartRelationFilter = {
  is?: CartWhereInput;
  isNot?: CartWhereInput;
};

export type CartCountOrderByAggregateInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
  userId?: SortOrder;
  coupon?: SortOrder;
};

export type CartMaxOrderByAggregateInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
  userId?: SortOrder;
  coupon?: SortOrder;
};

export type CartMinOrderByAggregateInput = {
  /**
   * @readOnly
   */
  id?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
  userId?: SortOrder;
  coupon?: SortOrder;
};

export type CartListRelationFilter = {
  every?: CartWhereInput;
  some?: CartWhereInput;
  none?: CartWhereInput;
};

export type CartOrderByRelationAggregateInput = {
  _count?: SortOrder;
};

export type CartCreateNestedOneWithoutUserInput = {
  create?: CartCreateWithoutUserInput;
  connectOrCreate?: CartCreateOrConnectWithoutUserInput;
  connect?: CartWhereUniqueInput;
};

export type CartUpdateOneWithoutUserInput = {
  create?: CartCreateWithoutUserInput;
  connectOrCreate?: CartCreateOrConnectWithoutUserInput;
  upsert?: CartUpsertWithoutUserInput;
  disconnect?: Boolean;
  delete?: Boolean;
  connect?: CartWhereUniqueInput;
  update?: CartUpdateWithoutUserInput;
};

export type CartCreateNestedManyWithoutItemsInput = {
  create?: CartCreateWithoutItemsInput[];
  connectOrCreate?: CartCreateOrConnectWithoutItemsInput[];
  connect?: CartWhereUniqueInput[];
};

export type CartUpdateManyWithoutItemsInput = {
  create?: CartCreateWithoutItemsInput[];
  connectOrCreate?: CartCreateOrConnectWithoutItemsInput[];
  upsert?: CartUpsertWithWhereUniqueWithoutItemsInput[];
  set?: CartWhereUniqueInput[];
  disconnect?: CartWhereUniqueInput[];
  delete?: CartWhereUniqueInput[];
  connect?: CartWhereUniqueInput[];
  update?: CartUpdateWithWhereUniqueWithoutItemsInput[];
  updateMany?: CartUpdateManyWithWhereWithoutItemsInput[];
  deleteMany?: CartScalarWhereInput[];
};

export type CartCreateWithoutUserInput = {
  coupon?: String;
  items?: ProductCreateNestedManyWithoutCartsInput;
};

export type CartCreateOrConnectWithoutUserInput = {
  where: CartWhereUniqueInput;
  create: CartCreateWithoutUserInput;
};

export type CartUpsertWithoutUserInput = {
  update: CartUpdateWithoutUserInput;
  create: CartCreateWithoutUserInput;
};

export type CartUpdateWithoutUserInput = {
  coupon?: NullableStringFieldUpdateOperationsInput;
  items?: ProductUpdateManyWithoutCartsInput;
};

export type CartCreateWithoutItemsInput = {
  coupon?: String;
  user: UserCreateNestedOneWithoutCartInput;
};

export type CartCreateOrConnectWithoutItemsInput = {
  where: CartWhereUniqueInput;
  create: CartCreateWithoutItemsInput;
};

export type CartUpsertWithWhereUniqueWithoutItemsInput = {
  where: CartWhereUniqueInput;
  update: CartUpdateWithoutItemsInput;
  create: CartCreateWithoutItemsInput;
};

export type CartUpdateWithWhereUniqueWithoutItemsInput = {
  where: CartWhereUniqueInput;
  data: CartUpdateWithoutItemsInput;
};

export type CartUpdateManyWithWhereWithoutItemsInput = {
  where: CartScalarWhereInput;
  data: CartUpdateManyMutationInput;
};

export type CartScalarWhereInput = {
  AND?: CartScalarWhereInput[];
  OR?: CartScalarWhereInput[];
  NOT?: CartScalarWhereInput[];

  /**
   * @readOnly
   */
  id?: StringFilter;

  /**
   * @readOnly
   */
  createdAt?: DateTimeFilter;

  /**
   * @readOnly
   */
  updatedAt?: DateTimeFilter;
  userId?: StringFilter;
  coupon?: StringNullableFilter;
};

export type CartUpdateWithoutItemsInput = {
  coupon?: NullableStringFieldUpdateOperationsInput;
  user?: UserUpdateOneRequiredWithoutCartInput;
};

// resolver type exports

export const resolvers: Resolvers = {};
