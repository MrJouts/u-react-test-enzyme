import moxios from "moxios";

describe("getSecretWord", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test.todo("secretWord is returned");
});
