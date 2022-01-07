import { PrismaClient } from "@prisma/client";

export type Resolver = (...args: any) => any;

export type Resolvers = {
  Query?: Record<string, Resolver>;
  Mutation?: Record<string, Resolver>;
};

export type Context = {
  prisma: PrismaClient;
};
