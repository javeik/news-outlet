import React from "react";
import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const component = render(<Root name="Testapp" />);

    expect(component.baseElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <div>
            <header
              class="App-header"
            >
              Some awesome news
            </header>
            <ol
              class="NewsList"
            />
          </div>
        </div>
      </body>
    `);
  });
});
