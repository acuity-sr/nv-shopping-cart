// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { Prisma } from "@prisma/client";
import * as mocker from "./mocker/Product";
import CartGenerator from "./CartGenerator";
import { DateTime, Int } from "../../../scalars";
import {
  cuid,
  excludeRelation,
  getCount,
  now,
  opt,
  removeEmpties,
  unsplash,
} from "./mocker/_builtIns";

// independent fields, mocked by 'faker.*'/'defaults'
type Independent = {
  id: String;
  name: String;
  price: Int;
  // @mock faker.unsplash lights
  image: String;
  createdAt: DateTime;
  updatedAt: DateTime;
};

// dependent fields, mocked by 'faker.*' and/or (async) independent computation
type Dependent = {};

// relations
type Relations = {
  carts: Prisma.CartCreateNestedManyWithoutItemsInput | undefined;
};

export default async function ProductGenerator<
  T =
    | Prisma.ProductCreateInput
    | Prisma.ProductCreateNestedManyWithoutCartsInput
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
              name: faker.datatype.string(),
              price: Number(faker.datatype.number()),
              image: await unsplash(faker, "lights"),
              createdAt: now(),
              updatedAt: now(),
            };

            const dependent: Dependent = {};

            // dependent fields, mocked by 'faker.*' and/or (async) independent computation
            const relations: Relations = {
              carts: excludeRelation("Product:carts", stack)
                ? undefined
                : {
                    create:
                      await CartGenerator<Prisma.CartCreateWithoutItemsInput>({
                        min: 1,
                        max: 20,
                        stack: [...stack, "Product:carts", "Cart:items"],
                        faker,
                        depth,
                      }),
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
