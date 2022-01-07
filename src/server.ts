//
// Modify to suit Application needs.
//

import { PrismaSelect } from "@paljs/plugins";
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-micro";
import { GraphQLResolveInfo } from "graphql";
import { applyMiddleware } from "graphql-middleware";
import { send } from "micro";
import cors from "micro-cors";
import { Context } from "./utils";

import getSchema from "./schema";

const schema = getSchema(__dirname);

const middleware = async (
  resolve: any,
  root: any,
  args: any,
  context: Context,
  info: GraphQLResolveInfo
) => {
  const result = new PrismaSelect(info).value;
  if (!result.select || Object.keys(result.select).length > 0) {
    args = {
      ...args,
      ...result,
    };
  }
  return resolve(root, args, context, info);
};
const context: Context = {
  prisma: new PrismaClient(),
};

const server = new ApolloServer({
  context,
  schema: applyMiddleware(schema, middleware),
});

export default server.start().then(() => {
  const handler = server.createHandler();
  return cors()((req, res) =>
    req.method === "OPTIONS" ? send(res, 200, "ok") : handler(req, res)
  );
});
