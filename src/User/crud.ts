// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import { AffectedRowsOutput } from "./../core/types";
import {
  AggregateUser,
  User,
  UserCreateInput,
  UserGroupByOutputType,
  UserOrderByWithAggregationInput,
  UserOrderByWithRelationInput,
  UserScalarWhereWithAggregatesInput,
  UserUpdateInput,
  UserUpdateManyMutationInput,
  UserWhereInput,
  UserWhereUniqueInput,
} from "./types";
import { Int } from "./../scalars";
import { UserScalarFieldEnum } from "./../enums";
import { Context, Resolvers } from "../utils";

// resolver functions

export async function findFirstUser(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.user.findFirst(args);
}

export async function findManyUser(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.user.findMany(args);
}

export async function aggregateUser(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.user.aggregate(args);
}

export async function groupByUser(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.user.groupBy(args);
}

export async function findUniqueUser(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.user.findUnique(args);
}

export async function createOneUser(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.user.create(args);
}

export async function upsertOneUser(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.user.upsert(args);
}

export async function deleteOneUser(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.user.delete(args);
}

export async function updateOneUser(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.user.update(args);
}

export async function updateManyUser(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.user.updateMany(args);
}

export async function deleteManyUser(
  parent: any,
  args: any,
  context: Context,
  info: any
) {
  const { prisma } = context;
  return prisma.user.deleteMany(args);
}

// resolver type exports

const Query = {
  findFirstUser,
  findManyUser,
  aggregateUser,
  groupByUser,
  findUniqueUser,
};

const Mutation = {
  createOneUser,
  upsertOneUser,
  deleteOneUser,
  updateOneUser,
  updateManyUser,
  deleteManyUser,
};

export const resolvers: Resolvers = {
  Query,
  Mutation,
};
