import React from "react"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/background-image"
import {
  StyledContentWrapperLeft,
  // StyledImageWrapper,
  // StyledLink,
  StyledWrapper,
} from '../components/shared-styles'
import ContactForm from "../components/contact-form"
import "../styles/index.css"

const IndexPage = () => (
  <Layout>
    <BackgroundSection>
      <StyledWrapper>
        <StyledContentWrapperLeft>
          <> 
            <SEO title="Sean Higgins - Home" />
            <Helmet>
                <link
                  rel="stylesheet"
                  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                  crossorigin="anonymous"
                />
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
