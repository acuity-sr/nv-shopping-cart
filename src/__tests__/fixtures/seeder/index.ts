import { PrismaClient, Prisma } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";
import UserGenerator from "./UserGenerator";
import { init } from "./mocker/_builtIns";

const seed = 123;
const startTime = Date.now();
const faker = init(seed, startTime);

const prisma = new PrismaClient();

async function main() {
  try {
    const userData = await UserGenerator<Prisma.UserCreateInput>({
      count: 100,
      faker,
    });
    if (userData) {
      fs.writeFileSync(
        `${__dirname}/userData.json`,
        JSON.stringify(userData, null, 2)
      );
      await Promise.all(userData?.map((data) => prisma.user.create({ data })));
    }
    const { name } = JSON.parse(
      fs.readFileSync(`${process.cwd()}/package.json`, "utf8")
    );
    console.log(`Successfully seeded database for model 'User'`);
  } catch (err) {
    if (
      (err as unknown as any).message.match(
        /.*Timed out during query execution.*/
      )
    ) {
      throw new Error(
        "Connection timed out. Reduce count or increase timeout (http://shorturl.at/epBFU) and retry "
      );
    }
    throw err;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
