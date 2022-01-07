import { GraphQLEmail } from "./Email";
import { GraphQLDateTime } from "./DateTime";
import { GraphQLJson } from "./Json";

export { Email } from "./Email";
export { DateTime } from "./DateTime";
export { Json } from "./Json";

// Scalar definitions
// avoiding duplicate definitions
// type String = string;
// type Boolean = boolean;
export type Float = number;
export type Int = number;
export type ID = string;

export const scalarResolvers = {
  Email: GraphQLEmail,
  DateTime: GraphQLDateTime,
  Json: GraphQLJson,
};
