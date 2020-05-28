import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const blog = () => {
  return (
    <Layout>
      <div>
        Hello From Blog Page...
        <Link to="/">Back to Home Page...</Link>
      </div>
    </Layout>
  )
}

export default blog
