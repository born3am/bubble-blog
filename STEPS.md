#### Nextjs boilerplate

- npx create-next-app@latest or npx create-next-app bubble-blog

npm run dev
Starts the development server.

npm run build
Builds the app for production.

npm start
Runs the built app in production mode.

We suggest that you begin by typing:
cd bubble-blog
npm run dev

- snippet to create a stateless function component : sfc

#### Folder structure

- create folder components, ans Navbar and Footer components

- in _app.js_ file wrap <Component/> with <Layout/>:
  <Layout>
  <Component {...pageProps} />
  </Layout>

#### Server boilerplate

- npm i mongoose
