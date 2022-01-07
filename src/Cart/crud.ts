// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { Context, Resolvers } from "../utils";

// resolver functions

export async function findFirstCart(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.cart.findFirst(args);
}

export async function findManyCart(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.cart.findMany(args);
}

export async function aggregateCart(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.cart.aggregate(args);
}

export async function groupByCart(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.cart.groupBy(args);
}

export async function findUniqueCart(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.cart.findUnique(args);
}

export async function createOneCart(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.cart.create(args);
}

export async function upsertOneCart(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.cart.upsert(args);
}

export async function deleteOneCart(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.cart.delete(args);
}

export async function updateOneCart(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.cart.update(args);
}

export async function updateManyCart(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.cart.updateMany(args);
}

export async function deleteManyCart(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.cart.deleteMany(args);
}

// resolver type exports

const Query = {
  findFirstCart,
  findManyCart,
  aggregateCart,
  groupByCart,
  findUniqueCart,
};

const Mutation = {
  createOneCart,
  upsertOneCart,
  deleteOneCart,
  updateOneCart,
  updateManyCart,
  deleteManyCart,
};

export const resolvers: Resolvers = {
  Query,
  Mutation,
};
