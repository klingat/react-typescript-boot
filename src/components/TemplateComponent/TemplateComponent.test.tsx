import { render, screen } from "@testing-library/react"
import { TemplateComponent } from "./TemplateComponent"

describe("TemplateComponent", () => {
  describe("children", () => {
    it("renders children passed in", () => {
      // Arrange
      render(<TemplateComponent>Test</TemplateComponent>)
      const testText = screen.getByText(/test/i)

      // Assert
      expect(testText).toBeInTheDocument()
    })
  })
})
