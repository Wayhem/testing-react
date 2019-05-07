import React from "react";
import { mount } from "enzyme";
import CommentBox from "../CommentBox";
import useComment from "../../hooks/useComment";
import Root from "../../config/Root";

let wrapped;

function HookWrapper(props) {
  const hook = props.hook ? props.hook() : undefined;
  const Component = props.component ? props.component : () => <div />;
  return <Component hook={hook} />;
}

beforeEach(() => {
  wrapped = mount(
    <Root>
      <HookWrapper component={CommentBox} hook={() => useComment("hello")} />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

it("initial value is set and textarea is that valor", () => {
  const { hook } = wrapped.find(CommentBox).props();
  const [comment, setComment] = hook;
  expect(comment).toEqual("hello");
  expect(wrapped.find("textarea").prop("value")).toEqual("hello");
});

describe("the textarea", () => {
  beforeEach(() => {
    wrapped
      .find("textarea")
      .simulate("change", { target: { value: "goodbye" } });
    wrapped.update();
  });

  it("text area changes on event", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("goodbye");
  });

  it("empties textarea on submit", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
