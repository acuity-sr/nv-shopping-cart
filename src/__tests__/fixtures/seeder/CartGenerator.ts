// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { Prisma } from "@prisma/client";
import * as mocker from "./mocker/Cart";
import ProductGenerator from "./ProductGenerator";
import UserGenerator from "./UserGenerator";
import { DateTime } from "../../../scalars";
import {
  cuid,
  excludeRelation,
  getCount,
  now,
  opt,
  removeEmpties,
} from "./mocker/_builtIns";

// independent fields, mocked by 'faker.*'/'defaults'
type Independent = {
  id: String;
  createdAt: DateTime;
  updatedAt: DateTime;
  coupon?: String;
};

// dependent fields, mocked by 'faker.*' and/or (async) independent computation
type Dependent = {};

// relations
type Relations = {
  user: Prisma.UserCreateNestedOneWithoutCartInput | undefined;
  items: Prisma.ProductCreateNestedManyWithoutCartsInput | undefined;
};

export default async function CartGenerator<
  T =
    | Prisma.CartCreateInput
    | Prisma.CartCreateNestedManyWithoutItemsInput
    | Prisma.CartCreateNestedOneWithoutUserInput
>({
  count,
  stack = [],
  max = 100,
  min = 10,
  depth = 10,
  faker,
}: {
  min?: number;
  max?: number;
  count?: number;
  stack?: string[];
  depth?: number;
  faker: Faker.FakerStatic;
}): Promise<T[] | undefined> {
  return depth < stack.length
    ? []
    : Promise.all(
        Array(getCount({ count, min, max })) // creates a range
          .fill(0) // ensures we can iterate over the range
          .map(async (): Promise<T> => {
            // independent fields, mocked by 'faker.*'/'defaults'
            const independent: Independent = {
              id: cuid(),
              createdAt: now(),
              updatedAt: now(),
              coupon: opt(faker.datatype.string()),
            };

            const dependent: Dependent = {};

            // dependent fields, mocked by 'faker.*' and/or (async) independent computation
            const relations: Relations = {
              user: excludeRelation("User:cart", stack)
                ? undefined
                : {
                    create: (
                      await UserGenerator<Prisma.UserCreateWithoutCartInput>({
                        count: 1,
                        stack: [...stack, "Cart:user", "User:cart"],
                        faker,
                        depth,
                      })
                    )?.pop(),
                  },
              items: excludeRelation("Cart:items", stack)
                ? undefined
                : {
                    create:
                      await ProductGenerator<Prisma.ProductCreateWithoutCartsInput>(
                        {
                          min: 1,
                          max: 20,
                          stack: [...stack, "Cart:items", "Product:carts"],
                          faker,
                          depth,
                        }
                      ),
                  },
            };

            const create = {
              ...independent,
              ...dependent,
              ...relations,
            };

            return removeEmpties(create) as unknown as T;
          })
      );
}
