// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { makeExecutableSchema } from "@graphql-tools/schema";
import { assertValidSchema } from "graphql";
import * as fs from "fs";
import * as CartCrud from "./Cart/crud";
import * as CartTypes from "./Cart/types";
import * as ProductCrud from "./Product/crud";
import * as ProductTypes from "./Product/types";
import * as UserCrud from "./User/crud";
import * as UserTypes from "./User/types";
import * as coreResolvers from "./core/resolvers";
import * as coreTypes from "./core/types";
import { scalarResolvers } from "./scalars";

const loadTypeDef = (file: string) => fs.readFileSync(file, "utf8");

export default function getSchema(srcRoot: string = __dirname) {
  const schema = makeExecutableSchema({
    typeDefs: [
      loadTypeDef(`${__dirname}/enums.sdl`),
      loadTypeDef(`${__dirname}/scalars.sdl`),
      loadTypeDef(`${__dirname}/Cart/crud.sdl`),
      loadTypeDef(`${__dirname}/Cart/types.sdl`),
      loadTypeDef(`${__dirname}/Product/crud.sdl`),
      loadTypeDef(`${__dirname}/Product/types.sdl`),
      loadTypeDef(`${__dirname}/User/crud.sdl`),
      loadTypeDef(`${__dirname}/User/types.sdl`),
      loadTypeDef(`${__dirname}/core/resolvers.sdl`),
      loadTypeDef(`${__dirname}/core/types.sdl`),
    ],
    resolvers: {
      ...scalarResolvers,
      Query: {
        ...CartCrud.resolvers?.Query,
        ...CartTypes.resolvers?.Query,
        ...ProductCrud.resolvers?.Query,
        ...ProductTypes.resolvers?.Query,
        ...UserCrud.resolvers?.Query,
        ...UserTypes.resolvers?.Query,
        ...coreResolvers.resolvers?.Query,
        ...coreTypes.resolvers?.Query,
      },
      Mutation: {
        ...CartCrud.resolvers?.Mutation,
        ...CartTypes.resolvers?.Mutation,
        ...ProductCrud.resolvers?.Mutation,
        ...ProductTypes.resolvers?.Mutation,
        ...UserCrud.resolvers?.Mutation,
        ...UserTypes.resolvers?.Mutation,
        ...coreResolvers.resolvers?.Mutation,
        ...coreTypes.resolvers?.Mutation,
      },
    },
  });
  assertValidSchema(schema);
  return schema;
}
