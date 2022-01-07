import { Kind, GraphQLError, GraphQLScalarType } from "graphql";
import isJSON from "validator/lib/isJSON";

const validate = (value: string) => {
  if (!isJSON(value)) {
    throw new TypeError(`Invalid value. '${value} is not of type 'Json'`);
  }

  return value;
};

export type Json = string;

export const GraphQLJson = /*#__PURE__*/ new GraphQLScalarType({
  name: "Json",
  description: "Check if the string is valid JSON (note: uses JSON.parse)",

  serialize(value) {
    return validate(value);
  },

  parseValue(value) {
    return validate(value);
  },

  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      throw new GraphQLError(
        `Can only validate strings as RGBA colors but got '${ast.kind}'`
      );
    }
    return validate(ast.value);
  },

  extensions: {
    codegenScalarType: "string",
  },
});

export default GraphQLJson;
