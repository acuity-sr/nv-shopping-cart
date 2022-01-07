export enum UserScalarFieldEnum {
  id = "id",
  name = "name",
  email = "email",
  password = "password",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export enum CartScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userId = "userId",
  coupon = "coupon",
}

export enum ProductScalarFieldEnum {
  id = "id",
  name = "name",
  price = "price",
  image = "image",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export enum SortOrder {
  asc = "asc",
  desc = "desc",
}
