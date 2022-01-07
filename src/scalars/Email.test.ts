import { Kind } from "graphql";
import { GraphQLEmail } from "./Email";

describe("Email", () => {
  describe("valid", () => {
    const validValues = ["foo@bar.com"];

    validValues.forEach((valid) => {
      it(`serialize '${valid}'`, () => {
        const result = GraphQLEmail.serialize(valid);
        expect(result).toEqual(valid);
      });

      it(`parseValue '${valid}'`, () => {
        const result = GraphQLEmail.parseValue(valid);
        expect(result).toEqual(valid);
      });

      it(`parseLiteral '${valid}'`, () => {
        const result = GraphQLEmail.parseLiteral(
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
    const invalidValues = ["invalid-email@"];

    invalidValues.forEach((invalid) => {
      it(`serialize '${invalid}'`, () => {
        expect(() => {
          const result = GraphQLEmail.serialize(invalid);
        }).toThrow(/Invalid value..*/);
      });

      it(`parseValue '${invalid}'`, () => {
        expect(() => {
          const result = GraphQLEmail.parseValue(invalid);
        }).toThrow(/Invalid value..*/);
      });

      it(`parseLiteral '${invalid}'`, () => {
        expect(() => {
          const result = GraphQLEmail.parseLiteral(
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
          const result = GraphQLEmail.parseLiteral(
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
