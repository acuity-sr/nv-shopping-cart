// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { Prisma } from "@prisma/client";
import * as mocker from "./mocker/User";
import CartGenerator from "./CartGenerator";
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
  // @mock faker.name.firstName
  name: String;
  email: String;
  password: String;
  createdAt: DateTime;
  updatedAt: DateTime;
};

// dependent fields, mocked by 'faker.*' and/or (async) independent computation
type Dependent = {};

// relations
type Relations = {
  cart?: Prisma.CartCreateNestedOneWithoutUserInput | undefined;
};

export default async function UserGenerator<
  T = Prisma.UserCreateInput | Prisma.UserCreateNestedOneWithoutCartInput
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
              name: faker.name.firstName(),
              email: faker.internet.email(),
              password: faker.datatype.string(),
              createdAt: now(),
              updatedAt: now(),
            };

            const dependent: Dependent = {};

            // dependent fields, mocked by 'faker.*' and/or (async) independent computation
            const relations: Relations = {
              cart: excludeRelation("Cart:user", stack)
                ? undefined
                : {
                    create: (
                      await CartGenerator<Prisma.CartCreateWithoutUserInput>({
                        min: 0,
                        max: 1,
                        stack: [...stack, "User:cart", "Cart:user"],
                        faker,
                        depth,
                      })
                    )?.pop(),
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
