# prisma-nestjs-graphql

Generate object types, inputs, args, etc. from prisma schema file for usage with @nestjs/graphql module.

## Install

```sh
npm install --save-dev prisma-nestjs-graphql
```

## Usage

1. Add new generator section to `schema.prisma` file

```prisma
generator nestgraphql {
    provider = "prisma-nestjs-graphql"
    output = "../src/@generated"
}
```

2. Run prisma generate

```sh
npx prisma generate
```

## Generator options

-   `output` Output folder relative to this schema file
-   `outputFilePattern` File pattern (default: `{feature}/{dasherizedName}.{type}.ts`)  
    Possible tokens:
    -   `{feature}` - model name in dashed case or 'prisma' if unknown
    -   `{name}` - name of model/input/arg
    -   `{dasherizedName}` - dashed-case name of model/input/arg without suffix
    -   `{type}` - short type name (model, input)

## Resources

-   https://ts-ast-viewer.com/
-   https://github.com/unlight/nestjs-graphql-prisma-realworld-example-app

## Todo

-   intfilter put under name prisma
-   enable preview features
-   get rid of utils