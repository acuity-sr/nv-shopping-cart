// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import {
  Cart,
  CartCreateInput,
  CartOrderByWithRelationInput,
  CartUpdateInput,
  CartWhereInput,
} from "./../Cart/types";
import { DateTime, Email, ID, Int } from "./../scalars";
import {
  DateTimeFilter,
  DateTimeWithAggregatesFilter,
  StringFieldUpdateOperationsInput,
  StringFilter,
  StringWithAggregatesFilter,
} from "./../core/types";
import { SortOrder } from "./../enums";
import { Resolvers } from "../utils";

// types

export type User = {
  /**
   * @createOnly
   * @readOnly
   */
  id?: ID;

  /**
   * @mock faker.name.firstName
   */
  name?: String;

  /**
   * @scalar Email
   */
  email?: Email;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
  cart?: Cart;
};

export type AggregateUser = {
  _count?: UserCountAggregateOutputType;
  _min?: UserMinAggregateOutputType;
  _max?: UserMaxAggregateOutputType;
};

export type UserGroupByOutputType = {
  /**
   * @createOnly
   * @readOnly
   */
  id?: ID;

  /**
   * @mock faker.name.firstName
   */
  name?: String;

  /**
   * @scalar Email
   */
  email?: Email;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
  _count?: UserCountAggregateOutputType;
  _min?: UserMinAggregateOutputType;
  _max?: UserMaxAggregateOutputType;
};

