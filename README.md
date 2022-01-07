# A first demo of noun-and-verb

Annotated command history:


```
# create a directory for a demo
mkdir my_demo 
cd my_demo
code .

# intialize the npm module
npm init -y

# install the prisma cli
npm install prisma --save-dev

# initialize a git repo
git init

# initialize a prisma schema
npx prisma init

### off-script: add vanilla relational model to `prisma/schema.prisma`
# [see this for an example](https://github.com/acuity-sr/nv-shopping-cart/commit/b2041457edb24bab2cfe7cba273401234f12e781#diff-5b443964f4f3a611682db8f7e02177b0a8c632b2039e2bd5e4dd7347815c565c)

curl -o prisma/schema.prisma https://raw.githubusercontent.com/acuity-sr/nv-shopping-cart/b2041457edb24bab2cfe7cba273401234f12e781/prisma/schema.prisma

# stage these changes, so we can use git-diff to locate/inspect generated code 
git add .
git status

# run the prisma generator (adds `@prisma/client` to package dependencies)
npx prisma generate

# at this point, we haven't added noun_and_verb to the mix. The prisma client
# is hidden from view - but prisma does modify package.json. 
# Let's commit these changes, so we can then isolate the changes that `noun_and_verb` will make in the next step.
git status
git add .
git commit -m "initial relational model"


# getting started with noun-and-verb
# install the noun_and_verb generator as a dev-dependency
npm install tufan-io/noun_and_verb  --save-dev


### off-script: 
# - add noun_and_verb generator to `schema.prisma`
# - add any necessary annotations to the schema.
#    Supported annotations:
#     1. @readOnly
#     2. @createOnly
#     3. @writeOnly
#     4. @scalar
#     5. @seed
#     6. @mock
#     7. @directive
#     8. @default
#
# [see example here](https://github.com/acuity-sr/nv-shopping-cart/commit/71045f0a95b488c33c000efed75b85be9ac946d4#diff-5b443964f4f3a611682db8f7e02177b0a8c632b2039e2bd5e4dd7347815c565c)

curl -o prisma/schema.prisma https://raw.githubusercontent.com/acuity-sr/nv-shopping-cart/71045f0a95b488c33c000efed75b85be9ac946d4/prisma/schema.prisma

git add .

# re-run the prisma generator
# this generates a working graphQL API server, bound to the prisma client
npx prisma generate

git add .
git commit -m "noun_and_verb generated files"

# run a prisma migration, so the database is properly configured
npm run migrate 

git add .
git commit -m "sqlite database after migration"

# start the db admin app, while the DB schema is configured, the DB is empty
npx prisma studio

# start the (dev mode) API server
npm run dev

# navigate to https://localhost:1234/graphql
# click through to the apollo studio
# Try `findFirstUser` - it should return a null, since the DB is empty.

# In the Product model, we have added an image field with a mock value
# being declared as `faker.unsplash`. This requires an Unsplash API key. 
# The command above will complain. 
export UNSPLASH_ACCESS_KEY=$UNSPLASH

# the @seed + @mock annotations generate [seeder scripts](https://github.com/acuity-sr/nv-shopping-cart/blob/main/src/__tests__/fixtures/seeder/index.ts) which can be invoked to populate the DB with mock data.
npm run seed

# You might need to restart the prisma studio at this point. But it'll
# show a DB with data at this point. 
npx prisma studio

# re-start the graphQL server. At this point, the API server is fully
# functional as noun_and_verb would have it. You can try querying,
# mutating. Try using an invalid email to create a user. 
npx run dev 

# windup and 
git add .
git commit -m "end of demo"
git push
```
