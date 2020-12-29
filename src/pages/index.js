import React from "react"
// import { Link } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import BackgroundSection from "../components/background-image"
import {
  StyledContentWrapperLeft,
  StyledImageWrapper,
  StyledLink,
  StyledWrapper,
} from '../components/shared-styles'
import ContactForm from "../components/contact-form"
import "../styles/index.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <BackgroundSection>
      <StyledWrapper>
        <StyledContentWrapperLeft>
          <> 
            <SEO title="Sean Higgins - Home" />
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="title" content="Sean Higgins - Home" />
                <meta name="description" content="Sean Higgins, Software Engineer" />
            </Helmet>
            <ContactForm />
          </>
        </StyledContentWrapperLeft>
      </StyledWrapper>
    </BackgroundSection>
  </Layout>
)

export default IndexPage