export type UserCountAggregateOutputType = {
  /**
   * @createOnly
   * @readOnly
   */
  id?: ID;

  /**
   * @mock faker.name.firstName
   */
  name?: String;

  /**
   * @scalar Email
   */
  email?: Email;

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

export type UserMinAggregateOutputType = {
  /**
   * @createOnly
   * @readOnly
   */
  id?: ID;

  /**
   * @mock faker.name.firstName
   */
  name?: String;

  /**
   * @scalar Email
   */
  email?: Email;

  /**
   * @readOnly
   */
  createdAt?: DateTime;

  /**
   * @readOnly
   */
  updatedAt?: DateTime;
};

export type UserMaxAggregateOutputType = {
  /**
   * @createOnly
   * @readOnly
   */
  id?: ID;

  /**
   * @mock faker.name.firstName
   */
  name?: String;

  /**
   * @scalar Email
   */
  email?: Email;

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

export type UserCreateInput = {
  /**
   * @mock faker.name.firstName
   */
  name: String;

  /**
   * @scalar Email
   */
  email: Email;

  /**
   * This is a password
   * @writeOnly
   */
  password: String;
  cart?: CartCreateInput;
};

export type UserUpdateInput = {
  /**
   * @mock faker.name.firstName
   */
  name: String;

  /**
   * @scalar Email
   */
  email: Email;

  /**
   * This is a password
   * @writeOnly
   */
  password: String;
  cart?: CartUpdateInput;
};

export type UserWhereInput = {
  AND?: UserWhereInput[];
  OR?: UserWhereInput[];
  NOT?: UserWhereInput[];

  /**
   * @createOnly
   * @readOnly
   */
  id?: StringFilter;

  /**
   * @mock faker.name.firstName
   */
  name?: StringFilter;

  /**
   * @scalar Email
   */
  email?: StringFilter;

  /**
   * @readOnly
   */
  createdAt?: DateTimeFilter;

  /**
   * @readOnly
   */
  updatedAt?: DateTimeFilter;
  cart?: CartWhereInput;
};

export type UserOrderByWithRelationInput = {
  /**
   * @createOnly
   * @readOnly
   */
  id?: SortOrder;

  /**
   * @mock faker.name.firstName
   */
  name?: SortOrder;

  /**
   * @scalar Email
   */
  email?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
  cart?: CartOrderByWithRelationInput;
};

export type UserWhereUniqueInput = {
  /**
   * @createOnly
   * @readOnly
   */
  id?: String;
};

export type UserOrderByWithAggregationInput = {
  /**
   * @createOnly
   * @readOnly
   */
  id?: SortOrder;

  /**
   * @mock faker.name.firstName
   */
  name?: SortOrder;

  /**
   * @scalar Email
   */
  email?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
  _count?: UserCountOrderByAggregateInput;
  _max?: UserMaxOrderByAggregateInput;
  _min?: UserMinOrderByAggregateInput;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: UserScalarWhereWithAggregatesInput[];
  OR?: UserScalarWhereWithAggregatesInput[];
  NOT?: UserScalarWhereWithAggregatesInput[];

  /**
   * @createOnly
   * @readOnly
   */
  id?: StringWithAggregatesFilter;

  /**
   * @mock faker.name.firstName
   */
  name?: StringWithAggregatesFilter;

  /**
   * @scalar Email
   */
  email?: StringWithAggregatesFilter;

  /**
   * @readOnly
   */
  createdAt?: DateTimeWithAggregatesFilter;

  /**
   * @readOnly
   */
  updatedAt?: DateTimeWithAggregatesFilter;
};

export type UserUpdateManyMutationInput = {
  /**
   * @mock faker.name.firstName
   */
  name?: StringFieldUpdateOperationsInput;

  /**
   * @scalar Email
   */
  email?: StringFieldUpdateOperationsInput;

  /**
   * This is a password
   * @writeOnly
   */
  password?: StringFieldUpdateOperationsInput;
};

export type UserCountOrderByAggregateInput = {
  /**
   * @createOnly
   * @readOnly
   */
  id?: SortOrder;

  /**
   * @mock faker.name.firstName
   */
  name?: SortOrder;

  /**
   * @scalar Email
   */
  email?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
};

export type UserMaxOrderByAggregateInput = {
  /**
   * @createOnly
   * @readOnly
   */
  id?: SortOrder;

  /**
   * @mock faker.name.firstName
   */
  name?: SortOrder;

  /**
   * @scalar Email
   */
  email?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
};

export type UserMinOrderByAggregateInput = {
  /**
   * @createOnly
   * @readOnly
   */
  id?: SortOrder;

  /**
   * @mock faker.name.firstName
   */
  name?: SortOrder;

  /**
   * @scalar Email
   */
  email?: SortOrder;

  /**
   * @readOnly
   */
  createdAt?: SortOrder;

  /**
   * @readOnly
   */
  updatedAt?: SortOrder;
};

export type UserRelationFilter = {
  is?: UserWhereInput;
  isNot?: UserWhereInput;
};

export type UserCreateNestedOneWithoutCartInput = {
  create?: UserCreateWithoutCartInput;
  connectOrCreate?: UserCreateOrConnectWithoutCartInput;
  connect?: UserWhereUniqueInput;
};

export type UserUpdateOneRequiredWithoutCartInput = {
  create?: UserCreateWithoutCartInput;
  connectOrCreate?: UserCreateOrConnectWithoutCartInput;
  upsert?: UserUpsertWithoutCartInput;
  connect?: UserWhereUniqueInput;
  update?: UserUpdateWithoutCartInput;
};

export type UserCreateWithoutCartInput = {
  /**
   * @mock faker.name.firstName
   */
  name: String;

  /**
   * @scalar Email
   */
  email: String;

  /**
   * This is a password
   * @writeOnly
   */
  password: String;
};

export type UserCreateOrConnectWithoutCartInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutCartInput;
};

export type UserUpsertWithoutCartInput = {
  update: UserUpdateWithoutCartInput;
  create: UserCreateWithoutCartInput;
};

export type UserUpdateWithoutCartInput = {
  /**
   * @mock faker.name.firstName
   */
  name?: StringFieldUpdateOperationsInput;

  /**
   * @scalar Email
   */
  email?: StringFieldUpdateOperationsInput;

  /**
   * This is a password
   * @writeOnly
   */
  password?: StringFieldUpdateOperationsInput;
};

// resolver type exports

export const resolvers: Resolvers = {};
