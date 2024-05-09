Official [Next.js 14](https://nextjs.org/) project template for [Varosa Technology](https://varosatech.com/)

- Expected Environment Version

## v20.13.0

- To use from .nvmrc

```
nvm use
```

## Folder Structure

- src

  - app

    - <b>api</b> <i>(api calls)</i>
    - shared

      - <b>components</b> <i>(unit testable UI building blocks)</i>
      - <b>context</b> <i>(react context)</i>
      - <b>hooks</b> <i>(custom hooks)</i>
      - <b>lib</b> <i>(library interface for hot swapping)</i>
      - <b>constants</b> <i>(constant values)</i>
      - <b>helpers</b> <i>(helper functions)</i>
      - <b>types</b> <i>(typesript types)</i>

  - <b>middleware</b> <i>(for protected routes and redirection)</i>

## Scripts during pre-commit

```
npm run lint:fix
npm run lint --no-cache
npm run prettier
npm run test
npm run build
```

## Fork the Repo and start building!

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More about framework

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
