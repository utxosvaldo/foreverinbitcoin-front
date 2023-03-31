import Home from "./routes/Home.svelte";
import Order from "./routes/Order.svelte";
// import Order from "./components/Article.svelte";
// import About from "./components/samples/About.svelte";
// import NotFound from "./components/NotFound.svelte";

export const routes = {
  // Exact path
  "/": Home,
  "/orders/:orderId": Order,
  // "/about": About,
  // // Exact path + parameter
  // "/article/:title": Article,
  // // Wildcard
  // "*": NotFound
};