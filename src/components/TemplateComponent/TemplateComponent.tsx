import styled from "styled-components"
import { TemplateComponentProps } from "./types"

const Wrapper = styled.div`
  color: hotpink;
`

export const TemplateComponent = ({
  children,
}: TemplateComponentProps): JSX.Element => {
  return <Wrapper>{children}</Wrapper>
}
