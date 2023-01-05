import { TemplateComponent } from "./components/TemplateComponent/TemplateComponent"

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Typescript Boot</h1>
        <h2>Starter Project</h2>
      </header>
      <TemplateComponent>
        Add new components using the template from{" "}
        <code>TemplateComponent</code>
      </TemplateComponent>
    </div>
  )
}
