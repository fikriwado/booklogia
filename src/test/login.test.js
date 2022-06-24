import React from "react";
import { mount } from "enzyme";
import "../../enzymeConfig";
import Login from "./Login";

describe("Test login form", function () {
  let wrapper;

  it("ユーザー名を正しく作成された。", function () {
    wrapper = mount(<Login />);
    wrapper.find('input[type="text"]').simulate("change", {
      target: { id: "username", value: "world" },
    });
    expect(wrapper.state("username")).toEqual("world");
  });

  it("パスワードを正しく作成された。", function () {
    wrapper = mount(<Login />);
    wrapper.find('input[type="text"]').simulate("change", {
      target: { id: "password", value: "123" },
    });
    expect(wrapper.state("password")).toEqual("123");
  });

  it("login check with right data", () => {
    wrapper = mount(<Login />);
    wrapper
      .find('input[type="text"]')
      .simulate("change", { target: { id: "username", value: "world" } });
    wrapper
      .find('input[type="password"]')
      .simulate("change", { target: { id: "password", value: "123" } });
    wrapper.find("button").simulate("click");
    expect(wrapper.state("loggedIn")).toBe(true);
  });
});
