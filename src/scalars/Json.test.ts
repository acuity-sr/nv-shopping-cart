import { Kind } from "graphql";
import { GraphQLJson } from "./Json";

describe("Json", () => {
  describe("valid", () => {
    const validValues = ['{ "key": "value" }'];

    validValues.forEach((valid) => {
      it(`serialize '${valid}'`, () => {
        const result = GraphQLJson.serialize(valid);
        expect(result).toEqual(valid);
      });

      it(`parseValue '${valid}'`, () => {
        const result = GraphQLJson.parseValue(valid);
        expect(result).toEqual(valid);
      });

      it(`parseLiteral '${valid}'`, () => {
        const result = GraphQLJson.parseLiteral(
          {
            value: valid,
            kind: Kind.STRING,
          },
          {}
        );
        expect(result).toEqual(valid);
      });
    });
  });

  describe("invalid", () => {
    const invalidValues = ["{ 'key': 'value' }"];

    invalidValues.forEach((invalid) => {
      it(`serialize '${invalid}'`, () => {
        expect(() => {
          const result = GraphQLJson.serialize(invalid);
        }).toThrow(/Invalid value..*/);
      });

      it(`parseValue '${invalid}'`, () => {
        expect(() => {
          const result = GraphQLJson.parseValue(invalid);
        }).toThrow(/Invalid value..*/);
      });

      it(`parseLiteral '${invalid}'`, () => {
        expect(() => {
          const result = GraphQLJson.parseLiteral(
            {
              value: invalid,
              kind: Kind.STRING,
            },
            {}
          );
        }).toThrow(/Invalid value..*/);
      });

      it(`parseLiteral 'typeError'`, () => {
        expect(() => {
          const result = GraphQLJson.parseLiteral(
            {
              value: "some value",
              kind: Kind.INT,
            },
            {}
          );
        }).toThrow(/an only validate strings as.*but got 'IntValue'/);
      });
    });
  });
});
