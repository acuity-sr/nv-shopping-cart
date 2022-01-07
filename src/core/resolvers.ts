import { Context, Resolvers } from "../utils";

// resolver functions

export async function executeRaw(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.$executeRaw(args);
}

export async function queryRaw(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.$queryRaw(args);
}

// resolver type exports

const Mutation = {
  executeRaw,
  queryRaw,
};

export const resolvers: Resolvers = {
  Mutation,
};
