import { Kind } from "graphql";
import { GraphQLDateTime } from "./DateTime";

describe("DateTime", () => {
  describe("valid", () => {
    const validValues = ["2010-02-18T16:23:48,3-06:00"];

    validValues.forEach((valid) => {
      it(`serialize '${valid}'`, () => {
        const result = GraphQLDateTime.serialize(valid);
        expect(result).toEqual(valid);
      });

      it(`parseValue '${valid}'`, () => {
        const result = GraphQLDateTime.parseValue(valid);
        expect(result).toEqual(valid);
      });

      it(`parseLiteral '${valid}'`, () => {
        const result = GraphQLDateTime.parseLiteral(
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
    const invalidValues = ["200905"];

    invalidValues.forEach((invalid) => {
      it(`serialize '${invalid}'`, () => {
        expect(() => {
          const result = GraphQLDateTime.serialize(invalid);
        }).toThrow(/Invalid value..*/);
      });

      it(`parseValue '${invalid}'`, () => {
        expect(() => {
          const result = GraphQLDateTime.parseValue(invalid);
        }).toThrow(/Invalid value..*/);
      });

      it(`parseLiteral '${invalid}'`, () => {
        expect(() => {
          const result = GraphQLDateTime.parseLiteral(
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
          const result = GraphQLDateTime.parseLiteral(
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
