import api from "../../api";

it("calls search data", async () => {
  const sectionList = await api.getSearchData("batman");
  sectionList.every((sectionItem) => {
    expect(sectionItem).toMatchObject({
      Title: expect.any(String),
      Poster: expect.any(String),
      Year: expect.any(Number),
      imdbID: expect.any(Number)
    });
  });
});
