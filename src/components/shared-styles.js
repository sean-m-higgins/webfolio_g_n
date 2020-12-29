import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  place-content: start;
`

export const StyledFullScreenWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`

export const StyledContentCenterWrapper = styled.div`
  display: flex;
  text-align: center;
  color: #ccc;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const StyledContentWrapperLeft = styled(StyledContentCenterWrapper)`
  max-width: 1920px;
  margin: auto auto auto auto;
`

export const StyledImageWrapper = styled.div`
  max-width: ${props => props.maxWidth || 300}px;
  margin: 0 auto 1.45rem;
`

export const StyledLink = styled(Link)`
  margin-left: 0.32rem;
`