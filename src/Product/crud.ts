// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { Context, Resolvers } from "../utils";

// resolver functions

export async function findFirstProduct(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.product.findFirst(args);
}

export async function findManyProduct(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.product.findMany(args);
}

export async function aggregateProduct(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.product.aggregate(args);
}

export async function groupByProduct(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.product.groupBy(args);
}

export async function findUniqueProduct(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.product.findUnique(args);
}

export async function createOneProduct(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.product.create(args);
}

export async function upsertOneProduct(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.product.upsert(args);
}

export async function deleteOneProduct(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.product.delete(args);
}

export async function updateOneProduct(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.product.update(args);
}

export async function updateManyProduct(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.product.updateMany(args);
}

export async function deleteManyProduct(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.product.deleteMany(args);
}

// resolver type exports

const Query = {
  findFirstProduct,
  findManyProduct,
  aggregateProduct,
  groupByProduct,
  findUniqueProduct,
};

const Mutation = {
  createOneProduct,
  upsertOneProduct,
  deleteOneProduct,
  updateOneProduct,
  updateManyProduct,
  deleteManyProduct,
};

export const resolvers: Resolvers = {
  Query,
  Mutation,
};
