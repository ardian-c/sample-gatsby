import React from "react"
import Layout from "../components/layout"
import HelmetEx from '../components/helmet-ex'

const browser = typeof window !== "undefined" && window;

const NotFoundPage = () => {
  return (browser && (
    <Layout>
      <HelmetEx>
        <div metadata="title">
          404: Not found
              </div>
        <div metadata="keywords">
          indoor cycling, indoor cycle, interactive bike, streaming classes, virtual classes, stryde, stryde bike, virtual workouts
              </div>
        <div metadata="path">/404</div>
        <div metadata="description">
          Access indoor cycling classes from country's top studios on an interactive bike at your home
              </div>
      </HelmetEx>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  ))
};

export default NotFoundPage
